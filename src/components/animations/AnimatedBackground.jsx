import { useEffect, useRef } from 'react';


const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const particles = [];
    const COUNT = 50;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);


    const colors = ['99,102,241', '129,140,248', '241,242,244', '19,23,31'];

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x:       Math.random() * window.innerWidth,
        y:       Math.random() * window.innerHeight,
        r:       Math.random() * 1.6 + 0.3,
        color:   colors[Math.floor(Math.random() * colors.length)],
        speedX:  (Math.random() - 0.5) * 0.3,
        speedY:  (Math.random() - 0.5) * 0.3,
        alpha:   Math.random() * 0.45 + 0.08,
        alphaDir:(Math.random() > 0.5 ? 1 : -1) * 0.002,
      });
    }

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += p.alphaDir;
        if (p.alpha > 0.55 || p.alpha < 0.05) p.alphaDir *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });


      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.07 * (1 - dist / 100)})`;
            ctx.lineWidth   = 0.5;
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

    <div
      className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full opacity-[0.18] animate-float"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.9) 0%, rgba(79,70,229,0.4) 40%, transparent 70%)',
        filter: 'blur(70px)',
      }}
    />

    <div
      className="absolute top-1/2 -right-56 w-[580px] h-[580px] rounded-full opacity-[0.12] animate-float"
      style={{
        background: 'radial-gradient(circle, rgba(19,23,31,1) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)',
        filter: 'blur(80px)',
        animationDelay: '2.5s',
        animationDuration: '9s',
      }}
    />

    <div
      className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.10] animate-float"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(67,56,202,0.2) 40%, transparent 70%)',
        filter: 'blur(90px)',
        animationDelay: '4.5s',
        animationDuration: '12s',
      }}
    />


    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[860px] h-[860px] rounded-full opacity-[0.04] animate-spin-slow"
      style={{ border: '1px solid rgba(99,102,241,0.6)' }}
    />

    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[580px] h-[580px] rounded-full opacity-[0.035]"
      style={{
        border: '1px solid rgba(129,140,248,0.5)',
        animation: 'spin-slow 16s linear infinite reverse',
      }}
    />


    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:  'radial-gradient(circle, rgba(99,102,241,.9) 1px, transparent 1px)',
        backgroundSize:   '40px 40px',
        maskImage:        'radial-gradient(ellipse at center, black 20%, transparent 70%)',
      }}
    />

    <ParticleCanvas />
  </div>
);

export default AnimatedBackground;
