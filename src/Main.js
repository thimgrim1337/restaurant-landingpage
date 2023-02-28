import restaurantImg from './assets/img/restaurant.jpg';
import burgerImg from './assets/img/burger.jpg';
import map from './assets/img/map.png';
import createNav from './Nav';

const createMain = () => {
  const main = document.createElement('main');

  main.appendChild(createNav());
  main.appendChild(renderContent());

  return main;
};

const createHomeContent = () => {
  const mainDiv = document.createElement('div');
  const subDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.classList.add('lobster');
  h2.textContent = 'Welcome';

  p.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus asperiores maiores iure necessitatibus aliquid doloremque, illo deleniti magnam dicta, libero ipsam et sunt nemo, eaque nam molestiae perferendis incidunt optio ipsum. Debitis delectus obcaecati excepturi eos asperiores deserunt inventore autem corporis impedit, aliquam, unde quasi tenetur. Mollitia placeat dolore nemo.';

  subDiv.append(h2, p);
  mainDiv.classList.add('welcome', 'frame');
  mainDiv.append(createImg(restaurantImg), subDiv);

  return mainDiv;
};

const createMenuContent = () => {
  const menu = document.createElement('div');
  const h2 = document.createElement('h2');
  const burgers = document.createElement('div');

  menu.classList.add('menu', 'frame');
  h2.classList.add('lobster');
  h2.textContent = 'Meet our tasty burgers';
  burgers.classList.add('burgers');

  for (let i = 0; i < 6; i++) {
    const burger = document.createElement('div');
    const img = createImg(burgerImg);
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');

    burger.classList.add('burger');
    h3.classList.add('lobster');
    h3.textContent = 'Double Burger';
    ul.textContent = 'Ingredients';
    for (let i = 0; i < 4; i++) {
      const li = document.createElement('li');
      li.textContent = 'Lorem ipsum';
      ul.appendChild(li);
    }
    burger.append(img, h3, ul);
    burgers.appendChild(burger);
  }

  menu.append(h2, burgers);

  return menu;
};

const createContactContent = () => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const img = createImg(map);

  h2.textContent = 'Meet us';
  h2.classList.add('lobster');
  p.innerHTML =
    'Unknown street 2/1 <br/> 09000 Płock, Poland <br/> Tel.: +48 777 777 777 <br/>bestburgers@burgers.com';
  div.classList.add('contact', 'frame');

  div.append(img, h2, p);

  return div;
};

const renderContent = (page = 'Home') => {
  if (page == 'Home') return createHomeContent();
  else if (page == 'Menu') return createMenuContent();
  else if (page == 'Contact') return createContactContent();
  else return;
};

const replaceContent = (page) => {
  const main = document.querySelector('main');
  const mainContent = document.querySelector('.frame');
  main.removeChild(mainContent);
  main.appendChild(renderContent(page.textContent));
};

const createImg = (src) => {
  const img = document.createElement('img');
  img.src = src;
  return img;
};

export { createMain, replaceContent };
