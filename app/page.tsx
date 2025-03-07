import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, ArrowRight, Heart, TrendingUp, Package, Truck, CreditCard, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary/80 via-background to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex mb-2 shadow-sm">Nowa kolekcja</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Odkryj najnowsze trendy w naszym sklepie
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Najwyższa jakość, unikalne wzornictwo i konkurencyjne ceny. Sprawdź naszą ofertę już dziś!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/produkty">
                  <Button size="lg" className="gap-1 shadow-md hover:shadow-lg transition-all">
                    Zobacz ofertę <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/promocje">
                  <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-all">
                    Sprawdź promocje
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-background rounded-lg shadow-xl p-4 flex items-center gap-2 border">
                <Badge variant="outline" className="bg-background">
                  -20%
                </Badge>
                <span className="font-medium">na pierwszą transakcję</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Polecane produkty</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Odkryj nasze najlepiej sprzedające się produkty
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                id: 1,
                name: "Smartfon Premium",
                price: "2499 zł",
                image: "/placeholder.svg?height=400&width=400",
                discount: true,
              },
              {
                id: 2,
                name: "Słuchawki bezprzewodowe",
                price: "349 zł",
                image: "/placeholder.svg?height=400&width=400",
              },
              { id: 3, name: "Smartwatch", price: "899 zł", image: "/placeholder.svg?height=400&width=400" },
              {
                id: 4,
                name: "Laptop ultrabook",
                price: "4299 zł",
                image: "/placeholder.svg?height=400&width=400",
                discount: true,
              },
            ].map((product) => (
              <Card key={product.id} className="overflow-hidden group shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <Link href={`/produkt/${product.id}`}>
                    <div className="overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 shadow-md">Promocja</Badge>
                  )}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white shadow-md"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Dodaj do ulubionych</span>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Link href={`/produkt/${product.id}`} className="font-medium hover:underline">
                      {product.name}
                    </Link>
                    <div className="font-bold text-lg">{product.price}</div>
                  </div>
                  <Button className="w-full mt-4 gap-2 shadow-sm hover:shadow-md transition-all">
                    <ShoppingCart className="h-4 w-4" /> Dodaj do koszyka
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/produkty">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all">
                Zobacz wszystkie produkty
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Dlaczego warto u nas kupować?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Oferujemy najwyższą jakość obsługi i produktów
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {
                icon: <Truck className="h-10 w-10" />,
                title: "Darmowa dostawa",
                description: "Przy zamówieniach powyżej 200 zł",
              },
              {
                icon: <Package className="h-10 w-10" />,
                title: "Łatwe zwroty",
                description: "30 dni na zwrot produktu",
              },
              {
                icon: <CreditCard className="h-10 w-10" />,
                title: "Bezpieczne płatności",
                description: "Wiele metod płatności",
              },
              { icon: <Clock className="h-10 w-10" />, title: "Szybka realizacja", description: "Wysyłka w 24h" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-secondary/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-1 text-sm font-medium shadow-sm">
              <TrendingUp className="h-4 w-4" />
              <span>Najczęściej wybierane</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popularne w tym tygodniu</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sprawdź co najczęściej wybierają nasi klienci
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {[
              { id: 5, name: "Smartfon kompaktowy", price: "1899 zł", image: "/placeholder.svg?height=400&width=400" },
              {
                id: 6,
                name: 'Tablet 10"',
                price: "1299 zł",
                image: "/placeholder.svg?height=400&width=400",
                discount: true,
              },
              { id: 7, name: "Kamera sportowa", price: "799 zł", image: "/placeholder.svg?height=400&width=400" },
              { id: 8, name: "Głośnik bezprzewodowy", price: "349 zł", image: "/placeholder.svg?height=400&width=400" },
            ].map((product) => (
              <Card key={product.id} className="overflow-hidden group shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <Link href={`/produkt/${product.id}`}>
                    <div className="overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 shadow-md">Promocja</Badge>
                  )}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white shadow-md"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Dodaj do ulubionych</span>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Link href={`/produkt/${product.id}`} className="font-medium hover:underline">
                      {product.name}
                    </Link>
                    <div className="font-bold text-lg">{product.price}</div>
                  </div>
                  <Button className="w-full mt-4 gap-2 shadow-sm hover:shadow-md transition-all">
                    <ShoppingCart className="h-4 w-4" /> Dodaj do koszyka
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

