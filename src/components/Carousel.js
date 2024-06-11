// https://unpkg.com/browse/@heroicons/react@2.1.3/24/outline/
// https://gist.github.com/nimone/1fad7ac88bf2a5b07a26eb45134c76a6
import { useState, useEffect } from "react"

export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
  }) {
    const [curr, setCurr] = useState(0)
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  
    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])
    return (
      <div className="overflow-hidden relative">
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 25}%)` }}>
          {slides}
        </div>
      </div>
    )
  }