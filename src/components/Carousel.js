// https://unpkg.com/browse/@heroicons/react@2.1.3/24/outline/
// https://gist.github.com/nimone/1fad7ac88bf2a5b07a26eb45134c76a6
import { useState, useEffect } from "react"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
  }) {
    const [curr, setCurr] = useState(0)
    const prev = () =>
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  
    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])
    return (
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-black/80 text-gray-800 hover:bg-white"
          >
            <ArrowLeftIcon size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-black/80 text-gray-800 hover:bg-white"
          >
          <ChevronRightIcon size={40} />
          </button>
        </div>
  
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }