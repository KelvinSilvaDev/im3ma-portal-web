import AdmHeader from "../components/AdmHeader";
import { AdmSidebar } from "../components/AdmSidebar";
import "../globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='flex h-screen'>
        <main className="flex flex-1 w-full h-full ">
          <AdmSidebar />
          <div className="w-5/6 h-full bg-gray-100">
            <AdmHeader />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
