import { useEffect, useRef } from 'react';

/* Floating particles canvas */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const particles = [];
    const COUNT = 55;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['85,111,247', '123,143,249', '56,189,248', '40,54,78'];

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.8 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.1,
        alphaDir: (Math.random() > 0.5 ? 1 : -1) * 0.003,
      });
    }

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += p.alphaDir;
        if (p.alpha > 0.65 || p.alpha < 0.05) p.alphaDir *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      /* draw subtle connecting lines between close particles */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(85,111,247,${0.10 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const AnimatedBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {/* Aurora blobs */}
    <div
      className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-25 animate-float"
      style={{
        background: 'radial-gradient(circle, rgba(61,85,232,0.8) 0%, rgba(85,111,247,0.4) 40%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
    <div
      className="absolute top-1/2 -right-48 w-[550px] h-[550px] rounded-full opacity-20 animate-float"
      style={{
        background: 'radial-gradient(circle, rgba(40,54,78,0.9) 0%, rgba(85,111,247,0.25) 40%, transparent 70%)',
        filter: 'blur(70px)',
        animationDelay: '2.5s',
        animationDuration: '9s',
      }}
    />
    <div
      className="absolute -bottom-32 left-1/3 w-[480px] h-[480px] rounded-full opacity-15 animate-float"
      style={{
        background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, rgba(85,111,247,0.2) 40%, transparent 70%)',
        filter: 'blur(80px)',
        animationDelay: '4s',
        animationDuration: '11s',
      }}
    />

    {/* Rotating ring accent */}
    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.05] animate-spin-slow"
      style={{
        border: '1px solid rgba(85,111,247,0.5)',
      }}
    />
    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full opacity-[0.04]"
      style={{
        border: '1px solid rgba(123,143,249,0.5)',
        animation: 'spin-slow 15s linear infinite reverse',
      }}
    />

    {/* Dot grid with radial fade */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(85,111,247,.9) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 70%)',
      }}
    />

    {/* Particle canvas */}
    <ParticleCanvas />
  </div>
);

export default AnimatedBackground;
