import Navbar from "@/Components/Home/Navbar";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fpay",
  description: "France Pay",
};

export default function RootLayout({ children }) {
  // AOS.init({});
  //  useEffect(() => {
  //    AOS.init({
  //      duration: 3000,
  //    });
  //  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
