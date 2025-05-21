import { AnimatePresence, motion } from "motion/react";

export const SlideIn = ({ show, children }: { show: boolean; children: React.ReactNode }) => (
    <AnimatePresence>
        {show && <motion.div initial={{ opacity: 0, y: -5 }}
            exit={{ opacity: 0, y: -5 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 }
            }}>
            {children}
        </motion.div>}
    </AnimatePresence>
)