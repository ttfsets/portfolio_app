"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Github, Mail, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@portfolio.dev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
]

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = "이름을 입력해 주세요."
  if (!form.email.trim()) {
    errors.email = "이메일을 입력해 주세요."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다."
  }
  if (!form.message.trim()) errors.message = "메시지를 입력해 주세요."
  else if (form.message.trim().length < 10) errors.message = "메시지는 최소 10자 이상 입력해 주세요."
  return errors
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm(form)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)

    toast.success("메시지가 전송되었습니다", {
      description: "빠른 시일 내에 답변 드리겠습니다.",
      duration: 3000,
    })

    setForm({ name: "", email: "", message: "" })
    setErrors({})
  }

  return (
    <section id="contact" className="border-t border-border/50 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Contact
        </p>

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left: CTA */}
          <div>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              함께 무언가를
              <br />
              만들어 볼까요?
            </h2>
            <p className="mb-10 text-muted-foreground">
              새로운 프로젝트, 협업, 또는 단순한 인사도 환영합니다.
              메시지를 남겨주시면 최대한 빠르게 답변 드리겠습니다.
            </p>

            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-border/50 transition-colors group-hover:border-border">
                    <Icon className="size-4" />
                  </span>
                  <span>{label}</span>
                  <ArrowRight className="size-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
                aria-invalid={!!errors.name}
                className="h-11 rounded-xl"
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                aria-invalid={!!errors.email}
                className="h-11 rounded-xl"
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">메시지</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="안녕하세요! 프로젝트 협업에 관심이 있습니다..."
                rows={5}
                aria-invalid={!!errors.message}
                className="resize-none rounded-xl"
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full"
              size="lg"
            >
              {isSubmitting ? "전송 중..." : "메시지 보내기"}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground/60 sm:flex-row">
          <p>© 2024 Portfolio. All rights reserved.</p>
          <p>Designed &amp; Built with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
