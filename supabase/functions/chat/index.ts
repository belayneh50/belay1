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
4. Project turnaround times

When asked about pricing, politely direct them to contact through the contact form on the website.
Be concise and professional. If asked something outside your scope, redirect to contacting the team.

For Amharic responses, respond in clear, professional Amharic.`;

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

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: `${SYSTEM_PROMPT}\n\nUser message: ${message}` }],
            },
          ],
        }),
      }
    );

    if (!geminiRes.ok) {
      const body = await geminiRes.text();
      console.error("Gemini error", geminiRes.status, body);
      return new Response(
        JSON.stringify({ error: `Gemini API error ${geminiRes.status}: ${body}` }),
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
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
