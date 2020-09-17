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
      return typograph(text)
    }
  }
}
</script>
