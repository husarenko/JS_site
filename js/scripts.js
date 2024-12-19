function loadScript(url, callback) {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;

    script.onload = function() {
        if (callback) {
            callback();
        }
    };

    document.head.appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function() {
    console.log('> bootstrap is connected!');
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('visible', isOpen);
}
