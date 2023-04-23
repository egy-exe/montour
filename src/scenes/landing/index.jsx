import * as React from "react";
import ProductHero from "./components/ProductHero";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import LandingListItems from "./components/LandingListItems";

const cards = [
  { image: "landing1.png", label: "Ice festival 2023", link: "/" },
  { image: "landing2.png", label: "Алтай таван богд", link: "/" },
  { image: "landing3.jpg", label: "Од харах аялал", link: "/" },
  { image: "landing4.jpg", label: "Говийн аялал", link: "/" },
  { image: "landing5.jpg", label: "Мөсөн адал явдал", link: "/" },
  { image: "landing6.jpg", label: "Завин аялал", link: "/" },
  { image: "landing7.jpg", label: "Хязгаарын аялал", link: "/" },
  { image: "landing8.jpg", label: "Сэлэнгийн аялал", link: "/" },
];

const shoppyCards = [
  {
    image: "shoppy1.png",
    label: "Аяны гудас",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy2.png",
    label: "Мешок",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy3.png",
    label: "Майхан",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy4.png",
    label: "Аяллын хувцас",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy5.png",
    label: "Цүнх, чемодан",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy6.png",
    label: "Аяны тулга",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy7.png",
    label: "Гар чийдэн",
    link: "https://shoppy.mn/t/sport/aialal",
  },
  {
    image: "shoppy8.png",
    label: "Аяны ширээ сандал",
    link: "https://shoppy.mn/t/sport/aialal",
  },
];

export default function Landing() {
  return (
    <>
      {/* header */}
      <TopBar />
      <main>
        {/* Hero unit */}
        <ProductHero />
        <LandingListItems header="Санал болгох аяллууд" cards={cards} />
        <LandingListItems header="Аяллын хэрэгслүүд" cards={shoppyCards} />
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
}
