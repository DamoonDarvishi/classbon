// "use client"
import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";
import { courses } from "@/data/courses";

// async function getNewestCourses(count: number): Promise<CourseSummary[]> {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const res = await fetch(`${API_URL}/courses/newest/${count}`, {
//     cache: "no-store",
//     next: {
//       revalidate: 0,
//     },
//   });
//   return res.json();
// }

export const CourseCardList: React.FC = () => {
  // const newestCoursesData = await getNewestCourses(4);
  const newestCoursesData = courses;
  return (
    <div className="flex flex-wrap justify-between gap-8 mt-10">
      {newestCoursesData.map((course) => {
        return <CourseCard key={`course-${course.slug}`} {...course} />;
      })}
    </div>
  );
};
