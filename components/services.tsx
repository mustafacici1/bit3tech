"use client";

import { motion } from "framer-motion";
import { CodeIcon, RocketIcon, Share2Icon } from "@radix-ui/react-icons";

const services = [
  {
    icon: <RocketIcon className="w-10 h-10 text-primary" />,
    title: "Yapay Zeka Çözümleri",
    description: "İş süreçlerinizi otomatize eden ve verimliliği artıran akıllı yapay zeka asistanları ve sistemleri geliştiriyoruz.",
  },
  {
    icon: <CodeIcon className="w-10 h-10 text-primary" />,
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformları için kullanıcı dostu, performanslı ve ölçeklenebilir mobil uygulamalar tasarlıyoruz.",
  },
  {
    icon: <Share2Icon className="w-10 h-10 text-primary" />,
    title: "Yazılım Danışmanlığı",
    description: "Teknoloji stratejinizi belirlemenize, doğru araçları seçmenize ve projenizi başarıya ulaştırmanıza yardımcı oluyoruz.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Neler Yapıyoruz?
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Fikirden ürüne, dijital dönüşüm yolculuğunuzun her adımında yanınızdayız.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="flex flex-col items-center text-center p-8 border border-border/20 rounded-lg bg-background/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-md text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
