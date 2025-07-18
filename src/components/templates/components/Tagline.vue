<template>
  <tr>
    <td>
      <span style="color:#666;font-size:12px;font-style:italic;">{{ text }}</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'Tagline',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
