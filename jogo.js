
class JogoCoop extends Phaser.Scene {

    // Aquie será onde tera o construtor da cena
    constructor() {
        super({
            key: 'JogoCoop',
            // Configurações específicas da cena podem ser adicionadas aqui
              physics: {
               arcade: {
                debug: false,//ver as chuncksbox dos objetos
                gravity: { y: 300 } //gravidade do jogo
               } 
            } 
        });
    };

    init() {

        this.player1 = {
            width: 170,
            height: 133,
            obj: null
        };

        this.player2 = {
            width: 170,
            height: 133,
            obj: null
        };

        this.gameControls = {
            over: false,
            current_col_scored: false,
            score: 0,
            restartBt: null
        };
    }
    //todas as variaveis
     plataforma1;
     plataformaEliminar;
     plataformapedra;
     apoio;
     apoio2;
     pilar;
     teclado1;
     teclado2;
     player1;
     player2;
     moeda;
     placar1;
     placar2;
     score1 = 0;
     score2 = 0;



     preload() {
//lugar responsavel por pré carregar as imagens
        this.load.image('fundo', 'assets/fundo-telaEntrada.png');
        this.load.image('plataformapedra', 'assets/plataforma-pedra.png');
        this.load.image('plataforma1', 'assets/plataforma-1.png');
        this.load.image('plataformaEliminar', 'assets/plataforma-eliminar.png');
        this.load.image('pilarPedra', 'assets/pilar-pedra.png')
        this.load.image('player1', 'assets/player-1.png');
        this.load.image('player2', 'assets/player-2.png');
        this.load.image('moeda', 'assets/moeda-peixe.png');
        
    };

    create() {

        //cada variavel do jogo

        this.add.image(400, 300, 'fundo');//imagem de fundo criada

        this.player1 = this.physics.add.sprite(50, 430, 'player1')//caregando o personagem 1, o pinguim normal
        
        this.player2 = this.physics.add.sprite(110, 430, 'player2')//carregando o personagem 2, o pinguim do club penguim

        this.moeda = this.physics.add.group()//formando um grupo que será afetado pelos mesmas físicas
      this.physics.add.collider(this.moeda, this.plataforma1);
      this.physics.add.collider(this.moeda, this.plataformapedra);
      this.physics.add.collider(this.moeda, this.plataformaEliminar);
      this.moeda.create(300,300, 'moeda');
      this.moeda.create(300,400, 'moeda');
      this.moeda.create(500,400, 'moeda');
     
      this.moeda.create(700,400, 'moeda');
      this.moeda.create(700,300, 'moeda');
      
      this.moeda.create(600,200, 'moeda');
      this.moeda.create(700,150, 'moeda');
      this.moeda.create(600,100, 'moeda');
      this.moeda.create(200,400, 'moeda');
      this.moeda.create(200,300, 'moeda');
      this.moeda.create(200,200, 'moeda');
      this.moeda.create(50,300, 'moeda');
      this.moeda.create(80,200, 'moeda');
      this.moeda.create(300,200, 'moeda');
      
      this.moeda.create(200,100, 'moeda');
      
      this.moeda.create(400,100, 'moeda');
      this.physics.add.overlap(this.player1, this.moeda,this.coletarMoedas1, null, this);
      this.physics.add.overlap(this.player2, this.moeda,this.coletarMoedas2, null, this);
      // adicionando placar 
this.placar1 = this.add.text(50, 50, 'PEIXES PLAYER1:' + this.score1, {fontSize:'15px', fill:'#495613'});
this.placar2 = this.add.text(600, 50, 'PEIXES PLAYER2:' + this.score2, {fontSize:'15px', fill:'#495613'});

//criando mais um tipo nde plataforma, essa com neve e mais preta
        this.plataforma1 = this.physics.add.staticGroup();//formando um grupo que será afetado pelos mesmas físicas
        //carregando todas as plataformas1
        this.plataforma1.create(440,376, 'plataforma1');
        this.plataforma1.create(417,376, 'plataforma1');
        this.plataforma1.create(321,376, 'plataforma1');
        this.plataforma1.create(224,376, 'plataforma1');
        this.plataforma1.create(127,376, 'plataforma1');
        this.plataforma1.create(46,376, 'plataforma1');
        this.plataforma1.create(133,260, 'plataforma1');
        this.plataforma1.create(230,260, 'plataforma1');
        this.plataforma1.create(327,260, 'plataforma1');
        this.plataforma1.create(423,260, 'plataforma1');
        this.plataforma1.create(521, 260, 'plataforma1');
        this.plataforma1.create(46, 160, 'plataforma1');
        this.plataforma1.create(133, 160, 'plataforma1');
        this.plataforma1.create(230, 160, 'plataforma1');
        this.plataforma1.create(327, 160, 'plataforma1');
        this.plataforma1.create(423, 160, 'plataforma1');
        this.plataforma1.create(440, 160, 'plataforma1');
        //as físicas e com quem irá ter interação
        this.physics.add.collider(this.plataforma1, this.player1);
        this.physics.add.collider(this.plataforma1, this.player2);
        this.physics.add.collider(this.plataforma1, this.moeda);


//criando a plataforma que impossibilita o player2 de passar para o espaço mais a direita, deixando ele cair caso pise 
        this.plataformaEliminar = this.physics.add.staticGroup();//formando um grupo que será afetado pelos mesmas físicas
        //carregando todas as platafromasEliminar
        this.plataformaEliminar.create(353, 496, 'plataformaEliminar');
        this.plataformaEliminar.create(582, 496, 'plataformaEliminar');
        this.plataformaEliminar.create(626, 496, 'plataformaEliminar');
        //as físicas e com quem irá ter interação
        this.physics.add.collider(this.plataformaEliminar, this.player1);
        this.physics.add.collider(this.plataformaEliminar, this.moeda);
        

//criandoa as platafromas de pedra mais escura e sem neve, tanto do jogo quando da borda
        this.plataformapedra = this.physics.add.staticGroup();//formando um grupo que será afetado pelos mesmas físicas
        //carregando todas as platafromaspedra
        this.plataformapedra.create(25, 493, 'plataformapedra');
        this.plataformapedra.create(110, 493, 'plataformapedra');
        this.plataformapedra.create(195, 493, 'plataformapedra');
        this.plataformapedra.create(280, 493, 'plataformapedra');
        this.plataformapedra.create(425, 493, 'plataformapedra');
        this.plataformapedra.create(510, 493, 'plataformapedra');
        this.plataformapedra.create(697, 493, 'plataformapedra');
        this.plataformapedra.create(780, 493, 'plataformapedra');
        this.plataformapedra.create(608, 422, 'plataformapedra');
        this.plataformapedra.create(665, 422, 'plataformapedra');
        this.plataformapedra.create(665, 350, 'plataformapedra');
        this.plataformapedra.create(750, 350, 'plataformapedra');
        this.plataformapedra.create(665, 278, 'plataformapedra');
        this.plataformapedra.create(608, 278, 'plataformapedra');
        this.plataformapedra.create(750, 206, 'plataformapedra');
        this.plataformapedra.create(665, 206, 'plataformapedra');
        this.plataformapedra.create(608, 134, 'plataformapedra');
        this.plataformapedra.create(665, 134, 'plataformapedra');
        this.plataformapedra.create(750, 5, 'plataformapedra');
        this.plataformapedra.create(665, 5, 'plataformapedra');
        this.plataformapedra.create(608, 5, 'plataformapedra');
        this.plataformapedra.create(520, 5, 'plataformapedra');
        this.plataformapedra.create(450, 5, 'plataformapedra');
        this.plataformapedra.create(370, 5, 'plataformapedra');
        this.plataformapedra.create(300, 5, 'plataformapedra');
        this.plataformapedra.create(230, 5, 'plataformapedra');
        this.plataformapedra.create(160, 5, 'plataformapedra');
        this.plataformapedra.create(90, 5, 'plataformapedra');
        this.plataformapedra.create(20, 5, 'plataformapedra');
        //as físicas e com quem irá ter interação
        this.physics.add.collider(this.plataformapedra, this.player1);
        this.physics.add.collider(this.plataformapedra, this.player2);
        this.physics.add.collider(this.plataformapedra, this.moeda);

        
//criando os blocos de pilar que são os verticais, tanto da borda quanto do jogo mesmo
       this.pilar = this.physics.add.staticGroup();//formando um grupo que será afetado pelos mesmas físicas
       //carregando todas as pilares
       this.pilar.create(562, 390, 'pilarPedra');
       this.pilar.create(562, 336, 'pilarPedra');
       this.pilar.create(562, 282, 'pilarPedra');
       this.pilar.create(562, 224, 'pilarPedra');
       this.pilar.create(562, 182, 'pilarPedra');
       this.pilar.create(562, 162, 'pilarPedra');
       this.pilar.create(796, 460, 'pilarPedra');
       this.pilar.create(796, 400, 'pilarPedra');
       this.pilar.create(796, 334, 'pilarPedra');
       this.pilar.create(796, 280, 'pilarPedra');
       this.pilar.create(796, 222, 'pilarPedra');
       this.pilar.create(796, 180, 'pilarPedra');
       this.pilar.create(796, 122, 'pilarPedra');
       this.pilar.create(796, 40, 'pilarPedra');
       this.pilar.create(1, 40, 'pilarPedra');
       this.pilar.create(1, 122, 'pilarPedra');
       this.pilar.create(1, 180, 'pilarPedra');
       this.pilar.create(1, 222, 'pilarPedra');
       this.pilar.create(1, 280, 'pilarPedra');
       this.pilar.create(1, 334, 'pilarPedra');
       this.pilar.create(1, 400, 'pilarPedra');
       this.pilar.create(1, 460, 'pilarPedra');
       //as físicas e com quem irá ter interação
        this.physics.add.collider(this.pilar, this.player1)
        this.physics.add.collider(this.pilar, this.player2);
        this.physics.add.collider(this.pilar, this.moeda);


        
        
        
    };

    update() {
        
            
            moveCharWithJump(this, 150, 200, this.player2)//chamandoa função colocada abaixo
            moveCharWithJump2(this, 150, 200, this.player1)//chamandoa função colocada abaixo
    }     
    coletarMoedas1 (player1, moeda)
    {
        moeda.disableBody(true, true);
        this.score1 +=1
       this.placar1.setText('PEIXES PLAYER1:' + this.score1)
    }
    
     coletarMoedas2 (player2, moeda)
    {
        moeda.disableBody(true, true);
        this.score2 +=1
        this.placar2.setText('PEIXES PLAYER2:' + this.score2)
    }
            
}
//função responsavel por fazer o player2 andar 
function moveCharWithJump(scene, speedX, speedY, character) {
    scene.keys = scene.input.keyboard.addKeys({
      // definindo os botões que serão as teclas
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  //definindo as movimentções e as velocidades
    if (scene.keys.left.isDown) {
      character.setVelocityX(-speedX);
    } else if (scene.keys.right.isDown) {
      character.setVelocityX(speedX);
    } else {
      character.setVelocityX(0);
    }
    if (scene.keys.up.isDown && character.y <= 468.5) {
      character.setVelocityY(-speedY);
    }
    


}
//função resppnsavel por deixar o player1 andar
function moveCharWithJump2(scene, speedX, speedY, character) {
    scene.keys = scene.input.keyboard.addKeys({
      // definindo os botões que serão as teclas
      up: Phaser.Input.Keyboard.KeyCodes.I,
      left: Phaser.Input.Keyboard.KeyCodes.J,
      right: Phaser.Input.Keyboard.KeyCodes.L,
    });
  //definindo as movimentções e as velocidades
    if (scene.keys.left.isDown) {
      character.setVelocityX(-speedX);
    } else if (scene.keys.right.isDown) {
      character.setVelocityX(speedX);
    } else {
      character.setVelocityX(0);
    }
    if (scene.keys.up.isDown && character.y <= 470) {
      character.setVelocityY(-speedY);
    }

}

