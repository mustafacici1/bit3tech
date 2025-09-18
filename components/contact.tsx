"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Toaster, toast } from "./ui/sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-32">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Bize Ulaşın
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Bir projeniz mi var veya sadece bir merhaba mı demek istiyorsunuz? Sizden haber almak için sabırsızlanıyoruz.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input 
              type="text" 
              name="name"
              placeholder="Adınız" 
              className="py-6" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input 
              type="email" 
              name="email"
              placeholder="E-posta Adresiniz" 
              className="py-6" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea 
              name="message"
              placeholder="Mesajınız" 
              rows={6} 
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="py-6 text-lg" disabled={isSubmitting}>
              {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
            </Button>
          </form>
          <div className="mt-12 text-center text-muted-foreground">
            <p>veya bize doğrudan e-posta gönderin: <a href="mailto:yazilim@bit3tech.com" className="text-primary hover:underline">yazilim@bit3tech.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};