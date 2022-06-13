<template>
  <div id="app">    
    <h1>Henarmonia</h1>
    <div id="sectionMaior">
      <div id="header">
        <img src="/img/27002.png" width="50px" alt="" />
        <h2>Descobrir nota henarmônica</h2>
      </div>
      <div>
        <InputComp @adicionarNota="getNote($event)" :isButtonDisabled="disabled" />
      </div>
      <div v-show="mostrarResultado" id="resultado">
        <p v-bind:title="descricao">{{ nota }}</p>                  
    </div>  
      <ErrorMsg :msg="message" :Vshow="mostrar"/>
  </div>
  
  </div>
</template>

<script>
import InputComp from "./components/InputComp.vue";
import ErrorMsg from "./components/ErrorMsg.vue";


let sus = "## -> dobrado sustenido";
let bem = "bb -> dobrado bemol";
export default {
  name: "App",
  data() {
    return {
      nota: "",
      mostrarResultado: false,
      descricao: "",
      mostrar:false,
      message:"",
      disabled:false
    };
  },
  methods: {
    getNote(event) {
      if (event == "C") {
        this.nota = `A nota que você digitou foi ${event}. As notas enarmônicas de ${event} são B# e Dbb`;
        this.mostrarResultado = true;
        this.mostrar = false
        this.descricao = bem;
      } else if (event == "D") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são C## e Ebb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = `${sus} ${bem}`;
      } else if (event == "E") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são D##  Fb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "F") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são E# e Gbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "G") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são F## e Abb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = `${sus} ${bem}`;
      } else if (event == "A") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são G## e Bbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = `${sus} ${bem}`;
      } else if (event == "B") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são A## e Cb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "C#") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são B## e Db`;
        this.mostrarResultado = true;
        this.descricao = sus;
      } else if (event == "D#") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são Eb e Fbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "E#") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são F e Gbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "F#") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são E## e Gb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "G#") {
        this.nota = `A nota que você digitou foi ${event}. A nota enarmônica de ${event} é Ab`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "A#") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são Bb e Cbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "B#") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são C e Dbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "Cb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são A## e B`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "Db") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são C# e B##`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "Eb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são D# e Fbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "Fb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são D## e E`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "Gb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são E## e F#`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "Ab") {
        this.nota = `A nota que você digitou foi ${event}. A nota enarmônica de ${event} é G#`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "Bb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são A# e Cbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "Cbb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são A# e Bb`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "Dbb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são B# e C`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "Ebb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são C## e D`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "Fbb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são D# e Eb`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "Gbb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são E# e F`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "Abb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são F## e G`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "Bbb") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são G## e A`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = sus;
      } else if (event == "C##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são D e Ebb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "D##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são E e Fb`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "E##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são F# e Gb`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "F##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são G e Abb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "G##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são A e Bbb`;
        this.mostrarResultado = true;
         this.mostrar = false
        this.descricao = bem;
      } else if (event == "A##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} são B e Cb`;
        this.mostrarResultado = true;
         this.mostrar = false
      } else if (event == "B##") {
        this.nota = `A nota que você digitou foi ${event}. As nota enarmônicas de ${event} é C# e Db`;
        this.mostrarResultado = true;
         this.mostrar = false
      }else{        
        this.mostrarResultado = false
        this.mostrar = true
         this.disabled = true
        this.message = "Não encontramos esta nota. Tente novamente"
      }

      setTimeout(() => {        
        this.mostrar = false
        this.disabled = false
        }, 4000);
      
    },
  },
  components: {
    InputComp,
    ErrorMsg
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
  margin: 15px 100px;
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





@media (max-width: 1046px){
 

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

@media (max-width: 860px){
  #sectionMaior{
    width: 90%;
    height: 50%;
    
  }

}

@media (max-width: 500px){
 

  #sectionMaior{
    width: 100%;
    height: 50%;
    
  }

  #resultado{
    width: 100%;
    height: 80px;
  }

  img {
    display: none;
  }

  h2{
    font-size: 22px;
    margin: 15px 100px;
  }
}
</style>