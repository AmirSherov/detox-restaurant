import type { Metadata } from "next";
import Nav from "./Nav";

export const metadata: Metadata = {
  title: "Detox program",
  description: "Detox program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/detox.png" sizes="any" />
        <link rel="icon" href="/detox.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
