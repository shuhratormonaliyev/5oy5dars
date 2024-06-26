document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
document.getElementById('englishButton').addEventListener('click', () => {
    document.getElementById('headline').textContent = 'Unlock the Power of Creativity with Figma!';
    document.getElementById('paragraph').textContent = 'Ready to elevate your design game?';
    document.getElementById('ctaButton').textContent = 'Try Figma now';
});

document.getElementById('uzbekButton').addEventListener('click', () => {
    document.getElementById('headline').textContent = 'Figma bilan yaratuvchanlik kuchini oching!';
    document.getElementById('paragraph').textContent = 'Dizayn darajangizni oshirishga tayyormisiz?';
    document.getElementById('ctaButton').textContent = 'Hozir Figma-ni sinab koring';
});




document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.getElementById('image').src = 'dark-mode-image.png';
});

document.getElementById('person').addEventListener('click', function() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.getElementById('image').src = 'light-mode-image.png';
});
