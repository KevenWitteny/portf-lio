
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");

if (textarea && counter) {
  textarea.addEventListener("input", () => {
    counter.textContent = `${textarea.value.length} / 1000`;
  });
}

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const nome = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const assunto = form.querySelector("select").value;
    const mensagem = form.querySelector("textarea").value.trim();

    const corpo = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`
    );

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=kevenmoreira86@gmail.com&su=${encodeURIComponent(assunto)}&body=${corpo}`;

    if (toast) {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3500);
    }

    window.open(url, "_blank");
  });
}
