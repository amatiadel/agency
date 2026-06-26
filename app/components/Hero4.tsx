"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                className="relative w-full h-full"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function Hero4({
    badge = "",
    title1 = "мы делаем",
    title2 = "Digital Vision",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    const rotatingTexts = [
        'Интернет-магазины',
        'Лендинги', 
        'Корпоративные сайты',
        'Промо сайты',
        'UX/UI Аудит'
    ];

    useEffect(() => {
        const currentText = rotatingTexts[currentIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    // Start deleting after a pause
                    setTimeout(() => setIsDeleting(true), 500);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    // Move to next text
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
                }
            }
        }, isDeleting ? 50 : 80); // Much faster deleting and typing

        return () => clearTimeout(timeout);
    }, [displayedText, currentIndex, isDeleting, rotatingTexts]);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] w-[300px] h-[70px] md:w-[600px] md:h-[140px]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%] w-[250px] h-[60px] md:w-[500px] md:h-[120px]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] w-[150px] h-[40px] md:w-[300px] md:h-[80px]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%] w-[100px] h-[30px] md:w-[200px] md:h-[60px]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%] w-[75px] h-[20px] md:w-[150px] md:h-[40px]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24">
                <div className="max-w-3xl mx-auto text-center">

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span className="relative min-h-12 sm:min-h-16 lg:min-h-24 xl:min-h-28 w-full flex items-center justify-center">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                    {displayedText}
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ 
                                            duration: 0.8,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                        className="ml-1"
                                    >
                                        |
                                    </motion.span>
                                </span>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/90 transition-colors duration-200 shadow-lg"
                        >
                            Узнать стоимость
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-colors duration-200"
                        >
                            Напишите нам, мы онлайн
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export default Hero4;
