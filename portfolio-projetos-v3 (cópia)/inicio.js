const modal = document.getElementById("contactModal");

["openContact", "openContact2", "openContact3"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", () => modal.classList.add("show"));
  }
});

const close = document.getElementById("closeContact");
if (close) {
  close.addEventListener("click", () => modal.classList.remove("show"));
}

if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}
