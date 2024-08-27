document.addEventListener('DOMContentLoaded', () => {
  const footerYearElements = document.querySelectorAll('.footer-year');
  const currentYear = new Date().getFullYear();

  footerYearElements.forEach(element => {
    element.textContent = currentYear;
  });


});
