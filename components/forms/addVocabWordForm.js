import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id=${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'} class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Language</label>
        <input type="text" class="form-control" id="languages" placeholder="Language" value="${obj.language || ''}"required>
      </div>
      <div class="form-group">
        <label for="title">Definition</label>
        <input type="email" class="form-control" id="definition" value="${obj.definition || ''}" aria-describedby="Email" placeholder="Add vocabulary word definition" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit New Word</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabWordForm;
