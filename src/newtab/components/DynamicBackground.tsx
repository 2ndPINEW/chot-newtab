'use client';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import { useBackgroundColor } from '../../app/hooks/useBackgroundColor';
import { useWeatherParticle } from '../../app/hooks/useWeatherParticle';

export const DynamicBackground = () => {
  const [backgroundColor] = useBackgroundColor();
  const [particles] = useWeatherParticle();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100dvw',
        height: '100dvh',
        backgroundColor,
        zIndex: -1,
        transition: 'background-color 30s ease',
      }}
    >
      <Particles
        id="background-particles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          particles,
          detectRetina: true,
        }}
      />
    </div>
  );
};
