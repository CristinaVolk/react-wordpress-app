import React from "react";

import ParticleEffectButton from "react-particle-effect-button";

export const ParticleEffect = ({ content, hidden }) => {
  return (
    <ParticleEffectButton
      color='#2a292c'
      hidden={hidden}
      duration={1500}
      speed={1}
      easing='easeInOutCubic'
      direction='bottom'
    >
      {content}
    </ParticleEffectButton>
  );
};
