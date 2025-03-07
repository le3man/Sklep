import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kontakt</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Masz pytania? Jesteśmy tutaj, aby pomóc. Skontaktuj się z nami w dowolny sposób.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 shadow-sm">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Telefon</h3>
              <p className="text-muted-foreground mb-4">Poniedziałek - Piątek, 8:00 - 20:00</p>
              <a href="tel:+48123456789" className="text-primary font-medium">
                +48 123 456 789
              </a>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 shadow-sm">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Odpowiadamy w ciągu 24 godzin</p>
              <a href="mailto:kontakt@shoponline.pl" className="text-primary font-medium">
                kontakt@shoponline.pl
              </a>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Adres</h3>
              <p className="text-muted-foreground mb-4">Odwiedź nasz sklep stacjonarny</p>
              <address className="not-italic text-primary font-medium">
                ul. Przykładowa 123
                <br />
                00-000 Warszawa
              </address>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Napisz do nas</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię i nazwisko</Label>
                  <Input id="name" placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jan@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Temat</Label>
                <Input id="subject" placeholder="W czym możemy pomóc?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea id="message" placeholder="Twoja wiadomość..." className="min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="shadow-md hover:shadow-lg transition-all">
                Wyślij wiadomość
              </Button>
            </form>
          </div>
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35439831926!2d20.92111271640625!3d52.233065000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1651056415000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Często zadawane pytania</h2>
          <p className="text-muted-foreground mb-6">
            Nie znalazłeś odpowiedzi na swoje pytanie? Sprawdź naszą sekcję FAQ.
          </p>
          <Button variant="outline" asChild className="shadow-sm hover:shadow-md transition-all">
            <a href="/faq">Przejdź do FAQ</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

