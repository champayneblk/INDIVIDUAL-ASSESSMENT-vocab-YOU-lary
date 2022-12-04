// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyList = () => {
  const domString = '<h1>No Words In The List</h1>';
  renderToDOM('#store', domString);
};

const showList = (array) => {
  // clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Vocabulary Word</button>';
  renderToDOM('#add-word-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-list--${item.firebaseKey}"></i>
            <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-word--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showList, emptyList };
