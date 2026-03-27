"use client";

import { useEffect, useState } from "react";

function generateStars() {
  const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
  }));
}

function generateMeteors() {
  const travel = Math.max(window.innerWidth, window.innerHeight) * 1.1;
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: -20 + Math.random() * 140,
    y: -20 + Math.random() * 60,
    angle: 200 + Math.random() * 40,
    travel,
    delay: Math.random() * 4,
    animationDuration: 2.5 + Math.random() * 2.5,
    isGold: Math.random() < 0.05,
  }));
}

function generateBadges() {
  const labels = ["M", "E", "R", "N"];
  return Array.from({ length: 6 }, (_, i) => ({
    id: i,
    label: labels[i % labels.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 10 + Math.random() * 18,
    opacity: 0.12 + Math.random() * 0.18,
    duration: 10 + Math.random() * 12,
    delay: Math.random() * 6,
  }));
}

function generateAll() {
  return {
    stars: generateStars(),
    meteors: generateMeteors(),
    badges: generateBadges(),
  };
}

export default function StarsBackground() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const onResize = () => setData(generateAll());
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!data) {
    return <div className="fixed inset-0 pointer-events-none z-0 nebula-layer" />;
  }

  const { stars, meteors, badges } = data;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="nebula-layer" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {meteors.map((m) => (
        <div
          key={m.id}
          className={`meteor animate-meteor${m.isGold ? " meteor-gold" : ""}`}
          style={{
            width: `${m.size * 70}px`,
            height: `${m.size}px`,
            left: `${m.x}%`,
            top: `${m.y}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.animationDuration}s`,
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
            left: `${b.x}%`,
            top: `${b.y}%`,
            fontSize: `${b.size}px`,
            opacity: b.opacity,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}
