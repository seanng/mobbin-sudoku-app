'use client';

import confetti from 'canvas-confetti';

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const confettiDuration = 3 * 1000;

const animateConfetti = () => {
  if (!window || typeof window === 'undefined')
    throw new Error('Window object not detected.');

  const confettiCanvas = document.getElementById(
    'confetti-canvas'
  ) as HTMLCanvasElement | null;

  if (!(confettiCanvas instanceof HTMLCanvasElement)) {
    throw new Error(
      'Confetti canvas is not an instance of Canvas. This is possibly a bug.'
    );
  }

  const customConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true,
  });

  const animationEnd = Date.now() + confettiDuration;

  (function frame() {
    const timeLeft = animationEnd - Date.now();

    customConfetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: Math.max(200, 500 * (timeLeft / confettiDuration)),
      colors: ['#fcff42'],
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() - 0.2,
      },
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
};

export { animateConfetti, confetti };
