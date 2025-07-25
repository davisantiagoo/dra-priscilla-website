import { motion } from 'framer-motion';
import { MapPin, Clock, MessageSquare, Instagram, Youtube } from 'lucide-react';

const Contato = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Resposta rápida",
      contact: "(11) 96314-5317",
      action: "Chamar no WhatsApp",
      link: "https://wa.me/5511963145317",
      bgColor: "from-green-500/10 to-green-400/10",
      iconColor: "text-green-600",
      borderColor: "border-green-500/20"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Conteúdo exclusivo",
      contact: "@draprisports",
      action: "Seguir no Instagram",
      link: "https://www.instagram.com/draprisports/",
      bgColor: "from-pink-500/10 to-purple-500/10",
      iconColor: "text-pink-600",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Vídeos informativos",
      contact: "Canal da Dra. Priscilla",
      action: "Inscrever-se",
      link: "https://www.youtube.com/channel/UCCxIDg6rrI9aTh72ZycTDRw",
      bgColor: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-600",
      borderColor: "border-red-500/20"
    }
  ];

  const horarios = [
    { dia: "Segunda a Sexta", horario: "8h às 18h" },
    { dia: "Sábado", horario: "8h às 12h" },
    { dia: "Domingo", horario: "Fechado" }
  ];

  return (
    <section 
      id="contato" 
      className="py-24 lg:py-32 bg-gradient-to-br from-orange-flame/5 via-white to-navy-blue/8 relative overflow-hidden"
    >
      {/* Background Elements */}
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 backdrop-blur-sm rounded-full mb-6 border border-orange-flame/20"
            >
              <div className="w-2 h-2 bg-orange-flame rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-blue tracking-wide">Vamos Conversar Sobre</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-blue via-orange-flame to-navy-blue">
                Sua Saúde
              </span>
            </h2>
            
            <p className="text-xl text-navy-blue/70 max-w-3xl mx-auto leading-relaxed">
              Estou aqui para te ajudar a conquistar sua melhor versão através de uma abordagem focada em performance e resultados
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <motion.a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 ${method.borderColor} hover:border-opacity-50`}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`w-10 h-10 ${method.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-blue mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-navy-blue/60 mb-4">
                    {method.description}
                  </p>
                  
                  <p className="text-lg font-semibold text-navy-blue mb-6">
                    {method.contact}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-flame/10 text-orange-flame rounded-full font-medium hover:bg-orange-flame/20 transition-colors">
                    {method.action}
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Schedule and Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            
            {/* Schedule */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-flame/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-orange-flame/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-flame" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-blue">
                    Horários de Atendimento ao Cliente
                  </h3>
                  <p className="text-navy-blue/60">
                    Para agendamento de consultas online
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {horarios.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-navy-blue/10 last:border-0">
                    <span className="font-medium text-navy-blue">
                      {item.dia}
                    </span>
                    <span className="text-orange-flame font-semibold">
                      {item.horario}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-orange-flame/10 rounded-2xl border border-orange-flame/20">
                <p className="text-sm font-medium text-navy-blue text-center">
                  Atendimento exclusivamente online – agende sua consulta com total comodidade
                </p>
              </div>
            </div>

            {/* Online Service */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-flame/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-navy-blue/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-navy-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-blue">
                    Atendimento Online
                  </h3>
                  <p className="text-navy-blue/60">
                    Consultas 100% Online
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                  <span className="text-navy-blue/70">Conforto e Comodidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                  <span className="text-navy-blue/70">Total privacidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                  <span className="text-navy-blue/70">Otimização de tempo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                  <span className="text-navy-blue/70">Sem necessidade de deslocamento</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                  <span className="text-navy-blue/70">Horários flexíveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-flame rounded-full"></div>
                  <span className="text-navy-blue/70">Atendimento personalizado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-flame/10 via-orange-flame/5 to-navy-blue/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-orange-flame/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Pronta para Sua Transformação?
              </h3>
              
              <p className="text-lg text-navy-blue/70 mb-8 max-w-2xl mx-auto">
                O primeiro passo para uma vida mais saudável e equilibrada começa com uma conversa. Vamos juntas descobrir o melhor caminho para você.
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
                Agendar Primeira Consulta
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
              
              <p className="text-sm text-navy-blue/60 mt-4">
                Atendimento humanizado • Abordagem personalizada • Resultados duradouros
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato; 