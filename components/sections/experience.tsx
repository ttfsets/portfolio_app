"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  year: string
  title: string
  organization: string
  description: string
  type: "work" | "education"
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    organization: "TechCorp Korea",
    description:
      "Next.js 기반 B2B SaaS 플랫폼 프론트엔드 아키텍처 설계 및 팀 리딩. 성능 최적화로 LCP 40% 개선.",
    type: "work",
  },
  {
    year: "2022",
    title: "Frontend Developer",
    organization: "StartupXYZ",
    description:
      "React와 TypeScript로 핀테크 대시보드 개발. 실시간 데이터 처리 및 복잡한 차트 시각화 구현.",
    type: "work",
  },
  {
    year: "2021",
    title: "UI/UX Developer",
    organization: "DesignAgency Co.",
    description:
      "다양한 브랜드의 웹사이트 및 앱 UI 개발. Figma에서 코드까지 전 과정 담당.",
    type: "work",
  },
  {
    year: "2020",
    title: "컴퓨터공학 학사 졸업",
    organization: "한국대학교",
    description:
      "소프트웨어 공학, 알고리즘, 인터페이스 디자인 전공. 졸업 프로젝트 최우수상 수상.",
    type: "education",
  },
  {
    year: "2019",
    title: "Frontend Intern",
    organization: "Naver Corp.",
    description:
      "검색 UX 팀에서 A/B 테스팅 및 프론트엔드 컴포넌트 개발 참여.",
    type: "work",
  },
]

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "relative pl-8 transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-0 top-1.5 size-2.5 rounded-full border-2 transition-colors duration-300",
          item.type === "work"
            ? "border-foreground bg-background"
            : "border-muted-foreground bg-muted-foreground"
        )}
      />

      <div className="grid gap-1 sm:grid-cols-[120px_1fr]">
        <span className="text-sm font-semibold text-muted-foreground">{item.year}</span>
        <div>
          <h3 className="font-semibold leading-snug">{item.title}</h3>
          <p className="mb-2 text-sm text-muted-foreground">{item.organization}</p>
          <p className="text-sm leading-relaxed text-muted-foreground/80">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
          Career &amp; Education
        </h2>

        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[4px] top-2 h-[calc(100%-16px)] w-px bg-border" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
