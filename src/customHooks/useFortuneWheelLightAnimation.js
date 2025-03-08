import { useRef } from "react";

const useFortuneWheelLightAnimation = () => {
  let stepInterval = useRef(null);
  let timeouts = useRef([]);

  const clearAnimation = (lights) => {
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
    return lights
  }

  const allAround = (lights) => {
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

  const allUp = (lights) => {
    lights.forEach((light) => {
      light.classList.add('active');
    });
  }

  animations.clearAnimation = clearAnimation;
  animations.none = none;
  animations.allAround = allAround;
  animations.allUp = allUp;

  return animations;
}
 
export default useFortuneWheelLightAnimation;