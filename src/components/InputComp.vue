<template>
  <div id="inputComp">
    <v-col cols="12" sm="6">
      <v-text-field
        autofocus 
        @keyup.enter="emitir"
        v-model="item"
        label="Digite uma Nota"
        filled
        shaped
      ></v-text-field>
    </v-col>
    <div class="text-center">
      <v-btn @click="emitir" rounded color="primary" dark
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
      item: "",
      
    };
  },
  props:{
    isButtonDisabled:Boolean
  },  
  methods: {
    emitir() {
      const itemCaptalize = this.item[0].toUpperCase() + this.item.substring(1)
      this.$emit("adicionarNota", itemCaptalize);
      this.item=""
      
    },
  },
};
</script>

<style scoped>
#inputComp {
  text-align: center;
}

>>> .col-sm-6 {
  flex: 0 0 50%;
  max-width: 27%;
  margin: auto;
  color: white;
}

>>> .theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgb(255 255 255 / 87%);
}

>>> .theme--light.v-label {
  color: rgb(255 255 255 / 60%);
}

>>>.v-text-field.v-text-field--enclosed .v-text-field__details {
    padding-top: 0px;
    margin-bottom: 0px;
    display: none;
}

>>>.theme--dark.v-btn.v-btn--has-bg {
    
    background-color: rgb(8, 15, 51);
    transition: background-color 0.6s;
}

>>>.theme--dark.v-btn.v-btn--has-bg:hover {
    background-color: #176b29;
    color: white;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.512);
}

@media (max-width:500px){
  .col-sm-6 {
  flex: 0 0 50%;
  max-width: 50%;
  margin: auto;
  color: white;
}
}


</style>