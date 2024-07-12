import '../styles/components/tescnologias.sass';
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {DiHtml5,DiCss3,DiJsBadge,DiReact,
  DiSass,
  DiMysql,
  DiGit,
  DiNodejs

} from 'react-icons/di';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Linguagem de marcação utilizada para estruturar e apresentar conteúdo na web." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Linguagem de estilos usada para descrever a apresentação de um documento escrito em HTML ou XML." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação que permite implementar funcionalidades complexas em páginas web." },
  { id: "react", name: "React", icon: <DiReact />, description: "Biblioteca JavaScript para construir interfaces de usuário." },
  {  id: "ts", name: "TypeScript", icon: <SiTypescript />, description: "Linguagem de programação estendida de JavaScript que adiciona tipagem estática." },
  { id: "sass", name: "Sass", icon: <DiSass />, description: "Extensão de CSS que permite usar coisas como variáveis, aninhamento, e muito mais." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Sistema de gerenciamento de banco de dados relacional de código aberto." },
  { id: "git", name: "Git", icon: <DiGit />, description: "Sistema de controle de versão distribuído, usado para rastrear mudanças no código-fonte." },
 {  id: "github", name: "GitHub", icon: <FaGithub />, description: "Plataforma de hospedagem de código-fonte e versionamento de controle." },
  { id: "node", name: "Node.js", icon: <DiNodejs />, description: "Ambiente de tempo de execução JavaScript que permite executar JavaScript no servidor." },
];

const Tecnologias = () => {
  return (
    <section className='container-technologies'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technologies-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
 }

export default Tecnologias;
