'use client'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";


export default function AdmHeader() {
  return (
    <header className="w-full h-14 bg-gray-800 flex justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <Button>Visitar Site</Button>
      </div>
      <div className="flex items-center">
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2 p-4 bg-foreground rounded-lg bg-opacity-40">
              <Button variant="outline" className="w-full">Perfil</Button>
              <Button variant="outline" className="w-full">Configurações</Button>
              <Button variant="outline" className="w-full">Sair</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}