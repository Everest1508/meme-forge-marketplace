import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function MintPage() {
  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Mint NFT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Random NFT Mint</CardTitle>
              <CardDescription>
                Mint a new NFT with random traits and rarity levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted aspect-square rounded-lg flex items-center justify-center">
                <img
                  src={`https://pbs.twimg.com/profile_images/1893941931929116672/CctssH1c_400x400.jpg`}
                  alt={`NFT`}
                  className="aspect-square w-full object-cover"
                />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Possible Rarities:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Common (60%)</li>
                    <li>Rare (25%)</li>
                    <li>Epic (10%)</li>
                    <li>Legendary (5%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Mint NFT (0.1 TABI)
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Mints</CardTitle>
                <CardDescription>
                  NFTs you&apos;ve minted recently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No recent mints</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minting Stats</CardTitle>
                <CardDescription>
                  Your minting statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Total Minted:</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Legendary Minted:</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Epic Minted:</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}