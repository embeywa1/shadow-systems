const MissionLog = () => {
  return (
    <section id="mission" className="relative py-24 px-4 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-xs text-primary mb-6 tracking-[0.5em]">[MISSION_LOG]</div>

        <div className="glassmorphism rounded-lg p-8 sm:p-12">
          <p className="text-lg sm:text-xl text-card-foreground leading-relaxed mb-6">
            We don't build for applause.{" "}
            <span className="text-primary text-glow">We engineer precision over noise.</span>
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            Our systems are invisible by design — powering the infrastructure that scales businesses globally
            without ever needing to be seen. Every line of code is a calculated move.
            Every deployment is a silent victory.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We operate in the space between{" "}
            <span className="text-primary">ambition</span> and{" "}
            <span className="text-primary">execution</span> —
            where invisible technology creates visible results.
          </p>
        </div>

        <div className="mt-6 text-xs text-muted-foreground">
          // STATUS: MISSION_ACTIVE | PRIORITY: MAXIMUM
        </div>
      </div>
    </section>
  );
};

export default MissionLog;
