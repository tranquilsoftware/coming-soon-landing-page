import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ScrollingText } from "./components/ScrollingText"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <Hero />

        {/* Bottom scrolling text */}
        <div className="absolute bottom-0 left-0 right-0">
          <ScrollingText />
        </div>
      </div>
    </div>
  )
}
