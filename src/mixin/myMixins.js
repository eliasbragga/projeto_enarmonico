const myMixins = {
  data() {
    return {
      resultadoNotaEnarmonica: "",
      mostrarResultado: false,
      descricao: "",
      showErrorMessage: false,
      messageDeNaoEncontrado: "",
      disabledButton: false,
      juntarEnarmonicos: [],
      listadeNotas: [
        "C",
        "D",
        "E",
        "F",
        "G",
        "A",
        "B",
        "C#",
        "D#",
        "E#",
        "F#",
        "G#",
        "A#",
        "B#",
        "Cb",
        "Db",
        "Eb",
        "Fb",
        "Gb",
        "Ab",
        "Bb",
        "C##",
        "D##",
        "E##",
        "F##",
        "G##",
        "A##",
        "B##",
        "Cbb",
        "Dbb",
        "Ebb",
        "Fbb",
        "Gbb",
        "Abb",
        "Bbb",
      ],
      listaEnarmonicos: [
        "B# e Dbb",
        "C## e Ebb",
        "D## e Fb",
        "E# e Gbb",
        "F## e Abb",
        "G## e Bbb",
        "A## e Cb",
        "B## e Db",
        "Eb e Fbb",
        "F e Gbb",
        "E## e Gb",
        "Ab",
        "Bb e Cbb",
        "C e Dbb",
        "B e A##",
        "B## e C#",
        "D# e Fbb",
        "D## e E",
        "E## e F#",
        "G#",
        "A# e Cbb",
        "D e Ebb",
        "E e Fb",
        "F# e Gb",
        "G e Abb",
        "A e Bbb",
        "B e Cb",
        "C# e Db",
        "A# e Bb",
        "C e B#",
        "C## e D",
        "D# e Eb",
        "E# e F",
        "F## e G",
        "G## e A",
        "",
      ],
    };
  },
  methods: {
    juntandoListas() {
      this.juntarEnarmonicos = [this.listadeNotas, this.listaEnarmonicos];
    },
    getNote(event) {
      if (this.juntarEnarmonicos[0].includes(event)) {
        let indice = this.juntarEnarmonicos[0].indexOf(event);
        setTimeout(() => (this.mostrarResultado = false), 12000);
        return (
          (this.resultadoNotaEnarmonica = `As notas enarmônicas de ${this.juntarEnarmonicos[0][indice]} são ${this.juntarEnarmonicos[1][indice]}`),
          (this.mostrarResultado = true),
          (this.showErrorMessage = false),
          (this.disabledButton = false)
        );
      } else {
        this.showErrorMessage = true;
        this.messageDeNaoEncontrado =
          "Nota não encontrada. Por favor, tente novamente!";
        this.mostrarResultado = false;
        this.disabledButton = true;
        setTimeout(() => {
          this.showErrorMessage = false;
          this.mostrarResultado = false;
          this.disabledButton = false;
        }, 4000);
      }
    },
  },
  mounted() {
    this.juntandoListas();
  },
};

export default myMixins;
