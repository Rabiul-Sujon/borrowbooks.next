'use client'

import 'animate.css'

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-primary text-white py-3">
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        <span className="text-sm font-medium tracking-wide animate__animated">
          {/* windows + . = emoji's */}
          📚 New Arrivals: The Great Adventure &nbsp;|&nbsp; Whispers in the Dark &nbsp;|&nbsp; Clean Code &nbsp;|&nbsp; Cosmos &nbsp;|&nbsp; The Gene &nbsp;|&nbsp;
          ⭐ Special Discount on Memberships! &nbsp;|&nbsp;
          📚 New Arrivals: A Brief History of Time &nbsp;|&nbsp; The Selfish Gene &nbsp;|&nbsp; You Don't Know JS &nbsp;|&nbsp;
          ⭐ Borrow up to 5 books at a time! &nbsp;|&nbsp;
          📚 New Arrivals: The Last Kingdom &nbsp;|&nbsp; Echoes of Tomorrow &nbsp;|&nbsp; The Pragmatic Programmer &nbsp;|&nbsp;
          ⭐ Special Discount on Memberships! &nbsp;|&nbsp;
        </span>
      </div>

      {/* Animation style */}

      <style jsx>{`
        .marquee-track {
          display: inline-block;
          animation: marquee 50s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

export default Marquee