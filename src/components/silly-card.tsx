import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface SillyCardProps {
  title: string;
  emoji: string;
  content: string;
  isWobbling?: boolean;
}

export function SillyCard({ title, emoji, content, isWobbling }: SillyCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:scale-105 ${
        isWobbling ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Typography.P>{content}</Typography.P>
      </CardContent>
    </Card>
  );
}