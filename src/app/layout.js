'use client';

import Navbar from "@/components/Navbar";
import "./globals.css";
import Totalusers from "@/components/body/Totalusers";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

          {path !== "/login" && path !== "/signup" && <Navbar />}

          
            {/* <Navbar /> */}
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
