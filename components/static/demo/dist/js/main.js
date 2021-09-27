(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "id": "box",
    "label": "Box"
  },
  {
    "id": "button",
    "label": "Button"
  },
  {
    "id": "card",
    "label": "Card"
  },
  {
    "id": "layout",
    "label": "Layout"
  }
]
},{}],2:[function(require,module,exports){
"use strict";

var _navigation = _interopRequireDefault(require("../../../../assets/data/navigation.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Main demo scripts
 */
(function () {
  //
  // Open/Close menu
  //
  var rootEl = document.querySelector('.d-menu');
  var menuRootEl = rootEl.querySelector('.d-menu__content__main'); // Open

  rootEl.querySelector('.d-menu__button').addEventListener('click', function (evt) {
    evt.stopPropagation();
    rootEl.setAttribute('data-state', 'open');
  }); // Close

  rootEl.querySelector('.d-menu__close button').addEventListener('click', function (evt) {
    evt.stopPropagation();
    rootEl.setAttribute('data-state', 'close');
  }); // Close body

  document.querySelector('*').addEventListener('click', function () {
    rootEl.setAttribute('data-state', 'close');
  }); //
  // Build navigation
  //
  // Get root url

  var dataUrl = new URL(window.location.href);
  var rootUrl = dataUrl.origin;
  var menuEl = menuRootEl.querySelector('ul');

  _navigation["default"].forEach(function (item) {
    var nodeLi = document.createElement('LI');
    var nodeA = document.createElement('A');
    var nodeTxt = document.createTextNode(item.label);
    nodeA.setAttribute('href', "".concat(rootUrl, "/").concat(item.id, ".html"));
    nodeA.setAttribute('data-id', item.id);
    nodeA.addEventListener('click', function (evt) {
      return evt.stopPropagation();
    });
    nodeA.appendChild(nodeTxt);
    nodeLi.appendChild(nodeA);
    menuEl.appendChild(nodeLi);
  });
})();

},{"../../../../assets/data/navigation.json":1}]},{},[2]);
