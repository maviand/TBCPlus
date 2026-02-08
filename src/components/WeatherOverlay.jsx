import React, { useEffect, useRef } from 'react';

const WeatherOverlay = ({ type = 'none' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (type === 'none') return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: type === 'rain' ? Math.random() * 15 + 10 : Math.random() * 2 + 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = type === 'rain' ? '#a4c2f4' : '#fff';

            particles.forEach(p => {
                ctx.beginPath();
                if (type === 'rain') {
                    ctx.rect(p.x, p.y, 1, p.speed); // Rain drop
                } else if (type === 'snow' || type === 'ash') {
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); // Snow flake/Ash
                }
                ctx.fillStyle = type === 'ash' ? `rgba(100, 100, 100, ${p.opacity})` : `rgba(200, 200, 255, ${p.opacity})`;
                ctx.fill();

                p.y += p.speed;
                if (p.y > canvas.height) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        }
    }, [type]);

    if (type === 'none') return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[50] opacity-30"
        />
    );
};

export default WeatherOverlay;
