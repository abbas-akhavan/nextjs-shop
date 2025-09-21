import AmazingOffersContainer from "@/components/homepage/AmazingOffersContainer";
import SliderContainer from "@/components/homepage/SliderContainer";
import MainSliderSkeleton from "@/components/skeletons/MainSliderSkeleton";
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
      <Suspense fallback={<MainSliderSkeleton />}>
        <SliderContainer />
      </Suspense>
      <Suspense fallback={<div className="skeleton-bg h-44"></div>}>
        <AmazingOffersContainer />
      </Suspense>
    </>
  );
}
