"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Bit3Tech Nedir?
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Biz, teknolojiye tutkun üç arkadaşın kurduğu, yenilikçi ve kullanıcı odaklı çözümler üreten bir yazılım firmasıyız. Misyonumuz, karmaşık problemleri basit ve zarif arayüzlerle çözerek, yapay zeka ve mobil teknolojiler alanında sınırları zorlamaktır. Müşterilerimizin hayallerini dijital ürünlere dönüştürerek onların başarısına ortak oluyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
