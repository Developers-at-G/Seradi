import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import styles from './SaleCondition.module.scss';
import { useRef, useEffect, useMemo } from 'react';

const SaleCondition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1,
    margin: "0px",
  });

  const conditions = useMemo(() => [
    { text: 'Signature de la promesse', percentage: 10 },
    { text: 'Démarrage de travaux', percentage: 20 },
    { text: 'Elévation des murs RDC', percentage: 20 },
    { text: 'Elévation des murs 2eme étage', percentage: 15 },
    { text: 'Elévation des murs 4éme étage', percentage: 10 },
    { text: 'Elévation des murs 6eme étage', percentage: 10 },
    { text: 'Stade second œuvre', percentage: 10 },
    { text: 'Remise des clés', percentage: 5 },
  ], []);

  // Create individual motion values
  const mv1 = useMotionValue(0);
  const mv2 = useMotionValue(0);
  const mv3 = useMotionValue(0);
  const mv4 = useMotionValue(0);
  const mv5 = useMotionValue(0);
  const mv6 = useMotionValue(0);
  const mv7 = useMotionValue(0);
  const mv8 = useMotionValue(0);

  // Create individual transforms
  const dv1 = useTransform(mv1, latest => `${Math.round(latest)}%`);
  const dv2 = useTransform(mv2, latest => `${Math.round(latest)}%`);
  const dv3 = useTransform(mv3, latest => `${Math.round(latest)}%`);
  const dv4 = useTransform(mv4, latest => `${Math.round(latest)}%`);
  const dv5 = useTransform(mv5, latest => `${Math.round(latest)}%`);
  const dv6 = useTransform(mv6, latest => `${Math.round(latest)}%`);
  const dv7 = useTransform(mv7, latest => `${Math.round(latest)}%`);
  const dv8 = useTransform(mv8, latest => `${Math.round(latest)}%`);

  const motionValues = [mv1, mv2, mv3, mv4, mv5, mv6, mv7, mv8];
  const displayValues = [dv1, dv2, dv3, dv4, dv5, dv6, dv7, dv8];

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

  useEffect(() => {
    if (isInView) {
      conditions.forEach((condition, index) => {
        animate(motionValues[index], condition.percentage, {
          duration: 1.5,
          ease: "easeOut",
          delay: index * 0.1,
        });
      });
    }
  }, [isInView, conditions, motionValues]);

  return (
    <div className={styles.container} id='vente' ref={ref}>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.title}
        style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#FF8A3D',
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
            <motion.span 
              className={styles.percentage}
              style={{ color: '#FF8A3D' }}
            >
              <motion.span>{displayValues[index]}</motion.span>
            </motion.span>
          </motion.div>
        ))}

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
