import { Metadata } from "next";
import Image from "next/image";
import toast from "react-hot-toast";

export const metadata: Metadata = {
  title: 'home page',
  description: 'this is home page.',
}

export default function Home() {

  // useEffect(() => {
  //   toast.success('سلام چطوری برادر', {
  //     duration: 180000
  //   })
  // }, [])
  return (
    <div></div>
  );
}
