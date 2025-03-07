"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Search, Menu, X, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const routes = [
    {
      name: "Strona główna",
      href: "/",
    },
    {
      name: "Kategorie",
      href: "#",
      children: [
        { name: "Elektronika", href: "/kategoria/elektronika" },
        { name: "Moda", href: "/kategoria/moda" },
        { name: "Dom i ogród", href: "/kategoria/dom-i-ogrod" },
        { name: "Sport", href: "/kategoria/sport" },
      ],
    },
    {
      name: "Promocje",
      href: "/promocje",
    },
    {
      name: "Nowości",
      href: "/nowosci",
    },
    {
      name: "O nas",
      href: "/o-nas",
    },
    {
      name: "Kontakt",
      href: "/kontakt",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary to-primary/10">
        <div className="container flex h-10 items-center justify-between py-1">
          <p className="text-sm">Darmowa dostawa od 200 zł</p>
          <div className="flex items-center gap-4">
            <Link href="/pomoc" className="text-sm hover:underline">
              Pomoc
            </Link>
            <Link href="/kontakt" className="text-sm hover:underline">
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className="text-primary">Shop</span>
          <span>Online</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) =>
                route.children ? (
                  <NavigationMenuItem key={route.name}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/80 transition-colors">
                      {route.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] shadow-lg rounded-xl">
                        {route.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{child.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={route.name}>
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          navigationMenuTriggerStyle() + " bg-transparent hover:bg-secondary/80 transition-colors"
                        }
                      >
                        {route.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Szukaj produktów..."
                className="w-full md:w-[300px] shadow-sm"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                <X className="h-5 w-5" />
                <span className="sr-only">Zamknij wyszukiwanie</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex hover:bg-secondary/80 transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Wyszukaj</span>
            </Button>
          )}

          <Link href="/ulubione">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-secondary/80 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Ulubione</span>
            </Button>
          </Link>

          <Link href="/konto">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-secondary/80 transition-colors">
              <User className="h-5 w-5" />
              <span className="sr-only">Konto</span>
            </Button>
          </Link>

          <Link href="/koszyk">
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary/80 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 shadow-sm">
                3
              </Badge>
              <span className="sr-only">Koszyk</span>
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-secondary/80 transition-colors">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) =>
                  route.children ? (
                    <div key={route.name} className="space-y-3">
                      <div className="font-medium">{route.name}</div>
                      <div className="pl-4 border-l space-y-2">
                        {route.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-muted-foreground hover:text-foreground"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={route.name}
                      href={route.href}
                      className={`font-medium ${pathname === route.href ? "text-primary" : ""}`}
                    >
                      {route.name}
                    </Link>
                  ),
                )}
                <div className="border-t mt-4 pt-4 space-y-4">
                  <Link href="/konto" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>Moje konto</span>
                  </Link>
                  <Link href="/ulubione" className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <span>Ulubione</span>
                  </Link>
                  <div className="relative">
                    <Input type="search" placeholder="Szukaj produktów..." className="shadow-sm" />
                    <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

