'use client';

import Navbar from "@/components/Navbar";
import "./globals.css";
import Totalusers from "@/components/body/Totalusers";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            {children}
            <Totalusers />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
