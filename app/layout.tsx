import "./globals.css";

import { montserrat } from "./ui/font";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
