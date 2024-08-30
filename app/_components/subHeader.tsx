import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Image from "next/image"

const subHeader = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl">
        {" "}
        Olá,<span className="font-bold"> Natan!</span>
      </h2>
      <p>Domingo, 25 de Agosto</p>

      <div className="mt-6 flex items-center gap-2">
        <Input className="rounded-[8px]" placeholder="Buscar" />
        <Button className="rounded-[8px]">
          <SearchIcon />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-6">
        <Button variant="outline">Cabelo</Button>
        <Button variant="outline">Barba</Button>
        <Button variant="outline">Acabamento</Button>
      </div>

      <div className="relative mt-6 h-[150px] w-full">
        <Image
          alt="Agende nos melhores com FSW Barber"
          src="/banner-01.svg"
          fill
          className="rounded-[10px] object-cover"
        />
      </div>
    </div>
  )
}

export default subHeader
