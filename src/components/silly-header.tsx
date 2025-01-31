import { BiJoystickButton } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";

export function SillyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <BiJoystickButton className="h-6 w-6 animate-bounce text-primary" />
            <Typography.H3>Глупый Сайт</Typography.H3>
          </Link>
          <nav className="flex gap-6">
            <Link
              to="/"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Главная
            </Link>
            <Link
              to="/fun"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Веселье
            </Link>
            <Link
              to="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              О нас
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <FaGamepad className="h-5 w-5 animate-spin text-primary" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}