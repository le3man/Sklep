"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  // W rzeczywistej aplikacji dane koszyka byłyby pobierane z API lub stanu aplikacji
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smartfon Premium XYZ",
      price: 2499,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Słuchawki bezprzewodowe",
      price: 349,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Etui ochronne",
      price: 99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 14.99
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Twój koszyk</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Twój koszyk jest pusty</h2>
          <p className="text-muted-foreground mb-6">Dodaj produkty do koszyka, aby kontynuować zakupy</p>
          <Link href="/produkty">
            <Button size="lg">Przeglądaj produkty</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-muted/50 font-medium">
                <div className="col-span-6">Produkt</div>
                <div className="col-span-2 text-center">Cena</div>
                <div className="col-span-2 text-center">Ilość</div>
                <div className="col-span-2 text-right">Suma</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-t first:border-t-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link href={`/produkt/${item.id}`} className="font-medium hover:underline">
                          {item.name}
                        </Link>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:text-center">
                      <div className="flex items-center justify-between md:block">
                        <span className="md:hidden">Cena:</span>
                        <span>{item.price.toFixed(2)} zł</span>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:text-center">
                      <div className="flex items-center justify-between md:justify-center">
                        <span className="md:hidden">Ilość:</span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Zmniejsz ilość</span>
                          </Button>
                          <div className="h-8 w-10 flex items-center justify-center border-y">{item.quantity}</div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Zwiększ ilość</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:text-right">
                      <div className="flex items-center justify-between md:block">
                        <span className="md:hidden">Suma:</span>
                        <span className="font-medium">{(item.price * item.quantity).toFixed(2)} zł</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-auto mt-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        <span>Usuń</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1">
                <Input placeholder="Kod promocyjny" />
              </div>
              <Button variant="outline">Zastosuj kod</Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Podsumowanie zamówienia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wartość produktów</span>
                  <span>{subtotal.toFixed(2)} zł</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dostawa</span>
                  <span>{shipping === 0 ? "Za darmo" : `${shipping.toFixed(2)} zł`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Razem</span>
                  <span>{total.toFixed(2)} zł</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-all" size="lg">
                  Przejdź do płatności
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1 shadow-sm">
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
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Bezpieczne zakupy</div>
                  <div className="text-muted-foreground">Wszystkie płatności są szyfrowane</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
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
                    className="text-primary"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Wiele metod płatności</div>
                  <div className="text-muted-foreground">Karty, BLIK, przelew, PayPal</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
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
                    className="text-primary"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Łatwe zwroty</div>
                  <div className="text-muted-foreground">30 dni na zwrot produktu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

