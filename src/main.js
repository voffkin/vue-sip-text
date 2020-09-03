import Vue from 'vue'
import App from './App.vue'
import { Text } from './plugins/Text';

Vue.component('cdiv', Text);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
