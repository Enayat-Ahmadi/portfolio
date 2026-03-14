import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 ng-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between">
      <p className="text-sm text-muted-foeground">
        &copy; {new Date().getFullYear()} Enayat-Ahmadi, All rights reserved.{" "}
      </p>
      <Link
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </Link>
    </footer>
  );
}
