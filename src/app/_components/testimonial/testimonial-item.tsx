import Image from "next/image";
import { TestimonialProps } from "./testimonial.types";

const TestimonialItem: React.FC<TestimonialProps> = ({
  testimonial: { image, name, skills, description },
}) => {
  return (
    <div className="border-base-content/5 border p-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          width="48"
          height="48"
          className="pointer-events-none rounded-full grayscale"
        />
        <div className="flex flex-col items-start font-semibold">
          <div className="text-info/80 text-md">{name}</div>
          <div className="text-base-content/60 text-sm">{skills}</div>
        </div>
      </div>
      <p className="mt-3 leading-6 text-xs">{description}</p>
    </div>
  );
};

export default TestimonialItem;
