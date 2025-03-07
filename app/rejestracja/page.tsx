import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-white">Shop</span>
            <span className="text-white">Online</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Dołącz do naszej społeczności zadowolonych klientów i korzystaj z wyjątkowych ofert dostępnych
              tylko dla zarejestrowanych użytkowników.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Utwórz konto</h1>
            <p className="text-sm text-muted-foreground">Wprowadź swoje dane, aby utworzyć konto</p>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">Imię</Label>
                    <Input id="first-name" placeholder="Jan" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Nazwisko</Label>
                    <Input id="last-name" placeholder="Kowalski" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="nazwa@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Hasło</Label>
                  <Input id="password" type="password" autoCapitalize="none" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Potwierdź hasło</Label>
                  <Input id="confirm-password" type="password" autoCapitalize="none" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Akceptuję{" "}
                    <Link href="/regulamin" className="text-primary underline underline-offset-4">
                      regulamin
                    </Link>{" "}
                    i{" "}
                    <Link href="/polityka-prywatnosci" className="text-primary underline underline-offset-4">
                      politykę prywatności
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="shadow-md hover:shadow-lg transition-all">
                  Zarejestruj się
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Lub kontynuuj z</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </Button>
            </div>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Masz już konto?{" "}
            <Link href="/logowanie" className="underline underline-offset-4 hover:text-primary">
              Zaloguj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

