import { FaPython, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiPowerbi, SiMicrosoftazure, SiPandas, SiTensorflow } from "react-icons/si";
import {motion} from "framer-motion"

const iconvariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div id="Technologies"className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Python */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <FaPython className="text-7xl text-cyan-400" />
        </motion.div>

        {/* SQL (Using Database Icon) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <FaDatabase className="text-7xl text-blue-600" />
        </motion.div>

        {/* Power BI */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <SiPowerbi className="text-7xl text-yellow-500" />
        </motion.div>

        {/* Azure */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <SiMicrosoftazure className="text-7xl text-blue-700" />
        </motion.div>

        {/* HTML */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        {/* CSS */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>

        {/* Pandas */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <SiPandas className="text-7xl text-gray-400" /> {/* Changed color to gray */}
        </motion.div>

        {/* Machine Learning (TensorFlow) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="p-4"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
