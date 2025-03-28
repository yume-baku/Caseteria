// アコーディオンメニュー機能
// 【参考】https://takechi-web.com/javascript-accordion-menu/

const buttons = document.querySelectorAll('.accordion-menu__button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // 次要素の高さを取得
    const body = e.currentTarget.nextElementSibling;
    const text = body.children[0];
    const textHeight = text.offsetHeight;

    // open有無の切替
    const menu = e.currentTarget.parentNode;
    menu.classList.toggle('open');

    // open有ならば展開
    if (menu.classList.contains('open')) {
      body.style.height = textHeight + 'px';
    } else {
      body.style.height = 0;
    }
  });
});
