import About from "./about/page";
import ThemeToggle from "@/Components/ThemeToggle";
import StarsBackground from "@/Components/StarBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StarsBackground />
    </div>
  );
}
