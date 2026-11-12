import { Page } from "@/types"
import { sitePhotos } from "@/data/courses"
import { Button } from "@/components/common/Button"
import { Icon } from "@/components/common/Icon"
import { SectionTitle } from "@/components/common/SectionTitle"
import maggiePhotoAbout from "@/imports/MAGGIE-1.jpg"

interface AboutPageProps {
  goTo: (page: Page) => void
}

const coreValues = [
  { number: "01", title: "Curiosidad antes que perfección" },
  { number: "02", title: "Cuidar también es enseñar" },
  { number: "03", title: "El conocimiento debe empoderar" },
  { number: "04", title: "El movimiento es para todas" },
]

const founderCvPillars = [
  {
    number: "01",
    title: "Formación Académica y Docencia",
    items: [
      {
        title: "Lic. en Acondicionamiento Físico y Creación",
        detail: "Con título y cédula profesional ante la SEP.",
      },
      {
        title: "Cursando Máster en Readaptación de Lesiones",
        detail: "Granada, España.",
      },
      {
        title: "Diplomado en Psicología Deportiva",
        detail: "IBERO Puebla.",
      },
      {
        title: "Diplomado en Pedagogía",
        detail: "IBERO Puebla.",
      },
      {
        title: "Estándar de Competencia SEP-CONOCER",
        detail: "Certificada para impartición de cursos presenciales.",
      },
      {
        title: "Docente a nivel universitario y Formador Fitness",
        detail: "IBERO Puebla.",
      },
    ],
  },
  {
    number: "02",
    title: "Certificaciones y Modalidades Fitness",
    items: [
      {
        title: "Certificada en más de 10 modalidades fitness",
        detail: "Trayectoria multidisciplinaria integral.",
      },
      {
        title: "Certificación Internacional Completa de Pilates",
        detail: "Mat, Reformer, Corrector Espinal, Chair, Ladder Barrel y Cadillac.",
      },
      {
        title: "Certificación Internacional en Pilates Mat",
        detail: "Dominio técnico del repertorio clásico y contemporáneo.",
      },
      {
        title: "Certificación en Barre",
        detail: "Formada en 3 escuelas contemporáneas.",
      },
      {
        title: "Técnica de Danza PBT",
        detail: "Certificación en Progressing Ballet Technique.",
      },
      {
        title: "Certificación en Hatha Yoga",
        detail: "Integración de respiración, postura y conciencia corporal.",
      },
    ],
  },
  {
    number: "03",
    title: "Actualización y Especializaciones",
    items: [
      {
        title: "Workshops Internacionales de Pilates",
        detail: "Actualización continua en distintas marcas de Brasil, España, Portugal, EE. UU., México, entre otras.",
      },
      {
        title: "Curso de Primeros Auxilios Fitness",
        detail: "Seguridad y respuesta responsable en el estudio.",
      },
      {
        title: "Acondicionamiento para Adultos Mayores",
        detail: "Curso especializado de adaptación y movilidad segura, entre otros.",
      },
      {
        title: "Especialización en Actividad Física y Deporte",
        detail: "Cursos continuos para el mejoramiento y actualización en el área.",
      },
    ],
  },
]

export function AboutPage({ goTo }: AboutPageProps) {
  return (
    <main className="page inner-page">
      {/* About Hero */}
      <section className="about-hero">
        <div>
          <span className="eyebrow">Nuestra historia</span>
          <h1>
            Con raíces en el movimiento. <em>Guiada desde el corazón.</em>
          </h1>
          <p>
            School Fitness nació de una idea sencilla: la educación excepcional
            en Pilates puede ser rigurosa y cálida, estructurada y flexible,
            profesional y profundamente personal.
          </p>
        </div>
        <img
          src={maggiePhotoAbout}
          alt="Maggie Zarate, fundadora y educadora principal"
        />
      </section>

      {/* Founder Story */}
      <section className="founder-story section">
        <div className="founder-name">
          <span className="script">Conoce a la fundadora</span>
          <h2>Maggie Zarate</h2>
          <p>Fundadora · Educadora principal · Alumna de por vida</p>
          <div className="founder-credentials-badges">
            <span>Lic. en Acondicionamiento Físico y Creación (SEP)</span>
            <span>Docente Universitaria &amp; Formador Fitness IBERO Puebla</span>
            <span>Certificada SEP-CONOCER</span>
          </div>
        </div>
        <div className="story-text">
          <p className="lead">
            “Las mejores instructoras no actúan frente a ti. Crean las
            condiciones para que descubras todo lo que tu cuerpo puede hacer.”
          </p>
          <p>
            Después de una década enseñando en distintos estudios, Maggie vio a
            demasiadas alumnas talentosas terminar su formación abrumadas por la
            información y poco preparadas para trabajar con personas reales.
          </p>
          <p>
            Creó School Fitness para cerrar esa brecha: uniendo educación
            precisa del movimiento, mentoría consciente, experiencia práctica y
            el espacio para que cada instructora desarrolle su propia voz.
          </p>
        </div>
      </section>

      {/* Founder CV Section */}
      <section className="founder-cv-section section">
        <div className="section-title centered">
          <span className="eyebrow">Trayectoria &amp; Currículum</span>
          <h2>
            Formación académica{" "}
            <em>y experiencia.</em>
          </h2>
          <p className="cv-subtitle">
            Una sólida preparación universitaria, pedagógica y certificaciones
            internacionales al servicio de tu formación como instructora.
          </p>
        </div>

        <div className="cv-grid">
          {founderCvPillars.map((pillar) => (
            <article key={pillar.number} className="cv-card">
              <div className="cv-card-head">
                <span className="cv-number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
              </div>
              <ul className="cv-list">
                {pillar.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <SectionTitle
          eyebrow="En qué creemos"
          title="Los valores detrás de cada lección."
          align="center"
        />
        <div className="values-grid">
          {coreValues.map((val) => (
            <div key={val.number}>
              <span>{val.number}</span>
              <h3>{val.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Community Banner */}
      <section className="community-banner">
        <img
          src={sitePhotos.community}
          alt="Mujeres compartiendo una práctica de movimiento en un estudio luminoso"
        />
        <div>
          <span className="eyebrow">Una comunidad global</span>
          <h2>Aprendemos juntas. Crecemos juntas.</h2>
          <p>
            Únete a una red mundial de instructoras conscientes que transforman
            la experiencia del Pilates, una clase a la vez.
          </p>
          <Button onClick={() => goTo("courses")}>
            Encuentra tu curso <Icon name="arrow" />
          </Button>
        </div>
      </section>
    </main>
  )
}
