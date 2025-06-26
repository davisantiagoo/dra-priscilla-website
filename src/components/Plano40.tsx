import { motion } from 'framer-motion'
import { CheckCircle, Heart, Brain, Shield, Zap, MessageSquare } from 'lucide-react'

const Plano40 = () => {
  const beneficios = [
    {
      icon: Heart,
      titulo: "Avaliação Hormonal",
      descricao: "Análise completa dos hormônios essenciais para otimizar energia, humor e vitalidade."
    },
    {
      icon: Zap,
      titulo: "Otimização Corporal",
      descricao: "Estratégias personalizadas para composição corporal, força e resistência física."
    },
    {
      icon: Brain,
      titulo: "Saúde Cognitiva e Emocional",
      descricao: "Cuidado integral da mente para clareza mental, foco e bem-estar psicológico."
    },
    {
      icon: Shield,
      titulo: "Prevenção de Doenças",
      descricao: "Protocolos avançados para prevenção e detecção precoce de condições relacionadas ao envelhecimento."
    }
  ]

  const diferenciais = [
    "Abordagem científica baseada em evidências",
    "Plano personalizado para seu perfil único",
    "Acompanhamento contínuo e ajustes precisos",
    "Foco na performance e qualidade de vida",
    "Integração entre medicina e estilo de vida"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-happy-yellow/10 to-orange-flame/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-flame/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-navy-blue/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-happy-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-flame to-happy-yellow bg-clip-text text-transparent">40+</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">
            Programa de Saúde <br />
            <span className="bg-gradient-to-r from-orange-flame to-happy-yellow bg-clip-text text-transparent">Personalizada</span>
          </h2>
          <p className="text-xl text-navy-blue/80 max-w-3xl mx-auto leading-relaxed">
            Uma abordagem integrativa que combina medicina preventiva, otimização hormonal e 
            medicina do esporte para mulheres que buscam excelência em saúde e performance.
          </p>
        </motion.div>

        {/* Benefícios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-orange-flame/20 hover:border-orange-flame/40 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-flame/15 to-happy-yellow/15 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <beneficio.icon className="w-8 h-8 text-orange-flame" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-navy-blue/70 leading-relaxed">
                  {beneficio.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-navy-blue via-navy-blue/95 to-orange-flame/10 rounded-3xl p-8 md:p-12 border border-orange-flame/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Por que escolher o <span className="bg-gradient-to-r from-orange-flame to-happy-yellow bg-clip-text text-transparent">Programa 40+</span>?
              </h3>
              <div className="space-y-4">
                {diferenciais.map((diferencial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-flame mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 leading-relaxed">{diferencial}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-flame/30">
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-orange-flame to-happy-yellow bg-clip-text text-transparent">Resultados</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Em 90 dias você pode ter:
                </h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                    <span className="text-white/90">Mais energia e disposição</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                    <span className="text-white/90">Melhor qualidade do sono</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                    <span className="text-white/90">Composição corporal otimizada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                    <span className="text-white/90">Maior clareza mental</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-navy-blue/80 text-lg mb-8">
            Pronta para transformar sua saúde e performance?
          </p>
          <motion.a
            href="https://wa.me/5511963145317"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-flame to-orange-flame/90 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Quero conhecer o Programa 40+
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Plano40 