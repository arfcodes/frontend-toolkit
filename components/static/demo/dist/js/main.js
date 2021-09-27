(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "id": "box",
    "path": "box",
    "label": "Box"
  },
  {
    "id": "button",
    "path": "button",
    "label": "Button"
  },
  {
    "id": "card",
    "path": "card",
    "label": "Card"
  },
  {
    "id": "layout",
    "path": "layout",
    "label": "Layout",
    "subs": [
      {
        "id": "layout-container",
        "path": "layout/container",
        "label": "Container"
      },
      {
        "id": "layout-sidebar",
        "path": "layout/sidebar",
        "label": "Sidebar"
      },
      {
        "id": "layout-switcher",
        "path": "layout/switcher",
        "label": "Switcher"
      },
      {
        "id": "layout-cluster",
        "path": "layout/cluster",
        "label": "Cluster"
      },
      {
        "id": "layout-cover",
        "path": "layout/cover",
        "label": "Cover"
      },
      {
        "id": "layout-frame",
        "path": "layout/frame",
        "label": "Frame"
      }
    ]
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
    nodeA.setAttribute('href', "".concat(rootUrl, "/").concat(item.path, ".html"));
    nodeA.addEventListener('click', function (evt) {
      return evt.stopPropagation();
    });
    nodeLi.setAttribute('data-id', item.id);
    nodeA.appendChild(nodeTxt);
    nodeLi.appendChild(nodeA); // Add submenu

    if (typeof item.subs !== 'undefined' && item.subs.length > 0) {
      var nodeSubsUl = document.createElement('UL');
      nodeSubsUl.classList.add('d-menu__subs');
      item.subs.forEach(function (itemSub) {
        var nodeSubsLi = document.createElement('LI');
        var nodeSubsA = document.createElement('A');
        var nodeSubsTxt = document.createTextNode(itemSub.label);
        nodeSubsA.setAttribute('href', "".concat(rootUrl, "/").concat(itemSub.path, ".html"));
        nodeSubsA.addEventListener('click', function (evt) {
          return evt.stopPropagation();
        });
        nodeSubsLi.setAttribute('data-id', itemSub.id);
        nodeSubsA.appendChild(nodeSubsTxt);
        nodeSubsLi.appendChild(nodeSubsA);
        nodeSubsUl.appendChild(nodeSubsLi);
      });
      nodeLi.appendChild(nodeSubsUl);
    }

    menuEl.appendChild(nodeLi);
  });
})();

},{"../../../../assets/data/navigation.json":1}]},{},[2]);
