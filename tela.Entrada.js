class telaDeEntrada extends Phaser.Scene{

constructor() {
    super({
         key: 'telaDeEntrada'


    })

};
preload(){
    this.load.image('fundo', 'assets/fundo-jogo.jpg');//carregando fundo
    this.load.image('botão', 'assets/botão-iniciar.png');//carregando logo
    this.load.image('logo', 'assets/logo-jogo.png');//carregando botão
};

create() {

    this.add.image(400, 300, 'fundo');//criando o fundo
    this.add.image(400, 200, 'logo');//criando a logo
   this.botao = this.add.image(400, 400, 'botão').setInteractive();//criando um botão interativo
   //função responsavel por deixar o botão clicavel e levar para a próxima cena
    this.botao.on('pointerdown', function(){
        this.scene.stop(telaDeEntrada);
        this.scene.start(JogoCoop)
},this);
};




}