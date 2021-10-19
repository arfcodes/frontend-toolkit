/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Demo Menu
 */
import { useState, useEffect, useRef } from 'react';

import Link from '@components/Link';
import IconMenu from '@rootImages/icon__menu.svg';
import IconClose from '@rootImages/icon__close.svg';
import NavData from './navigation.json';

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

                if (item.type === 'all' || item.type === 'next') {
                  return (
                    <li key={`nav-${item.id}`} data-id={item.id}>
                      <Link
                        href={`/${item.path}`}
                        passHref
                        onClick={() => setIsOpen(false)}
                      >
                        <a className="d-menu__link">{item.label}</a>
                      </Link>
                      {subs ? (
                        <ul className="d-menu__subs">
                          {subs.map((itemSub) => (
                            <li key={`nav-${itemSub.id}`} data-id={itemSub.id}>
                              <Link
                                href={`/${itemSub.path}`}
                                passHref
                                onClick={() => setIsOpen(false)}
                              >
                                <a className="d-menu__link">{itemSub.label}</a>
                              </Link>
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
