"use client";

import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex relative flex-col gap-8 justify-center items-center w-full h-[100dvh] px-sides">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="manifesto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: DURATION, ease: EASE_OUT } }}
            transition={{ duration: DURATION, ease: EASE_OUT, delay: DELAY }}
            className="relative flex flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-border/20 bg-background/50 max-w-4xl text-foreground rounded-3xl shadow-lg p-8 sm:p-12"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <Cross1Icon className="size-6" />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-3xl font-semibold text-primary mb-4">Vizyonumuz</h3>
                <p className="text-lg text-muted-foreground">
                  İleri teknolojiyi herkes için günlük yaşamın doğal ve zahmetsiz bir parçası haline getirmek; insan potansiyelini en üst düzeye çıkaran dijital deneyimler yaratmada dünyaya öncülük etmektir.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-primary mb-4">Misyonumuz</h3>
                <p className="text-lg text-muted-foreground">
                  Gerçek dünya problemlerini çözen sezgisel mobil uygulamalar ve akıllı yapay zeka asistanları geliştirmek. Ekip çalışması, sarsılmaz bir yaratıcılık ve inovasyon tutkusuyla, en karmaşık zorlukları bile basit, zarif ve güçlü çözümlere dönüştürmeye kararlıyız.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center gap-8"
          >
            <h1 className="text-6xl sm:text-8xl lg:text-9xl text-foreground font-semibold">
              Bit3Tech
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-pretty max-w-3xl text-muted-foreground">
              Yenilikçi yazılım çözümleri ve yapay zeka destekli uygulamalarla geleceği bugünden inşa ediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#about">
                <Button size="lg" className="py-7 px-8 text-lg" shine>
                  Bizimle Geleceğe Yolculuğa Başla
                </Button>
              </a>
            <Button size="lg" className="py-7 px-8 text-lg" onClick={() => setIsOpen(true)}>
              Manifestomuz
            </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};