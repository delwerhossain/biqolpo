export function Wordmark({
  size = "md",
  invert = false,
}: {
  size?: "sm" | "md" | "lg" | "xl" | "display";
  invert?: boolean;
}) {
  const dims = {
    sm: { w: 110, h: 28 },
    md: { w: 140, h: 36 },
    lg: { w: 240, h: 60 },
    xl: { w: 720, h: 180 },
    display: { w: 2880, h: 720 },
  } as const;
  const { w, h } = dims[size];

  return (
    <span
      role="img"
      aria-label="biqolpo"
      className="inline-block align-middle"
      style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundImage: "url('/biqolpo-watermark-v2.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 51%",
        backgroundSize: "auto 380%",
        filter: invert ? "invert(1)" : "none",
      }}
    />
  );
}
