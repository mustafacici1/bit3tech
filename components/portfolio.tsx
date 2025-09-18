"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Proje Adı 1",
    description: "Yapay zeka tabanlı bir veri analizi platformu.",
    image: "/landscape.png",
    link: "#",
  },
  {
    title: "Proje Adı 2",
    description: "Milyonlarca kullanıcıya hizmet veren bir mobil uygulama.",
    image: "/default-placeholder.png",
    link: "#",
  },
  {
    title: "Proje Adı 3",
    description: "Kurumsal bir şirket için özel yazılım çözümü.",
    image: "/landscape.png",
    link: "#",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Çalışmalarımız
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Gurur duyduğumuz ve başarıya ulaştırdığımız bazı projeler.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.title}
              className="border border-border/20 rounded-lg overflow-hidden bg-background/50 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-md text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
