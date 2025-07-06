import { Card, CardContent } from "@/components/ui/card"
import { FileText, Github, MoveRight, Send } from "lucide-react"
import Link from "next/link";

const Page =  () => {
  return (
    <div className="h-screen text-[#965DD2] grid place-items-center bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage: "url('/bg.png')",
      }}>
      {/* Bento Grid System - 3x3 Layout */}
      <section className="w-[80vw] h-[80vh]">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-8 h-full">
            {/* Large Card - Top Left (2x2) */}
            <Card className="bg-black/20 border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:border-black col-span-2 row-span-2 flex items-center justify-center group overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/classical-statues-bg.png')",
                }}
              />
              <CardContent className="p-6 flex items-center justify-center relative group-hover:opacity-0 transition:opacity duration-300 z-10">
                <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white group-hover:text-[#050301] transition-colors duration-300">
                  CYRUS PROTOCOL
                </div>
              </CardContent>
            </Card>

            {/* Top Right Card */}
            <Card className="bg-black/20 border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-1 flex items-center justify-center group">
              <Link href="https://cyrus-protocol-demo.vercel.app/" target="_self" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
              <CardContent className="p-10 pr-6 group-hover:pl-18 transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden">
                {/* Send icon - starts at left-0 with opacity 0 */}
                <Send className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 text-[#050301] opacity-0 group-hover:opacity-100 group-hover:translate-x-[calc(50%)] transition-all duration-500" />

                <div className="flex items-center space-x-3">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#050301] transition-colors duration-300">
                    Try Demo
                  </span>
                  {/* Arrow - moves to right-0 on hover */}
                  {/* <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#965DD2] group-hover:translate-x-[calc(50vw)] transition-all duration-300">
                    →
                  </span> */}
                  <MoveRight className="group-hover:left-0 w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:opacity-0 opacity-100 translate-x-[calc(50%-1rem)] transition-all duration-300" />
                </div>
              </CardContent>
              </Link>
            </Card>

            {/* Long Card - Bottom Right (1x2) */}
            <Card className="bg-black/20 border-2 border-[#965DD2] backdrop-blur-md transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-2 flex items-center justify-center group overflow-hidden relative">
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
              <CardContent className="p-6 flex flex-col items-center justify-center text-white text-center relative z-20 group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-4">
                  SOLANA → APTOS
                </div>
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  Current live settlement direction. Aptos → Solana coming next.
                </p>
              </CardContent>
            </Card>

            {/* Bottom Left Card */}
            <Card className="bg-black/20 border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-1 flex items-center justify-center group">
                <Link href="https://tattered-elm-7ca.notion.site/Cyrus-Protocol-2279eec45dff8011befdf469a8590b40?source=copy_link" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
              <CardContent className="p-6 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#050301] transition-colors duration-300" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#050301] transition-colors duration-300">
                    Docs
                  </span>
                </div>
              </CardContent>
              </Link>
            </Card>

            {/* Bottom Center Card */}
            <Card className="bg-black/20 border-2 border-[#965dd2] backdrop-blur-sm transition-all duration-300 hover:bg-[#965dd2] hover:border-black col-span-1 row-span-1 flex items-center justify-center group">
              <Link href="https://github.com/abhirupinspace/Cyrus-protocol-test" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="flex items-center space-x-3">
                    <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#050301] transition-colors duration-300" />
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#050301] transition-colors duration-300">
                      Github
                    </span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page;