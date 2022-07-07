<template>
  <v-app>
    <div id="app">
      <h1>Henarmonia</h1>
      <div id="sectionMaior">
        <div id="header">
          <img src="/img/27002.png" width="50px" alt="" />
          <h2>Descobrir nota henarmônica</h2>
        </div>
        <div>
          <InputComp
            @adicionarNota="getNote($event)"
            :isButtonDisabled="disabled"
          />
        </div>
        <div v-show="mostrarResultado" id="resultado">
          <p v-bind:title="descricao">{{ nota }}</p>
        </div>
        <ErrorMsg :msg="message" :Vshow="showErrorMessage" />
      </div>
    </div>
  </v-app>
</template>

<script>
import InputComp from "./components/InputComp.vue";
import ErrorMsg from "./components/ErrorMsg.vue";
import myMixins from './mixin/myMixins'

// let sus = "## -> dobrado sustenido";
// let bem = "bb -> dobrado bemol";
export default {
  name: "App",
  mixins:[myMixins],
  data() {
    return {
          
    };
  },  
  components: {
    InputComp,
    ErrorMsg,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  height: 100vh;
  text-align: center;
  color: white;
  overflow: hidden;
}

#sectionMaior {
  background-color: rgb(38, 53, 142);
  width: 60%;
  height: 50%;
  margin: auto;

  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 5px 5px 9px rgba(64, 64, 64, 0.407);
}

#header {
  display: flex;
}

img {
  margin: 5px 20px;
  animation: loading 4s linear infinite;
}

h1 {
  margin: 30px;
  color: black;
}

h2 {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.507);
  margin: 15px 200px;
}

@keyframes loading {
  0% {
    transform: rotate(360deg);
  }
}

#resultado {
  background-color: rgb(8, 15, 51);
  color: white;
  width: 500px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px rgba(77, 75, 75, 0.456);
  padding: 20px;

  margin: 15px auto;
}

@media (max-width: 1046px) {
  img {
    margin: 5px 15px;
    animation: loading 4s linear infinite;
    width: 30px;
    height: 30px;
  }

  h2 {
    font-size: 19px;
    margin: 14px 81px;
  }
}

@media (max-width: 860px) {
  #sectionMaior {
    width: 90%;
    height: 50%;
  }
}

@media (max-width: 500px) {
  #sectionMaior {
    width: 100%;
    height: 50%;
  }

  #resultado {
    width: 100%;
    height: 80px;
  }

  img {
    display: none;
  }

  h2 {
    font-size: 22px;
    margin: 15px 100px;
  }
}
</style>