import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

const jokes = [
  {
    setup: "Почему программисты не любят природу?",
    punchline: "Потому что там слишком много багов! 🐛",
  },
  {
    setup: "Что сказал один программист другому?",
    punchline: "Ты выглядишь не в своей кодировке! 💻",
  },
  {
    setup: "Как называется группа из 8 хоббитов?",
    punchline: "Хоббайт! 🧙‍♂️",
  },
];

export function SillyCarousel() {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {jokes.map((joke, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex flex-col items-center justify-center rounded-md border p-6 text-center">
                <Typography.H4 className="mb-4">{joke.setup}</Typography.H4>
                <Typography.P className="text-muted-foreground">
                  {joke.punchline}
                </Typography.P>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}