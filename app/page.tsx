import { Metadata } from "next";
import Image from "next/image";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}

export default async function Home() {

  const res = await fetch('http://localhost:3001/products', { cache: "no-store" });
  const data = await res.json();

  return (
    <>
      <div>{data.length}</div>
      <ClockLoader loading={true} color='#fff' />
    </>
  );
}
