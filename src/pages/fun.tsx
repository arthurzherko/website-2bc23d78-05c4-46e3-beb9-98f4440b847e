import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SillyCarousel } from "@/components/silly-carousel";
import { FaKiss, FaRegLaughSquint } from "react-icons/fa";
import { BiParty } from "react-icons/bi";

export function Fun() {
  const [confetti, setConfetti] = useState(false);

  return (
    <div className="container py-8">
      <Typography.H2 className="text-center mb-8">
        Страница безудержного веселья! 🎉
      </Typography.H2>

      <div className="grid gap-8 place-items-center">
        <motion.div
          animate={{
            rotate: confetti ? [0, 360] : 0,
            scale: confetti ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="text-xl p-8"
            onClick={() => setConfetti((prev) => !prev)}
          >
            <BiParty className="mr-2 h-6 w-6" />
            Нажми для веселья!
          </Button>
        </motion.div>

        <div className="grid gap-4 place-items-center">
          <Typography.H3 className="text-center">
            Карусель глупых шуток 🎪
          </Typography.H3>
          <SillyCarousel />
        </div>

        <div className="flex gap-4 items-center">
          <FaKiss className="h-8 w-8 text-pink-500 animate-bounce" />
          <FaRegLaughSquint className="h-8 w-8 text-yellow-500 animate-pulse" />
          <BiParty className="h-8 w-8 text-blue-500 animate-spin" />
        </div>
      </div>
    </div>
  );
}