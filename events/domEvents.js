import {
  getVocabWords,
  addWords,
  getSingleWord,
  deleteWord
} from '../api/vocabData';

import { showList } from '../pages/vocabList';
import viewWord from '../pages/viewWord';
import addVocabWordForm from '../components/forms/addVocabWordForm';

const domEvents = () => {
  document.querySelector('#main-containter').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteWord(firebaseKey).then(() => {
          getVocabWords().then(showList);
        });
      }
      if (e.target.id.inclues('view-list')) {
        console.warn('View List');
        getVocabWords().then(showList);
      }

      if (e.target.id.includes('add-word-btn')) {
        console.warn('ADD word');
        addVocabWordForm();
      }

      // TODO: CLICK EVENT EDITING/UPDATING A Word
      if (e.target.id.includes('edit-entry-btn')) {
      // console.warn('EDIT LIST', e.target.id);
      // console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        getSingleWord(firebaseKey).then(addWords);
      }

      // TODO: CLICK EVENT FOR VIEW Word DETAILS
      if (e.target.id.includes('view-word-btn')) {
        console.warn('VIEW vocab card', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = (e.target.id.split('--'));
        getSingleWord(firebaseKey).then(viewWord);
      }
    }
  });
};

export default domEvents;
