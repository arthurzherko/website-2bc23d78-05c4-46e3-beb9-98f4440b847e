import { FaRegLaughSquint } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function SillyHero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Typography.H1 className="leading-tight">
          Добро пожаловать на{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            самый глупый
          </span>{" "}
          сайт в мире! 🎈
        </Typography.H1>
        <Typography.Lead className="text-muted-foreground">
          Здесь нет ничего серьёзного. Просто веселье и радость!
        </Typography.Lead>
      </div>
      <div className="flex gap-4">
        <Button className="group">
          <FaRegLaughSquint className="mr-2 h-4 w-4 transition-transform group-hover:rotate-[360deg]" />
          Нажми меня!
        </Button>
        <Button variant="secondary" className="group">
          <span className="group-hover:animate-bounce">🎪</span>
          <span className="ml-2">Или меня!</span>
        </Button>
      </div>
    </section>
  );
}