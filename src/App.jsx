import React, { useEffect, useState } from "react";

// ====== DATA ======
const photos = [
  { src: "./assets/foto1.jpg", caption: "Un momento bonito juntas 💕" },
  { src: "./assets/foto2.jpg", caption: "Tu sonrisa que ilumina todo ✨" },
  { src: "./assets/foto3.jpg", caption: "Un recuerdo que adoro 🫶" },
  { src: "./assets/foto4.jpg", caption: "Un recuerdo que adoro 🫶" },
  { src: "./assets/foto5.jpg", caption: "Un recuerdo que adoro 🫶" },
  { src: "./assets/foto6.jpg", caption: "Un recuerdo que adoro 🫶" },
  { src: "./assets/foto7.jpg", caption: "Un recuerdo que adoro 🫶" },
  { src: "./assets/foto8.jpg", caption: "Un recuerdo que adoro 🫶" },
  { src: "./assets/foto9.jpg", caption: "Un recuerdo que adoro 🫶" },
];

const timelineEvents = [
  {
    year: "Día 1",
    title: "Cuando te conocí",
    text: "Ese día apareció una persona linda, talentosa y muy especial en mi vida.",
  },
  {
    year: "Momentos",
    title: "Risas infinitas",
    text: "Entre dibujos, anécdotas y conversaciones, siempre terminas haciéndome sonreír.",
  },
  {
    year: "Hoy",
    title: "Tu cumpleaños",
    text: "Hoy celebramos lo increíble que eres y todo lo bueno que viene para ti.",
  },
  {
    year: "Futuro",
    title: "Sueños por cumplir",
    text: "Estoy segura de que vas a lograr cosas hermosas, porque tienes un corazón gigante.",
  },
];

const compliments = [
  "Tu talento para dibujar, retratos re lindos.",
  "Tu forma de ver el mundo es preciosa.",
  "Tienes un talento enorme para crear cosas bonitas, dibujar, pintar y más",
  "Eres mucho más fuerte de lo que crees.",
  "You have nice handwriting!",
  "You're will accomplish so muchhhh",
];

const quizQuestions = [
  {
    question: "¿Qué palabra describe mejor tu vibra?",
    options: ["aburrida", "re genial", "zombie", "nube gris"],
    answerIndex: 1,
  },
  {
    question: "¿Qué superpoder creo que tienes?",
    options: [
      "Diversión",
      "Convertir ideas en dibujos hermosos",
      "Dormir 100 horas seguidas",
      "Hablar con plantas",
    ],
    answerIndex: 1,
  },
  {
    question: "¿Qué deseo para ti este año?",
    options: [
      "Que no pase nada nuevo",
      "Que te rodee gente que te cuide mucho",
      "Que tengas muchas tareas",
      "Que nunca tengas tiempo para dibujar",
    ],
    answerIndex: 1,
  },
];

// ====== COMPONENTES ======

function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const colors = ["var(--pink)", "var(--green)", "var(--accent)", "var(--accent-strong)"];
    const temp = Array.from({ length: 60 }, (_, id) => ({
      id,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPieces(temp);
  }, []);

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const handleScroll = () => {
    const el = document.getElementById("main-content");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <Confetti />
      <div className="hero-content">
        <p className="hero-tag">Sorpresa ✨</p>
        <h1>¡Feliz cumpleaños, personita especial! 🎂</h1>
        <p className="hero-text">
          Este pequeño rinconcito digital es solo para ti.  
          Gracias por ser tan linda, tan creativa y tan tú. Hoy celebramos lo
          bonito que eres por dentro y por fuera.
        </p>
        <button className="btn-primary" onClick={handleScroll}>
          Ver la sorpresa 💌
        </button>
      </div>
    </section>
  );
}

function PhotoCarousel({ photos }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="section card">
      <h2>Momentos que me hacen sonreír contigo 📸</h2>
      <div className="carousel">
        <button className="carousel-btn" onClick={prev} aria-label="Foto anterior">
          ◀
        </button>
        <div className="carousel-frame">
          <img
            src={photos[index].src}
            alt={photos[index].caption}
            className="carousel-image"
          />
          <p className="carousel-caption">{photos[index].caption}</p>
          <p className="carousel-counter">
            {index + 1} / {photos.length}
          </p>
        </div>
        <button className="carousel-btn" onClick={next} aria-label="Foto siguiente">
          ▶
        </button>
      </div>
      <p className="hint">
        
      </p>
    </section>
  );
}

function Timeline({ events }) {
  return (
    <section className="section card">
      <h2>Nuestra pequeña línea del tiempo ⏳</h2>
      <div className="timeline">
        {events.map((ev, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-year">{ev.year}</p>
              <h3>{ev.title}</h3>
              <p>{ev.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OpeningCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section">
      <h2>Una tarjetita solo para ti 💌</h2>
      <div className="card-container">
        <div
          className={`flip-card ${open ? "open" : ""}`}
          onClick={() => setOpen((o) => !o)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>Toca para abrir ✨</p>
            </div>
            <div className="flip-card-back">
              <p>
                Gracias por existir kari, por tu arte, por tus ideas únicas y bonitas,
                por todo lo que compartes conmigo.  
                Deseo que este año se llene de cosas dulces, de proyectos que te
                emocionen y de personas que te cuiden tanto como tú mereces. y un novio jsjsaj
              </p>
              <p className="signature">Con muchooo cariño 💗</p>
            </div>
          </div>
        </div>
        <p className="hint">(Haz clic o toca la tarjeta para abrirla.)</p>
      </div>
    </section>
  );
}

function ComplimentsWall({ compliments }) {
  return (
    <section className="section card">
      <h2>Cositas que quiero recordarte ✨</h2>
      <div className="compliments-grid">
        {compliments.map((c, i) => (
          <div key={i} className="compliment-pill">
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

function QuizGame({ questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);

  const handleOption = (index) => {
    if (finished) return;
    setSelected(index);
    const isCorrect = index === questions[current].answerIndex;
    setFeedback(
      isCorrect
        ? "¡Exacto! Eso es lo que pienso de ti 💖"
        : "Mmm... no, yo te veo de otra forma más bonita 🥺"
    );

    if (isCorrect) {
      setTimeout(() => {
        if (current === questions.length - 1) {
          setFinished(true);
          setFeedback("Juego completado: conclusión = eres increíble 🎉");
        } else {
          setCurrent((c) => c + 1);
          setSelected(null);
          setFeedback("");
        }
      }, 1200);
    }
  };

  return (
    <div className="mini-game card">
      <h3>Mini quiz: ¿Cómo te veo yo? 💭</h3>
      {!finished ? (
        <>
          <p className="quiz-question">{questions[current].question}</p>
          <div className="quiz-options">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                className={`quiz-option ${
                  selected === i ? "quiz-option-selected" : ""
                }`}
                onClick={() => handleOption(i)}
              >
                {opt}
              </button>
            ))}
          </div>
          {feedback && <p className="quiz-feedback">{feedback}</p>}
          <p className="quiz-progress">
            Pregunta {current + 1} de {questions.length}
          </p>
        </>
      ) : (
        <p className="quiz-feedback">
          Resultado oficial: eres luz, talento, ternura y muchas cosas más. 🎀
        </p>
      )}
    </div>
  );
}

function HeartsGame({ compliments }) {
  const [revealed, setRevealed] = useState(
    compliments.map(() => false)
  );

  const toggleHeart = (index) => {
    setRevealed((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="mini-game card">
      <h3>Corazones sorpresa 💘</h3>
      <p className="small-text">
        Toca los corazones para ver mensajitos que quiero recordarte.
      </p>
      <div className="hearts-grid">
        {compliments.map((text, i) => (
          <button
            key={i}
            className={`heart ${revealed[i] ? "heart-open" : ""}`}
            onClick={() => toggleHeart(i)}
          >
            {revealed[i] ? <span className="heart-text">{text}</span> : "❤"}
          </button>
        ))}
      </div>
    </div>
  );
}

function MiniGamesSection() {
  return (
    <section className="section">
      <h2>Mini juegos y mimos para ti 🎲</h2>
      <div className="mini-games-layout">
        <QuizGame questions={quizQuestions} />
        <HeartsGame compliments={compliments} />
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section className="section card">
      <h2>Un poquito de música y video para acompañar 🎶</h2>
      <p className="small-text">
      </p>
      <div className="media-grid">
        <div>
          <p className="media-label">Video de recuerdo</p>
          <video
            className="media-video"
            controls
            src="./assets/video1.mp4"
          >
            Tu navegador no soporta video.
          </video>
        </div>
        <div>
          <p className="media-label">Canción para ti</p>
          <audio controls src="./assets/song1.mp3" className="media-audio">
            Tu navegador no soporta audio.
          </audio>
        </div>
      </div>
      <p className="hint">

      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Hecho con mucho cariño solo para ti 💗  
       From Chio c:
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <HeroSection />
      <main id="main-content" className="main">
        <PhotoCarousel photos={photos} />
        <Timeline events={timelineEvents} />
        <OpeningCard />
        <ComplimentsWall compliments={compliments} />
        <MiniGamesSection />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
