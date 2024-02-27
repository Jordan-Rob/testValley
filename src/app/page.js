import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "@/components/Banner/Banner";
import { Items } from "@/components/Items/Items";

export default function Home() {
  return (
      <main>
        <Banner />
        <Items />
      </main>
  );
}
