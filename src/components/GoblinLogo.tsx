import { motion } from "motion/react";

interface GoblinLogoProps {
  className?: string;
  size?: number;
}

export function GoblinLogo({ className = "", size = 200 }: GoblinLogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ 
        rotate: [0, -10, 10, -10, 10, 0],
        scale: 1.1,
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      {/* Goblin side profile silhouette */}
      <path
        d="M 100 40
           C 110 40, 120 45, 125 52
           C 130 60, 132 70, 130 80
           C 128 85, 125 88, 122 90
           L 125 92
           C 127 93, 128 95, 128 98
           L 128 105
           C 128 108, 127 110, 125 112
           L 120 115
           C 118 117, 117 120, 117 123
           L 117 140
           C 117 145, 115 150, 112 154
           C 108 158, 102 160, 95 160
           L 85 160
           C 78 160, 72 158, 68 154
           C 65 150, 63 145, 63 140
           L 63 130
           C 63 127, 62 124, 60 122
           L 50 115
           C 47 113, 45 110, 44 107
           L 42 100
           C 40 95, 39 90, 40 85
           C 41 78, 44 72, 48 67
           L 52 62
           C 55 58, 58 55, 62 53
           L 70 50
           C 75 48, 80 47, 85 47
           C 88 47, 91 46, 93 44
           L 95 42
           C 97 40, 98 40, 100 40 Z
           
           M 50 90
           C 48 92, 47 95, 47 98
           L 48 105
           C 48 108, 50 110, 52 112
           L 60 117
           C 63 119, 65 122, 66 125
           L 67 135
           C 67 138, 69 140, 71 142
           C 73 144, 76 145, 79 145
           L 88 145
           C 91 145, 94 144, 96 142
           C 98 140, 99 137, 99 134
           L 99 125
           C 99 122, 100 119, 102 117
           L 108 112
           C 110 110, 111 108, 112 105
           L 113 98
           C 114 94, 113 90, 111 87
           C 109 83, 106 80, 102 78
           L 95 75
           C 92 74, 90 72, 88 70
           L 85 67
           C 83 65, 80 64, 77 64
           C 73 64, 70 65, 67 67
           C 64 69, 62 72, 61 75
           L 60 80
           C 59 83, 57 86, 55 88
           C 53 90, 52 90, 50 90 Z"
        fillRule="evenodd"
      />
      
      {/* Big nose - prominent feature */}
      <path
        d="M 45 85
           C 43 85, 42 86, 41 88
           L 38 95
           C 37 98, 36 101, 36 104
           C 36 107, 37 110, 39 112
           C 41 114, 44 115, 47 115
           L 52 115
           C 55 115, 58 114, 60 112
           L 65 107
           C 67 104, 68 101, 68 98
           C 68 95, 67 92, 65 90
           L 60 85
           C 58 83, 55 82, 52 82
           C 49 82, 47 83, 45 85 Z"
        fillRule="evenodd"
      />
      
      {/* Eye */}
      <circle cx="85" cy="80" r="4" fill="currentColor" />
      
      {/* Pointed ear */}
      <path
        d="M 118 75
           L 130 60
           L 125 78
           Z"
        fillRule="evenodd"
      />
    </motion.svg>
  );
}
