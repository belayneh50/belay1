import React, { useMemo, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const ETHIOPIAN_MONTHS = [
  'መስከረም',
  'ጥቅምት',
  'ኅዳር',
  'ታኅሣሥ',
  'ጥር',
  'የካቲት',
  'መጋቢት',
  'ሚያዝያ',
  'ግንቦት',
  'ሰኔ',
  'ሐምሌ',
  'ነሐሴ',
  'ጳጉሜን',
];

const WEEKDAYS = ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'];
const ANCHOR_YEAR = 2018;
const ANCHOR_GREGORIAN_UTC = Date.UTC(2025, 8, 11);
const DAY_MS = 86_400_000;

type EthiopianDate = {
  year: number;
  month: number;
  day: number;
};

const isEthiopianLeapYear = (year: number) => year % 4 === 3;

const daysInEthiopianYear = (year: number) => (isEthiopianLeapYear(year) ? 366 : 365);

const daysInEthiopianMonth = (year: number, month: number) =>
  month === 13 ? (isEthiopianLeapYear(year) ? 6 : 5) : 30;

const ethiopianToUtc = ({ year, month, day }: EthiopianDate) => {
  let offset = 0;

  if (year >= ANCHOR_YEAR) {
    for (let currentYear = ANCHOR_YEAR; currentYear < year; currentYear += 1) {
      offset += daysInEthiopianYear(currentYear);
    }
  } else {
    for (let currentYear = year; currentYear < ANCHOR_YEAR; currentYear += 1) {
      offset -= daysInEthiopianYear(currentYear);
    }
  }

  offset += (month - 1) * 30 + (day - 1);
  return new Date(ANCHOR_GREGORIAN_UTC + offset * DAY_MS);
};

const utcToEthiopian = (date: Date): EthiopianDate => {
  const utcMidnight = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  let remainingDays = Math.round((utcMidnight - ANCHOR_GREGORIAN_UTC) / DAY_MS);
  let year = ANCHOR_YEAR;

  if (remainingDays >= 0) {
    while (remainingDays >= daysInEthiopianYear(year)) {
      remainingDays -= daysInEthiopianYear(year);
      year += 1;
    }
  } else {
    while (remainingDays < 0) {
      year -= 1;
      remainingDays += daysInEthiopianYear(year);
    }
  }

  return {
    year,
    month: Math.floor(remainingDays / 30) + 1,
    day: (remainingDays % 30) + 1,
  };
};

const EthiopianCalendar: React.FC = () => {
  const today = useMemo(() => utcToEthiopian(new Date()), []);
  const [view, setView] = useState({ year: today.year, month: today.month });

  const monthLength = daysInEthiopianMonth(view.year, view.month);
  const firstWeekday = ethiopianToUtc({ ...view, day: 1 }).getUTCDay();

  const moveMonth = (direction: -1 | 1) => {
    setView((current) => {
      let month = current.month + direction;
      let year = current.year;

      if (month > 13) {
        month = 1;
        year += 1;
      } else if (month < 1) {
        month = 13;
        year -= 1;
      }

      return { year, month };
    });
  };

  const isViewingToday = view.year === today.year && view.month === today.month;

  return (
    <section
      id="ethiopian-calendar"
      className="relative overflow-hidden border-t border-cyan-400/20 bg-black px-4 py-16"
      aria-labelledby="ethiopian-calendar-title"
      style={{ fontFamily: '"Noto Sans Ethiopic", Nyala, "Segoe UI", sans-serif' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08),transparent_58%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-md"
      >
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/60 bg-slate-950/95 p-4 shadow-[0_0_35px_rgba(0,238,255,0.16)] sm:p-5">
          <img
            src="/assets/alkebulan-emblem-640.jpg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 opacity-[0.055] mix-blend-screen"
          />

          <span className="pointer-events-none absolute left-3 top-1 text-3xl text-amber-300/80">✿</span>
          <span className="pointer-events-none absolute right-3 top-1 text-3xl text-amber-300/80">✿</span>
          <span className="pointer-events-none absolute bottom-1 left-3 rotate-180 text-3xl text-amber-300/60">✿</span>
          <span className="pointer-events-none absolute bottom-1 right-3 rotate-180 text-3xl text-amber-300/60">✿</span>

          <header className="relative mb-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-cyan-300">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-[0.22em]">የኢትዮጵያ ዘመን አቆጣጠር</p>
            </div>
            <h2 id="ethiopian-calendar-title" className="text-2xl font-bold text-white sm:text-3xl">
              {ETHIOPIAN_MONTHS[view.month - 1]} {view.year} ዓ.ም.
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              ዛሬ፦ {ETHIOPIAN_MONTHS[today.month - 1]} {today.day} ቀን {today.year} ዓ.ም.
            </p>
          </header>

          <div className="relative mb-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => moveMonth(-1)}
              className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-cyan-300/40 px-3 py-2 text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="ያለፈውን ወር ይመልከቱ"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">ያለፈው</span>
            </button>

            <button
              type="button"
              onClick={() => setView({ year: today.year, month: today.month })}
              disabled={isViewingToday}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-amber-300/40 px-4 py-2 text-amber-200 transition hover:border-amber-200 hover:bg-amber-300/10 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:cursor-default disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              ወደ ዛሬ
            </button>

            <button
              type="button"
              onClick={() => moveMonth(1)}
              className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-cyan-300/40 px-3 py-2 text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="ቀጣዩን ወር ይመልከቱ"
            >
              <span className="hidden sm:inline">ቀጣይ</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative grid grid-cols-7 gap-1 sm:gap-2" role="grid" aria-label={`${ETHIOPIAN_MONTHS[view.month - 1]} ${view.year}`}>
            {WEEKDAYS.map((weekday) => (
              <div key={weekday} role="columnheader" className="pb-2 text-center text-[0.66rem] font-bold text-amber-200 sm:text-sm">
                {weekday}
              </div>
            ))}

            {Array.from({ length: firstWeekday }).map((_, index) => (
              <div key={`empty-${index}`} aria-hidden="true" />
            ))}

            {Array.from({ length: monthLength }, (_, index) => index + 1).map((day) => {
              const isToday = isViewingToday && day === today.day;

              return (
                <div
                  key={day}
                  role="gridcell"
                  aria-current={isToday ? 'date' : undefined}
                  aria-label={`${ETHIOPIAN_MONTHS[view.month - 1]} ${day}`}
                  className={`flex aspect-square min-h-8 items-center justify-center rounded-md border text-xs font-semibold transition sm:text-sm ${
                    isToday
                      ? 'border-cyan-200 bg-cyan-300 text-slate-950 shadow-[0_0_18px_rgba(0,238,255,0.65)]'
                      : 'border-slate-700/70 bg-slate-900/65 text-slate-100 hover:border-amber-300/70 hover:text-amber-200'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {view.month === 1 && (
            <p className="relative mt-5 text-center text-sm text-amber-200">
              ✿ እንቁጣጣሽ — አዲስ ዓመት፣ አዲስ ተስፋ ✿
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default EthiopianCalendar;
