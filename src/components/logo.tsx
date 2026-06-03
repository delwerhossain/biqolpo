import Image from "next/image";

export function Logo({
  size = "md",
  invert = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
  className?: string;
}) {
  // Source art is 5948 × 1720 → aspect ratio ≈ 3.458 : 1
  const dims = {
    sm: { w: 97, h: 28 },
    md: { w: 124, h: 36 },
    lg: { w: 173, h: 50 },
  } as const;
  const { w, h } = dims[size];

  return (
    <Image
      src={invert ? "/biqolpo-white.png" : "/biqolpo-main.png"}
      alt="biqolpo"
      width={w}
      height={h}
      priority
      className={`object-contain ${className}`}
      style={{ width: w, height: "auto" }}
    />
  );
}
