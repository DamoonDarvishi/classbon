import Image from "next/image";
import type { FeatureProps } from "./feature.types";

const Feature: React.FC<FeatureProps> = ({
  feature: { icon, title, description },
}) => {
  return (
    <article className="flex-1 flex flex-col items-center lg:items-start gap-4">
      <Image src={icon} width={52} height={52} alt="" />
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="max-w-md text-sm text-center lg:text-left ">
        {description}
      </p>
    </article>
  );
};

export default Feature;
