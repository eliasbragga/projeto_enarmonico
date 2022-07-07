<template>
  <div class="messageError">
    <v-alert
      shaped
      dark
      color="#F22248"
      v-show="VshowMessageError"
      class="msgErro"
    >
      {{ messageDeNaoEncontradoComp }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "ErrorMsg",
  props: {
    messageDeNaoEncontradoComp: String,
    VshowMessageError: Boolean,
  },
};
</script>

<style scoped>
>>> .v-sheet.v-alert.v-sheet--shaped {
  margin-top: 20px;
}
</style>