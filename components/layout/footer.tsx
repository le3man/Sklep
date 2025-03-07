import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/40">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-primary">Shop</span>
              <span>Online</span>
            </Link>
            <p className="text-muted-foreground">
              Twój ulubiony sklep internetowy z szeroką ofertą produktów najwyższej jakości.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Informacje</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/o-nas" className="text-muted-foreground hover:text-foreground transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kariera" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kariera
                </Link>
              </li>
              <li>
                <Link href="/pomoc" className="text-muted-foreground hover:text-foreground transition-colors">
                  Centrum pomocy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Obsługa klienta</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/dostawa" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dostawa i płatności
                </Link>
              </li>
              <li>
                <Link href="/zwroty" className="text-muted-foreground hover:text-foreground transition-colors">
                  Zwroty i reklamacje
                </Link>
              </li>
              <li>
                <Link href="/regulamin" className="text-muted-foreground hover:text-foreground transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ShopOnline. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4">
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8 shadow-sm" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8 shadow-sm" />
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8 shadow-sm" />
            <img src="/placeholder.svg?height=30&width=50" alt="BLIK" className="h-8 shadow-sm" />
          </div>
        </div>
      </div>
    </footer>
  )
}

