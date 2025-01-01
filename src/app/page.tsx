'use client';
import AnimatedTextPanel from "./Components/Animated Text Panel/AnimatedTextPanel";
import Container from "./Components/Container/Container";
import ApartmentSlider from "./Components/ApartmentSlider/ApartmentSlider";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import TextWithMedia from "./Components/Text With Media/TextWithMedia";
import TextWithDescription from "./Components/TextPanelWithDescription/TextWithDescription";
import ContactForm from "./Components/ContactForm/ContactForm";
import SaleCondition from "./Components/SaleCondition/SaleCondition";
import HeaderMenu from "./Components/HeaderMenu/HeaderMenu";

export default function Home() {
  return (
    <div className="bg-gray-900">
       <HeaderMenu />
      <Hero/>
      <AnimatedTextPanel/>
      <TextWithMedia/>
      <TextWithDescription/>
      <ImageSlider/>
      <ApartmentSlider/>
      <SaleCondition/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
