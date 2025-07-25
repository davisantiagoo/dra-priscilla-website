import { motion } from 'framer-motion'
import { Calendar, Clock, Video, MessageSquare, Home, Shield, Zap, Target } from 'lucide-react'

const AgendamentoOnline = () => {
  const etapas = [
    {
      numero: "1",
      titulo: "Escolha o melhor horário para você",
      descricao: "Selecione um horário que se adapte à sua rotina",
      icon: Calendar
    },
    {
      numero: "2", 
      titulo: "Receba o link da videochamada por email",
      descricao: "Link seguro e privado para sua consulta",
      icon: Video
    },
    {
      numero: "3",
      titulo: "Realize sua consulta com total comodidade",
      descricao: "Atendimento personalizado no conforto da sua casa",
      icon: MessageSquare
    }
  ]

  const beneficios = [
    {
      icon: Home,
      titulo: "Conforto da sua casa",
      descricao: "Sem necessidade de deslocamento"
    },
    {
      icon: Shield,
      titulo: "Total privacidade",
      descricao: "Consultas 100% confidenciais"
    },
    {
      icon: Zap,
      titulo: "Economia de tempo",
      descricao: "Otimize seu dia sem perder tempo no trânsito"
    },
    {
      icon: Target,
      titulo: "Atendimento personalizado",
      descricao: "Foco total em você e suas necessidades"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-orange-flame/5 via-white to-navy-blue/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-flame/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-blue/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-happy-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 backdrop-blur-sm rounded-full mb-6 border border-orange-flame/20"
            >
              <div className="w-2 h-2 bg-orange-flame rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">Agendamento Online</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                Agende sua Consulta Online
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-3xl mx-auto leading-relaxed">
              Processo simples e rápido para você ter acesso ao melhor atendimento médico
            </p>
          </motion.div>

          {/* Etapas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {etapas.map((etapa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  {/* Connection line */}
                  {index < etapas.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-flame/30 to-transparent z-0" />
                  )}
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-flame/20 hover:border-orange-flame/40 transition-all duration-300 group-hover:shadow-xl">
                    {/* Number badge */}
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-flame to-orange-flame/80 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">{etapa.numero}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 bg-orange-flame/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <etapa.icon className="w-10 h-10 text-orange-flame" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-orange-flame transition-colors">
                        {etapa.titulo}
                      </h3>
                      <p className="text-navy-blue/70 leading-relaxed">
                        {etapa.descricao}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefícios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-navy-blue/5 via-orange-flame/5 to-navy-blue/5 rounded-3xl p-8 md:p-12 border border-orange-flame/20">
              <h3 className="text-3xl font-bold text-navy-blue text-center mb-12">
                Benefícios do Atendimento Online
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {beneficios.map((beneficio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-orange-flame/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <beneficio.icon className="w-8 h-8 text-orange-flame" />
                    </div>
                    <h4 className="font-semibold text-navy-blue mb-2">
                      {beneficio.titulo}
                    </h4>
                    <p className="text-sm text-navy-blue/60">
                      {beneficio.descricao}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-flame/10 via-orange-flame/5 to-navy-blue/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-orange-flame/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Pronta para começar sua jornada?
              </h3>
              
              <p className="text-lg text-navy-blue/70 mb-8 max-w-2xl mx-auto">
                Agende sua primeira consulta online e descubra como podemos trabalhar juntas para alcançar seus objetivos de saúde e performance.
              </p>

              <motion.a
                href="https://wa.me/5511963145317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-flame to-orange-flame/80 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Agendar Consulta Online
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
              
              <p className="text-sm text-navy-blue/60 mt-4">
                Atendimento 100% online • Horários flexíveis • Primeira consulta personalizada
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AgendamentoOnline 