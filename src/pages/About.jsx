import "./pages.scss";
import { motion } from "framer-motion";
import AnimatedLetters from "../components/Animations/AnimatedLetters";
import AnimatedCube from "../components/Animations/AnimatedCube";

export default function About() {
  return (
    <>
      <div className="current-page about-page">
        <div className="page-text-container">
          <h1>
            <AnimatedLetters word={"About Me"} start_delay={2} />
          </h1>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0, duration: 3 }}
          >
            <motion.p
              animate={{
                opacity: [0, 1],
                scale: [0.9, 1],
                rotate: [1, 0, -1, 0],
              }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quos veritatis perferendis eligendi optio dignissimos!
              Accusamus aliquam cum distinctio officiis.
            </motion.p>
            <motion.p
              animate={{
                opacity: [0, 1],
                scale: [1.1, 1],
                rotate: [-1, 0, 1, 0],
              }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              facilis eaque sapiente eum, excepturi vel! Ipsam quos cupiditate
              veritatis, fugiat aperiam impedit fuga aspernatur corporis
              quibusdam.
            </motion.p>
            <motion.p
              animate={{
                opacity: [0, 1],
                scale: [0.9, 1],
                rotate: [1, 0, -1, 0],
              }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              quas aliquid vitae nemo rem?
            </motion.p>
          </motion.span>
        </div>

        <AnimatedCube />
      </div>
    </>
  );
}