import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabWords } from '../api/vocabData';
// import viewWord from '../pages/viewWord';
import showList from '../pages/vocabList';

const startApp = (user) => {
  domBuilder(user); // Builds the DOM
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getVocabWords().then((cards) => showList(cards));
};

export default startApp;
