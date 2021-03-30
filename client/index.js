const container = document.querySelector(".articles");

fetch("/api/posts")
  .then(data => {
    return data.json()
  })
  .then(data => {
    data.forEach(d => {
      const item = document.createElement("article");
      item.classList.add("article-item");

      const title = document.createElement("h1");
      title.classList.add("article-item__title");
      
      const body = document.createElement("p");
      body.classList.add("article-item__body");
      
      title.textContent = d.title;
      body.textContent = d.body;

      item.appendChild(title);
      item.appendChild(body);

      container.append(item)
    })
  });
