import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}
async function getData() {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return { message: 'data' }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>{data.message}</div>
    </>
  );
}
