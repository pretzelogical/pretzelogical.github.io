document.querySelectorAll('#social-links ul li a').forEach((elem) => {
  // Fix for social link not highlighting when a is focused

  // When focused make bg color focusCol
  elem.addEventListener('focus', (e) => {
    console.log(e.target.children);
    e.target.children[0].style.backgroundColor = 'var(--hover-color)';
  });

  // When unfocused remove color
  elem.addEventListener('blur', (e) => {
    e.target.children[0].style.backgroundColor = '';
  });

});