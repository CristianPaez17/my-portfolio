
import { useState } from "react";
import "./App.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

function App() {
  const [idioma, setIdioma] = useState("en");

  const textos = {
    es: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      contacto: "Contacto",
      saludo: "Hola, soy",
      nombre: "Cristian Paúl Páez García",
      profesion: "Junior Frontend Developer",
      presentacion:
        "Desarrollo aplicaciones web modernas, interactivas y responsivas utilizando HTML, CSS, JavaScript y React. Busco una oportunidad para crecer profesionalmente y aportar al desarrollo de soluciones digitales.",
      verProyectos: "Ver mis proyectos",
      contactarme: "Contactarme",
      linkedin: "Visitar LinkedIn",
      whatsapp: "Enviarme un mensaje",
      sobreMiTitulo: "Sobre mí",
      sobreMiTexto:
        "Soy desarrollador frontend junior, formado en la Carrera de Desarrollo Frontend React de Coderhouse, donde obtuve reconocimiento Top 10. Me enfoco en construir interfaces modernas, crear componentes reutilizables y desarrollar aplicaciones con React y JavaScript. A través de mis proyectos personales y académicos, continúo fortaleciendo mis conocimientos y aplicando buenas prácticas de programación. Estoy buscando una oportunidad como Junior Frontend Developer para seguir aprendiendo, colaborar en equipo y contribuir a proyectos reales.",
      habilidadesTitulo: "Mis habilidades",
      htmlTexto: "Estructura semántica de páginas web",
      cssTexto: "Estilos y diseño responsivo",
      jsTexto: "Lógica e interactividad web",
      reactTexto: "Componentes e interfaces dinámicas",
      gitTexto: "Control de versiones y seguimiento de cambios",
      githubTextoHabilidad: "Repositorios y colaboración en proyectos",
      proyectosTitulo: "Mis proyectos",
      personal: "Proyecto personal",
      academico: "Proyecto académico",
      rentaTexto:
        "Aplicación web para administrar propiedades, inquilinos, contratos y pagos de alquiler. Proyecto personal en desarrollo que busca organizar la gestión inmobiliaria mediante una interfaz clara y funcionalidades prácticas.",
      sportsTexto:
        "Tienda virtual de artículos deportivos desarrollada como proyecto de aprendizaje. Incluye una interfaz orientada a presentar productos y aplicar conceptos de desarrollo frontend.",
      licoreriaTexto:
        "Aplicación web comercial para una licorería. Proyecto enfocado en la estructura de páginas, el diseño de la interfaz y la incorporación de interactividad con tecnologías web.",
      storeTexto:
        "Proyecto web de tienda desarrollado para practicar la construcción de interfaces, la organización del código y la implementación de funcionalidades frontend.",
      enDesarrollo: "En desarrollo",
      verCodigo: "Ver código",
      githubTitulo: "Conoce más sobre mi trabajo",
      githubTexto:
        "Explora mi perfil de GitHub para conocer mis proyectos, revisar mi código y seguir mi crecimiento como desarrollador frontend.",
      visitarGitHub: "Visitar GitHub",
      contactoTitulo: "Hablemos",
      contactoTexto:
        "Estoy interesado en oportunidades como Junior Frontend Developer y en proyectos donde pueda aportar mis conocimientos, aprender nuevas tecnologías y crecer junto a un equipo de desarrollo.",
      correo: "Correo electrónico",
      pie: "Desarrollado por Cristian Páez",
    },

    en: {
      inicio: "Home",
      sobreMi: "About me",
      habilidades: "Skills",
      proyectos: "Projects",
      contacto: "Contact",
      saludo: "Hi, I'm",
      nombre: "Cristian Paúl Páez García",
      profesion: "Junior Frontend Developer",
      presentacion:
        "I build modern, interactive, and responsive web applications using HTML, CSS, JavaScript, and React. I'm looking for an opportunity to grow professionally and contribute to digital solutions.",
      verProyectos: "View my projects",
      contactarme: "Contact me",
      linkedin: "Visit LinkedIn",
      whatsapp: "Send me a message",
      sobreMiTitulo: "About me",
      sobreMiTexto:
        "I'm a junior frontend developer trained in Coderhouse's React Frontend Development Career, where I received a Top 10 distinction. I focus on building modern interfaces, creating reusable components, and developing applications with React and JavaScript. Through personal and academic projects, I continue strengthening my skills and applying programming best practices. I'm looking for a Junior Frontend Developer opportunity where I can keep learning, collaborate with a team, and contribute to real-world projects.",
      habilidadesTitulo: "My skills",
      htmlTexto: "Semantic web page structure",
      cssTexto: "Styling and responsive design",
      jsTexto: "Web logic and interactivity",
      reactTexto: "Components and dynamic interfaces",
      gitTexto: "Version control and change tracking",
      githubTextoHabilidad: "Repositories and project collaboration",
      proyectosTitulo: "My projects",
      personal: "Personal project",
      academico: "Academic project",
      rentaTexto:
        "A web application for managing properties, tenants, contracts, and rental payments. This personal project is in development and aims to simplify property management through a clear interface and practical features.",
      sportsTexto:
        "An online sports store developed as a learning project. It features a product-oriented interface and applies frontend development concepts.",
      licoreriaTexto:
        "A commercial web application for a liquor store, focused on page structure, interface design, and interactivity using web technologies.",
      storeTexto:
        "An online store project built to practice interface development, code organization, and frontend functionality.",
      enDesarrollo: "In development",
      verCodigo: "View code",
      githubTitulo: "Explore my work",
      githubTexto:
        "Visit my GitHub profile to explore my projects, review my code, and follow my growth as a frontend developer.",
      visitarGitHub: "Visit GitHub",
      contactoTitulo: "Let's talk",
      contactoTexto:
        "I'm interested in Junior Frontend Developer opportunities and projects where I can contribute my skills, learn new technologies, and grow with a development team.",
      correo: "Email",
      pie: "Built by Cristian Páez",
    },
  };

  const t = textos[idioma];

  return (
    <div className="pagina">
      <header className="navbar">
        <a className="logo" href="#inicio" aria-label="Ir al inicio">
          CP<span>.</span>
        </a>

        <nav className="navegacion">
          <a href="#inicio">{t.inicio}</a>
          <a href="#sobre-mi">{t.sobreMi}</a>
          <a href="#habilidades">{t.habilidades}</a>
          <a href="#proyectos">{t.proyectos}</a>
          <a href="#contacto">{t.contacto}</a>
        </nav>

        <div className="idiomas">
          <button
            type="button"
            className={idioma === "es" ? "idioma activo" : "idioma"}
            onClick={() => setIdioma("es")}
            aria-label="Cambiar a español"
          >
            ES
          </button>

          <button
            type="button"
            className={idioma === "en" ? "idioma activo" : "idioma"}
            onClick={() => setIdioma("en")}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-texto">
            <p className="etiqueta">{t.saludo}</p>

            <h1>
              {t.nombre}
              <span>.</span>
            </h1>

            <h2>{t.profesion}</h2>

            <p className="descripcion">{t.presentacion}</p>

            <div className="hero-botones">
              <a className="boton principal" href="#proyectos">
                {t.verProyectos}
              </a>

              <a className="boton secundario" href="#contacto">
                {t.contactarme}
              </a>

              <a
                className="boton secundario"
                href="https://www.linkedin.com/in/cristian-paez-garcia-a93a243a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.linkedin} ↗
              </a>

              <a
                className="boton whatsapp"
                href="https://wa.me/593987716808?text=Hola%20Cristian%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.whatsapp} ↗
              </a>
            </div>
          </div>

          <div className="codigo">
            <div className="codigo-cabecera">
              <div className="puntos">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>developer.js</p>
            </div>

            <div className="codigo-contenido">
              <p>
                <span className="codigo-morado">const</span> developer = {"{"}
              </p>
              <p className="sangria">
                name: <span className="codigo-verde">"Cristian Páez"</span>,
              </p>
              <p className="sangria">
                role:{" "}
                <span className="codigo-verde">
                  "Junior Frontend Developer"
                </span>
                ,
              </p>
              <p className="sangria">skills: [</p>
              <p className="sangria doble">"HTML", "CSS",</p>
              <p className="sangria doble">"JavaScript", "React"</p>
              <p className="sangria">],</p>
              <p className="sangria">
                learning: <span className="codigo-azul">true</span>
              </p>
              <p>{"};"}</p>
            </div>
          </div>
        </section>

        <section className="seccion" id="sobre-mi">
          <p className="etiqueta">01 / {t.sobreMi}</p>
          <h2 className="titulo-seccion">{t.sobreMiTitulo}</h2>
          <p className="texto-seccion">{t.sobreMiTexto}</p>
        </section>


        <section className="seccion" id="cv">
          <p className="etiqueta">02 / Resume</p>

          <h2 className="titulo-seccion">
            {idioma === "es" ? "Descarga mi CV" : "Download my CV"}
          </h2>

          <p className="texto-seccion">
            {idioma === "es"
              ? "Conoce mi experiencia, habilidades y proyectos. Descarga mi hoja de vida en el idioma que prefieras."
              : "Learn more about my experience, skills, and projects. Download my resume in your preferred language."}
          </p>

          <div className="hero-botones">
            <a
              className="boton principal"
              href="/cv/cv-cristian-paez-es.pdf"
              download
            >
              {idioma === "es"
                ? "Descargar CV en español ↓"
                : "Download CV in Spanish ↓"}
            </a>

            <a
              className="boton secundario"
              href="/cv/cristian-paez-resume-en.pdf"
              download
            >
              {idioma === "es"
                ? "Descargar CV en inglés ↓"
                : "Download CV in English ↓"}
            </a>
          </div>
        </section>


        <section className="seccion" id="habilidades">
          <p className="etiqueta">03 / {t.habilidades}</p>
          <h2 className="titulo-seccion">{t.habilidadesTitulo}</h2>

          <div className="habilidades">
            <div className="habilidad">
              <FaHtml5 className="icono-habilidad html" />
              <h3>HTML5</h3>
              <p>{t.htmlTexto}</p>
            </div>

            <div className="habilidad">
              <FaCss3Alt className="icono-habilidad css" />
              <h3>CSS3</h3>
              <p>{t.cssTexto}</p>
            </div>

            <div className="habilidad">
              <FaJs className="icono-habilidad javascript" />
              <h3>JavaScript</h3>
              <p>{t.jsTexto}</p>
            </div>

            <div className="habilidad">
              <FaReact className="icono-habilidad react" />
              <h3>React</h3>
              <p>{t.reactTexto}</p>
            </div>

            <div className="habilidad">
              <FaGitAlt className="icono-habilidad git" />
              <h3>Git</h3>
              <p>{t.gitTexto}</p>
            </div>

            <div className="habilidad">
              <FaGithub className="icono-habilidad github-icono" />
              <h3>GitHub</h3>
              <p>{t.githubTextoHabilidad}</p>
            </div>
          </div>
        </section>

        <section className="seccion" id="proyectos">
          <p className="etiqueta">04 / {t.proyectos}</p>
          <h2 className="titulo-seccion">{t.proyectosTitulo}</h2>

          <div className="proyectos">
            <article className="proyecto">
              <div className="proyecto-superior">
                <span className="proyecto-icono">01</span>
                <span className="proyecto-tipo">{t.personal}</span>
              </div>

              <h3>RentaFácil EC</h3>
              <p>{t.rentaTexto}</p>

              <div className="etiquetas">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <span className="estado">{t.enDesarrollo}</span>

              <a
                className="enlace-proyecto"
                href="https://github.com/CristianPaez17/propertyRegistry"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.verCodigo} ↗
              </a>
            </article>

            <article className="proyecto">
              <div className="proyecto-superior">
                <span className="proyecto-icono">02</span>
                <span className="proyecto-tipo">{t.academico}</span>
              </div>

              <h3>SportsStore</h3>
              <p>{t.sportsTexto}</p>

              <div className="etiquetas">
                <span>React</span>
                <span>JavaScript</span>
              </div>

              <a
                className="enlace-proyecto"
                href="https://github.com/CristianPaez17/SportsStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.verCodigo} ↗
              </a>
            </article>

            <article className="proyecto">
              <div className="proyecto-superior">
                <span className="proyecto-icono">03</span>
                <span className="proyecto-tipo">{t.academico}</span>
              </div>

              <h3>Licorería Ecuador</h3>
              <p>{t.licoreriaTexto}</p>

              <div className="etiquetas">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a
                className="enlace-proyecto"
                href="https://github.com/CristianPaez17/LicoreriaEcuadorfin"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.verCodigo} ↗
              </a>
            </article>

            <article className="proyecto">
              <div className="proyecto-superior">
                <span className="proyecto-icono">04</span>
                <span className="proyecto-tipo">{t.academico}</span>
              </div>

              <h3>Store Quito</h3>
              <p>{t.storeTexto}</p>

              <div className="etiquetas">
                <span>React</span>
                <span>JavaScript</span>
                <span>Vite</span>
              </div>

              <a
                className="enlace-proyecto"
                href="https://github.com/CristianPaez17/store-Quito"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.verCodigo} ↗
              </a>
            </article>
          </div>
        </section>

        <section className="seccion github">
          <p className="etiqueta">05 / GitHub</p>
          <h2 className="titulo-seccion">{t.githubTitulo}</h2>
          <p className="texto-seccion">{t.githubTexto}</p>

          <a
            className="boton principal"
            href="https://github.com/CristianPaez17"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.visitarGitHub} ↗
          </a>
        </section>

        <section className="seccion" id="contacto">
          <p className="etiqueta">06 / {t.contacto}</p>
          <h2 className="titulo-seccion">{t.contactoTitulo}</h2>
          <p className="texto-seccion">{t.contactoTexto}</p>

          <div className="contacto-enlaces">
            <a
              className="enlace-proyecto"
              href="mailto:paezgarciacristian@gmail.com"
            >
              ✉️ paezgarciacristian@gmail.com ↗
            </a>

            <a
              className="enlace-proyecto"
              href="tel:+593987716808"
            >
              📞 +593 98 771 6808
            </a>

            <a
              className="enlace-proyecto"
              href="https://wa.me/593987716808"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>

            <a
              className="enlace-proyecto"
              href="https://www.linkedin.com/in/cristian-paez-garcia-a93a243a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          {t.pie} © {new Date().getFullYear()}
        </p>

        <a
          href="https://github.com/CristianPaez17"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </div>
  );
}

export default App;
