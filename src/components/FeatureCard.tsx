
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className = "",
  iconClassName = ""
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "relative group p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300",
      className
    )}>
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-strk-teal/10 text-strk-teal-dark group-hover:bg-strk-teal group-hover:text-white transition-colors",
        iconClassName
      )}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-strk-gray-dark">{title}</h3>
      <p className="text-strk-gray-dark/80 text-sm">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-strk-teal to-strk-purple w-0 group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export default FeatureCard;
