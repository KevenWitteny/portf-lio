let currentSlide = 0;

const projects = {
  evelly: {
    hero: 'assets/evellylogo.png',
    avatar: 'assets/evellyperfil.png',
    title: 'EVELLY',
    subtitle: 'ASSISTENTE VIRTUAL IA',
    intro: 'Evelly é uma assistente virtual com inteligência artificial que conversa, entende comandos e executa tarefas para tornar sua rotina mais prática e inteligente.',
    image: 'assets/evellyperfil.png',
    about: 'A Evelly foi criada para ser uma assistente virtual completa, unindo inteligência artificial, reconhecimento de voz, síntese de fala e uma interface visual em 3D. Ela é capaz de conversar, responder perguntas, executar comandos e automatizar diversas tarefas do dia a dia.',

    features: [
      ['fa-solid fa-microphone-lines', 'Reconhecimento de Voz', 'Escuta e interpreta comandos em tempo real.'],
      ['fa-solid fa-volume-high', 'Síntese de Fala', 'Respostas naturais utilizando TTS avançado.'],
      ['fa-solid fa-brain', 'Inteligência Artificial', 'Processamento inteligente de perguntas e comandos.'],
      ['fa-solid fa-cube', 'Avatar 3D', 'Integração visual com modelo VRM animado.'],
      ['fa-solid fa-sliders', 'Personalização', 'Configuração de voz, comportamento e aparência.']
    ],

    mini: [
      ['fa-solid fa-comments', 'Conversacional', 'Interação natural por voz e texto'],
      ['fa-solid fa-brain', 'IA Integrada', 'Respostas inteligentes em tempo real'],
      ['fa-solid fa-cube', 'Avatar 3D', 'Personagem VRM totalmente integrado'],
      ['fa-solid fa-bolt', 'Produtiva', 'Automação de tarefas e comandos']
    ],

    tech: [
      ['fa-brands fa-python', 'Python'],
      ['fa-solid fa-brain', 'OpenAI'],
      ['fa-solid fa-microphone-lines', 'Whisper'],
      ['fa-solid fa-volume-high', 'Edge-TTS'],
      ['fa-solid fa-cube', 'VRM Avatar'],
      ['fa-solid fa-window-maximize', 'PySide6'],
      ['fa-solid fa-code', 'Qt Designer'],
      ['fa-brands fa-linux', 'Linux']
    ],

    learn: [
      'Integração de Inteligência Artificial com aplicações desktop',
      'Reconhecimento de voz com Whisper',
      'Síntese de fala utilizando Edge-TTS',
      'Manipulação de avatares 3D VRM',
      'Desenvolvimento de interfaces com PySide6',
      'Arquitetura modular para assistentes virtuais',
      'Integração entre IA, voz e interface gráfica',
      'Gerenciamento de processos em Linux'
    ],

    gallery: [
      'assets/evellyperfil.png',
      'assets/evellylogo.png',
      'assets/evellyp2.png',
      'assets/evellytchau.png'
    ],

    progress: '75%'
  },

  bot: {
    hero: 'assets/bot-cover.png',
    avatar: 'assets/bot-cover.png',
    title: 'BOT',
    subtitle: 'AUTOMAÇÃO DE E-MAILS',
    intro: 'Sistema desenvolvido para automatizar envio de e-mails com interface gráfica, modelos, anexos, grupos de contatos e histórico de envios.',
    image: 'assets/bot-cover.png',
    about: 'O Bot foi criado para acelerar rotinas de comunicação, permitindo montar mensagens em HTML, organizar contatos por grupos, anexar arquivos e acompanhar o histórico de disparos. A proposta é economizar tempo e tornar processos repetitivos mais profissionais.',

    features: [
      ['fa-solid fa-envelope', 'Envio Automático', 'Disparo de e-mails em lote.'],
      ['fa-solid fa-layer-group', 'Modelos Prontos', 'Salve e reutilize mensagens.'],
      ['fa-solid fa-paperclip', 'Anexos', 'Envie arquivos e imagens.'],
      ['fa-solid fa-users', 'Grupos', 'Organize contatos por listas.'],
      ['fa-solid fa-chart-line', 'Histórico', 'Acompanhe envios realizados.']
    ],

    mini: [
      ['fa-solid fa-envelope-open-text', 'Produtivo', 'Menos tarefas manuais'],
      ['fa-solid fa-gears', 'Automático', 'Fluxos personalizados'],
      ['fa-solid fa-brain', 'Inteligente', 'Apoio com IA'],
      ['fa-solid fa-arrow-trend-up', 'Eficiente', 'Mais controle dos envios']
    ],

    tech: [
      ['fa-brands fa-python', 'Python'],
      ['fa-solid fa-window-maximize', 'Tkinter'],
      ['fa-solid fa-palette', 'ttkbootstrap'],
      ['fa-solid fa-envelope', 'SMTP'],
      ['fa-brands fa-html5', 'HTML'],
      ['fa-solid fa-code', 'JSON'],
      ['fa-solid fa-file-csv', 'CSV'],
      ['fa-solid fa-box', 'PyInstaller']
    ],

    learn: [
      'Automação de processos com Python',
      'Construção de interfaces desktop',
      'Envio de e-mails com HTML e anexos',
      'Organização de contatos e modelos',
      'Empacotamento de aplicações'
    ],

    gallery: [
      'assets/bot-cover.png',
      'assets/bot-cover.png',
      'assets/bot-cover.png',
      'assets/bot-cover.png'
    ],

    progress: '80%'
  }
};

function updateCarousel() {
  const track = document.getElementById('gallery');
  const slides = document.querySelectorAll('.shot');
  const dots = document.querySelectorAll('.carousel-dots button');

  if (!track || !slides.length) return;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function buildDots(total) {
  const dots = document.getElementById('carouselDots');
  if (!dots) return;

  dots.innerHTML = Array.from({ length: total }).map((_, index) => `
    <button class="${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
  `).join('');

  dots.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      currentSlide = Number(button.dataset.slide);
      updateCarousel();
    });
  });
}

function render(key) {
  const p = projects[key] || projects.evelly;

  const hero = document.querySelector('.hero');
  const progress = document.querySelector('.progress');

  if (hero) {
    hero.style.setProperty('--hero-image', `url('${p.hero || p.image}')`);
  }

  document.getElementById('projectTitle').textContent = p.title;
  document.getElementById('projectSubtitle').textContent = p.subtitle;
  document.getElementById('projectIntro').textContent = p.intro;
  document.getElementById('aboutText').textContent = p.about;
  document.getElementById('progressNum').textContent = p.progress;

  const projectImage = document.getElementById('projectImage');
  if (projectImage) {
    projectImage.src = p.image;
    projectImage.alt = p.title;
  }

  const progressNumber = parseInt(p.progress.replace('%', ''), 10);

  if (progress) {
    progress.style.background = `conic-gradient(var(--purple) ${progressNumber * 3.6}deg, #1c2940 0)`;
  }

  document.getElementById('features').innerHTML = p.features.map(item => `
    <article class="feature">
      <span class="ico">
        <i class="${item[0]}"></i>
      </span>
      <b>${item[1]}</b>
      <small>${item[2]}</small>
    </article>
  `).join('');

  document.getElementById('miniCards').innerHTML = p.mini.map(item => `
    <article class="mini">
      <span class="ico">
        <i class="${item[0]}"></i>
      </span>
      <b>${item[1]}</b>
      <small>${item[2]}</small>
    </article>
  `).join('');

  document.getElementById('techs').innerHTML = p.tech.map(item => `
    <div class="tech-item">
      <i class="${item[0]}"></i>
      <span>${item[1]}</span>
    </div>
  `).join('');

  document.getElementById('learnList').innerHTML = p.learn.map(item => `
    <li>${item}</li>
  `).join('');

  currentSlide = 0;

  document.getElementById('gallery').innerHTML = p.gallery.map(src => `
    <div class="shot">
      <img src="${src}" alt="${p.title}">
    </div>
  `).join('');

  buildDots(p.gallery.length);
  updateCarousel();

  document.querySelectorAll('.project').forEach(button => {
    const isActive = button.dataset.project === key;
    button.classList.toggle('active', isActive);
  });
}

document.querySelectorAll('.project').forEach(button => {
  button.addEventListener('click', () => {
    render(button.dataset.project);
  });
});

document.getElementById('prevSlide').addEventListener('click', () => {
  const total = document.querySelectorAll('.shot').length;
  if (!total) return;

  currentSlide = currentSlide === 0 ? total - 1 : currentSlide - 1;
  updateCarousel();
});

document.getElementById('nextSlide').addEventListener('click', () => {
  const total = document.querySelectorAll('.shot').length;
  if (!total) return;

  currentSlide = currentSlide === total - 1 ? 0 : currentSlide + 1;
  updateCarousel();
});

render('evelly');

const modal = document.getElementById('contactModal');

document.getElementById('openContact')?.addEventListener('click', () => {
    modal.classList.add('show');
});

document.getElementById('openContact2')?.addEventListener('click', () => {
    modal.classList.add('show');
});

document.getElementById('closeContact')?.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});