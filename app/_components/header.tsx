import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image alt="FSW-Barber" src="/Logo.svg" height={18} width={120} />
        <Button variant="ghost" size="icon" className="rounded">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
