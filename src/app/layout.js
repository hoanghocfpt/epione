import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ScrollTop from "@/components/common/ScrollTop";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/common/CartDrawer";

const nuNitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Epione | Thương hiệu công thái học đầu tiên dành cho người Việt",
  description: "Đây không phải website chính thức, đây là website clone cho mục đích giáo dục.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${nuNitoSans.className} antialiased`}
      >
        <CartDrawer />
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
