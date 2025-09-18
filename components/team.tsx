"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mustafa Cici",
    role: " Kurucu Ortak",
    avatar: "/mustafa.jpg",
  },
  {
    name: "Yüksel Karcı",
    role: " Kurucu Ortak",
    avatar: "/yüksel.jpg",
  },
  {
    name: "Emirhan Doğan",
    role: " Kurucu Ortak",
    avatar: "/emirhan.jpg",
  },
];

export const Team = () => {
  return (
    <section id="team" className="w-full py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Takımımız
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Başarımızın arkasındaki yaratıcı ve tutkulu insanlar.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-md text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
