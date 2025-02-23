import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ScrollTop from "@/components/common/ScrollTop";
import Footer from "@/components/layout/Footer";

const nuNitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Epione | Thương hiệu công thái học đầu tiên dành cho người Việt",
  description: "Đây không phải website chính thức, đây là sản phẩm demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nuNitoSans.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
