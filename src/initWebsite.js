import createHeader from './Header';
import { createMain, replaceContent } from './Main';
import createFooter from './Footer';

const initWebsite = () => {
  const website = document.querySelector('.content');
  website.appendChild(createHeader());
  website.appendChild(createMain());
  website.appendChild(createFooter());

  const links = document.querySelectorAll('nav li');
  links.forEach((link) =>
    link.addEventListener('click', () => {
      replaceContent(link);
    })
  );
};

export default initWebsite;
