import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GradientText({
  children,
  className = "",
  colors = ["#A8DADC", "#457B9D", "#1D3557"],
  duration = 6,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const animation = gsap.to(el, {
      backgroundPosition: "200% center",
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => animation.kill();
  }, [duration]);

  return (
    <span
      ref={textRef}
      className={`inline-block text-transparent bg-clip-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </span>
  );
}
