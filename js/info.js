document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("info-list");
  if (!container || typeof infos === "undefined") return;

  infos.forEach((info, index) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <div class="date">${info.date}</div>
      <h2>${info.title}</h2>
      <p>${info.body}</p>
      ${
        info.link
          ? `<p>👉 <a href="${info.link.url}" target="_blank">${info.link.label}</a></p>`
          : ""
      }
    `;

    container.appendChild(article);
  });
});
