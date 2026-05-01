import Banner from "@/components/home/Banner";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Marquee from "@/components/home/Marquee";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Marquee/>
      <FeaturedBooks/>
    </div>
  )
}