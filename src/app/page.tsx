'use client';
import AnimatedTextPanel from "./Components/Animated Text Panel/AnimatedTextPanel";
import Container from "./Components/Container/Container";
import ApartmentSlider from "./Components/ApartmentSlider/ApartmentSlider";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import TextWithMedia from "./Components/Text With Media/TextWithMedia";
import TextWithDescription from "./Components/TextPanelWithDescription/TextWithDescription";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero/>
      <AnimatedTextPanel/>
      <TextWithMedia/>
      <TextWithDescription/>
      <ImageSlider/>
      <ApartmentSlider/>
      <Footer/>
    </div>
  );
}
