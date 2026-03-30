/**
 * Expand on Hover Component
 *
 * An interactive image gallery where images expand smoothly on hover or click.
 * Features smooth framer-motion animations and responsive design.
 *
 * @component Skiper52 - Pre-configured gallery with default images
 * @component HoverExpand_001 - Customizable gallery component
 *
 * @example
 * // Using the pre-configured component
 * import { Skiper52 } from "@/components/ui/expand-on-hover";
 * <Skiper52 />
 *
 * @example
 * // Using custom images
 * import { HoverExpand_001 } from "@/components/ui/expand-on-hover";
 *
 * const myImages = [
 *   { src: "/image1.jpg", alt: "Description", code: "# 01" },
 *   { src: "/image2.jpg", alt: "Description", code: "# 02" },
 * ];
 *
 * <HoverExpand_001 images={myImages} className="custom-class" />
 *
 * @dependencies
 * - framer-motion: For smooth animations
 * - swiper: For CSS styling (imported but not actively used)
 *
 * @props
 * - images: Array of { src: string, alt: string, code: string }
 * - className?: Optional custom CSS classes
 *
 * @features
 * - Smooth expand/collapse animations on hover
 * - Click to select functionality
 * - Gradient overlay on active image
 * - Responsive design
 * - Initial fade-in animation
 * - Image code display on active image
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      // TODO: Remplacer par un visuel Cameroun / développeur africain (local).
      src: "/images/hero-african-dev-placeholder.svg",
      alt: "Placeholder - visuel Cameroun / développeur africain",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel projet (Retrouvo).
      src: "/images/project-retrouvo-placeholder.svg",
      alt: "Placeholder - Retrouvo",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel projet (AgroGuard).
      src: "/images/project-agroguard-placeholder.svg",
      alt: "Placeholder - AgroGuard",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel projet (PALAM).
      src: "/images/project-palam-placeholder.svg",
      alt: "Placeholder - PALAM",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel projet (PowerAi).
      src: "/images/project-powerai-placeholder.svg",
      alt: "Placeholder - PowerAi",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel mini projets data.
      src: "/images/project-data-placeholder.svg",
      alt: "Placeholder - Mini Projets Data",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel “résultats ML” (Dog Breed Classifier).
      src: "/images/project-dog-breed-placeholder.svg",
      alt: "Placeholder - Dog Breed Classifier",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel local (éviter stock/corporate).
      src: "/images/portrait-lowechrist-placeholder.svg",
      alt: "Placeholder - portrait Lowe Christ",
      code: "# 23",
    },
    {
      // TODO: Remplacer par un visuel Cameroun (Douala) ou projet.
      src: "/images/og-african-dev-placeholder.svg",
      alt: "Placeholder - OpenGraph visuel",
      code: "# 23",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_001 className="" images={images} />
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{ width: "2.5rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "24rem" : "5rem",
                height: activeImage === index ? "24rem" : "24rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                  >
                    <p className="text-left text-xs text-white/50">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };
