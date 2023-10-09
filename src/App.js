import React, { useState } from 'react';
import './App.css';
import powerbiImage from './powerbi.jpg';

const HomePage = ({ goToFormPage }) => {
  return (
    <div>
      <div className="powerbi-image-container">
        <img src={powerbiImage} alt="Power BI" className="powerbi-image" />
      </div>
    <h1 className="centered-title">A Importância do Power BI no Ambiente Corporativo</h1>
    
    <div className="container">
      <p>No âmbito empresarial contemporâneo, a capacidade de tomar decisões informadas e estratégicas é intrínseca ao sucesso e sustentabilidade organizacional. O Power BI surge como uma ferramenta imperativa para otimizar este processo, oferecendo insights através de uma visualização de dados robusta e interativa. Abaixo, exploramos alguns pontos cruciais relativos à implementação, utilização e atualizações do Power BI.</p>
    </div>

    <div className="container">
      <h2>Como Implementar</h2>
      <p>A implementação do Power BI pode ser considerada um investimento estratégico, proporcionando uma perspectiva clara dos dados através de dashboards e relatórios interativos. A implementação envolve:

Análise de Requisitos: Compreender os requisitos de negócios e dados é vital para configurar o Power BI de maneira eficiente.
Preparação de Dados: A limpeza e a organização dos dados são cruciais para garantir que os insights gerados sejam precisos e confiáveis.
Desenvolvimento de Dashboards: Customizar dashboards para atender às necessidades específicas de diferentes departamentos.
Treinamento de Equipe: Capacitar os membros da equipe para maximizar a utilização das ferramentas disponíveis no Power BI.</p>
    </div>

    <div className="container">
      <h2>Como Utilizar</h2>
      <p>Análise de Dados Intuitiva: O Power BI oferece uma interface amigável que permite aos usuários criar relatórios e analisar dados com facilidade.
Colaboração e Compartilhamento: Facilita a colaboração entre as equipes, permitindo que os usuários compartilhem insights e tomem decisões informadas coletivamente.
Acessibilidade: Os dashboards e relatórios podem ser acessados de qualquer lugar, oferecendo flexibilidade e fomentando a tomada de decisões em tempo real.</p>
    </div>

    <div className="container">
      <h2>Atualizações</h2>
      <p>Recursos Novos e Aprimorados: A Microsoft frequentemente lança atualizações que introduzem novos recursos e melhorias na interface do usuário, otimizando a experiência geral do usuário e a funcionalidade da ferramenta.
Segurança de Dados: As atualizações frequentemente abordam questões de segurança, garantindo que os dados manipulados e visualizados permaneçam seguros e protegidos.
Compatibilidade: Atualizações garantem que o Power BI permaneça compatível com outros softwares e plataformas de dados, proporcionando uma operacionalidade suave.
Conclusivamente, a integração do Power BI nas operações da empresa não é meramente benéfica, mas sim, estrategicamente imperativa para manter uma tomada de decisão informada e uma operação otimizada. A [Nome da Empresa] está à disposição para oferecer suporte adicional e orientação conforme a sua empresa navega pela implementação e utilização desta ferramenta vital.</p>
    </div>
    <button onClick={goToFormPage} className="navbar-button">Preencha o Formulário</button>
      <button className="navbar-button">Contato</button>
      <button className="navbar-button">Exemplos</button>
      <button className="navbar-button">Sobre Nós</button>
  </div>
  );
};

const FormPage = ({ goToHomePage }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    yourName: '',
    yourRole: '',
    businessField: '',
    objectiveWithPowerBI: '',
    numberOfLayouts: '',
    databaseAccessLocations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário Enviado!');
    goToHomePage();
  };

  return (
    <div>
      <h1 className="centered-title">Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome da Empresa: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <label>Seu Nome Completo: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <label>Seu Cargo Nesta Empresa: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <label>Qual o Ramo Desta Empresa: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <label>Objetivos com o Power BI: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <label>Quantidades de LayOuts: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <label>Locais de Acesso as Bases: </label>
        <input type="text" name="companyName" onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

function App() {
  const [page, setPage] = useState('home');

  const goToFormPage = () => setPage('form');
  const goToHomePage = () => setPage('home');

  return (
    <div className="App">
      {page === 'home' && <HomePage goToFormPage={goToFormPage} />}
      {page === 'form' && <FormPage goToHomePage={goToHomePage} />}
    </div>
  );
}

export default App;


