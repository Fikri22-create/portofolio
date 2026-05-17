const AnimatedBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent/10 blur-3xl animate-float" />
    <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-accent-blue/10 blur-3xl animate-float"
      style={{ animationDelay: '2s' }} />
    <div className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }} />
  </div>
);

export default AnimatedBackground;
