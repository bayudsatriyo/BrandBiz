const createTestimonyItemTemplate = (testimony) => `

<div class="testimony-item">
            <div class="testimony-profile">
              <div class="testimony-image">
                <img
                  src="${testimony.avatar}"
                  alt=""
                />
              </div>
              <div class="testimony-person">
                <p class="testimony-name">${testimony.name}</p>
                <p class="testimony-position">${testimony.position}</p>
              </div>
            </div>
            <div class="description">
              <p>
               "${testimony.testimony}"
              </p>
            </div>
          </div>
`;

// eslint-disable-next-line import/prefer-default-export
export { createTestimonyItemTemplate };
