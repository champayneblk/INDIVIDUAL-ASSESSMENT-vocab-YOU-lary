import { Filter, getVocabWords } from '../api/vocabData';
import showList from '../pages/vocabList';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO:  Languages
  document.querySelector('#languages').addEventListener('click', () => {
    Filter().then(showList);
  });

  // TODO: ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getVocabWords().then(showList);
  });
};

export default navigationEvents;
