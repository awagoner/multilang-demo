(function() {
  fetchData();
  document.getElementById('lang').addEventListener('click', selectLang);
})();

function fetchData(lang = 'en') {
  fetch(`./${lang}.json`)
  .then(res => res.json())
  .then(json => populateData(json))
}

function populateData(json) {
  const welcome = document.getElementById('welcome');
  const text_intro = document.getElementById('text_intro');
  const text_article = document.getElementById('text_article');

  for (let d in json) {
    document.getElementById(d).innerText = json[d]
  }
}

function selectLang(e) {
  if (e.target.nodeName === 'LI') fetchData(e.target.innerText.toLowerCase())
}
