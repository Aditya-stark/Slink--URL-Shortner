const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const targetElement = event.target;

    if (targetElement !== sidebar && !sidebar.contains(targetElement) && !targetElement.matches('#sidebar-toggle')) {
        sidebar.classList.remove('active');
    }
});