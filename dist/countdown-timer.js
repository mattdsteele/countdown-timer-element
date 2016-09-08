'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountdownTimer = function (_HTMLElement) {
  _inherits(CountdownTimer, _HTMLElement);

  function CountdownTimer() {
    _classCallCheck(this, CountdownTimer);

    return _possibleConstructorReturn(this, (CountdownTimer.__proto__ || Object.getPrototypeOf(CountdownTimer)).apply(this, arguments));
  }

  _createClass(CountdownTimer, [{
    key: 'updateTimer',
    value: function updateTimer() {
      this.secondsDisplay.innerHTML = this.secondsLeft;
    }
  }, {
    key: 'endCountdown',
    value: function endCountdown(counter) {
      window.clearInterval(counter);
      console.info('BOOM');
      this.dispatchEvent(new CustomEvent('countdown-ended', {
        bubbles: true,
        detail: {
          message: 'Countdown from ' + this.seconds + ' ended'
        }
      }));
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      this.updateTimer();
      this.button.disabled = true;
      this.button.innerHTML = 'YOU DID IT';
      this.secondsLeft = this.seconds;
      this.updateTimer();
      var counter = window.setInterval(function () {
        _this2.secondsLeft--;
        _this2.updateTimer();
        if (_this2.secondsLeft === 0) {
          window.clearInterval(counter);
          _this2.endCountdown(counter);
        }
      }, 1000);
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this3 = this;

      var template = '\n      <button class="countdown-start">Start the countdown</button>\n      <span class="seconds-left"></span>\n    ';
      this.innerHTML = template;

      // Useful references
      this.button = this.querySelector('.countdown-start');
      this.secondsDisplay = this.querySelector('.seconds-left');

      // Initialize
      this.button.addEventListener('click', function () {
        return _this3.handleClick();
      });
    }
  }]);

  return CountdownTimer;
}(HTMLElement);

window.customElements.define('countdown-timer', CountdownTimer);
