import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <article
      className={`inline-flex flex-col gap-1.5 items-start p-3 bg-white rounded-xl w-[348px] max-md:w-[90%] max-sm:w-full ${className}`}
    >
      {icon && <div>{icon}</div>}
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-medium leading-6 text-sky-800 max-sm:text-lg">
          {title}
        </h2>
        <p className="text-base leading-6 text-zinc-900 text-opacity-80 max-sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
};
