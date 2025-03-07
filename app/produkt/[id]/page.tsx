import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Heart, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProductPage({ params }: { params: { id: string } }) {
  // W rzeczywistej aplikacji dane produktu byłyby pobierane z API lub bazy danych
  const product = {
    id: params.id,
    name: "Smartfon Premium XYZ",
    price: "2499 zł",
    oldPrice: "2999 zł",
    description:
      "Najnowszy model smartfona z zaawansowanymi funkcjami, doskonałym aparatem i długim czasem pracy baterii. Idealny dla wymagających użytkowników.",
    features: [
      'Ekran 6.7" AMOLED 120Hz',
      "Procesor 8-rdzeniowy",
      "Pamięć RAM 8GB",
      "Pamięć wewnętrzna 256GB",
      "Aparat 108MP + 12MP + 8MP",
      "Bateria 5000mAh",
      "Android 13",
      "5G, NFC, Bluetooth 5.2",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Czarny", "Biały", "Niebieski"],
    variants: ["128GB", "256GB", "512GB"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  }

  const relatedProducts = [
    { id: 1, name: "Etui ochronne", price: "99 zł", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Szkło hartowane", price: "49 zł", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Ładowarka bezprzewodowa", price: "149 zł", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Słuchawki bezprzewodowe", price: "349 zł", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link href="/produkty" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Powrót do listy produktów
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border shadow-lg">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full object-cover aspect-square"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md border cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - widok ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full object-cover aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6 bg-gradient-to-br from-background to-secondary/20 p-6 rounded-xl shadow-lg">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} opinii)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">{product.price}</span>
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">{product.oldPrice}</span>}
            <Badge className="ml-2 bg-red-500 hover:bg-red-600">-17%</Badge>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium mb-2">Kolor:</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <Button key={color} variant={index === 0 ? "default" : "outline"} className="rounded-md">
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Variant Selection */}
          <div>
            <h3 className="font-medium mb-2">Wariant:</h3>
            <div className="flex gap-2">
              {product.variants.map((variant, index) => (
                <Button key={variant} variant={index === 1 ? "default" : "outline"} className="rounded-md">
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="flex-1 gap-2 shadow-md hover:shadow-lg transition-all">
              <ShoppingCart className="h-5 w-5" />
              Dodaj do koszyka
            </Button>
            <Button size="lg" variant="outline" className="flex-1 gap-2 shadow-sm hover:shadow-md transition-all">
              <Heart className="h-5 w-5" />
              Dodaj do ulubionych
            </Button>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-sm">
            {product.inStock ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">Produkt dostępny</span>
              </>
            ) : (
              <span className="text-red-500 font-medium">Produkt niedostępny</span>
            )}
          </div>

          {/* Delivery */}
          <div className="bg-gradient-to-r from-secondary/30 to-secondary/10 p-4 rounded-lg space-y-2 shadow-md">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium">Dostawa</span>
            </div>
            <ul className="space-y-1 pl-7 text-sm">
              <li>Kurier - 14,99 zł (1-2 dni robocze)</li>
              <li>Paczkomat - 9,99 zł (1-2 dni robocze)</li>
              <li>Darmowa dostawa od 200 zł</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
          <TabsTrigger
            value="details"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-base"
          >
            Szczegóły
          </TabsTrigger>
          <TabsTrigger
            value="specs"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-base"
          >
            Specyfikacja
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-base"
          >
            Opinie ({product.reviews})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Opis produktu</h3>
            <p>
              Smartfon Premium XYZ to najnowszy model z serii Premium, który łączy w sobie elegancki design, wysoką
              wydajność i zaawansowane funkcje. Wyposażony w najnowocześniejsze technologie, zapewnia niezrównane
              doświadczenia użytkowania.
            </p>
            <p>
              Dzięki potężnemu procesorowi i dużej ilości pamięci RAM, urządzenie z łatwością radzi sobie z najbardziej
              wymagającymi aplikacjami i grami. Zaawansowany system aparatów pozwala na wykonywanie profesjonalnych
              zdjęć w każdych warunkach oświetleniowych.
            </p>
            <p>
              Bateria o pojemności 5000mAh zapewnia długi czas pracy, a szybkie ładowanie pozwala na uzupełnienie
              energii w krótkim czasie. Smartfon obsługuje najnowsze standardy łączności, w tym 5G, co gwarantuje
              błyskawiczny transfer danych.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="specs" className="pt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Specyfikacja techniczna</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Ogólne</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">System operacyjny</span>
                    <span>Android 13</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Procesor</span>
                    <span>8-rdzeniowy, 3.0 GHz</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Pamięć RAM</span>
                    <span>8 GB</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Pamięć wewnętrzna</span>
                    <span>256 GB</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Wyświetlacz</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Przekątna</span>
                    <span>6.7"</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Rozdzielczość</span>
                    <span>1440 x 3200 px</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Typ</span>
                    <span>AMOLED</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Odświeżanie</span>
                    <span>120 Hz</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Opinie klientów</h3>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-5xl font-bold">{product.rating}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{product.reviews} opinii</div>
              </div>
              <div className="flex-1 space-y-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="text-sm w-2">{rating}</div>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground w-8">
                      {rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button>Napisz opinię</Button>

            {/* Sample Reviews */}
            <div className="space-y-6 mt-8">
              {[
                {
                  author: "Jan Kowalski",
                  date: "12.05.2023",
                  rating: 5,
                  content:
                    "Świetny telefon, bardzo szybki i z doskonałym aparatem. Bateria trzyma cały dzień przy intensywnym użytkowaniu. Polecam!",
                },
                {
                  author: "Anna Nowak",
                  date: "28.04.2023",
                  rating: 4,
                  content:
                    "Dobry smartfon z wieloma przydatnymi funkcjami. Jedynym minusem jest dla mnie zbyt śliska obudowa, ale to rozwiązuje etui. Poza tym wszystko działa bez zarzutu.",
                },
              ].map((review, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{review.author}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Polecane akcesoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <Link href={`/produkt/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
              </Link>
              <CardContent className="p-4">
                <Link href={`/produkt/${product.id}`} className="font-medium hover:underline">
                  {product.name}
                </Link>
                <div className="font-bold mt-1">{product.price}</div>
                <Button variant="outline" size="sm" className="w-full mt-2 shadow-sm hover:shadow-md transition-all">
                  Dodaj do koszyka
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

