import "./globals.css";
import "../styles/global.css";

export const metadata = {
  title: "Digital Wallet Dashboard",
  description: "Digital Wallet Dashboard",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-full bg-white">{children}</body>
    </html>
  );
}
export default RootLayout;
