// アコーディオンメニュー
// 【参考】https://takechi-web.com/javascript-accordion-menu/
const buttons = document.querySelectorAll('.accordion-menu__button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const body = e.currentTarget.nextElementSibling;

    const text = body.children[0];
    const textHeight = text.offsetHeight;

    const menu = e.currentTarget.parentNode;
    menu.classList.toggle('open');

    if (menu.classList.contains('open')) {
      body.style.height = textHeight + 'px';
    } else {
      body.style.height = 0;
    }
  });
});
