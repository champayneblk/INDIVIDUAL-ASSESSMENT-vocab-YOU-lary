import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id=${obj.firebaseKey ? `edit-entry--${obj.firebaseKey}` : 'submit-word'} class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      </div>
      <div class="form-group">
        <label for="title">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Add vocabulary word definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
          
      <label for="title">Languages </label>
      <input type="text" class="form-control" id="languages" placeholder="Enter Language" value="${obj.language || ''}" required>
          
      </div>
      <button type="submit" id="submit" class="btn btn-primary mt-3">Submit New Word</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabWordForm;
