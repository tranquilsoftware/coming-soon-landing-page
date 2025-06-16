export function ScrollingText() {
  const investors = [
    "JOHN DOE",
    "JANE DOE",
    "JOE SHMOE",
    "PETER PIPER",
    "JOHN SMITH"
  ]

  // Duplicate the array to create seamless scrolling
  const scrollingText = [...investors, ...investors, ...investors]

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-4">
      <div className="text-center mb-4">
        <p className="text-blue-400 text-sm font-medium italic tracking-widest uppercase">
          Backed by the Best
        </p>
      </div>
      
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="flex animate-scroll whitespace-nowrap">
        {scrollingText.map((text, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-500 text-sm font-medium tracking-wider px-8">{text}</span>
            <span className="text-blue-400 text-xs px-2">♦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
