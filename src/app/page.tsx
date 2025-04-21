'use client';
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ContactForm from "./Components/ContactForm/ContactForm";
import HeaderMenu from "./Components/HeaderMenu/HeaderMenu";
import ProjectTab from "./Components/ProjectTab/ProjectTab";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <HeaderMenu />
      <Hero/>
      <ProjectTab />
      <ContactForm/>
      <Footer/>
    </div>
  );
}
