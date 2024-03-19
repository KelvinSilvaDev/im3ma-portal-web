import "../globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='flex - h-screen'>
        <main className="flex-1 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
