// Handles the initial door animation and toggle interaction
// Adjust ANIMATION_DURATION_MS to speed up or slow down the swing.
const ANIMATION_DURATION_MS = 1200;
const INITIAL_DELAY_MS = 400;

document.addEventListener('DOMContentLoaded', () => {
    const fridge = document.querySelector('.fridge');
    const handle = document.querySelector('.stone-handle');
    const root = document.documentElement;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!fridge || !handle) return;

    const syncDoorSpeed = (durationMs) => {
        root.style.setProperty('--door-speed', `${durationMs}ms`);
    };

    const setDoorState = (isOpen) => {
        fridge.classList.toggle('open', isOpen);
        fridge.classList.toggle('closed', !isOpen);
        handle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    const shouldReduceMotion = () => motionPreference.matches;

    const openWithPreference = () => {
        const duration = shouldReduceMotion() ? 0 : ANIMATION_DURATION_MS;
        const delay = shouldReduceMotion() ? 0 : INITIAL_DELAY_MS;

        syncDoorSpeed(duration);

        setTimeout(() => {
            setDoorState(true);
        }, delay);
    };

    // Open the doors shortly after load (or immediately with reduced motion)
    openWithPreference();

    // Toggle open/close when the handle is clicked
    handle.addEventListener('click', () => {
        const isOpen = fridge.classList.contains('open');
        setDoorState(!isOpen);
    });

    // Optional: allow pressing Enter/Space when handle is focused
    handle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handle.click();
        }
    });

    // Update animation speed live if the user toggles reduced motion
    motionPreference.addEventListener('change', () => {
        syncDoorSpeed(shouldReduceMotion() ? 0 : ANIMATION_DURATION_MS);
    });
});
