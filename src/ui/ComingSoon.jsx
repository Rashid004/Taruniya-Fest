/** @format */

import { PartyPopper, Sparkles, Star } from "lucide-react";

function ComingSoon({ data1, data2 }) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center p-4 mt-16">
      <div className="relative w-full max-w-4xl">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[#371221] rounded-2xl transform rotate-1"></div>
        <div className="absolute inset-0 bg-[#6B0A29] rounded-2xl transform -rotate-1"></div>

        {/* Main content container */}
        <div className="relative bg-gradient-to-br from-[#6B0A29] via-[#371221] to-[#6B0A29] p-8 md:p-12 rounded-2xl shadow-2xl border border-[#DECBA7]/20">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 p-2">
            <Star className="w-6 h-6 text-[#BCA476]" />
          </div>
          <div className="absolute top-0 right-0 p-2">
            <Star className="w-6 h-6 text-[#BCA476]" />
          </div>
          <div className="absolute bottom-0 left-0 p-2">
            <Star className="w-6 h-6 text-[#BCA476]" />
          </div>
          <div className="absolute bottom-0 right-0 p-2">
            <Star className="w-6 h-6 text-[#BCA476]" />
          </div>

          {/* Main content */}
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <PartyPopper className="w-16 h-16 text-amber-200 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-200 tracking-tight">
              <span className="inline-flex items-center gap-2">
                Coming Soon
                <Sparkles className="w-8 h-8 animate-pulse" />
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#DECBA7] font-medium max-w-2xl mx-auto leading-relaxed">
              {data1}
              <span className="text-amber-200 font-semibold">{data2}</span>
              {/* ,
              <span className="text-amber-200 font-semibold">
                exciting events
              </span>
              , and
              <span className="text-amber-200 font-semibold">
                endless memories
              </span> */}
              .
            </p>

            {/* Animated decorative element */}
            <div className="flex justify-center gap-4 pt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#BCA476] animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
