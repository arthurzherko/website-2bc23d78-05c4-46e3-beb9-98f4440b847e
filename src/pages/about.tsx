import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { BiHappyBeaming } from "react-icons/bi";

export function About() {
  return (
    <div className="container py-8">
      <Typography.H2 className="text-center mb-8">О нас 🤪</Typography.H2>

      <Card className="max-w-2xl mx-auto p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <BiHappyBeaming className="h-16 w-16 text-primary animate-bounce" />
          
          <Typography.H3>
            Мы - самый нелепый сайт в интернете!
          </Typography.H3>

          <Typography.P>
            Наша миссия - заставить вас улыбнуться. Мы не продаем ничего, не собираем данные,
            и не делаем ничего полезного. Мы просто существуем, чтобы сделать ваш день чуточку веселее!
          </Typography.P>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
            <div className="p-4 border rounded-lg">
              <Typography.H4>😎</Typography.H4>
              <Typography.P className="text-sm">Уровень крутости</Typography.P>
              <Typography.Lead>∞/10</Typography.Lead>
            </div>
            <div className="p-4 border rounded-lg">
              <Typography.H4>🎯</Typography.H4>
              <Typography.P className="text-sm">Цель проекта</Typography.P>
              <Typography.Lead>Веселье</Typography.Lead>
            </div>
            <div className="p-4 border rounded-lg">
              <Typography.H4>🌈</Typography.H4>
              <Typography.P className="text-sm">Уровень серьёзности</Typography.P>
              <Typography.Lead>0%</Typography.Lead>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}