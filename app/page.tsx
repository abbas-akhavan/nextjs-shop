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
      <Suspense fallback={<div className="bg-slate-700 w-[96%] lg:w-full mx-auto mt-2 min-h-[180px] h-[40vw] lg:h-[300px] xl:h-[400px] animate-pulse opacity-75 rounded-md"></div>}>
        <SliderContainer />
      </Suspense>
    </>
  );
}
