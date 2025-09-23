import AmazingOffersContainer from "@/components/homepage/AmazingOffersContainer";
import Grid4BannerContainer from "@/components/homepage/Grid4BannerContainer";
import ServicesContainer from "@/components/homepage/ServicesContainer";
import SliderContainer from "@/components/homepage/SliderContainer";
import AmazingOffersSkeleton from "@/components/skeletons/AmazingOffersSkeleton";
import Grid4BannerSkeleton from "@/components/skeletons/Grid4BannerSkeleton";
import MainSliderSkeleton from "@/components/skeletons/MainSliderSkeleton";
import ServicesSkeleton from "@/components/skeletons/ServicesSkeleton";
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
      <div className="container mx-auto px-2 pb-28">
        <Suspense fallback={<ServicesSkeleton />}>
          <ServicesContainer />
        </Suspense>
        <Suspense fallback={<AmazingOffersSkeleton />}>
          <AmazingOffersContainer />
        </Suspense>
        <Suspense fallback={<Grid4BannerSkeleton />}>
          <Grid4BannerContainer />
        </Suspense>
      </div>
    </>
  );
}
