import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Depoimentos = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Maria Silva",
      age: "45 anos",
      condition: "Fadiga Crônica",
      text: "Após anos sofrendo com fadiga constante, finalmente encontrei na Dra. Priscilla uma médica que olhou para mim como um todo. Sua abordagem integrativa mudou completamente minha qualidade de vida.",
      rating: 5,
      improvement: "90% de melhora na energia"
    },
    {
      name: "Carlos Mendes",
      age: "52 anos", 
      condition: "Diabetes e Hipertensão",
      text: "A Dra. Priscilla me ajudou não apenas a controlar minha diabetes, mas a entender as causas emocionais por trás dos meus hábitos. Hoje me sinto mais saudável do que aos 40 anos.",
      rating: 5,
      improvement: "HbA1c normalizada"
    },
    {
      name: "Ana Costa",
      age: "38 anos",
      condition: "Ansiedade e Insônia", 
      text: "O tratamento integrativo da Dra. Priscilla transformou minha relação com a ansiedade. Ela me ensinou técnicas que uso até hoje e finalmente consigo dormir bem.",
      rating: 5,
      improvement: "8h de sono reparador"
    }
  ];

  const stats = [
    { number: "95%", label: "Taxa de Sucesso no Tratamento", description: "dos pacientes reportam melhora significativa" },
    { number: "87%", label: "Redução dos Sintomas", description: "em média nos primeiros 3 meses" },
    { number: "92%", label: "Satisfação dos Pacientes", description: "recomendam para familiares e amigos" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }),
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="depoimentos" 
      className="py-24 lg:py-32 bg-gradient-to-br from-orange-flame/5 via-white to-navy-blue/8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-flame/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-blue/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-happy-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} custom={0} className="text-center mb-20">
            <motion.div 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 backdrop-blur-sm rounded-full mb-6 border border-orange-flame/20"
            >
              <div className="w-2 h-2 bg-orange-flame rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">Transformações que Inspiram</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                Histórias de Sucesso
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-3xl mx-auto leading-relaxed">
              Conheça as transformações reais de pessoas que escolheram uma abordagem integrativa para sua saúde
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={fadeInUp} 
            custom={1}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-flame/10 hover:border-orange-flame/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-orange-flame/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-orange-flame fill-current" 
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-navy-blue/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Patient Info */}
                <div className="space-y-3">
                  <div className="border-t border-navy-blue/10 pt-4">
                    <h4 className="font-bold text-navy-blue">{testimonial.name}</h4>
                    <p className="text-sm text-navy-blue/60">{testimonial.age} • {testimonial.condition}</p>
                  </div>
                  
                  <div className="bg-orange-flame/10 rounded-2xl p-3">
                    <p className="text-sm font-medium text-orange-flame">
                      ✓ {testimonial.improvement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={fadeInUp} custom={2}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
                Resultados Comprovados
              </h3>
              <p className="text-lg text-navy-blue/70 max-w-2xl mx-auto">
                Números que refletem o compromisso com a excelência no cuidado
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-flame/10 via-orange-flame/5 to-navy-blue/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-orange-flame/20">
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-orange-flame mb-2">
                      {stat.number}
                    </div>
                    <h4 className="text-lg font-bold text-navy-blue mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-navy-blue/60 text-sm">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={fadeInUp} 
            custom={3}
            className="text-center mt-16"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-flame/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Sua Transformação Começa Agora
              </h3>
              
              <p className="text-lg text-navy-blue/70 mb-8 max-w-2xl mx-auto">
                Junte-se a centenas de pessoas que já transformaram suas vidas com uma abordagem verdadeiramente integrativa
              </p>

              <motion.a
                href="https://wa.me/5511963145317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-flame to-orange-flame/80 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Iniciar Minha Jornada
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Depoimentos; 