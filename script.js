const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name').trim();
  const vehicle = form.get('vehicle').trim();
  const service = form.get('service');
  const material = form.get('material');
  const details = form.get('details').trim();
  const message = `Hello Stitch & Style, I would like a quotation.\\nName: ${name}\\nVehicle: ${vehicle}\\nService: ${service}\\nMaterial preference: ${material}\\nAdditional details: ${details || 'Not provided'}`;
  window.open(`https://wa.me/254707001052?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});