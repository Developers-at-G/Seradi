import { motion } from 'framer-motion';
import styles from './SaleCondition.module.scss';

const SaleCondition = () => {
  const conditions = [
    { text: 'Signature de la promesse', percentage: '10%' },
    { text: 'Démarrage de travaux', percentage: '20%' },
    { text: 'Elévation des murs RDC', percentage: '20%' },
    { text: 'Elévation des murs 2eme étage', percentage: '15%' },
    { text: 'Elévation des murs 4éme étage', percentage: '10%' },
    { text: 'Elévation des murs 6eme étage', percentage: '10%' },
    { text: 'Stade second œuvre', percentage: '10%' },
    { text: 'Remise des clés', percentage: '5%' },
  ];

  const additionalInfo = [
    'Notaire: Maitre Ndiaga Mbaye: Cabinet notarial Niang - Mbaye',
    'Gérance: Syndic',
    'Règlement de Copropriété',
    'Livraison: Mars 2026',
    'Titre foncier individuel',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.container} id='vente'>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.title}
        style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#FFFFF',
            textAlign: 'center'
          }}
      >
        CONDITIONS DE VENTE
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.conditionsGrid}
      >
        {conditions.map((condition, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={styles.conditionItem}
          >
            <span className={styles.bullet}>•</span>
            <span className={styles.text} style={{ color: '#303468' }}>{condition.text}</span>
            <span className={styles.percentage} style={{ color: '#303468' }}>{condition.percentage}</span>
          </motion.div>
        ))}

        {/* <motion.h3
          variants={itemVariants}
          className={styles.subtitle}
          style={{ 
            width: '100%',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#303468'
          }}
        >
          INFORMATIONS COMPLÉMENTAIRES
        </motion.h3> */}

        {additionalInfo.map((info, index) => (
          <motion.div
            key={`info-${index}`}
            variants={itemVariants}
            className={styles.infoItem}
          >
            <span className={styles.bullet}>•</span>
            <span className={styles.text} style={{ color: '#303468' }}>{info}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SaleCondition;
