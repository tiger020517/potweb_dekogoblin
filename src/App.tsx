import { PortfolioGallery } from "./components/PortfolioGallery.tsx";
import { Footer } from "./components/Footer.tsx";
import { GoblinLogo } from "./components/GoblinLogo.tsx";
import { ArtworkSpace } from "./components/ArtworkSpace.tsx";
import { motion } from "motion/react";

export default function App() {
  const artworkItems = [
    {
      id: 1,
      title: "Pencil Dreams",
      medium: "Graphite on Paper",
      imageUrl: "https://images.unsplash.com/photo-1720248090619-95d555f01bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBkcmF3aW5nJTIwc2tldGNofGVufDF8fHx8MTc2NDMzNDY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Ink Flow",
      medium: "India Ink",
      imageUrl: "https://images.unsplash.com/photo-1567333860476-cd5fff1d92f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmslMjBpbGx1c3RyYXRpb24lMjBhcnR8ZW58MXx8fHwxNzY0MzM0NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Digital Vision",
      medium: "Digital Painting",
      imageUrl: "https://images.unsplash.com/photo-1682446857262-9232e0c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBhcnR3b3JrfGVufDF8fHx8MTc2NDMyMjI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Character Study",
      medium: "Mixed Media",
      imageUrl: "https://images.unsplash.com/photo-1758973639700-648dd92662de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBza2V0Y2glMjBkcmF3aW5nfGVufDF8fHx8MTc2NDI0NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Concept World",
      medium: "Digital Illustration",
      imageUrl: "https://images.unsplash.com/photo-1707999494558-14354a63f6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0JTIwYXJ0JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDMzNDY0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "Fluid Colors",
      medium: "Watercolor",
      imageUrl: "https://images.unsplash.com/photo-1713815539197-78db123d8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0MzA4Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Geometric Harmony",
      category: "Brand Identity",
      imageUrl: "https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQyNTUwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Vibrant Vision",
      category: "Poster Design",
      imageUrl: "https://images.unsplash.com/photo-1744057847940-85b1a5c09229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBvc3RlciUyMGRlc2lnbnxlbnwxfHx8fDE3NjQzMzI0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Type Study",
      category: "Typography",
      imageUrl: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwYXJ0fGVufDF8fHx8MTc2NDMzMjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Modern Essence",
      category: "Brand Identity",
      imageUrl: "https://images.unsplash.com/photo-1764218815213-da407cb968a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQzMDg4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Abstract Expression",
      category: "Digital Art",
      imageUrl: "https://images.unsplash.com/photo-1611085667203-7efa7c067bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmt8ZW58MXx8fHwxNzY0MzMyNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "Portfolio Showcase",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NDI1ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 7,
      title: "Bold Statement",
      category: "Illustration",
      imageUrl: "https://images.unsplash.com/photo-1764183122372-4763d2a1f08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDMzMjQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 8,
      title: "Minimal Impact",
      category: "Print Design",
      imageUrl: "https://images.unsplash.com/photo-1528262004378-a108d795029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2NDI5NDc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF0050] via-black to-[#00FFD1] opacity-30"></div>
        <div className="relative z-10 text-center px-6">
          <div className="mb-12 flex justify-center">
            <GoblinLogo size={300} className="text-white opacity-90" />
          </div>
          <h1 className="text-white mb-6 animate-fade-in">
            dekogoblin's<br />
            <span className="text-[#00FFD1]">artpage</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting bold visual experiences that push boundaries and inspire action
          </p>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-8">
                Design is
                <br />
                <span className="text-[#FF0050]">Storytelling</span>
              </h2>
              <div className="space-y-6">
                <p>
                  I'm a graphic designer passionate about creating bold, meaningful work that connects with audiences on an emotional level. With over 8 years of experience, I specialize in brand identity, typography, and visual storytelling.
                </p>
                <p>
                  My approach combines strategic thinking with artistic expression, resulting in designs that are both beautiful and effective. I believe great design should challenge conventions while serving its purpose.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="border-l-4 border-black pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  x: 10,
                  borderLeftWidth: "8px",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="mb-2">Philosophy</h3>
                <p className="text-gray-600">
                  Bold ideas deserve bold execution. Every project is an opportunity to push creative boundaries.
                </p>
              </motion.div>
              <motion.div
                className="border-l-4 border-[#00FFD1] pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  x: 10,
                  borderLeftWidth: "8px",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="mb-2">Expertise</h3>
                <p className="text-gray-600">
                  Brand Identity • Typography • Print Design • Digital Art • Art Direction
                </p>
              </motion.div>
              <motion.div
                className="border-l-4 border-[#FF0050] pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  x: 10,
                  borderLeftWidth: "8px",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="mb-2">Recognition</h3>
                <p className="text-gray-600">
                  Award-winning designer featured in international design publications and exhibitions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artwork Space Section */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFD1] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF0050] opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-4">
              <span className="text-[#FF0050]">artwork</span> space
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Original drawings and illustrations from my personal sketchbook and digital canvas
            </p>
          </motion.div>
          <ArtworkSpace artworks={artworkItems} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-4">Selected Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for bold, innovative design solutions
            </p>
          </motion.div>
          <PortfolioGallery items={galleryItems} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
