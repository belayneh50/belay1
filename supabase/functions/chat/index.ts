import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SYSTEM_PROMPT = `You are a helpful AI assistant for Alkebulan Web Design. You answer questions about:
1. Web Development services
2. UI/UX Design process
3. AI Integration capabilities
4. Hardware services, including PC assembly and performance optimization
5. General project planning and turnaround-time questions

Never invent clients, project results, prices, availability, guarantees, or technical capabilities. When a visitor asks for a quote, sensitive business information, or a commitment, direct them to the contact section to speak with Belayneh.
Be concise, helpful, and professional. Ask at most one clarifying question at a time. If asked something outside your scope, say so plainly and offer the contact section.

Reply in the language used by the visitor. For Amharic responses, use clear, professional Amharic.`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "AI service is not configured." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { message } = await req.json();
    if (typeof message !== "string" || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Message is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Message is too long." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: message.trim() }] }],
          generationConfig: { maxOutputTokens: 350, temperature: 0.4 },
        }),
      }
    );

    if (!geminiRes.ok) {
      const body = await geminiRes.text();
      console.error("Gemini error", geminiRes.status, body);
      return new Response(
        JSON.stringify({ error: "AI service is temporarily unavailable." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await geminiRes.json();
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not process that. Please try again.";

    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Internal error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
