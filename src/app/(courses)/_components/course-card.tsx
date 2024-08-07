import { Badge } from "@/app/_components/badge";
import { IconArrowRight, IconClock } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price/price";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourseSummary & {};

export const CourseCard: React.FC<CourseCardProps> = ({
  level,
  title,
  subTitle,
  recordStatus,
  basePrice,
  duration,
  slug,
  img,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image src={img} alt={title} width={400} height={327} />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/courses/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between mt-3">
          <Badge variant="warning">
            <IconClock width={16} height={16} stroke="red" />
            {duration}
          </Badge>
          <Price price={basePrice} size="small" />
        </div>
      </div>
      <Link
        href={`/courses/${slug}`}
        className="card-footer justify-center animated-icon"
      >
        View Courses
        <IconArrowRight fill="currentColor" />
      </Link>
    </div>
  );
};
