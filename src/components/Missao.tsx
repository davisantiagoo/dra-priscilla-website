import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart } from 'lucide-react';

const Missao = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-orange-flame to-orange-flame/80 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-happy-yellow/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30"
          >
            <Heart className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white tracking-wide">Nossa Missão</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
          >
            Missão
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl text-white/95 leading-relaxed italic text-left">
                "Minha missão é ser a profissional que te acompanha ao longo de todas as suas fases, lhe auxiliando a atingir seus objetivos de forma saudável e sustentada, através de uma abordagem focada em PERFORMANCE E RESULTADOS."
              </blockquote>
            </div>
            
            <div className="text-right border-t border-white/20 pt-6">
              <p className="text-white font-bold text-lg">
                Dra. Priscilla Almeida
              </p>
              <p className="text-white/80 text-sm">
                Saúde da Mulher – Estilo de Vida & Longevidade
              </p>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Humanização",
                description: "Cada paciente é único e merece cuidado personalizado"
              },
              {
                title: "Personalização",
                description: "Cada tratamento é adaptado para as necessidades individuais"
              },
              {
                title: "Excelência",
                description: "Comprometimento com os mais altos padrões de qualidade"
              }
            ].map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {valor.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Missao; 