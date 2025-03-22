// フェードイン機能(スクロールでふわっと表示)
// 【参考】https://takechi-web.com/javascript-scroll-fadein/

window.addEventListener('scroll', function () {
  const scroll = this.window.scrollY; // スクロール量
  const windowHeight = this.window.innerHeight; // 画面の高さ
  const components = this.document.querySelectorAll('.fadein-component');

  components.forEach((c) => {
    const distanceToComponent = c.offsetTop; // フェードイン要素までのY軸距離

    if (scroll + windowHeight > distanceToComponent) {
      c.classList.add('fadein-component__is-active');
    }
  });
});
