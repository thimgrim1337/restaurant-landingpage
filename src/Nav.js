const createNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('lobster');
  nav.appendChild(createUlList());

  return nav;
};

const createUlList = () => {
  const options = ['Home', 'Menu', 'Contact'];
  const ul = document.createElement('ul');
  options.forEach((option) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = option;
    li.appendChild(a);
    ul.appendChild(li);
  });
  return ul;
};

export default createNav;
