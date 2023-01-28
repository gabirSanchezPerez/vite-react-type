window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

// implemente ocultar Menu en tablets and mobile
window.onload = function() {
    if ( document.body.clientWidth < 992 ) {
        let anchors = document.getElementsByTagName('a');
        for(var i = 0; i < anchors.length; i++) {
            let anchor = anchors[i];
            console.log(anchor.className);
            if (("nav-link").match(anchor.className)) {
                anchor.onclick = function() {
                    document.body.classList.toggle('sb-sidenav-toggled');
                    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
                }
            }
        }
    }
}
