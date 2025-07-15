import { Inter } from "next/font/google";
import Providers from "../provider/Providers";
// import TopNav from "../components/shared/TopNav";
// import NavBar from "../components/shared/NavBar";
// import Footer from "../components/shared/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vogal",
  description: "https://fuad-talukder.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Providers>
          {/* <TopNav></TopNav>
          <NavBar></NavBar> */}
          {children}
          {/* <Footer></Footer> */}
        </Providers>
      </body>
    </html>
  );
}
