import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={`shadow p-4 rounded-lg bg-white ${className} `}>
      {children}
    </div>
  );
};

export default Card;
