import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// const emptyList = () => {
//   const domString = '<h1>No Words In The List</h1>';
//   renderToDOM('#store', domString);
// };

const showList = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-button">Add A Vocabulary Word</button>';
  renderToDOM('#add-word-btn', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
            <p class="card-text">${item.definition}</p>
            <i id="view-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-success"></i>
            <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-word--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
  console.warn('here');
};

export default showList;
