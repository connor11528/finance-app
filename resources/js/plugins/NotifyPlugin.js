export default {
  install: (Vue, defaults) => {
    Vue.prototype.$notify = function(options) {
      let config = {...defaults, ...options};

      UIkit.notification(config);
    }
  }
};
