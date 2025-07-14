import originalImage from "@assets/image_1752488916922.png";

interface ProfileImageProps {
  className?: string;
  alt?: string;
}

export default function ProfileImage({ className = "", alt = "Munish Kumar - Site Reliability Engineer" }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <img 
        src={originalImage}
        alt={alt}
        className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/30"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-500/5"></div>
      <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-blue-400/20"></div>
    </div>
  );
}