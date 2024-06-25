'use client'
import { trasitionsVariantsPage } from "@/utils/MotionTransitions";
import { AnimatePresence, motion } from "framer-motion"
const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="w-screen fixed top-0 bottom-0 right-full 
                    z-30 bg-white/5 " variants={trasitionsVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.1, duration: 0.5, type: "easeInOut" }}
                >
                </motion.div>
            </div>
        </AnimatePresence>


    );
}

export default TransitionPage;