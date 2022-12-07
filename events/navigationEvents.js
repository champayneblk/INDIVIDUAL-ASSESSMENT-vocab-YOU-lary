import {
  JSWords, CSSWords, HTMLWords, getVocabWords
} from '../api/vocabData';
import showList from '../pages/vocabList';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // TODO:  Languages
  document.querySelector('#languages-css-btn').addEventListener('click', () => {
    CSSWords(user.uid).then(showList);
  });

  document.querySelector('#languages-js-btn').addEventListener('click', () => {
    JSWords(user.uid).then(showList);
  });

  document.querySelector('#languages-html-btn').addEventListener('click', () => {
    HTMLWords(user.uid).then(showList);
  });

  // TODO: ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getVocabWords(user.uid).then(showList);
  });
};

export default navigationEvents;
