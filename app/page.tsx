import SliderContainer from "@/components/homepage/SliderContainer";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}
// async function getData() {
//   await new Promise(resolve => setTimeout(resolve, 1000))
//   return { message: 'data' }
// }

export default async function Home() {
  // const data = await getData();
  return (
    <>
      <Suspense fallback={<div className="bg-slate-700 w-[99%] mx-auto mt-2 sm:h-[300px] xl:h-[400px] animate-pulse opacity-75 rounded-md"></div>}>
        <SliderContainer />
      </Suspense>
    </>
  );
}
