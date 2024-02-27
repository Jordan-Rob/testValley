import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Banner } from "@/components/Banner/Banner";
import { Items } from "@/components/Items/Items";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Items />
    </main>
  );
}
