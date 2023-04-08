<template>
  <div id="inputComp">
    <v-col cols="12" sm="6">
      <v-text-field type="text"
        autofocus
        @keyup.enter="emitir"
        v-model="item"
        label="Digite uma Nota"
        filled
        shaped
      ></v-text-field>
    </v-col>
    <div>
      <v-btn
        @click="emitir"
        rounded
        class="testando v-btn"  
        color="primary"
        dark
        v-bind:disabled="isButtonDisabled"
      >
        Descobrir
    </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputComp",
  data() {
    return {
      item: "Ab",
    };
  },
  props: {
    isButtonDisabled: Boolean,
  },
  methods: {
    emitir() {
      const itemCaptalize = this.item[0].toUpperCase() + this.item.substring(1);
      console.log('item', itemCaptalize)
      this.$emit("adicionarNota", itemCaptalize);
      this.item = "";
    },
  },
};
</script>

<style scoped>

::deep() .col-sm-6 {
  flex: 0 0 50%;
  max-width: 27%;
  margin: auto;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 25%;
}

::deep() .theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgb(255, 255, 255);
}

::deep() .theme--light.v-label {
  color: rgb(255 255 255 / 60%);
}

::deep() .v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: 0px;
  display: none;
}

@media (max-width: 500px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
    margin: auto;
    color: white;
   
  }
}

.button {
  position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%);
  
  
}
</style>