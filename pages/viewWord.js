import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewWord = (obj) => {
  clearDom();

  const domString = `
 <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 id="card-title">${obj.title}</h5>
    <p class="card-text">${obj.definition}</p>
    <p class="card-text">${obj.language}</p>
    <a href="#" id="delete-word"> Delete Word</a>
    <a href="#" id="edit-entry-btn">Edit Word</a>
    <a href="#" id="view-word-btn">View Word</a>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewWord;
