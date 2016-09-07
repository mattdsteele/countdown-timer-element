class CountdownTimer extends HTMLElement {
  updateTimer() {
    this.secondsDisplay.innerHTML = this.secondsLeft;
  }

  endCountdown(counter) {
    window.clearInterval(counter);
    console.info('BOOM');
    this.dispatchEvent(new CustomEvent('countdown-ended', { 
      bubbles: true,
      detail: {
        message: `Countdown from ${this.seconds} ended`
      },
    }));
  }

  handleClick() {
    this.updateTimer();
    this.button.disabled = true;
    this.button.innerHTML = 'YOU DID IT';
    this.secondsLeft = this.seconds;
    this.updateTimer();
    const counter = window.setInterval(() => {
      this.secondsLeft--;
      this.updateTimer();
      if (this.secondsLeft === 0) {
        window.clearInterval(counter);
        this.endCountdown(counter);
      }
    }, 1000);
  }

  connectedCallback() {
    const template = `
      <button class="countdown-start">Start the countdown</button>
      <span class="seconds-left"></span>
    `;
    this.innerHTML = template;

    // Useful references
    this.button = this.querySelector('.countdown-start');
    this.secondsDisplay = this.querySelector('.seconds-left');

    // Initialize
    this.button.addEventListener('click', () => this.handleClick());
  }

}

window.customElements.define('countdown-timer', CountdownTimer);
