"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  description: string
  detail: string
  category: "all" | "design" | "coding"
  tags: string[]
  accent: string
  year: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Next.js 기반 풀스택 쇼핑몰 플랫폼",
    detail:
      "Next.js App Router와 Stripe를 활용한 완전한 전자상거래 플랫폼입니다. 실시간 재고 관리, 결제 연동, 관리자 대시보드를 포함합니다. 월 1만 명 이상의 사용자가 이용하고 있습니다.",
    category: "coding",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    accent: "bg-zinc-900 dark:bg-zinc-100",
    year: "2024",
  },
  {
    id: 2,
    title: "Design System",
    description: "기업용 UI 컴포넌트 라이브러리 구축",
    detail:
      "Radix UI와 Tailwind CSS를 기반으로 50개 이상의 재사용 가능한 컴포넌트를 설계하고 구현했습니다. Storybook을 통한 문서화와 접근성(WCAG 2.1) 준수를 포함합니다.",
    category: "design",
    tags: ["React", "Tailwind CSS", "Storybook", "Figma"],
    accent: "bg-zinc-700 dark:bg-zinc-300",
    year: "2024",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "실시간 데이터 시각화 대시보드",
    detail:
      "WebSocket을 활용한 실시간 데이터 스트리밍과 Recharts 기반의 인터랙티브 차트로 구성된 분석 대시보드입니다. 복잡한 데이터를 직관적으로 시각화했습니다.",
    category: "coding",
    tags: ["React", "WebSocket", "Recharts", "Node.js"],
    accent: "bg-zinc-800 dark:bg-zinc-200",
    year: "2023",
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "스타트업 브랜드 아이덴티티 디자인",
    detail:
      "로고, 컬러 팔레트, 타이포그래피, 모션 가이드라인을 포함한 완전한 브랜드 아이덴티티 시스템을 제작했습니다. Figma와 After Effects를 활용했습니다.",
    category: "design",
    tags: ["Figma", "After Effects", "Branding"],
    accent: "bg-zinc-600 dark:bg-zinc-400",
    year: "2023",
  },
  {
    id: 5,
    title: "Mobile App",
    description: "React Native 크로스 플랫폼 앱",
    detail:
      "iOS와 Android를 동시 지원하는 헬스케어 모바일 앱입니다. 생체 데이터 연동, 알림 시스템, 커뮤니티 기능을 구현했습니다.",
    category: "coding",
    tags: ["React Native", "TypeScript", "Firebase"],
    accent: "bg-zinc-900 dark:bg-zinc-100",
    year: "2023",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "크리에이터를 위한 포트폴리오 플랫폼",
    detail:
      "다양한 크리에이터들이 자신의 작품을 효과적으로 보여줄 수 있는 포트폴리오 플랫폼을 디자인했습니다. 직관적인 CMS와 커스터마이징 도구를 포함합니다.",
    category: "design",
    tags: ["Figma", "Framer", "UX Research"],
    accent: "bg-zinc-700 dark:bg-zinc-300",
    year: "2022",
  },
]

const CATEGORIES = [
  { value: "all", label: "전체" },
  { value: "coding", label: "코딩" },
  { value: "design", label: "디자인" },
] as const

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "coding" | "design">("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio
        </p>
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Selected Works
          </h2>

          {/* Category Filter */}
          <div className="flex gap-2">
            {CATEGORIES.map(({ value, label }) => (
              <Button
                key={value}
                variant={activeCategory === value ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(value)}
                className="rounded-full"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-left transition-all duration-300",
                "hover:-translate-y-1 hover:border-border hover:shadow-xl"
              )}
            >
              {/* Visual block */}
              <div className={cn("h-48 w-full transition-transform duration-500 group-hover:scale-105", project.accent)} />

              <div className="p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold leading-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground" />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="mt-4 text-right text-xs text-muted-foreground/50">{project.year}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-lg">
          {selectedProject && (
            <>
              <div className={cn("h-40 w-full rounded-xl", selectedProject.accent)} />
              <DialogHeader className="mt-2">
                <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {selectedProject.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{selectedProject.year}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
