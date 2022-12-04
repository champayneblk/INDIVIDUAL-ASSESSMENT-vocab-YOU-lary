import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabWords } from '../api/vocabData';
import { showList } from '../pages/vocabList';

const startApp = () => {
  domBuilder(); // Builds the DOM
  navBar();
  domEvents();
  formEvents();
  logoutButton();
  navigationEvents();
  getVocabWords().then((cards) => showList(cards));
};

export default startApp;
