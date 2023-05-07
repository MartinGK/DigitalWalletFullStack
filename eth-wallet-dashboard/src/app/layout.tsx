import './globals.css'

export const metadata = {
  title: 'Digital Wallet Dashboard',
  description: 'Digital Wallet Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full bg-white">{children}</body>
    </html>
  )
}
