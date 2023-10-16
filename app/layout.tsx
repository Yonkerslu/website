import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Yonkers",
  description: "Discover St.Lucia's best car rental",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
