# vue-sip-text

## Project setup
```
yarn add https://github.com/voffkin/vue-sip-text.git
```

main.js
```
import { Row, Column } from 'vue-sip-text'
Vue.component('column', Column);
```

App.vue
```vue
<row>
    <column :l="7">7</column>
    <column :l="5">5</column>
</row>
```