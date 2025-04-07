import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, RefreshCw } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center space-y-8 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-gradient">
            Discover, Collect, and Trade Unique Digital Assets
          </h1>
          <p className="text-xl text-muted-foreground">
            Mint NFTs with random rarity, trade on the marketplace, and upgrade your collection through burning mechanics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/marketplace">
              <Button size="lg" className="text-lg">
                Explore Marketplace
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/mint">
              <Button size="lg" variant="outline" className="text-lg">
                Start Minting
                <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <Sparkles className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Random Rarity Minting</h3>
              <p className="text-muted-foreground">
                Mint NFTs with random traits and rarity levels, from common to legendary.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">NFT Upgrades</h3>
              <p className="text-muted-foreground">
                Burn lower-level NFTs to create powerful higher-tier collectibles.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <RefreshCw className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Trading System</h3>
              <p className="text-muted-foreground">
                List NFTs for sale, make offers, and trade securely with other collectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}