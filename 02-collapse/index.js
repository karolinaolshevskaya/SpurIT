window.addEventListener('load', () => {
  const collapsables = Array.from(document.getElementsByClassName('collapsible'));

  collapsables.forEach(collapsible => {
    let visible = true;

    const button = collapsible.getElementsByClassName('collapsible__button')[0];
    const content = collapsible.getElementsByClassName('collapsible__content')[0];

    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.2s ease-out';

    content.style.maxHeight = content.scrollHeight + "px";

    const visibleSpan = button.getElementsByClassName('collapsible__action--visible')[0];
    const hiddenSpan = button.getElementsByClassName('collapsible__action--hidden')[0];

    hiddenSpan.setAttribute('hidden', '');

    button.onclick = () => {

      if (visible) {
        visibleSpan.setAttribute('hidden', '');
        hiddenSpan.removeAttribute('hidden');

        content.animate([
          {maxHeight: 0}
        ], {duration: 250, fill: "both", easing: "ease-out"});

      } else {
        visibleSpan.removeAttribute('hidden');
        hiddenSpan.setAttribute('hidden', '');

        content.animate([
          {maxHeight: content.scrollHeight + 'px'}
        ], {duration: 250, fill: "both", easing: "ease-out"});
      }

      visible = !visible;
    };
  });
});
