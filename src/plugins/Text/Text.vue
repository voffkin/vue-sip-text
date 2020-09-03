<template>
  <div v-html="text" />
</template>

<script>
import {typograph} from './typograph.js'

export default {
  name: 'SipText',
  props: {
    body: String,
  },
  computed: {
    text() {
      let text = this.body
      text = typograph(text)
      if('еду в Магадан' === typograph('еду в Магадан')) {
        console.log('equal')
      }else{
        console.log('not equal')
      }
      console.log(typograph('еду в Магадан'))
      return text
    }
  }
}
</script>
