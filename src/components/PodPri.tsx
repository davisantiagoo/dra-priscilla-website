import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Youtube } from 'lucide-react';

const PodPri = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      id="podcast" 
      className="py-24 lg:py-32 bg-gradient-to-br from-navy-blue/5 via-white to-orange-flame/5 relative overflow-hidden"
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
          className="max-w-6xl mx-auto"
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
              <span className="text-sm font-medium text-navy-blue tracking-wide">Conteúdo Exclusivo</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                PodPri
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-3xl mx-auto leading-relaxed">
              Conteúdo exclusivo sobre performance, longevidade e bem-estar. 
              Transforme sua relação com a saúde através do conhecimento.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            variants={fadeInUp} 
            custom={1}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            
            {/* Video Preview */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-blue/20 to-orange-flame/20"
              >
                {/* Placeholder for video thumbnail */}
                <div className="w-full h-full bg-gradient-to-br from-navy-blue to-navy-blue/80 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-orange-flame rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/40 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-flame/20">
                  <span className="text-sm font-medium text-navy-blue">Novo Episódio</span>
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-orange-flame/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-flame mb-1">50+</div>
                  <div className="text-sm text-navy-blue/60">Episódios</div>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <motion.div variants={fadeInUp} custom={2}>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                  Conhecimento que Transforma
                </h3>
                
                <div className="space-y-6 text-navy-blue/70 leading-relaxed">
                  <p className="text-lg">
                    No PodPri, compartilho insights valiosos sobre performance e saúde, 
                    hábitos de longevidade e estratégias práticas para otimizar sua saúde.
                  </p>
                  
                  <p className="text-lg">
                    Cada episódio é cuidadosamente elaborado para oferecer conteúdo 
                    científico de qualidade de forma acessível e aplicável no seu dia a dia.
                  </p>
                </div>
              </motion.div>

              {/* Topics */}
              <motion.div variants={fadeInUp} custom={3}>
                <h4 className="text-xl font-bold text-navy-blue mb-4">
                  Temas Abordados:
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Longevidade Saudável",
                    "Medicina Preventiva", 
                    "Nutrição Funcional",
                    "Saúde Mental",
                    "Hormônios & Bem-estar",
                    "Medicina do Esporte"
                  ].map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-orange-flame/10"
                    >
                      <div className="w-2 h-2 bg-orange-flame rounded-full" />
                      <span className="text-navy-blue font-medium text-sm">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeInUp} custom={4}>
                <motion.a
                  href="https://www.youtube.com/channel/UCCxIDg6rrI9aTh72ZycTDRw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-flame to-orange-flame/80 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Youtube className="w-5 h-5" />
                  Assistir no YouTube
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodPri; 