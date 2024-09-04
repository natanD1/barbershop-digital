import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      {/* Header Component render*/}
      <Header />
      {/* SubHeader */}
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

        {/* <div className="grid grid-cols-3 gap-3 pt-6">
          <Button variant="outline">Cabelo</Button>
          <Button variant="outline">Barba</Button>
          <Button variant="outline">Acabamento</Button>
        </div> */}

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/* Agendamentos */}
        <h2 className="mb-3 mt-6 text-xs uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-[#221C3D] text-[#8162FF]">
                Confirmado
              </Badge>

              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    alt="Foto de Perfil"
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                  ></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia Calabreso</p>
              </div>
            </div>

            {/* Direito */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">29</p>
              <p className="text-sm">23:36</p>
            </div>
          </CardContent>
        </Card>
        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-xs uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
