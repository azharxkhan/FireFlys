document.querySelectorAll('.firefly').forEach(function(firefly) {
    firefly.style.setProperty('--duration', (Math.random() * 10 + 5) + 's');
    firefly.style.setProperty('--randomX1', Math.floor(Math.random() * window.innerWidth) + 'px');
    firefly.style.setProperty('--randomY1', Math.floor(Math.random() * window.innerHeight) + 'px');
    firefly.style.setProperty('--randomX2', Math.floor(Math.random() * window.innerWidth) + 'px');
    firefly.style.setProperty('--randomY2', Math.floor(Math.random() * window.innerHeight) + 'px');
    firefly.style.setProperty('--randomX3', Math.floor(Math.random() * window.innerWidth) + 'px');
    firefly.style.setProperty('--randomY3', Math.floor(Math.random() * window.innerHeight) + 'px');
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}