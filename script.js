const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    sections.forEach(sec => sec.classList.remove('active'));

    const id = this.id.replace('Link', '');
    document.getElementById(id).classList.add('active');
  });
});


window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact').classList.add('active');
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const desc = btn.parentElement.nextElementSibling;
    const isVisible = desc.style.display === 'block';

    document.querySelectorAll('.project-description').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.toggle-btn').forEach(b => b.textContent = '➕');

    if (!isVisible) {
      desc.style.display = 'block';
      btn.textContent = '➖';
    }
  });
});
