const myMixins = {
  data() {
    return {
      nota: "",
      mostrarResultado: false,
      descricao: "",
      showErrorMessage: false,
      message: "",
      disabled: false, 
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
    juntando() {
      this.juntarEnarmonicos = [this.listadeNotas, this.listaEnarmonicos];
    },
    getNote(event) {
      if (this.juntarEnarmonicos[0].includes(event)) {
        let indice = this.juntarEnarmonicos[0].indexOf(event);
        return (
          (this.nota = `A nota enarmônica de ${this.juntarEnarmonicos[0][indice]} é ${this.juntarEnarmonicos[1][indice]}`),
          (this.mostrarResultado = true),
          (this.showErrorMessage = false)
        );
      } else {
        this.showErrorMessage = true;
        this.message = "Nota não encontrada. Por favor, tente novamente!";
        this.mostrarResultado = false;
        this.disabled = true;
        setTimeout(() => {
          this.showErrorMessage = false;
          this.mostrarResultado = false;
          this.disabled = false;
        }, 4000);
      }
    },
  },
  mounted() {
    this.juntando();
  },
};

export default myMixins;
