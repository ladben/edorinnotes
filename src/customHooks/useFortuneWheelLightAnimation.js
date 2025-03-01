import { useRef } from "react";

const useFortuneWheelLightAnimation = () => {
  let stepInterval = useRef(null);
  let timeouts = useRef([]);

  const clearAnimation = (lights) => {
    console.log('clear animation ran with ', lights);
    if (stepInterval.current) {
      clearInterval(stepInterval.current);
      stepInterval.current = null;
    }
    timeouts.current.forEach(timeout => clearTimeout(timeout));
    timeouts.current = [];
    lights.forEach(light => light.classList.remove('active'));
  };

  const animations = {};

  const none = (lights) => {
    console.log('hook none: ', lights);
  }

  const allAround = (lights) => {
    console.log('hook allAround: ', lights);

    if (!Array.isArray(lights) || lights.length !== 16) {
      console.error("Expected an array with exactly 16 elements.");
      return;
    }

    const reversedLights = [...lights].reverse();
    let step = 0;

    // Immediately activate the first light
    const firstLight = reversedLights[step];
    firstLight.classList.add('active');
    step = (step + 1) % 16;
    timeouts.current.push(setTimeout(() => {
      firstLight.classList.remove('active');
    }, 300));

    // Start the step interval after the first light turns off
    stepInterval.current = setInterval(() => {
        const light = reversedLights[step];
        light.classList.add('active');

        timeouts.current.push(setTimeout(() => {
            light.classList.remove('active');
        }, 300));

        step = (step + 1) % 16;
    }, 60);
  }

  animations.clearAnimation = clearAnimation;
  animations.none = none;
  animations.allAround = allAround;

  return animations;
}
 
export default useFortuneWheelLightAnimation;