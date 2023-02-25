import createHeader from './Header';
import createMain from './Main';
import createFooter from './Footer';

const initWebsite = () => {
  const website = document.querySelector('.content');
  website.appendChild(createHeader());
  website.appendChild(createMain());
  website.appendChild(createFooter());
};

export default initWebsite;
