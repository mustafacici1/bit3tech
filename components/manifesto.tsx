"use client";

import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section id="manifesto" className="w-full py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Manifestomuz
          </h2>
        </motion.div>

        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-foreground mb-4">Vizyonumuz</h3>
            <p className="text-lg text-muted-foreground">
              İleri teknolojiyi herkes için günlük yaşamın doğal ve zahmetsiz bir parçası haline getirmek; insan potansiyelini en üst düzeye çıkaran dijital deneyimler yaratmada dünyaya öncülük etmektir.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-foreground mb-4">Misyonumuz</h3>
            <p className="text-lg text-muted-foreground">
              Gerçek dünya problemlerini çözen sezgisel mobil uygulamalar ve akıllı yapay zeka asistanları geliştirmek. Ekip çalışması, sarsılmaz bir yaratıcılık ve inovasyon tutkusuyla, en karmaşık zorlukları bile basit, zarif ve güçlü çözümlere dönüştürmeye kararlıyız.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
