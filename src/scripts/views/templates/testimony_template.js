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

// eslint-disable-next-line import/prefer-default-export
export { createTestimonyItemTemplate };