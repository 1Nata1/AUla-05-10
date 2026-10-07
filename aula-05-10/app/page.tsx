import Header from "./components/Header";
import HeaderImg from "./components/HeaderImg";
import Banner from "./components/Banner";
import BannerButton from "./components/BannerButton";
import Separator from "./components/Separator"
import Portfolio from "./components/Portfolio"
import Blog from "./components/Blog"


export default function Home() {
  return (
    <div>
      <Header/>
      <HeaderImg/>
      <Banner/>
      <BannerButton/>
      <Separator/>
      <Portfolio/>
      <Separator/>
      <Blog/>
    </div>
  );
}
