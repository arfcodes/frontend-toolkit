/**
 * Demo Menu
 */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import IconMenu from '@rootImages/icon__menu.svg';
import IconClose from '@rootImages/icon__close.svg';
import NavData from '@rootData/navigation.json';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnHover, setOnHover] = useState(false);
  const onHoverRef = useRef();

  onHoverRef.current = isOnHover;

  const onBodyClick = () => {
    if (!onHoverRef.current) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onBodyClick);

    return function cleanup() {
      document.removeEventListener('click', onBodyClick);
    };
  }, []);

  return (
    <div
      className="d-menu"
      data-state={isOpen ? 'open' : 'close'}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      <div className="d-menu__trigger">
        <button
          className="d-menu__button"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            setIsOpen(true);
          }}
        >
          <i className="d-menu__button__icon">
            <img src={IconMenu} alt="Menu" />
          </i>
          <strong className="d-menu__button__label">Menu</strong>
        </button>
      </div>
      <div className="d-menu__content">
        <div className="d-menu__content__inner">
          <div className="d-menu__close">
            <button
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                setIsOpen(false);
              }}
            >
              <img src={IconClose} alt="Close" />
            </button>
          </div>
          <div className="d-menu__content__main">
            <ul>
              {NavData.map((item) => {
                const subs =
                  typeof item.subs !== 'undefined' && item.subs.length > 0
                    ? item.subs
                    : false;

                if (item.type === 'all' || item.type === 'react') {
                  return (
                    <li key={`nav-${item.id}`} data-id={item.id}>
                      <NavLink
                        className="d-menu__link"
                        activeClassName="d-menu__link--active"
                        to={`/${item.path}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                      {subs ? (
                        <ul className="d-menu__subs">
                          {subs.map((itemSub) => (
                            <li key={`nav-${itemSub.id}`} data-id={itemSub.id}>
                              <NavLink
                                className="d-menu__link"
                                activeClassName="d-menu__link--active"
                                to={`/${itemSub.path}`}
                                onClick={() => setIsOpen(false)}
                              >
                                {itemSub.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
