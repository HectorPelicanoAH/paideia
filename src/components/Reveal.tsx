import { useEffect, useRef, useState, type PropsWithChildren } from 'react'

interface RevealProps extends PropsWithChildren {
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsVisible(true)
      return undefined
    }

    const node = ref.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const visibilityClass = isVisible
    ? 'translate-y-0 opacity-100'
    : 'translate-y-6 opacity-0'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visibilityClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
