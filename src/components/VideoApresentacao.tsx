import { motion } from 'framer-motion'
import { Play, MessageSquare } from 'lucide-react'

const VideoApresentacao = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-orange-flame/5 to-navy-blue/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-flame/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-blue/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-happy-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 backdrop-blur-sm rounded-full mb-6 border border-orange-flame/20"
            >
              <div className="w-2 h-2 bg-orange-flame rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">Conheça a Dra. Priscilla</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                Conheça a Dra. Priscilla
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-3xl mx-auto leading-relaxed">
              Assista ao vídeo e descubra como posso ajudar você a alcançar sua melhor performance
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-navy-blue/10 to-orange-flame/10 rounded-3xl overflow-hidden shadow-2xl border border-orange-flame/20">
              {/* Placeholder content - replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 bg-orange-flame rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg cursor-pointer"
                  >
                    <Play className="w-12 h-12 text-white ml-1" />
                  </motion.div>
                  <p className="text-navy-blue/60 text-lg font-medium">
                    Vídeo de Apresentação
                  </p>
                  <p className="text-navy-blue/40 text-sm mt-2">
                    Clique para assistir
                  </p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 via-transparent to-orange-flame/10" />
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-8"
            >
              <motion.a
                href="https://wa.me/5511963145317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-flame to-orange-flame/80 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Assistir Apresentação
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-flame/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">
                Por que assistir?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-flame/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-flame font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold text-navy-blue mb-2">Conheça a Abordagem</h4>
                  <p className="text-sm text-navy-blue/60">Entenda como funciona o método personalizado</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-flame/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-flame font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold text-navy-blue mb-2">Veja os Resultados</h4>
                  <p className="text-sm text-navy-blue/60">Depoimentos e casos de sucesso reais</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-flame/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-flame font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold text-navy-blue mb-2">Tire suas Dúvidas</h4>
                  <p className="text-sm text-navy-blue/60">Respostas para as principais perguntas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VideoApresentacao 