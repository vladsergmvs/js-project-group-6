import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainer = document.querySelector('.faq-list'),
  accordion = new Accordion(accordionContainer);

const accordionButtons =
  accordionContainer.querySelectorAll('.faq-item-trigger');
console.log([...accordionButtons]);

[...accordionButtons].map((currentButton, index) => {
  currentButton.addEventListener('click', () => accordion.toggle(index));
});
