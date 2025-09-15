import Slider from "@/components/homepage/Slider";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}
async function getData() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return { message: 'data' }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Suspense fallback={<p>Loading slider</p>}>
        <Slider />
      </Suspense>
    </>
  );
}
