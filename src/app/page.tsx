import { Suspense } from "react";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { homeFeatures } from "@/data/home-features";
import Feature from "./_components/feature/feature";
import { Button } from "./_components/button";
import { IconArrowRight } from "./_components/icons/icons";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { BlogPostCardList } from "./(blog)/_components/blog-post-card-list";
import { API_URL } from "@/configs/global";
import { CardPlaceholder } from "./_components/placehorders/card/card-placeholder";
import { TestimonialList } from "./_components/testimonial/testimonial-list";
import { testimonials } from "@/data/testimonials";

async function getNewestPosts(count: number): Promise<BlogPostSummary[]> {
  const res = await fetch(`${API_URL}/blog/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  return res.json();
}

export default async function Home() {
  const newestBlogPostsData = getNewestPosts(4);

  const [newestBlogPosts] = await Promise.all([newestBlogPostsData]);
  return (
    <>
      <HomeHeroSection />
      <section className="dark:bg-base-75 mt-10">
        <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5 ">
          {homeFeatures.map((feature) => (
            <Feature key={`feature-${feature.title}`} feature={feature} />
          ))}
        </div>
      </section>

      <section className="container pt-20">
        <div className="text-center xl:text-left">
          <h1 className="text-2xl font-extrabold">
            Newest Educational Courses
          </h1>
          <p>
            Staying up-to-date with the latest educational tips is essential!
          </p>
        </div>
        <Suspense fallback={<CardPlaceholder count={4} className="mt-5" />}>
          <CourseCardList />
        </Suspense>
      </section>
      <section className="px-2 my-40">
        {/* <div className="sticky top-0 pt-0 text-center"> */}
        <div className="relative pt-0 text-center">
          <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

          <h2
            lang="en"
            className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
          >
            ReactJs & Next.js
          </h2>
          <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
            React and Next.js are the top front-end libraries and the leaders of
            the web world! Here, you can find the most advanced topics. So,
            start learning right now. We are with you from the beginning of the
            journey with specialized and fully practical training.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
            <Button
              variant="primary"
              size="normal"
              className="mt-7"
              animatedIcon={true}
            >
              Frontend Courses
              <IconArrowRight fill="currentColor" />
            </Button>
            <Button
              variant="neutral"
              size="normal"
              className="mt-7"
              animatedIcon={true}
            >
              Programming Consultation
            </Button>
          </div>
        </div>
      </section>
      <section className="container py-20">
        <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
          <div className="text-center xl:text-left">
            <h2 className="text-2xl font-extrabold">
              Latest Educational Articles
            </h2>
            <p className="mt-3 text-lg">
              We provide you with the latest articles in the tech world for free
              because your progress matters to us!
            </p>
          </div>
          <Button
            variant="neutral"
            className="font-semibold"
            animatedIcon={true}
          >
            All Articles <IconArrowRight fill="currentColor" />
          </Button>
        </div>
        <BlogPostCardList posts={newestBlogPosts} />
      </section>
      <div className="relative mt-32">
        <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>
        <h2 className="text-info relative z-0 mx-auto text-3xl font-extrabold block w-fit">
          <span className="-z-10 w-8 h-8 absolute bg-info opacity-25 -top-2 rounded-full inline-block -right-3"></span>
          Experiences of Classbon Companions
        </h2>
        <p className="mb-32 text-lg text-center mt-2">
          You are not alone here. See what your companions think about Classbon
          courses.
        </p>
        <TestimonialList testimonials={testimonials} />
      </div>
    </>
  );
}
