"use client";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";
import Link from "next/link";
import cn from "@/lib/utils";

export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          sapiente? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Illo, fuga.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <Link
                    href="mailto:eno.ahmadi22@gmail.com"
                    target="_blank"
                    className="text-mutedt-foreground hover:text-primary transition-colors"
                  >
                    eno.ahmadi22@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneCall className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <Link
                    href="tel:+4917636964823"
                    target="_blank"
                    className="text-mutedt-foreground hover:text-primary transition-colors"
                  >
                    +49 (176) 3696-4823
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <Link
                    href="https://maps.app.goo.gl/WpbK4fNEuqHbybPbA"
                    target="_blank"
                    className="text-mutedt-foreground hover:text-primary transition-colors"
                  >
                    Tübingen, Germany
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram />
                </Link>
                <Link href="https://x.com" target="_blank">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="your name"
                  className="w-full px-4 py-3 rounded-md border border-input ng-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="email@email.com"
                  className="w-full px-4 py-3 rounded-md border border-input ng-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="messaage"
                  id="message"
                  required
                  placeholder="your Message..."
                  className="w-full px-4 py-3 rounded-md border border-input ng-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
