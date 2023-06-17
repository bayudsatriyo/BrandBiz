const createTestimonyItemTemplate = (testimony) => `

<div class="testimony-item">
            <div class="testimony-profile">
              <div class="testimony-person">
                <h3 class="testimony-name">${testimony.nama}</h3>
                <h6 class="testimony-position">${testimony.jabatan}</h6>
              </div>
            </div>
            <div class="description">
              <p>
               "${testimony.feedback}"
              </p>
            </div>
          </div>
`;

const createNewsItemTemplate = (news) => `
<div class="news-item">
<img
  src="${news.urlToImage}"
  alt="News Image"
  class="news-image"
/>
<div class="detail-news">
  <div class="news-date">
    <img src="./Vector.png" alt="Date Vector" />
    <p>${news.publishedAt}</p>
  </div>
  <h4 class="news-title">
  ${news.title}
  </h4>
  <p class="news-description">
   ${news.content}
  </p>
</div>
<div class="news-author-and-button">
  <p class="news-author">${news.author}</p>
  <button id="readMore" class="readmore"><a href="${news.url}">Read More</a></button>
</div>
</div>
`;

// eslint-disable-next-line import/prefer-default-export
export { createTestimonyItemTemplate, createNewsItemTemplate };
