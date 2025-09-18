"use client";

import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { FormNewsletter } from "./form-newsletter";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { inputVariants } from "./ui/input";
import { useIsV0 } from "@/lib/context";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
};

export const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isInitialRender = useRef(true);

  useEffect(() => {
    return () => {
      isInitialRender.current = false;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8">
      <motion.div
        layout="position"
        transition={{ duration: DURATION, ease: EASE_OUT }}
      >
        <h1 className="text-6xl short:lg:text-8xl sm:text-8xl lg:text-9xl text-foreground font-semibold">
          Bit3Tech
        </h1>
      </motion.div>

      <div className="flex flex-col items-center min-h-0 shrink">
        <AnimatePresenceGuard>
          {!isOpen && (
            <motion.div
              key="newsletter"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: -150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
              }}
            >
              <Button
                className={cn("relative px-8 py-6 text-lg")}
                onClick={() => setIsOpen(true)}
                shine
              >
                Bizimle Yolculuğa Başla
              </Button>
            </motion.div>
          )}

          <motion.div
            layout="position"
            transition={SPRING}
            key="button"
            className={isOpen ? "my-6" : "mt-6"}
          >
            <Button
              className={cn("relative px-8")}
              onClick={() => setIsOpen(!isOpen)}
              shine={!isOpen}
            >
              <motion.span
                animate={{ x: isOpen ? -16 : 0 }}
                transition={{ duration: DURATION, ease: EASE_OUT }}
                className="inline-block"
              >
                Manifesto
              </motion.span>

              {isOpen && (
                <motion.div
                  className={cn(
                    buttonVariants({ variant: "iconButton", size: "icon" }),
                    "absolute -top-px -right-px aspect-square"
                  )}
                  initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                >
                  <Cross1Icon className="size-5 text-primary-foreground" />
                </motion.div>
              )}
            </Button>
          </motion.div>

          {isOpen && (
            <motion.div
              key="manifesto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
              className="relative flex min-h-0 flex-shrink overflow-hidden text-sm md:text-base max-h-[calc(70dvh-var(--footer-safe-area))] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-border/50 bg-primary/20 max-w-3xl text-foreground rounded-3xl ring-1 ring-offset-primary/10 ring-border/10 ring-offset-2 shadow-button"
            >
              <article className="relative overflow-y-auto p-8 h-full text-left">
                <h3 className="text-2xl font-semibold text-center mb-4">Vizyonumuz</h3>
                <p className="mb-6 text-center">
                  İleri teknolojiyi herkes için günlük yaşamın doğal ve zahmetsiz bir parçası haline getirmek; insan potansiyelini en üst düzeye çıkaran dijital deneyimler yaratmada dünyaya öncülük etmektir.
                </p>

                <h3 className="text-2xl font-semibold text-center mb-4">Misyonumuz</h3>
                <p className="text-center">
                  Gerçek dünya problemlerini çözen sezgisel mobil uygulamalar ve akıllı yapay zeka asistanları geliştirmek. Ekip çalışması, sarsılmaz bir yaratıcılık ve inovasyon tutkusuyla, en karmaşık zorlukları bile basit, zarif ve güçlü çözümlere dönüştürmeye kararlıyız.
                </p>
              </article>
            </motion.div>
          )}
        </AnimatePresenceGuard>
      </div>
    </div>
  );
};

const AnimatePresenceGuard = ({ children }: { children: React.ReactNode }) => {
  const isV0 = useIsV0();

  return isV0 ? <>{children}</> : <AnimatePresence mode="popLayout" propagate>{children}</AnimatePresence>;
};
