const toggleButton = document.getElementById('theme-btn');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    toggleButton.setAttribute('aria-pressed', String(isDark));
    toggleButton.lastChild.textContent = isDark ? ' Ljust tema' : ' Mörkt tema';
});