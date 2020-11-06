<script>
import {typograph} from './typograph.js'

export default {
  name: "AppText",
  functional: true,
  props: {
    className: String,
    tag: String,
    body: String,
  },

  render(h, { props }) {
    const tag = props.tag || 'div';
    return h(
      tag, {
        class: props.className,
        domProps: {
          innerHTML: typograph(props.body)
        }
      }
    );
  }
};
</script>