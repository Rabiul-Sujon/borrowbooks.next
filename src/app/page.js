import Banner from "@/components/home/Banner";
import ExtraSection1 from "@/components/home/ExtraSection1";
import ExtraSection2 from "@/components/home/ExtraSection2";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Marquee from "@/components/home/Marquee";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Marquee/>
      <FeaturedBooks/>
      <ExtraSection1/>
      <ExtraSection2/>
    </div>
  )
}