import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "@/components/Banner/Banner";
import { Items } from "@/components/Items/Items";
import { Shortcuts } from "@/components/Shortcuts/Shortcuts";

export default function Home() {
  return (
      <main>
        <Banner />
        <Shortcuts />
        <Items />
      </main>
  );
}
