import { motion } from 'framer-motion'
import { Activity, Brain, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react'

const Abordagem = () => {
  const abordagens = [
    {
      icon: Activity,
      titulo: "Medicina do Esporte Avançada",
      descricao: "Otimização da performance física através de avaliações especializadas, protocolos de treino personalizados e recuperação avançada.",
      beneficios: ["Avaliação biomecânica", "Protocolos personalizados", "Recuperação otimizada"],
      color: "from-orange-flame/20 to-orange-flame/5"
    },
    {
      icon: Brain,
      titulo: "Psicanálise Aplicada à Saúde",
      descricao: "Compreensão profunda dos aspectos psicológicos que influenciam a saúde física, comportamentos alimentares e motivação.",
      beneficios: ["Análise comportamental", "Terapia personalizada", "Mudança de hábitos"],
      color: "from-navy-blue/20 to-navy-blue/5"
    },
    {
      icon: Heart,
      titulo: "ESPECIALISTA em Anestesiologia",
      descricao: "Conhecimento profundo sobre controle da dor, manejo de ansiedade e procedimentos seguros para bem-estar integral.",
      beneficios: ["Controle da dor", "Manejo de ansiedade", "Procedimentos seguros"],
      color: "from-orange-flame/15 to-navy-blue/5"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy-blue/5 via-white to-orange-flame/8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-flame/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-blue/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-happy-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-flame/10 to-navy-blue/10 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-orange-flame" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">Abordagem Personalizada</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                Medicina Focada em Performance: Corpo, Mente e Resultados
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-4xl mx-auto leading-relaxed">
              Abordagem personalizada, baseada em evidências, no cuidado das alterações fisiológicas e metabólicas ao longo da vida, para sustentação de uma longevidade ativa e saudável.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid lg:grid-cols-3 gap-8">
              {abordagens.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Card content */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-20 h-20 bg-gradient-to-br from-orange-flame/20 to-navy-blue/20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:shadow-lg transition-shadow duration-300"
                    >
                      <item.icon className="w-10 h-10 text-orange-flame" />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl font-bold text-navy-blue group-hover:text-orange-flame transition-colors duration-300">
                        {item.titulo}
                      </h3>
                      
                      <p className="text-navy-blue/70 leading-relaxed">
                        {item.descricao}
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-3 pt-4 border-t border-navy-blue/10">
                        {item.beneficios.map((beneficio, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-4 h-4 text-orange-flame flex-shrink-0" />
                            <span className="text-sm text-navy-blue/70">{beneficio}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-flame/20 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-navy-blue mb-6">
                Desenvolvemos juntos seu caminho para a saúde plena
              </h3>
              
              <p className="text-lg text-navy-blue/70 leading-relaxed mb-8">
                Um processo de mudança de hábitos que se adapta ao seu estilo de vida, 
                respeitando seus limites e potencializando suas capacidades únicas.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Personalizado", desc: "Plano único para cada paciente" },
                  { title: "Científico", desc: "Baseado em evidências médicas" },
                  { title: "Sustentável", desc: "Mudanças duradouras e reais" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
                  >
                    <h4 className="font-semibold text-navy-blue mb-2">{feature.title}</h4>
                    <p className="text-sm text-navy-blue/60">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://wa.me/5511963145317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-flame to-orange-flame/90 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Conhecer a Abordagem</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-flame/10 to-transparent rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-navy-blue/10 to-transparent rounded-full blur-xl"
      />
    </section>
  )
}

export default Abordagem 