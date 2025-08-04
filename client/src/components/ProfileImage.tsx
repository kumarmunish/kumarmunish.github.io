import originalImage from "@assets/image_1752488916922.webp";

interface ProfileImageProps {
  className?: string;
  alt?: string;
}

export default function ProfileImage({ className = "", alt = "Munish Kumar - Site Reliability Engineer" }: ProfileImageProps) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded-full ${className}`}>
      <img 
        src={originalImage}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-center rounded-full"
        style={{ 
          aspectRatio: "1 / 1",
          transform: "scale(1.3)",
          transformOrigin: "center center"
        }}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-500/5 pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-blue-400/20 pointer-events-none"></div>
    </div>
  );
}