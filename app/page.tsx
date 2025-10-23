import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Zap, Users, Shield, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">SpectraVA</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-accent transition">
              Services
            </a>
            <a href="#pricing" className="text-sm hover:text-accent transition">
              Pricing
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition">
              Contact
            </a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book a Call</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm text-accent font-medium">Human Precision. AI Efficiency.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Streamline Your Operations. Save Time. Work Smarter.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            SpectraVA helps businesses, founders, and teams operate efficiently by combining skilled human support with
            AI-driven systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SpectraVA is a human–AI virtual assistant agency focused on helping businesses operate faster and more
                efficiently.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We integrate intelligent automation tools with trained virtual assistants to handle routine tasks,
                manage workflows, and support business operations — allowing our clients to focus on growth, not
                busywork.
              </p>
              <div className="space-y-4">
                {[
                  "Human expertise supported by AI tools",
                  "Scalable support for startups, teams, and professionals",
                  "Reliable, secure, and confidential operations",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border border-accent/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <Zap className="w-16 h-16 text-accent mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">AI-Powered Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground">
              Practical, structured support to keep your business running efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Executive Assistance", desc: "Calendar, inbox, document, and travel management" },
              { title: "Marketing & CRM", desc: "CRM management, leads, outreach, and campaign tracking" },
              { title: "Research & Reporting", desc: "Market research, competitor analysis, and AI-supported reports" },
              { title: "Operations Support", desc: "Process documentation, workflow streamlining, and systems" },
              { title: "Administrative Support", desc: "Data entry, document prep, and customer communication" },
              { title: "Social Media Management", desc: "Content planning, design, and scheduling" },
              { title: "Content Creation", desc: "Copywriting, video editing, and graphic design" },
              { title: "Accounting & Bookkeeping", desc: "Invoicing, reconciliation, and financial reporting" },
            ].map((service, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 hover:border-accent/50 transition-colors bg-card/50 backdrop-blur"
              >
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Teams Choose SpectraVA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: "Efficiency Through AI", desc: "Reduce errors, shorten turnaround, lower cost" },
              { icon: Users, title: "Human-Led Quality", desc: "Professional review ensures clarity and accuracy" },
              { icon: Shield, title: "Structured Workflow", desc: "Seamless integration with your existing tools" },
              { icon: TrendingUp, title: "Scalable Model", desc: "Grow or shrink your support as needed" },
              { icon: ArrowRight, title: "Global Reach", desc: "Multi-timezone support across industries" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">How We Work</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Consultation", desc: "We assess your needs, workflows, and systems." },
              { step: "02", title: "Setup", desc: "We assign the right assistant(s) and integrate into your tools." },
              { step: "03", title: "Execution", desc: "We start managing tasks and automations." },
              { step: "04", title: "Optimization", desc: "We review performance and refine your processes." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <span className="font-bold text-accent">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Every plan includes a dedicated assistant supported by AI-powered tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$400",
                period: "/month",
                hours: "40 hours/month",
                desc: "Ideal for solo founders and busy professionals",
                features: [
                  "Inbox & calendar management",
                  "Research and data entry",
                  "Light content creation",
                  "Admin and customer support",
                ],
              },
              {
                name: "Growth",
                price: "$720",
                period: "/month",
                hours: "80 hours/month",
                desc: "Perfect for small teams managing multiple workflows",
                features: [
                  "Everything in Starter, plus",
                  "Social media management",
                  "Bookkeeping & expense tracking",
                  "CRM updates and automation",
                  "Reporting and tracking",
                ],
                featured: true,
              },
              {
                name: "Custom",
                price: "Tailored",
                period: "Support",
                hours: "Flexible hours",
                desc: "For founders with complex workflows",
                features: [
                  "Fully managed operations team",
                  "Admin and creative work",
                  "Automation and marketing",
                  "Client communication",
                  "Custom workflows",
                ],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 border transition-all ${plan.featured ? "border-accent/50 bg-accent/5 scale-105" : "border-border/50"}`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-sm text-accent font-medium mb-4">{plan.hours}</p>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <Button className="w-full mb-8 bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Simplify Your Work</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're ready to help you streamline your operations, reduce inefficiencies, and free up your time for what
            really matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Book a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              Schedule a Call
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-muted-foreground">
            <div>📧 henry@spectrava.agency</div>
            <div>🌍 www.spectrava.agency</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-2">SpectraVA</h3>
              <p className="text-sm text-muted-foreground">Human precision. AI efficiency. Real results.</p>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 SpectraVA Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
