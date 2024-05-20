document.getElementById('detonate').addEventListener('click', () => {
    const bomb = document.getElementById('bomb');
    const explosion = document.getElementById('explosion');

    // Hide the bomb
    bomb.style.display = 'none';

    // Show and animate the explosion
    explosion.style.transform = 'scale(3)';
    explosion.style.opacity = '1';

    // Reset the explosion after animation
    setTimeout(() => {
        explosion.style.transform = 'scale(0)';
        explosion.style.opacity = '0';
        bomb.style.display = 'block';
    }, 1000);
});
