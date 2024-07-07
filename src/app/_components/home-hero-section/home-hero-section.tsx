import Image from "next/image";
import { Button } from "../button";
import { IconArrowRight } from "../icons/icons";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-left">
          <h3 className="text-xl dark:text-info xl-text-2xl">Welcome to ...</h3>
          <h1 className="text-3xl font-black gradient lg:text-2xl xl:text-3xl">
            The Path to Progressing Through Programming Courses
          </h1>
          <p className="text-lg font-medium leading-8">
            No matter where you are in your programming journey, with the
            support of experienced Classbon instructors, you can climb to higher
            peaks without limitations. We always have your back.
          </p>
          <div className="justify-center xl:justify-start mt-5 flex gap-4">
            <Button variant="primary" size="normal">
              Frontend Courses <IconArrowRight fill="currentColor" />
            </Button>
            <Button variant="neutral" size="normal">
              Programming Consultation{" "}
            </Button>
          </div>
          <Image
            src="/images/frameworks.png"
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            width={412}
            height={39}
            alt="online class"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          width={702}
          height={521}
          alt="online class"
        />
      </div>
    </section>
  );
};
