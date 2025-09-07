import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}

export default function Home() {
  return (
    <div>home</div>
  );
}
