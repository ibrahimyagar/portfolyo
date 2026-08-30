import React from "react";
import {Fade, Slide} from "react-reveal";
import useIsMobile from "../../hooks/useIsMobile";

/**
 * Keeps reveal animations, but softens entrance on mobile:
 * no side slides, shorter travel, shorter duration, capped stagger.
 */
export default function ScrollReveal({
  children,
  effect = "fade",
  left,
  right,
  top,
  bottom,
  duration = 1000,
  distance = "20px",
  delay = 0,
  ...rest
}) {
  const isMobile = useIsMobile();
  const Reveal = effect === "slide" ? Slide : Fade;

  if (isMobile) {
    return (
      <Reveal
        bottom
        duration={Math.min(Math.round(duration * 0.6), 650)}
        distance="12px"
        delay={Math.min(delay, 100)}
        {...rest}
      >
        {children}
      </Reveal>
    );
  }

  return (
    <Reveal
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      duration={duration}
      distance={distance}
      delay={delay}
      {...rest}
    >
      {children}
    </Reveal>
  );
}
