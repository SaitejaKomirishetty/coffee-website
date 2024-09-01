import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        const handleAnchorClick = (event) => {
            if (
                event.target.tagName === 'A' &&
                event.target.getAttribute('href').startsWith('#')
            ) {
                event.preventDefault();
                const targetId = event.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerHeight =
                        document.querySelector('header').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop+10 - headerHeight,
                        behavior: 'smooth',
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);
};

export default useSmoothScroll;
