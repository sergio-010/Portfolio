"use client"
import { fadeIN } from "@/utils/MotionTransitions";
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode
    position: "bottom" | "right"
    className?: string
}
const TrasitionComponent = ({ children, position, className }: Props) => {
    return (
        <motion.div
            variants={fadeIN(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default TrasitionComponent;