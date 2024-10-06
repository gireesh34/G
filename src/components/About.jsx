import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[5px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-800 rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] sm:text-[25px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-secondary text-[17px] max-w-6xl leading-[35px] mx-auto'
      >
        I am a dedicated and adaptable professional with a strong background in 
        computer science, having earned my B.Tech from Vel Tech University. My 
        passion lies in problem-solving, creative thinking, and continuous learning, 
        which I have honed through various certifications and a hands-on internship. 
        I have developed expertise in programming, web development, and machine 
        learning, with projects ranging from facial recognition systems to e-commerce 
        website development. I am eager to contribute to an organization that values 
        hard work, trusts me with responsibilities, and offers opportunities to further 
        expand my knowledge and skills. I'm a quick learner and collaborate closely 
        with clients to create efficient, scalable, and user-friendly solutions that 
        solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4' key={service.title}>
            <ServiceCard index={index} {...service} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
