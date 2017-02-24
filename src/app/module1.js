export const test = 'test 123';

const createH1 = (text, id, className) => {
  const h1 = document.createElement('h1');

  h1.id = id || '';
  h1.classList.add(className || '');
  h1.innerHTML = text;

  return h1;
};

export const element1 = createH1(test, 'test1', 'intros');
export const element2 = createH1('stop', 'test2', 'intros');
