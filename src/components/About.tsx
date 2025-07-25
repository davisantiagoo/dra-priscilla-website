import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Users, Target, Stethoscope, Brain } from 'lucide-react';

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
      title: "Medicina do Esporte",
      description: "Especialização focada em performance, hipertrofia, emagrecimento e prevenção de lesões"
    },
    {
      icon: Stethoscope,
      title: "Anestesiologia", 
      description: "Mais de 10 anos de experiência em controle da dor e manejo de ansiedade"
    },
    {
      icon: Brain,
      title: "Psicanálise",
      description: "Compreensão profunda dos aspectos psicológicos que influenciam a saúde integral"
    },
    {
      icon: Award,
      title: "MBA em Gestão de Saúde",
      description: "Visão corporativa da medicina com foco em efetividade e sustentabilidade"
    }
  ];

  const achievements = [
    { number: "10+", label: "Anos em Anestesiologia" },
    { number: "2000+", label: "Pacientes Atendidos" },
    { number: "98%", label: "Satisfação" },
    { number: "UNIFESP", label: "Formação" },
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
              Médica do Esporte, Saúde da Mulher e Performance
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
            
            {/* Text Content */}
            <motion.div variants={fadeInUp} custom={1} className="space-y-6">
              
              {/* Formação */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-flame/10">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-orange-flame" />
                  <h3 className="text-xl font-bold text-navy-blue">
                    Formação Médica
                  </h3>
                </div>
                <p className="text-navy-blue/70 leading-relaxed mb-3">
                  <strong>Graduada em Medicina</strong> pela Escola Paulista de Medicina (Universidade Federal de São Paulo - UNIFESP)
                </p>
                <p className="text-navy-blue/70 leading-relaxed">
                  <strong>Especialização em Anestesiologia</strong> - Mais de 10 anos desenvolvendo expertise em controle da dor e manejo de ansiedade.
                </p>
              </div>

              {/* Pós-Graduações */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-flame/10">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-orange-flame" />
                  <h3 className="text-xl font-bold text-navy-blue">
                    Especializações
                  </h3>
                </div>
                <ul className="text-navy-blue/70 leading-relaxed space-y-2">
                  <li><strong>• Pós-Graduação em Medicina do Esporte</strong> - Estácio</li>
                  <li><strong>• Especialização em Psicanálise</strong></li>
                  <li><strong>• MBA de Gestão em Saúde</strong> - FGV</li>
                </ul>
              </div>

              {/* Filosofia */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-flame/10">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-orange-flame" />
                  <h3 className="text-xl font-bold text-navy-blue">
                    Minha Filosofia
                  </h3>
                </div>
                <p className="text-navy-blue/70 leading-relaxed italic">
                  "Escolhi a medicina por unir proatividade e foco de quem é movido por desafios e ao mesmo tempo sensibilidade e empatia de quem cuida do ser humano."
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
                      src="/Imagens Dra/JeanPauloFotografia (75 de 118) Grande.jpeg"
                      alt="Dra. Priscilla Almeida - Performance e Saúde da Mulher"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectPosition: '50% 20%',
                        filter: 'contrast(1.05) saturate(1.1)'
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 via-transparent to-transparent" />
                  </motion.div>
                  
                  {/* Floating decorative elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-orange-flame/20 rounded-full blur-xl"
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -3, 3, 0]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy-blue/15 rounded-full blur-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Journey */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-orange-flame/10"
          >
            <h3 className="text-3xl font-bold text-navy-blue mb-8 text-center">
              Minha Jornada Profissional
            </h3>
            
            <div className="space-y-8">
              
              {/* Anestesiologia */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-orange-flame/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-orange-flame" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-blue mb-3">Anestesiologia</h4>
                  <p className="text-navy-blue/70 leading-relaxed">
                    Escolhi a Anestesiologia como minha primeira especialização, pela alta capacidade de antecipar e interferir nas reações do organismo diante de estímulos potencialmente danosos vindo do ambiente, garantindo a manutenção do equilíbrio e bem estar dos meus pacientes. Há mais de 10 anos nessa especialização desenvolvi ainda mais sua percepção sobre as respostas do corpo diante de determinados estímulos.
                  </p>
                </div>
              </div>

              {/* MBA */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-navy-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-blue mb-3">MBA em Gestão de Saúde - FGV</h4>
                  <p className="text-navy-blue/70 leading-relaxed">
                    No meu caminho, passei pelo MBA de gestão em Saúde da FGV, para incluir em sua atuação a visão corporativa da medicina através do planejamento e organização visando maior efetividade e sustentabilidade de suas ações a curto e longo prazos.
                  </p>
                </div>
              </div>

              {/* Medicina do Esporte */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-happy-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-happy-yellow" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-blue mb-3">Medicina do Esporte</h4>
                  <p className="text-navy-blue/70 leading-relaxed">
                    Apaixonada por esportes desde a infância, a atividade física permeou todos os momentos da minha vida. Os estudos para meu aproveitamento pessoal foram expandindo e minha paixão pelo assunto só foi aumentando, decidi que não usaria esse conhecimento só para mim mesma. Fiz Pós-Graduação em Medicina do Esporte e passei a ajudar atletas profissionais, amadores e iniciantes a aproveitarem o seu melhor e alcançarem melhores resultados, seja em hipertrofia, emagrecimento e performance em esportes de forma geral.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Specialties Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                variants={fadeInUp}
                custom={index + 4}
                className="group text-center"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-flame/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-orange-flame/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <specialty.icon className="w-10 h-10 text-orange-flame" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-blue mb-4">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-navy-blue/60 leading-relaxed">
                    {specialty.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 