# vue-sip-text

## Project setup
```
yarn add https://github.com/voffkin/vue-sip-text.git
```

main.js
```
import { Text } from 'vue-sip-text'
Vue.component('cdiv', Text);
```

App.vue
```vue
    <cdiv body="lorem ipsum" />
    
    <cdiv
        tag="p"
        className="my-class"
        body="lorem ipsum"
    />
    
```
