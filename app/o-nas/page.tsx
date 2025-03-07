import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Nasza historia</h1>
          <p className="text-muted-foreground text-lg mb-6">
            ShopOnline to firma z wieloletnim doświadczeniem w branży e-commerce. Powstaliśmy w 2010 roku z pasji do 
            dostarczania najwyższej jakości produktów i obsługi klienta. Przez lata zdobyliśmy zaufanie tysięcy 
            klientów, stając się jednym z liderów na rynku.
          </p>
          <p className="text-muted-foreground text-lg mb-6">
            Naszą misją jest zapewnienie klientom dostępu do szerokiej gamy produktów najwyższej jakości, 
            w konkurencyjnych cenach, z szybką dostawą i profesjonalną obsługą.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">Skontaktuj się z nami</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/produkty">
                Zobacz naszą ofertę
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Zespół ShopOnline"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg border">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-muted-foreground">Pracowników</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nasze wartości</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            W ShopOnline kierujemy się wartościami, które kształtują naszą kulturę organizacyjną i sposób, w jaki obsługujemy naszych klientów.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Jakość",
              description: "Oferujemy tylko produkty najwyższej jakości, które spełniają najwyższe standardy.",
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
            },
            {
              title: "Uczciwość",
              description: "Działamy transparentnie i uczciwie, budując długotrwałe relacje z naszymi klientami.",
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
            },
            {
              title: "Innowacyjność",
              description: "Stale poszukujemy nowych rozwiązań, aby zapewnić najlepsze doświadczenia zakupowe.",
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
            },
          ].map((value, index) => (
            <div key={index} className="bg-muted/50 p-6 rounded-lg">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nasz zespół</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Poznaj ludzi, którzy stoją za sukcesem ShopOnline. Nasz zespół składa się z doświadczonych specjalistów, 
            którzy z pasją dbają o każdy aspekt działalności firmy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Jan Kowalski", position: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
            { name: "Anna Nowak", position: "COO", image: "/placeholder.svg?height=300&width=300" },
            { name: "Piotr Wiśniewski", position: "CTO", image: "/placeholder.svg?height=300&width=300" },
            \

