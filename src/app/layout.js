
import Navbar from "@/components/Navbar";
import "./globals.css";
import Totalusers from "@/components/body/Totalusers";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar></Navbar>
        {children}
        <Totalusers />
      </body>
    </html>
  );
}
