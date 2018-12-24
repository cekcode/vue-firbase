import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = '';
var config = {
    apiKey: "AIzaSyDHxvJxu7XRyx6QuTBJVOQn_7YTJlgakPs",
    authDomain: "lukman-test-vue.firebaseapp.com",
    databaseURL: "https://lukman-test-vue.firebaseio.com",
    projectId: "lukman-test-vue",
    storageBucket: "lukman-test-vue.appspot.com",
    messagingSenderId: "823545030778"
  };

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});