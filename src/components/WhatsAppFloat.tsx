import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/5511963145317"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-orange-flame rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageSquare className="w-6 h-6 text-white" />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-orange-flame rounded-full"
        animate={{
          scale: [1, 1.3, 1.3],
          opacity: [0.7, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.a>
  );
};

export default WhatsAppFloat; 