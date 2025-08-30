import logoImage from "@assets/Untitled - 10 July 2025 17.39_1756559401583.jpeg";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className="flex items-center" data-testid="logo">
      <img 
        src={logoImage}
        alt="S Senior Safety Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <span className={`ml-3 ${textSizes[size]} font-bold text-foreground`}>
          S Senior Safety
        </span>
      )}
    </div>
  );
}
