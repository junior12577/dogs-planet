let index = 0;
const slides = document.querySelector('.slides');
const captions = [
  "Creche: Diversão, cuidado e muito amor enquanto você trabalha!",
  "Hotel: Enquanto você viaja, seu doguinho se diverte com amor e cuidado!",
  "Veterinaria: Saúde, carinho e atenção para o seu melhor amigo.",
  "Banho e Tosa: Seu pet limpinho, cheiroso e ainda mais feliz!"
];
const captionEl = document.getElementById('caption');
const totalSlides = captions.length;

function showSlide() {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 1034}px)`;
  captionEl.textContent = captions[index];
}

setInterval(showSlide, 3000);
