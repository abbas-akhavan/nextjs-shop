import Slider from "@/components/homepage/Slider";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}
async function getData() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { message: 'data' }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Suspense fallback={<div className="bg-gray-300 w-full h-40 animate-pulse aspect-video opacity-50"></div>}>
        <Slider />
      </Suspense>
    </>
  );
}
