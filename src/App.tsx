import { GlitchText } from "@/components/ui/animated-glitch-text"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useState } from "react"

function App() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const quickTasks = [
    "Собрать лендинг",
    "Настроить AI-форму",
    "Сделать квиз",
    "Соединить сайт с CRM",
    "Выгрузить структуру",
    "Автоматизация заявок",
    "Подготовить визуал заведения",
    "Собрать SEO-посадку",
    "Настроить Telegram-витрину",
    "Оптимизировать карточки Авито"
  ]

  const serviceCards = [
    {
      id: "web",
      title: "Веб-разработка",
      description: "Разработка премиальных сайтов, лендингов и веб-приложений с уникальным дизайном.",
      details: "React/Next.js • 3D/WebGL • Анимации"
    },
    {
      id: "automation",
      title: "Автоматизация бизнеса",
      description: "Внедрение CRM, чат-ботов и автоворонок для оптимизации бизнес-процессов.",
      details: "AmoCRM/Bitrix24 • Telegram Bots • Zapier/Make"
    },
    {
      id: "ai",
      title: "AI Интеграция",
      description: "Генерация контента, внедрение нейросетей в рабочие процессы компании.",
      details: "ChatGPT API • Midjourney • Custom Agents"
    },
    {
      id: "packaging",
      title: "Цифровая упаковка",
      description: "Комплексная упаковка бизнеса: от айдентики до технической реализации.",
      details: "Branding • UI/UX • Strategy"
    },
    {
      id: "infra",
      title: "Инфраструктура",
      description: "Настройка серверов, деплой и техническая поддержка проектов.",
      details: "VPS • Docker • CI/CD • Security"
    },
    {
      id: "seo",
      title: "SEO Архитектура",
      description: "Проектирование структуры сайта для максимальной видимости в поисковиках.",
      details: "Technical SEO • Semantic Core • Analytics"
    },
    {
      id: "funnels",
      title: "Маркетинговые воронки",
      description: "Создание эффективных воронок продаж и сценариев взаимодействия.",
      details: "User Journey • Analytics • Conversion Opt."
    },
    {
      id: "mvp",
      title: "Запуск MVP",
      description: "Быстрый запуск и проверка гипотез с минимальными вложениями.",
      details: "Rapid Prototyping • Tilda/No-code • Testing"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-[#050505] relative overflow-x-hidden font-sans text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="https://filatiev.pro" className="text-sm font-mono text-white/60 hover:text-[#00ffff] transition-colors">
            ← FILATIEV.PRO (PHOTO)
          </a>
          <div className="font-mono text-[#00ff41] text-xs animate-pulse">
            SYSTEM: ONLINE
          </div>
        </div>
      </nav>

      {/* Dark Grid Lines Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 65, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 65, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05) 0%, transparent 60%)
          `,
          backgroundSize: "50px 50px, 50px 50px, 100% 100%",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-20">

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
          <GlitchText
            text="ANDREY FILATIEV"
            textClassName="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter font-heading text-center"
            className="min-h-[120px] md:min-h-[200px]"
            colors={{
              red: "#ff00ff",
              green: "#00ffff",
              blue: "#00ff41"
            }}
          />

          <div className="text-center mt-6 md:mt-10 space-y-6 max-w-4xl">

            <p className="text-lg md:text-2xl text-cyan-400 font-mono">
              &gt; Помогаю бизнесу работать удобно
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Создаю цифровые экосистемы, которые работают.<br />
              <span className="text-[#ff00ff]">Стратегия</span> • <span className="text-[#00ffff]">Дизайн</span> • <span className="text-[#00ff41]">Разработка</span> • <span className="text-[#ff00ff]">Автоматизация</span>
            </p>
          </div>

          <div className="mt-12 group">
            <a href="#contact" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-transparent border-2 border-[#00ffff] rounded-none hover:bg-[#00ffff]/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00ffff] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-2">
                ИССЛЕДОВАТЬ СИСТЕМУ
              </span>
            </a>
          </div>
        </section>

        {/* Quick Tasks Terminal */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto border border-[#00ff41]/30 bg-black/90 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
            <div className="bg-[#00ff41]/10 px-4 py-2 border-b border-[#00ff41]/30 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 font-mono text-xs text-[#00ff41]/70">~/tasks/fast-deploy.sh</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base">
              <div className="text-gray-500 mb-4"># Что я делаю в сжатые сроки (Минимум согласований — Максимум пользы)</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {quickTasks.map((task, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 hover:text-[#00ff41] transition-colors cursor-default">
                    <span className="text-[#00ff41]">&gt;</span>
                    {task}
                  </div>
                ))}
              </div>
              <div className="mt-4 animate-pulse text-[#00ff41]">_</div>
            </div>
          </div>
        </section>

        {/* Services Pills */}
        <section className="container mx-auto px-4 py-12 border-t border-white/5 mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading uppercase tracking-wider text-white">
              Системные <span className="text-[#00ffff]">Модули</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {serviceCards.map((service) => (
              <button
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`
                  px-4 py-2 border rounded-md font-mono text-xs md:text-sm font-medium
                  transition-all duration-300 uppercase tracking-wider
                  ${hoveredService === service.id
                    ? 'border-[#00ffff] text-[#00ffff] glow-border-cyan bg-[#00ffff]/5'
                    : 'border-white/20 text-white/50 hover:border-white/40'
                  }
                `}
              >
                {service.title}
              </button>
            ))}
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section className="container mx-auto px-4 py-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceCards.map((card) => (
              <Card
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  bg-[#0a0a0c]/80 border-white/10 backdrop-blur-sm h-full
                  transition-all duration-300 cursor-default group
                  ${hoveredCard === card.id
                    ? 'border-[#00ffff]/50 translate-y-[-4px] shadow-[0_10px_40px_-10px_rgba(0,255,255,0.15)]'
                    : 'hover:border-white/20'
                  }
                `}
              >
                <CardHeader>
                  <CardTitle
                    className={`
                      font-heading text-lg font-bold tracking-tight uppercase mb-2
                      transition-all duration-300
                      ${hoveredCard === card.id
                        ? 'text-[#00ffff]'
                        : 'text-white'
                      }
                    `}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <div className="text-[#00ff41]/70 font-mono text-[10px] uppercase tracking-wide">
                      &gt; Stack:
                    </div>
                    <div className="text-white/40 font-mono text-xs">
                      {card.details}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="border-t border-[#00ff41]/20 bg-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-4 py-20 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
              Готовы к <span className="text-[#00ff41]">цифровой трансформации</span>?
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
              <a href="https://t.me/filatievpro" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-[#2AABEE]/10 border border-[#2AABEE]/30 rounded-full hover:bg-[#2AABEE] hover:text-white transition-all duration-300 text-[#2AABEE]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span className="font-mono font-bold tracking-wide">TELEGRAM</span>
              </a>
              <a href="https://wa.me/79384009044" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 text-[#25D366]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span className="font-mono font-bold tracking-wide">WHATSAPP</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-[#00ff41]/60 font-mono text-sm">
                &gt; System Status: <span className="text-neon-green animate-pulse">ONLINE</span>
              </p>
              <p className="text-white/20 font-mono text-xs">
                © 2026 ANDREY FILATIEV • Netrunner Ops
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
