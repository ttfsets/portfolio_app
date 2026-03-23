"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.classList.add("opacity-100", "translate-y-0")
    })
  }, [])

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-4xl text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Frontend Developer &amp; UI Designer
        </p>

        <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          Crafting Digital
          <br />
          <span className="text-muted-foreground">Experiences</span>
        </h1>

        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          사용자 중심의 인터페이스를 설계하고 구현합니다.
          <br />
          코드의 아름다움과 디자인의 섬세함을 함께 추구합니다.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={scrollToPortfolio} className="min-w-36 rounded-full">
            작품 보기
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="min-w-36 rounded-full"
          >
            연락하기
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToPortfolio}
        aria-label="아래로 스크롤"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50 transition-colors hover:text-muted-foreground"
      >
        <ArrowDown className="size-5" />
      </button>
    </section>
  )
}
