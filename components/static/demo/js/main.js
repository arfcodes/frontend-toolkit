/**
 * Main demo scripts
 */
import navs from '../../../../assets/data/navigation.json';
import AlertLib from '../../src/js/components/Alert';

(() => {
  //
  // Load Libs
  //
  // Alert
  new AlertLib().init();

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
    if (item.type === 'all' || item.type === 'static') {
      const nodeLi = document.createElement('LI');
      const nodeA = document.createElement('A');
      const nodeTxt = document.createTextNode(item.label);

      nodeA.setAttribute('href', `${rootUrl}/${item.path}.html`);
      nodeA.addEventListener('click', (evt) => evt.stopPropagation());
      nodeLi.setAttribute('data-id', item.id);

      nodeA.appendChild(nodeTxt);
      nodeLi.appendChild(nodeA);

      // Add submenu
      if (typeof item.subs !== 'undefined' && item.subs.length > 0) {
        const nodeSubsUl = document.createElement('UL');
        nodeSubsUl.classList.add('d-menu__subs');

        item.subs.forEach((itemSub) => {
          const nodeSubsLi = document.createElement('LI');
          const nodeSubsA = document.createElement('A');
          const nodeSubsTxt = document.createTextNode(itemSub.label);

          nodeSubsA.setAttribute('href', `${rootUrl}/${itemSub.path}.html`);
          nodeSubsA.addEventListener('click', (evt) => evt.stopPropagation());
          nodeSubsLi.setAttribute('data-id', itemSub.id);

          nodeSubsA.appendChild(nodeSubsTxt);
          nodeSubsLi.appendChild(nodeSubsA);
          nodeSubsUl.appendChild(nodeSubsLi);
        });

        nodeLi.appendChild(nodeSubsUl);
      }

      menuEl.appendChild(nodeLi);
    }
  });
})();
