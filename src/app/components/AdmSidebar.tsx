import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AdmSidebar() {
  return (
    <aside className="w-64 bg-gray-800 h-full text-white">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <nav className="flex flex-col justify-center px-4 gap-3">
        <Link href='/admin'>
          <Button variant="outline" className="w-full">
            Início
          </Button>
        </Link>
        <Link href='/admin/users'>
          <Button variant="outline" className="w-full">
            Usuários
          </Button>
        </Link>
      </nav>
    </aside>
  );
}