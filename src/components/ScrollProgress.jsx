import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            try {
                const currentScroll = window.scrollY;
                const docHeight = document.documentElement.scrollHeight;
                const winHeight = window.innerHeight;

                if (!docHeight || !winHeight || docHeight <= winHeight) {
                    setProgress(0);
                    return;
                }

                const scrollHeight = docHeight - winHeight;
                const val = (currentScroll / scrollHeight) * 100;
                setProgress(Number.isFinite(val) ? val : 0);
            } catch (e) { setProgress(0); }
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 z-[150] shadow-[0_0_10px_var(--class-color)] transition-all duration-300 ease-out"
            style={{
                width: `${progress}%`,
                background: 'var(--class-color, #00FF96)'
            }}
        />
    );
};

export default ScrollProgress;
