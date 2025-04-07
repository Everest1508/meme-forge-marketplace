import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function MarketplacePage() {
  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">NFT Marketplace</h1>
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="sm:hidden">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                {/* Filter content for mobile */}
                <div className="py-4">
                  <div className="space-y-4">
                    {/* Add filter options here */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="outline" className="hidden sm:flex">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search NFTs..."
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="p-0">
              <img
    src={`https://pbs.twimg.com/profile_images/1893941931929116672/CctssH1c_400x400.jpg`} // replace this with your actual image URL
    alt={`NFT ${i + 1}`}
    className="aspect-square w-full object-cover"
  />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg">NFT #{i + 1}</CardTitle>
                <CardDescription>Common Rarity</CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">
                  Price: 0.1 TABI
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}