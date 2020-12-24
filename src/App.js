import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>Enciclopédia Virtual</h1>
        </header>

        <nav>
          <p>Português - Gramática</p>
          <p>Línguas Estrangeiras</p>
          <p>Literatura e Arte</p>
          <p>Matemática</p>
          <p>Geografia</p>
          <p>História</p>
          <p>Biologia</p>
          <p>Química</p>
          <p>Física</p>
          <p>Sociologia e Filosofia</p>
        </nav>

        <section>
          <h1>Bem-vindos à Enciclopédia Virtual!</h1>
          <p>Aqui vocês poderão encontrar as mais diversas informações de todas as áreas exigidas pela Educação Básica (até o Ensino Médio) para estudar e aprender!</p>

          <h2>Todas as informações resumidas e organizadas!</h2>
          <p>Os conteúdos serão resumidos com linguagem simples, mas também terá atalhos para aprofundar em algum assunto específico. Dessa forma, vocês poderão ler e aprender sem sobrecarregar com muitas informações!</p>

          <h2>Teste seu conhecimento!</h2>
          <p>Para cada seção terá exercícios para verificar o que aprendeu. Se errar alguma, não se preocupe - é uma oportunidade para aprender!</p>

          <h2>Prepare-se para vestibular e ENEM!</h2>
          Em breve terá seções para se preparem para o vestibular, com questões mais cobradas!
        </section>
      </div>
    );
  }
}

export default App;
