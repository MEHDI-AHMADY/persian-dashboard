import {motion} from "framer-motion";

interface AnimatedSvgProps {
  dimensions: { width: number; height: number };
}

export default function AnimatedSvg({ dimensions }: AnimatedSvgProps) {
    
  return (
    <div className="absolute inset-0 flex items-center justify-center h-auto w-full -z-10 overflow-hidden">
        <motion.svg
        className="absolute rounded-md"
        width={dimensions.width + 100}
        height={dimensions.height + 100}
        viewBox={`0 0 ${dimensions.width + 100} ${dimensions.height + 100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="neon"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur5"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur10"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="blur20"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="30"
              result="blur30"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="50"
              result="blur50"
            />

            <feMerge result="blur-merged">
              <feMergeNode in="blur10" />
              <feMergeNode in="blur20" />
              <feMergeNode in="blur30" />
              <feMergeNode in="blur50" />
            </feMerge>

            <feColorMatrix
              result="red-blur"
              in="blur-merged"
              type="matrix"
              values="1 0 0 0 0
                      0 0.06 0 0 0
                      0 0 0.44 0 0
                      0 0 0 1 0"
            />
            <feMerge>
              <feMergeNode in="red-blur" />
              <feMergeNode in="blur5" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <svg className="absolute inset-0" x="50" y="50">
          <motion.path
            d={`M 0 0 h ${dimensions.width} v ${dimensions.height} h -${dimensions.width} v -${dimensions.height}`}
            stroke="orange"
            strokeWidth="3"
            animate={{
              pathLength: [0, 0.75],
              pathOffset: [0, 0.2],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop"
            }}
          />
        </svg>
      </motion.svg>
    </div>
  )
}
