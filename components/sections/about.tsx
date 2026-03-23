import { Badge } from "@/components/ui/badge"

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Figma",
  "PostgreSQL",
  "Docker",
  "Git",
  "REST API",
  "GraphQL",
  "Vercel",
]

export function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          About Me
        </p>

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left: Bio */}
          <div>
            <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              안녕하세요,
              <br />
              저는 개발자입니다.
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed">
                사용자 경험과 기술의 교차점에서 일하는 프론트엔드 개발자입니다.
                깔끔한 코드와 직관적인 인터페이스를 통해 복잡한 문제를 단순하게
                해결하는 것을 좋아합니다.
              </p>
              <p className="text-base leading-relaxed">
                React와 Next.js를 중심으로 풀스택 개발 경험을 쌓아왔으며,
                디자인 시스템 구축과 성능 최적화에 특히 관심이 많습니다.
                사용자가 불편함 없이 서비스를 이용할 수 있도록 세세한 부분까지
                신경 씁니다.
              </p>
              <p className="text-base leading-relaxed">
                새로운 기술 스택을 배우는 것을 즐기며, 팀과 함께 성장하는
                문화를 중요하게 생각합니다.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-default rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-foreground hover:text-background"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "3+", label: "Years of Experience" },
                { value: "20+", label: "Projects Completed" },
                { value: "10+", label: "Happy Clients" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
