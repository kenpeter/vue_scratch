import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js'

// new vue
new Vue({
  el: '#app',
	// h == hyper script, which what HTML stand for
	// h == createElement
	render: h => h(App),
	store
});
