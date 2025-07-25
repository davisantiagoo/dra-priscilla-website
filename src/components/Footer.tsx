import { motion } from 'framer-motion';
import { MessageSquare, Instagram, Youtube, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Abordagem", href: "#abordagem" },
    { name: "Podcast", href: "#podcast" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/5511963145317",
      icon: MessageSquare,
      color: "text-green-500",
      bgColor: "bg-green-500/10 hover:bg-green-500/20"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/draprisports/",
      icon: Instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10 hover:bg-pink-500/20"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCCxIDg6rrI9aTh72ZycTDRw",
      icon: Youtube,
      color: "text-red-500",
      bgColor: "bg-red-500/10 hover:bg-red-500/20"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-navy-blue via-navy-blue/95 to-navy-blue/90 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-flame/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-happy-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/Logos/Branca sem fundo.svg" 
                  alt="Dra. Priscilla Almeida" 
                  className="h-16 mb-6"
                />
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Dra. Priscilla Almeida
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                  Performance e Longevidade. Abordagem personalizada que combina ciência e humanidade.
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl ${social.bgColor} border border-white/10 flex items-center justify-center transition-all duration-300`}
                    >
                      <social.icon className={`w-5 h-5 ${social.color}`} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Navegação</h4>
                <nav className="space-y-3">
                  {navigationLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="block text-white/70 hover:text-orange-flame transition-colors duration-200"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-orange-flame mt-1 flex-shrink-0" />
                    <div className="text-white/70">
                      <p>WhatsApp: (11) 96314-5317</p>
                      <p className="text-sm">Atendimento online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-flame mt-1 flex-shrink-0" />
                    <div className="text-white/70">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/5511963145317"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-orange-flame/20 hover:bg-orange-flame/30 text-orange-flame rounded-full font-medium transition-all duration-300 border border-orange-flame/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  Agendar Consulta
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Dra. Priscilla Almeida. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>CRM: 123456-SP</span>
              <span>•</span>
              <span><a href="#" target="_blank" rel="noopener noreferrer">Currículo Lattes</a></span>
              <span>•</span>
              <span>Certificações: Título de Especialista em Medicina do Esporte, Pós-graduação em Psicanálise, MBA em Gestão de Saúde</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 