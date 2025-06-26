import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { Spotlight, GridBackground } from './ui/spotlight'
import { MedicalShapes } from './ui/medical-shapes'

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-flame/5 via-white to-navy-blue/5 overflow-hidden pt-24">
      {/* Background Effects */}
      <GridBackground />
      <Spotlight />
      <MedicalShapes />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/[0.03] via-purple-500/[0.02] to-orange-flame/[0.04]" />
      
      {/* Additional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-flame/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-navy-blue/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-happy-yellow/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 backdrop-blur-sm rounded-full mb-8 border border-orange-flame/20"
            >
              <div className="w-2 h-2 bg-orange-flame rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">
                Medicina Integrativa & Longevidade
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-blue mb-6 leading-tight"
            >
              Transforme Sua 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-flame to-orange-flame/70">
                Saúde e Vida
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl lg:text-2xl text-navy-blue/70 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Descubra o poder da medicina integrativa para alcançar sua melhor versão através de uma abordagem personalizada e inovadora.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {[
                "Abordagem personalizada",
                "Medicina baseada em evidências",
                "Cuidado integral",
                "Resultados duradouros"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-flame flex-shrink-0" />
                  <span className="text-navy-blue/80 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://wa.me/5511963145317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-flame to-orange-flame/80 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#sobre"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-navy-blue rounded-full font-semibold text-lg border border-orange-flame/20 hover:border-orange-flame/40 transition-all duration-300"
              >
                Conheça Mais
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-12 pt-8 border-t border-navy-blue/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-blue">2000+</div>
                <div className="text-sm text-navy-blue/60">Pacientes</div>
              </div>
              <div className="w-px h-8 bg-navy-blue/20" />
              <div className="text-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-2xl font-bold text-navy-blue">5.0</span>
                  <Star className="w-5 h-5 text-orange-flame fill-current" />
                </div>
                <div className="text-sm text-navy-blue/60">Avaliação</div>
              </div>
              <div className="w-px h-8 bg-navy-blue/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-blue">15+</div>
                <div className="text-sm text-navy-blue/60">Anos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            {/* Rotating background gradient */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 bg-gradient-to-r from-orange-flame/20 via-happy-yellow/15 to-navy-blue/20 rounded-full blur-3xl"
            />

            {/* Main image container */}
            <div className="relative">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative aspect-[4/5] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/Imagens Dra/JeanPauloFotografia (113 de 118) Grande.jpeg"
                  alt="Dra. Priscilla Almeida - Medicina Integrativa"
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectPosition: '50% 20%',
                    filter: 'contrast(1.05) saturate(1.1)'
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 via-transparent to-orange-flame/5" />
              </motion.div>

              {/* Floating achievement card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-orange-flame/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-flame mb-1">98%</div>
                  <div className="text-sm text-navy-blue/60">Satisfação</div>
                </div>
              </motion.div>

              {/* Floating experience card */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 200 }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-navy-blue/20"
              >
                <div className="text-center">
                  <div className="text-sm text-navy-blue/60 mb-1">Especialista</div>
                  <div className="text-lg font-bold text-navy-blue">Medicina</div>
                  <div className="text-lg font-bold text-navy-blue">Integrativa</div>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-8 w-24 h-24 bg-gradient-to-br from-orange-flame/15 to-happy-yellow/10 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-10 w-20 h-20 bg-gradient-to-br from-navy-blue/15 to-orange-flame/10 rounded-full blur-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero 