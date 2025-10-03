import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Emanuel Karabo Serake</p>
            <p className="text-sm text-foreground/60">Technology Enthusiast & Entrepreneur</p>
          </div>

          <div className="flex items-center justify-center mb-4 md:mb-0">
            <a href="#hero" className="text-foreground/60 hover:text-primary mx-2 transition-colors">
              Home
            </a>
            <span className="text-foreground/30 mx-1">•</span>
            <a href="#about" className="text-foreground/60 hover:text-primary mx-2 transition-colors">
              About
            </a>
            <span className="text-foreground/30 mx-1">•</span>
            <a href="#projects" className="text-foreground/60 hover:text-primary mx-2 transition-colors">
              Projects
            </a>
            <span className="text-foreground/30 mx-1">•</span>
            <a href="#contact" className="text-foreground/60 hover:text-primary mx-2 transition-colors">
              Contact
            </a>
          </div>

          <div>
            <p className="flex items-center justify-center gap-1 text-sm">
              &copy; {new Date().getFullYear()} Made with <Heart className="h-4 w-4 text-red-500" /> by Emanuel S.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
