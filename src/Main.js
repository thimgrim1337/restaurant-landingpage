import restaurant from './assets/img/restaurant.jpg';

const createMain = () => {
  const main = document.createElement('main');
  main.appendChild(createImg());
  main.appendChild(createContent());

  return main;
};

const createImg = () => {
  const img = document.createElement('img');
  img.src = restaurant;
  return img;
};

const createContent = () => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.classList.add('lobster');
  h2.textContent = 'Welcome';

  p.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus asperiores maiores iure necessitatibus aliquid doloremque, illo deleniti magnam dicta, libero ipsam et sunt nemo, eaque nam molestiae perferendis incidunt optio ipsum. Debitis delectus obcaecati excepturi eos asperiores deserunt inventore autem corporis impedit, aliquam, unde quasi tenetur. Mollitia placeat dolore nemo.';

  div.classList.add('welcome');
  div.appendChild(h2);
  div.appendChild(p);

  return div;
};

export default createMain;
