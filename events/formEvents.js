import showList from '../pages/vocabList';
import {
  addWords, updateList, getVocabWords
} from '../api/vocabData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      // console.warn('CLICKED SUBMIT Vocab word', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#languages').value,
        uid: user.uid,
      };
      // console.warn(payload);
      addWords(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateList(patchPayload).then(() => {
          getVocabWords(user.uid).then(showList);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A Word List
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE Word List', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#languages').value,
        firebaseKey,
        uid: user.uid,
      };
      updateList(payload).then(() => getVocabWords(user.uid).then(showList));
    }
  });
};

export default formEvents;
