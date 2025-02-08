import { useEffect, useRef } from "react";

const Waveform = () => {
  const canvasRef = useRef(null);
  const fakeData = useRef([]);

  useEffect(() => {
    if (!fakeData.current.length) {
      // Generate a static fake waveform once
      fakeData.current = Array.from({ length: 64 }, () => 1); // Values between 20-100 for realistic effect
    }
    drawWaveform(fakeData.current);
  }, []);

  const drawWaveform = (data) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#AD46FF"; // Green color

    const barWidth = 6;
    const gap = 2;
    data.forEach((value, index) => {
      const x = index * (barWidth + gap);
      const y = canvas.height / 2 - value / 2; // Centering bars
      ctx.fillRect(x, y, barWidth, value);
    });
  };

  return <canvas ref={canvasRef} height={100}></canvas>;
};

export default Waveform;
