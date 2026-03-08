import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
