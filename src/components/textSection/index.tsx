import './styles.css';
import { motion } from 'framer-motion';

export const TextSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="text-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p className="left-text-box" variants={textVariants}>
        From <span className='highlight'>chaos</span> to order, where designs and creativity blend <span className='highlight'>together</span> to create meticulously crafted solutions.
      </motion.p>
      <motion.p className="right-text-box" variants={textVariants}>
        We offer a chaos-free experience to bring your ideas to life–without hidden costs and bloated solutions.<br />
        <br />
        We bring over 20 years of experience. Working with startups and multinationals we understand how to prioritize quality and efficiency.<br />
        <br />
        There are no calls, no chats and no contracts, just bring your idea to us and we'll do the rest.
      </motion.p>
    </motion.div>
  );
};
