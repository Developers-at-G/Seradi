'use client';
import { motion } from 'framer-motion';
import ImageAnimation from '../Components/ImageAnimation/ImageAnimation';
import ProjectComponent from '../Components/ProjectComponent/ProjectComponent';
import ApartmentGallery from '../Components/ApartmentGallery/ApartmentGallery';
import ApartmentSlider from '../Components/ApartmentSlider/ApartmentSlider';
import SaleCondition from '../Components/SaleCondition/SaleCondition';
import TextWithMedia from '../Components/Text With Media/TextWithMedia';
import AnimatedTextPanel from '../Components/Animated Text Panel/AnimatedTextPanel';

export default function SeradiPage() {
  return (
    <main className='bg-gray-900'>

      <section>
        <AnimatedTextPanel />
      </section>
      <section>
        <TextWithMedia />
      </section>

      <section >
        <ProjectComponent />
      </section>

      <section >
        <ImageAnimation />
      </section>

      <section>
        <ApartmentGallery />
      </section>

      <section >
        <ApartmentSlider />
      </section>

      <section>
        <SaleCondition />
      </section>

    </main>
  );
} 