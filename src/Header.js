const createHeader = () => {
  const header = document.createElement('header');
  header.appendChild(createTitle('Best Burgers'));
  return header;
};

const createTitle = (title) => {
  const h1 = document.createElement('h1');
  h1.classList.add('lobster');
  h1.textContent = title;
  return h1;
};

export default createHeader;
