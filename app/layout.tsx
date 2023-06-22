// app/layout.tsx
import Header from "@/libs/components/Header/page";
import { Providers } from "./providers";
import Footer from "@/libs/components/footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
