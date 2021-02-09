import React from "react";

import ParticleEffectButton from "react-particle-effect-button";

export const ParticleEffect = ({ content, hidden }) => {
  return (
    <ParticleEffectButton
      color='#2a292c'
      hidden={hidden}
      duration={1500}
      direction='bottom'
      type='rectangle'
      style='stroke'
      size={15}
    >
      {content}
    </ParticleEffectButton>
  );
};
