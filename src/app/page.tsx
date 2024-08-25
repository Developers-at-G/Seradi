'use client';
import AnimatedTextPanel from "./Components/Animated Text Panel/AnimatedTextPanel";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <Container>
      <Hero/>
      <AnimatedTextPanel/>
      <Footer/>
    </Container>
  );
}
