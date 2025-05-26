
(function () {
  const navTop = document.querySelector('.nav_top');
  const productMenu = document.querySelector('.cpzs');
  const dropdown = document.querySelector('.xlcd');

  // 判断是否已经处于滚动状态
  function isScrolled() {
    return window.scrollY > 50;
  }

  // 更新导航背景色
  function updateNavBackground() {
    if (isScrolled()) {
      navTop.classList.add('scrolled');
    } else if (hovered) {
      navTop.classList.add('scrolled');
    } else {
      navTop.classList.remove('scrolled');
    }
  }

  let hovered = false;

  // 鼠标进入产品展示或下拉菜单时触发
  function handleMouseEnter() {
    hovered = true;
    if (!isScrolled()) {
      navTop.classList.add('scrolled');
    }
  }

  // 鼠标离开产品展示或下拉菜单时触发
  function handleMouseLeave() {
    hovered = false;
    if (!isScrolled()) {
      navTop.classList.remove('scrolled');
    }
  }

  // 监听鼠标移入/移出事件
  productMenu.addEventListener('mouseenter', handleMouseEnter);
  dropdown.addEventListener('mouseenter', handleMouseEnter);
  productMenu.addEventListener('mouseleave', handleMouseLeave);
  dropdown.addEventListener('mouseleave', handleMouseLeave);

  // 滚动监听
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navTop.classList.add('scrolled');
    } else {
      if (!hovered) {
        navTop.classList.remove('scrolled');
      }
    }
  });
})();




(function () {

  const navTop = document.querySelector('.nav_top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 当滚动超过50px时变为白色
      navTop.classList.add('scrolled');
    } else {
      navTop.classList.remove('scrolled');
    }
  });

})();




(function () {
  function throttle(fn, wait) {
    let time = Date.now();
    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn.apply(this, arguments);
        time = Date.now();
      }
    };
  }

  const navTop = document.querySelector('.nav_top');

  window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 50) {
      navTop.classList.add('scrolled');
    } else {
      navTop.classList.remove('scrolled');
    }
  }, 100));

})()


