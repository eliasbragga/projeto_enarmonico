<template>
  <v-app>
    <div id="app">
      <h1>Henarmonia</h1>
      <div id="sectionMaior">
        <div id="header">
          <img class="header__img" src="/img/27002.png" width="50px" alt="" />
          <h2 class="header__descricao">Descobrir nota henarmônica</h2>
        </div>
        <div>
          <InputComp
            @adicionarNota="getNote($event)"
            :isButtonDisabled="disabledButton"
          />
        </div>
        <div v-show="mostrarResultado" id="resultado">
          <p v-bind:title="descricao">{{ resultadoNotaEnarmonica }}</p>
        </div>
        <ErrorMsg
          :messageDeNaoEncontradoComp="messageDeNaoEncontrado"
          :VshowMessageError="showErrorMessage"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import InputComp from "./components/InputComp.vue";
import ErrorMsg from "./components/error-message/ErrorMsg.vue";
import myMixins from "./mixin/myMixins";
export default {
  name: "App",
  mixins: [myMixins],
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
  min-height: 50%;
  margin: auto;
  position: relative;

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
  position: relative;
}

.header__img {
  width: 8%;
  height: 8%;
  position: relative;
  right: 0;
}

h1 {
  margin: 30px;
  color: black;
}

.header__descricao {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.507);
  margin:2%  ;
  font-size: 1.7em;
  width: 70%;
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

  .header__descricao {
    font-size: 1.3em;
    margin: 2% 20%;
  }
}
</style>