'use client'

import Navbar from "@/components/Navbar";
import "./globals.css";
import Totalusers from "@/components/body/Totalusers";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider store= {store} >
        <Navbar></Navbar>
        {children}
        <Totalusers />
        </Provider>
      </body>
    </html>
  );
}
