const tocToggle = document.getElementById('sidebar-toggle');
const toc       = document.getElementById('sidebar');
const tocIcon   = document.getElementById('sidebar-toggle-icon');

tocToggle.addEventListener('click',() => {
    toc.classList.toggle('sidebar-collapsed');
    tocIcon.classList.toggle('sidebar-flipped');
});