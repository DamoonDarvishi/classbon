import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { IconClock } from "./_components/icons/icons";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60
    }
  });
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
      <div className="text-center xl:text-right">
        <h1 className="text-2xl text-extrabold">
          تازه ترین دوره های آموزشی
        </h1>
        <p>
          برای بروز موندن تازه ترین نکته های آموزشی ضروریه!
        </p>
      </div>
      <CourseCardList courses={newestCourses} />
      </section>
    </>
  )
}