// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".nav-dot");
const sliderContent = document.getElementById("sliderContent");
const totalSlides = slides.length;

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  const translateX = -currentSlide * (280 + 20);
  sliderContent.style.transform = `translateX(${translateX}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

setInterval(nextSlide, 4000);

// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "🌙";
  }
}

// Language translations
const translations = {
  fr: {
    home: "Accueil",
    services: "Services",
    portfolio: "Portfolio",
    about: "À propos",
    contact: "Contact",
    welcomeTitle: "WELCOME TO ALGOPROD",
    subtitle: "Expert MQL4/MQL5 Trading Tools",
    ctaButton: "Démarrer Maintenant →",
    service1: "Expert Advisors<br>MQL4/MQL5",
    service2: "Indicateurs<br>Personnalisés",
    service3: "Scripts de<br>Trading",
    service4: "Optimisation<br>Stratégies",
    service5: "Backtesting<br>Avancé",
    service6: "Support<br>Technique",
    sliderTitle: "Nos Outils de Trading",
    tool1: "EA Scalping<br>Haute Fréquence",
    tool2: "Système de<br>Grid Trading",
    tool3: "Indicateur<br>Multi-Timeframe",
    tool4: "Robot de<br>Copy Trading",
    tool5: "Panel de<br>Gestion Risque",
    nav1: "Documentation",
    nav2: "Téléchargements",
    nav3: "Formation",
    nav4: "Community",
    nav5: "Support",
    footer: "Copyright 2025 - AlgoProd - Tous droits réservés",
  },
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    welcomeTitle: "WELCOME TO ALGOPROD",
    subtitle: "Expert MQL4/MQL5 Trading Tools",
    ctaButton: "Get Started Now →",
    service1: "Expert Advisors<br>MQL4/MQL5",
    service2: "Custom<br>Indicators",
    service3: "Trading<br>Scripts",
    service4: "Strategy<br>Optimization",
    service5: "Advanced<br>Backtesting",
    service6: "Technical<br>Support",
    sliderTitle: "Our Trading Tools",
    tool1: "Scalping EA<br>High Frequency",
    tool2: "Grid Trading<br>System",
    tool3: "Multi-Timeframe<br>Indicator",
    tool4: "Copy Trading<br>Robot",
    tool5: "Risk Management<br>Panel",
    nav1: "Documentation",
    nav2: "Downloads",
    nav3: "Training",
    nav4: "Community",
    nav5: "Support",
    footer: "Copyright 2025 - AlgoProd - All rights reserved",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    portfolio: "Portafolio",
    about: "Acerca de",
    contact: "Contacto",
    welcomeTitle: "BIENVENIDO A ALGOPROD",
    subtitle: "Herramientas de Trading Expertas MQL4/MQL5",
    ctaButton: "Comenzar Ahora →",
    service1: "Expert Advisors<br>MQL4/MQL5",
    service2: "Indicadores<br>Personalizados",
    service3: "Scripts de<br>Trading",
    service4: "Optimización de<br>Estrategias",
    service5: "Backtesting<br>Avanzado",
    service6: "Soporte<br>Técnico",
    sliderTitle: "Nuestras Herramientas de Trading",
    tool1: "EA Scalping<br>Alta Frecuencia",
    tool2: "Sistema de<br>Grid Trading",
    tool3: "Indicador<br>Multi-Timeframe",
    tool4: "Robot de<br>Copy Trading",
    tool5: "Panel de<br>Gestión de Riesgo",
    nav1: "Documentación",
    nav2: "Descargas",
    nav3: "Formación",
    nav4: "Comunidad",
    nav5: "Soporte",
    footer: "Copyright 2025 - AlgoProd - Todos los derechos reservados",
  },
};

// Language change functionality
function changeLanguage(lang) {
  const translation = translations[lang];
  if (!translation) return;

  // Update navigation
  document.querySelector('a[href="#home"]').textContent = translation.home;
  document.querySelector('a[href="#services"]').textContent =
    translation.services;
  document.querySelector('a[href="#portfolio"]').textContent =
    translation.portfolio;
  document.querySelector('a[href="#about"]').textContent = translation.about;
  document.querySelector('a[href="#contact"]').textContent =
    translation.contact;

  // Update header content
  document.querySelector(".welcome-text").textContent =
    translation.welcomeTitle;
  document.querySelector(".subtitle").textContent = translation.subtitle;
  document.querySelector(".cta-button").innerHTML = translation.ctaButton;

  // Update main grid services
  const gridItems = document.querySelectorAll(".main-grid .grid-item span");
  gridItems[0].innerHTML = translation.service1;
  gridItems[1].innerHTML = translation.service2;
  gridItems[2].innerHTML = translation.service3;
  gridItems[3].innerHTML = translation.service4;
  gridItems[4].innerHTML = translation.service5;
  gridItems[5].innerHTML = translation.service6;

  // Update slider
  document.querySelector(".slider-title").textContent = translation.sliderTitle;
  const slides = document.querySelectorAll(".slide span");
  slides[0].innerHTML = translation.tool1;
  slides[1].innerHTML = translation.tool2;
  slides[2].innerHTML = translation.tool3;
  slides[3].innerHTML = translation.tool4;
  slides[4].innerHTML = translation.tool5;

  // Update bottom navigation
  const bottomItems = document.querySelectorAll(".bottom-item");
  bottomItems[0].textContent = translation.nav1;
  bottomItems[1].textContent = translation.nav2;
  bottomItems[2].textContent = translation.nav3;
  bottomItems[3].textContent = translation.nav4;
  bottomItems[4].textContent = translation.nav5;

  // Update footer
  document.querySelector(".footer").textContent = translation.footer;

  // Store current language
  localStorage.setItem("algoprod-language", lang);
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Load saved language or default to French
  const savedLanguage = localStorage.getItem("algoprod-language") || "fr";
  document.querySelector(".lang-toggle").value = savedLanguage;
  if (savedLanguage !== "fr") {
    changeLanguage(savedLanguage);
  }
});

// Click animations
document
  .querySelectorAll(".grid-item, .bottom-item, .cta-button")
  .forEach((item) => {
    item.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
