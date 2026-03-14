"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEFAULT_TITLES = ["Make money", "Increase Reach", "Scale Smarter", "Save Time"];

export interface AnimatedHeroProps {
  /** Rotating titles (default: Make money, Increase Reach, Scale Smarter, Save Time) */
  titles?: string[];
  /** Text before the rotating word */
  prefix?: string;
  /** Text after the rotating word */
  suffix?: string;
  /** Subheadline below the title */
  subheadline?: string;
  /** Show secondary CTA row (launch article, call, signup) */
  showCtaButtons?: boolean;
  launchArticleHref?: string;
  jumpOnCallHref?: string;
  signupHref?: string;
}

function AnimatedHero({
  titles = DEFAULT_TITLES,
  prefix = "Your ads should ",
  suffix = "not burn it.",
  subheadline = "The AI advertising engine that unifies Google, Meta & OTA campaigns into one system — then optimizes every dollar while you sleep.",
  showCtaButtons = false,
  launchArticleHref = "/blog",
  jumpOnCallHref = "/book-demo",
  signupHref = "/signup",
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titlesList = useMemo(() => titles, [titles]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titlesList.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titlesList.length]);

  return (
    <div className="w-full">
      <div className="flex gap-4 flex-col">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.03em] break-words text-center"
        >
          <span className="block">{prefix}</span>
          <span className="relative block overflow-hidden min-h-[1.2em] text-center">
            {titlesList.map((title, index) => (
              <motion.span
                key={index}
                className="absolute left-1/2 top-0 -translate-x-1/2 w-full whitespace-nowrap font-semibold text-royal-green-500 bg-clip-text text-transparent bg-gradient-to-r from-royal-green-600 to-royal-green-500"
                initial={{ opacity: 0, y: "-100%" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
          {suffix ? <span className="block font-bold text-[var(--text-primary)]">{suffix}</span> : null}
        </h1>

        {subheadline && (
          <p className="text-lg sm:text-xl font-medium text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed text-center">
            {subheadline}
          </p>
        )}

        {showCtaButtons && (
          <div className="flex flex-row flex-wrap gap-3 justify-center">
            <Button variant="secondary" size="sm" className="gap-2" asChild>
              <a href={launchArticleHref}>
                Read our launch article <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-2" variant="outline" asChild>
              <a href={jumpOnCallHref}>
                Jump on a call <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-2" asChild>
              <a href={signupHref}>
                Sign up here <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export { AnimatedHero, DEFAULT_TITLES };

/** Demo wrapper for standalone use (e.g. demo page). */
export function HeroDemo() {
  return (
    <div className="block py-20">
      <AnimatedHero
        titles={DEFAULT_TITLES}
        showCtaButtons
        launchArticleHref="/blog"
        jumpOnCallHref="/book-demo"
        signupHref="/signup"
      />
    </div>
  );
}
