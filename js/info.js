(() => {
  const list = document.getElementById("info-list");

  if (!list || typeof infos === "undefined") {
    console.error("info-list または infos が見つかりません");
    return;
  }

  const INITIAL_COUNT = 3; // 最初に表示する件数
  let expanded = false;

  function createArticle(item) {
    const article = document.createElement("article");

    let linkHtml = "";
    if (item.link && item.link.url) {
      linkHtml = `
        <p>
          <a href="${item.link.url}" target="_blank" rel="noopener">
            ${item.link.label || "詳細を見る →"}
          </a>
        </p>
      `;
    }

    article.innerHTML = `
      <h2>${item.title}</h2>
      <div class="date">${item.date}</div>
      <p>${item.body}</p>
      ${linkHtml}
    `;

    return article;
  }

  function createMoreButton() {
    const article = document.createElement("article");
    article.innerHTML = `
      <p style="text-align:center; margin:0;">
        <a href="#" id="info-more">過去のお知らせを見る</a>
      </p>
    `;

    article.querySelector("#info-more").addEventListener("click", (e) => {
      e.preventDefault();
      expanded = true;
      render();
    });

    return article;
  }

  function render() {
    list.innerHTML = "";

    const displayCount = expanded ? infos.length : INITIAL_COUNT;

    infos.slice(0, displayCount).forEach(item => {
      list.appendChild(createArticle(item));
    });

    if (!expanded && infos.length > INITIAL_COUNT) {
      list.appendChild(createMoreButton());
    }
  }

  render();
})();
