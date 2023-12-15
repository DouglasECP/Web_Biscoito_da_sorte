import React, {Component} from "react";
import './estilo.css'

class App extends Component{ //É a primeica coisa a carregar na pag Web

    constructor(props){
        super(props);
        this.state={
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            "A jornada de mil quilômetros começa com um único passo.",
            "Sua persistência trará os resultados desejados.",
            "A sorte favorece os audazes.",
            "A paciência é a chave para superar desafios.",
            "Aprenda com o passado, viva o presente, sonhe com o futuro.",
            "Seja a mudança que você deseja ver no mundo.",
            "Acredite em si mesmo e tudo será possível.",
            "A gentileza é a linguagem que o surdo pode ouvir e o cego pode ver.",
            "A sorte segue aqueles que trabalham duro.",
            "Cada nuvem escura tem um forro de prata.",
            "O otimismo é a fé que leva à realização.",
            "O sucesso está no caminho, não no destino.",
            "A imaginação é mais importante que o conhecimento.",
            "O sorriso é a chave que abre muitas portas.",
            "As oportunidades estão sempre disfarçadas de trabalho árduo.",
            "A verdadeira sabedoria está em reconhecer a própria ignorância.",
            "Quando uma porta da felicidade se fecha, outra se abre.",
            "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
            "A vida é uma jornada que deve ser viajada com bons amigos.",
            "O primeiro passo para o sucesso é acreditar que você pode.",
            "Ame o que você faz e você nunca terá que trabalhar um dia na vida.",
            "A perseverança não é uma corrida longa; é muitas corridas curtas uma após a outra.",
            "O melhor jeito de prever o futuro é criá-lo.",
            "Não espere por oportunidades, crie-as.",
            "Nunca é tarde para ser o que você poderia ter sido.",
            "A sorte não é um acaso, é uma escolha.",
            "Seja uma voz, não um eco.",
            "A alegria está na jornada, não apenas no destino.",
            "Não deixe o medo decidir o seu futuro.",
            "O que você planta hoje, colherá amanhã."
          ];
          
    }

    quebraBiscoito(){
        let Copiastate = this.state;
        //abaixo: pega um numero aleário do array de frases
        let aleatorio = Math.floor(Math.random() * this.frases.length);
        Copiastate.textoFrase = this.frases[aleatorio];

        this.setState(Copiastate);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;