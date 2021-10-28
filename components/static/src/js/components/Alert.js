//
// Modal lib
//
class Alert {
  /**
   * Class constructor
   *
   * @return void
   */
  constructor(options = {}) {
    const selector = typeof options.selector !== 'undefined' || '.alert';
    this.elements = document.querySelectorAll(selector);
    if (typeof options.onClose !== 'undefined' && options.onClose) {
      this.onClose = options.onClose;
    }
  }

  /**
   * Init
   *
   * @return mixed
   */
  init() {
    this.initAutoClose();
    this.initClose();

    return this;
  }

  /**
   * Init close
   *
   * @return mixed
   */
  initAutoClose() {
    this.elements.forEach((element) => {
      if (element.classList.contains('alert--auto-close')) {
        const delayProp = element.getAttribute('data-auto-close-delay');
        let delay = 5000;
        if (delayProp) {
          delay = Number.parseInt(delayProp, 10);
        }

        setTimeout(() => {
          this.doClose(element);
        }, delay);
      }
    });
  }

  /**
   * Init close
   *
   * @return mixed
   */
  initClose() {
    this.elements.forEach((element) => {
      const closeBtn = element.querySelector('.alert__close button');

      if (closeBtn) {
        closeBtn.addEventListener('click', (evt) => {
          evt.preventDefault();

          this.doClose(element);

          // Call callback
          if (this.onClose) {
            this.onClose(closeBtn, element);
          }
        });
      }
    });
  }

  /**
   * Do close
   *
   * @return mixed
   */
  doClose(element) {
    element.setAttribute('data-state', 'hidden');
  }
}

export default Alert;
