import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

export default function Layout() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Navbar items={items} />
      <Outlet context={{ setItems }} />
      <Footer />
    </>
  );
}
