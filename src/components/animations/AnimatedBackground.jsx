const AnimatedBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-primary">
    <div
      className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full opacity-[0.03]"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 60%)',
        filter: 'blur(100px)',
      }}
    />
    
    <div
      className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full opacity-[0.05]"
      style={{
        background: 'radial-gradient(circle, rgba(16,185,129,0.8) 0%, transparent 60%)',
        filter: 'blur(120px)',
      }}
    />

    <div
      className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full opacity-[0.02]"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)',
        filter: 'blur(120px)',
      }}
    />
    
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }}
    />
  </div>
);

export default AnimatedBackground;
