import { AnimatedSection } from '../components/common/AnimatedSection';
import { HomeHero } from '../components/home/HomeHero';
import { HomeAboutPreview } from '../components/home/HomeAboutPreview';
import { HomeFeaturedTrainings } from '../components/home/HomeFeaturedTrainings';
import { HomeFeaturedProducts } from '../components/home/HomeFeaturedProducts';
import { HomeSolutionsTeaser } from '../components/home/HomeSolutionsTeaser';
import { HomeTestimonials } from '../components/home/HomeTestimonials';
import { HomeMiniContactCTA } from '../components/home/HomeMiniContactCTA';

export function HomePage() {
  return (
    <>
      <AnimatedSection>
        <HomeHero />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <HomeAboutPreview />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <HomeFeaturedTrainings />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <HomeFeaturedProducts />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <HomeSolutionsTeaser />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <HomeTestimonials />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <HomeMiniContactCTA />
      </AnimatedSection>
    </>
  );
}
