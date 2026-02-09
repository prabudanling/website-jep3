'use client'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export type AnimationType = 
  | 'float'
  | 'pulse-glow'
  | 'bounce-subtle'
  | 'rotate-slow'
  | 'scale-pulse'
  | 'wiggle'
  | 'spin-slow'
  | 'fade-in-up'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'pop-in'
  | 'shine'
  | 'wave'

interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  animation?: AnimationType
  delay?: number
  duration?: number
  children: React.ReactNode
}

const animationStyles: Record<AnimationType, string> = {
  'float': 'animate-float',
  'pulse-glow': 'animate-pulse-glow',
  'bounce-subtle': 'animate-bounce-subtle',
  'rotate-slow': 'animate-rotate-slow',
  'scale-pulse': 'animate-scale-pulse',
  'wiggle': 'animate-wiggle',
  'spin-slow': 'animate-spin-slow',
  'fade-in-up': 'animate-fade-in-up',
  'slide-in-left': 'animate-slide-in-left',
  'slide-in-right': 'animate-slide-in-right',
  'pop-in': 'animate-pop-in',
  'shine': 'animate-shine',
  'wave': 'animate-wave',
}

export function AnimatedIcon({ 
  animation = 'float', 
  delay = 0, 
  duration = 3,
  children, 
  className,
  ...props 
}: AnimatedIconProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex transition-all duration-500',
        isVisible && animationStyles[animation],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
