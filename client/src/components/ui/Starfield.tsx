import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const numStars = 800; // Optimal performance
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isMoving = false;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars with random 3D space depth (z-axis)
    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          size: Math.random() * 1.5 + 0.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
        });
      }
    };

    // Track mouse position with easing
    const onMouseMove = (e: MouseEvent) => {
      isMoving = true;
      mouse.targetX = e.clientX - canvas.width / 2;
      mouse.targetY = e.clientY - canvas.height / 2;
    };

    const onMouseLeave = () => {
      isMoving = false;
    };

    // Animation Loop
    const draw = () => {
      // Clear canvas with deep space shade
      ctx.fillStyle = '#05050A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation (easing)
      if (isMoving) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
      } else {
        mouse.x += (0 - mouse.x) * 0.02;
        mouse.y += (0 - mouse.y) * 0.02;
      }

      // Draw and project stars onto 2D screen
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        // Move star closer in 3D space (decrease z depth)
        star.z -= 0.8;

        // Reset star if it goes beyond screen view
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }

        // Project 3D coordinates onto 2D viewport (center-relative)
        const k = 128.0 / star.z;
        // Apply interactive mouse displacement (parallax reaction)
        const px = (star.x - mouse.x * 0.15) * k + canvas.width / 2;
        const py = (star.y - mouse.y * 0.15) * k + canvas.height / 2;

        // Ensure star is inside screen viewport
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = star.size * k * 0.8;
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.1, size), 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none block bg-[#05050A]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default Starfield;
