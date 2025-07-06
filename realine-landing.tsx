import { Card, CardContent } from "@/components/ui/card"
import { FileText, Github, Send } from "lucide-react"

export default function Component() {
  return (
    <div className="h-screen bg-[#050301] text-[#965DD2] grid place-items-center">
      {/* Bento Grid System - 3x3 Layout */}
      <section className="w-[80vw] h-[80vh]">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-6 h-full">
            {/* Large Card - Top Left (2x2) */}
            <Card className="bg-transparent border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:border-black col-span-2 row-span-2 flex items-center justify-center group overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/classical-statues-bg.jpeg')",
                }}
              />
              <CardContent className="p-6 flex items-center justify-center relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300">
                  Cyrus Protocol
                </div>
              </CardContent>
            </Card>

            {/* Top Right Card */}
            <Card className="bg-transparent border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-1 flex items-center justify-center group">
              <CardContent className="p-6 flex items-center justify-center relative overflow-hidden">
                {/* Send icon - starts at left-0 with opacity 0 */}
                <Send className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 text-[#965DD2] group-hover:text-[#050301] opacity-0 group-hover:opacity-100 group-hover:translate-x-[calc(50%-3rem)] transition-all duration-300" />

                <div className="flex items-center space-x-3">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300">
                    Try Demo
                  </span>
                  {/* Arrow - moves to right-0 on hover */}
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#965DD2] group-hover:text-[#050301] group-hover:translate-x-[calc(50vw)] transition-all duration-300">
                    →
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Long Card - Bottom Right (1x2) */}
            <Card className="bg-transparent border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-2 flex items-center justify-center group overflow-hidden relative">
              {/* Bird Background - Default (Black, Faint) */}
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-300 bg-contain bg-center bg-no-repeat z-10"
                style={{
                  backgroundImage: "url('/bird-purple.png')",
                }}
              />
              {/* Bird Background - Hover (Purple) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-contain bg-center bg-no-repeat z-10"
                style={{
                  backgroundImage: "url('/bird-black.png')",
                }}
              />
              <CardContent className="p-6 flex flex-col items-center justify-center text-center relative z-20 group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300 mb-4">
                  Solana → Aptos
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#7B49A7] group-hover:text-[#050301] transition-colors duration-300">
                  Current live settlement direction. Aptos → Solana coming next.
                </p>
              </CardContent>
            </Card>

            {/* Bottom Left Card */}
            <Card className="bg-transparent border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-1 flex items-center justify-center group">
              <CardContent className="p-6 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300">
                    Docs
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Center Card */}
            <Card className="bg-transparent border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-1 flex items-center justify-center group">
              <CardContent className="p-6 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <Github className="w-6 h-6 sm:w-8 sm:h-8 text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#965DD2] group-hover:text-[#050301] transition-colors duration-300">
                    Github
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
