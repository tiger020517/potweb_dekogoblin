import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";
import { motion } from "motion/react";
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioGalleryProps {
  items: GalleryItem[];
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="1.5rem">
        {items.map((item, index) => (
          <GalleryCard key={item.id} item={item} index={index} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = ((x - centerX) / centerX) * 15;
    const moveY = ((y - centerY) / centerY) * 15;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="group relative overflow-hidden bg-black cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      whileHover={{ scale: 1.05 }}
    >
        <ImageWithFallback
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <h3 className="text-white mb-2 px-4 text-center">{item.title}</h3>
          <p className="text-[#00FFD1] px-4 text-center">{item.category}</p>
        </div>
      </motion.div>
  );
}
