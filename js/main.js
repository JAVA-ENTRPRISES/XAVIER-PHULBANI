fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    setActiveMenu();
  });

fetch("components/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);

  function setActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function openMenu() {
  document.getElementById("mobileMenu").classList.remove("translate-x-full");
  document.getElementById("overlay").classList.remove("hidden");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.add("translate-x-full");
  document.getElementById("overlay").classList.add("hidden");
}