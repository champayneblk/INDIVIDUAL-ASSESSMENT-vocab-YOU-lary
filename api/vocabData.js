import client from '../utils/client';

const endpoint = client.databaseURL;

// Get all vocabulary words
const getVocabWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// Create a vocab word
const addWords = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Get a single word
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Delete a word from the vocab list
const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`, {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update vocab list
const updateList = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// Filter by language
const Filter = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="language"`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const JS = Object.values(data).filter((item) => item.language);
      resolve(JS);
    })
    .catch(reject);
});

const JSWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="language"&equalTo="JavaScript"`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const JS = Object.values(data).filter((item) => item.language);
      resolve(JS);
    })
    .catch(reject);
});

const CSSWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="language"&equalTo="CSS"`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const CSS = Object.values(data).filter((item) => item.language);
      resolve(CSS);
    })
    .catch(reject);
});

const HTMLWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="language"&equalTo="HTML"`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const HTMLWord = Object.values(data).filter((item) => item.language);
      resolve(HTMLWord);
    })
    .catch(reject);
});

export {
  getVocabWords,
  addWords,
  getSingleWord,
  deleteWord,
  updateList,
  Filter,
  JSWords,
  CSSWords,
  HTMLWords
};
