"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Wallet, Store, PlusCircle, History, User, Menu } from 'lucide-react'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    // TODO: Implement wallet connection
    setIsConnected(true)
  }

  const NavItems = () => (
    <>
      <Link href="/marketplace">
        <Button variant="ghost">Marketplace</Button>
      </Link>
      <Link href="/mint">
        <Button variant="ghost">
          <PlusCircle className="mr-2 h-4 w-4" />
          Mint
        </Button>
      </Link>
      <Link href="/my-nfts">
        <Button variant="ghost">
          <History className="mr-2 h-4 w-4" />
          My NFTs
        </Button>
      </Link>
      {isConnected ? (
        <Link href="/profile">
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
      ) : (
        <Button onClick={handleConnect}>
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      )}
    </>
  )

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Store className="h-6 w-6" />
            <span className="font-bold text-xl">MemeForge</span>
          </Link>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <NavItems />
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}