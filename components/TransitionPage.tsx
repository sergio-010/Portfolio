'use client'
import { trasitionsVariantsPage } from "@/utils/MotionTransitions";
import { AnimatePresence, motion } from "framer-motion"

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="fixed inset-0 z-30 bg-minimal-bg"
                variants={trasitionsVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1, duration: 0.3, type: "easeInOut" }}
            />
        </AnimatePresence>
    );
}

export default TransitionPage;