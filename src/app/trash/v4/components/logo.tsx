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
  const dims = {
    sm: { w: 90, h: 28 },
    md: { w: 120, h: 36 },
    lg: { w: 170, h: 50 },
  } as const;
  const { w, h } = dims[size];

  return (
    <Image
      src="/biqolpo-watermark-v2.png"
      alt="biqolpo"
      width={w}
      height={h}
      priority
      className={`object-contain ${invert ? "invert" : ""} ${className}`}
      style={{ width: w, height: "auto" }}
    />
  );
}
