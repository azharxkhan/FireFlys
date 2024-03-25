document.querySelectorAll('.firefly').forEach(function(firefly) {
    firefly.style.setProperty('--duration', (Math.random() * 40 + 15) + 's');
    for (let i = 1; i <= 10; i++) {
        firefly.style.setProperty('--randomX' + i, Math.floor(Math.random() * window.innerWidth) + 'px');
        firefly.style.setProperty('--randomY' + i, Math.floor(Math.random() * window.innerHeight) + 'px');
    }
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
