import About from "./about/page";
import ThemeToggle from "@/Components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle/>
      <main>
        <h1>Hello from Home page</h1>
      </main>
    </div>
  );
}
