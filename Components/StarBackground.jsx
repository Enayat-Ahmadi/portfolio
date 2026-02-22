"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    generateStars();
    generateMeteors();
    generateBadges();

    const onResize = () => {
      generateStars();
      generateMeteors();
      generateBadges();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mounted]);

  function generateStars() {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));

    setStars(newStars);
  }

  function generateMeteors() {
    const numberOfMeteors = 5;
    const travel = Math.max(window.innerWidth, window.innerHeight) * 1.1;

    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => {
      const isGold = Math.random() < 0.05;
      const angle = 200 + Math.random() * 40;
      const x = -20 + Math.random() * 140;
      const y = -20 + Math.random() * 60;

      return {
        id: i,
        size: Math.random() * 2 + 1,
        x,
        y,
        angle,
        travel,
        delay: Math.random() * 4,
        animationDuration: 2.5 + Math.random() * 2.5,
        isGold,
      };
    });

    setMeteors(newMeteors);
  }

  function generateBadges() {
    const labels = ["M", "E", "R", "N"];
    const count = 6;

    const newBadges = Array.from({ length: count }, (_, i) => ({
      id: i,
      label: labels[i % labels.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 18,
      opacity: 0.12 + Math.random() * 0.18,
      duration: 10 + Math.random() * 12,
      delay: Math.random() * 6,
    }));

    setBadges(newBadges);
  }

  // ✅ prevents hydration mismatch
  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none z-0 nebula-layer" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="nebula-layer" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.delay + "s",
          }}
        />
      ))}

      {meteors.map((m) => (
        <div
          key={m.id}
          className={`meteor animate-meteor ${m.isGold ? "meteor-gold" : ""}`}
          style={{
            width: m.size * 70 + "px",
            height: m.size + "px",
            left: m.x + "%",
            top: m.y + "%",
            animationDelay: m.delay + "s",
            animationDuration: m.animationDuration + "s",
            "--meteor-angle": `${m.angle}deg`,
            "--meteor-travel": `${m.travel}px`,
          }}
        />
      ))}

      {badges.map((b) => (
        <div
          key={b.id}
          className="mern-badge animate-float"
          style={{
            left: b.x + "%",
            top: b.y + "%",
            fontSize: b.size + "px",
            opacity: b.opacity,
            animationDuration: b.duration + "s",
            animationDelay: b.delay + "s",
          }}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}