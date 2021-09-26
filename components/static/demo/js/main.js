/**
 * Main demo scripts
 */
import navs from '../../../../assets/data/navigation.json';

(() => {
  //
  // Open/Close menu
  //
  const rootEl = document.querySelector('.d-menu');
  const menuRootEl = rootEl.querySelector('.d-menu__content__main');

  // Open
  rootEl.querySelector('.d-menu__button').addEventListener('click', (evt) => {
    evt.stopPropagation();
    rootEl.setAttribute('data-state', 'open');
  });

  // Close
  rootEl
    .querySelector('.d-menu__close button')
    .addEventListener('click', (evt) => {
      evt.stopPropagation();
      rootEl.setAttribute('data-state', 'close');
    });

  // Close body
  document.querySelector('*').addEventListener('click', () => {
    rootEl.setAttribute('data-state', 'close');
  });

  //
  // Build navigation
  //

  // Get root url
  const dataUrl = new URL(window.location.href);
  const rootUrl = dataUrl.origin;
  const menuEl = menuRootEl.querySelector('ul');

  navs.forEach((item) => {
    const nodeLi = document.createElement('LI');
    const nodeA = document.createElement('A');
    const nodeTxt = document.createTextNode(item.label);

    nodeA.setAttribute('href', `${rootUrl}/${item.id}.html`);
    nodeA.setAttribute('data-id', item.id);
    nodeA.addEventListener('click', (evt) => evt.stopPropagation());

    nodeA.appendChild(nodeTxt);
    nodeLi.appendChild(nodeA);
    menuEl.appendChild(nodeLi);
  });
})();
