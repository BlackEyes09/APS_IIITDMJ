import React from 'react';
import './InfiniteMarquee.module.css';
import { motion } from "framer-motion";


// 2. Defining Variants
const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};

const InfiniteMarquee = () => {
    return (
        <div>
            <div className="marquee">
                {/* 3. Using framer motion */}
                <motion.div
                    className="track flex"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                    <h1>
                        ASTRONOMY.AND.PHYSICS.SOCIETY.
                    </h1>
                   
                    
                    
                </motion.div>
            </div>
        </div>
    );
};


export default InfiniteMarquee;