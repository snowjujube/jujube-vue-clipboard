import ClipboardJS from 'clipboard';

/* If there is a global Vue instance. */
(function () {
  if (window && window.Vue && window.Vue.use) {
    window.Vue.use(JujubeVueClipboard)
  }
}());


function copy(text) {
  let btn = document.createElement('button');
  btn.setAttribute('class', 'jujube-cp-btn');
  btn.setAttribute('data-clipboard-text', text);
  let clipboard = new ClipboardJS('.jujube-cp-btn');

  document.body.appendChild(btn);
  btn.click();
  document.body.removeChild(btn);
}

const JujubeVueClipboard = {
  install(Vue) {
    Vue.prototype.$copy = function (text) {
      copy(text);
    };
    Vue.directive('jujube-copy', function (el, binding) {
      el.addEventListener('click', function () {
        let text = binding.value || binding.expression;
        copy(text);
      })
    });
  }
};

export default JujubeVueClipboard

export {
  /*不知道export啥*/
}
