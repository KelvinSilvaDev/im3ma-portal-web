import { LoginForm } from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="flex-1 hidden md:block h-screen bg-cover bg-center w-full" style={{ backgroundImage: "url('/login.jpg')" }} />
      <div className="flex flex-col flex-1 h-full p-12 items-start justify-center w-full">
        <h1 className="text-4xl font-bold text-center my-4">Faça seu login</h1>
        <LoginForm />
      </div>
    </section>
  )
}