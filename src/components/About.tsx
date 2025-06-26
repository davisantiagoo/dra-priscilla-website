import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About = () => {
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

  const specialties = [
    {
      icon: Target,
      title: "Medicina Integrativa",
      description: "Abordagem holística combinando medicina tradicional e terapias complementares"
    },
    {
      icon: Award,
      title: "Medicina Preventiva", 
      description: "Foco na prevenção e promoção de hábitos saudáveis para longevidade"
    },
    {
      icon: Users,
      title: "Medicina Personalizada",
      description: "Tratamentos individualizados baseados no perfil único de cada paciente"
    },
    {
      icon: GraduationCap,
      title: "Formação Continuada",
      description: "Atualização constante em técnicas inovadoras e evidências científicas"
    }
  ];

  const achievements = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "2000+", label: "Pacientes Atendidos" },
    { number: "98%", label: "Satisfação" },
    { number: "5.0", label: "Avaliação" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-orange-flame/5 via-white to-navy-blue/5 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-flame/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-blue/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-happy-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} custom={0} className="text-center mb-20">
            <motion.div 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 backdrop-blur-sm rounded-full mb-6 border border-orange-flame/20"
            >
              <div className="w-2 h-2 bg-orange-flame rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">Conheça a Doutora</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                Dra. Priscilla Almeida
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-3xl mx-auto leading-relaxed">
              Sua Parceira na Jornada para a Excelência em Saúde e Longevidade
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
            
            {/* Text Content */}
            <motion.div variants={fadeInUp} custom={1} className="space-y-6">
              
              {/* Jornada Profissional */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-flame/10">
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  Jornada Profissional
                </h3>
                <p className="text-navy-blue/70 leading-relaxed">
                  Formada em Medicina pela renomada universidade, Dra. Priscilla iniciou sua 
                  carreira na Anestesiologia, onde desenvolveu expertise em controle da dor e 
                  manejo de ansiedade.
                </p>
              </div>

              {/* Descoberta da Medicina do Esporte */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-flame/10">
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  Descoberta da Medicina do Esporte
                </h3>
                <p className="text-navy-blue/70 leading-relaxed">
                  A paixão pelo movimento e pela otimização da performance a levou à 
                  especialização em Medicina do Esporte. Aqui, descobriu como o corpo e a mente 
                  trabalham em sinergia.
                </p>
              </div>

              {/* Dimensão Psicanalítica */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-flame/10">
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  Dimensão Psicanalítica
                </h3>
                <p className="text-navy-blue/70 leading-relaxed">
                  Reconhecendo que os aspectos psicológicos são fundamentais para a saúde 
                  integral, aprofundou-se na Psicanálise, compreendendo como padrões 
                  inconscientes influenciam comportamentos.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-orange-flame/10"
                  >
                    <div className="text-2xl font-bold text-orange-flame mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-navy-blue/60 uppercase tracking-wider">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Image Section */}
            <motion.div 
              variants={fadeInUp}
              custom={2}
              className="relative"
            >
              <div className="relative">
                {/* Background gradient effect */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -inset-4 bg-gradient-to-br from-orange-flame/10 via-happy-yellow/8 to-navy-blue/10 rounded-3xl blur-2xl"
                />
                
                {/* Main image container */}
                <div className="relative">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src="/Imagens Dra/JeanPauloFotografia (107 de 118) Grande.jpeg"
                      alt="Dra. Priscilla Almeida - Medicina Integrativa"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectPosition: '50% 20%',
                        filter: 'contrast(1.05) saturate(1.1)'
                      }}
                    />
                    
                    {/* Elegant overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 via-transparent to-orange-flame/5" />
                  </motion.div>

                  {/* Floating info card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-8 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-orange-flame/20 min-w-[240px]"
                  >
                    <div className="text-center space-y-2">
                      <h4 className="font-bold text-navy-blue">Formação USP</h4>
                      <p className="text-sm text-navy-blue/60">
                        Medicina Integrativa & Longevidade
                      </p>
                      <div className="pt-2 border-t border-navy-blue/10">
                        <span className="text-xs text-orange-flame font-medium">CRM 123456-SP</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 w-20 h-20 bg-gradient-to-br from-orange-flame/20 to-happy-yellow/15 rounded-full blur-xl"
                />
                
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-8 w-16 h-16 bg-gradient-to-br from-navy-blue/20 to-orange-flame/15 rounded-full blur-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Specialties Grid */}
          <motion.div variants={fadeInUp} custom={3}>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
                Áreas de Especialização
              </h3>
              <p className="text-lg text-navy-blue/70 max-w-2xl mx-auto">
                Uma abordagem completa que integra diferentes especialidades médicas 
                em benefício da sua saúde integral
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-orange-flame/10 hover:border-orange-flame/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-flame/10 to-navy-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <specialty.icon className="w-8 h-8 text-orange-flame" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-navy-blue mb-3">
                    {specialty.title}
                  </h4>
                  
                  <p className="text-navy-blue/60 leading-relaxed">
                    {specialty.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 