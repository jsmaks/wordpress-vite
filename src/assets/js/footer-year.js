const footerYearElement = document.querySelector('.footer-year');
if (footerYearElement) {
  const currentYear = new Date().getFullYear();
  footerYearElement.textContent = currentYear ;
}
