import { FaHeart } from "react-icons/fa";
import { Typography } from "@/components/ui/typography";

export function SillyFooter() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-center">
        <Typography.P className="flex items-center gap-2 text-sm text-muted-foreground">
          Сделано с
          <FaHeart className="text-destructive animate-pulse" />
          и весельем
        </Typography.P>
      </div>
    </footer>
  );
}