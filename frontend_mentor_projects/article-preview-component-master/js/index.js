const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', (event) => {
  let shareActiveSection = document.getElementById('active-view');
  let shareInactiveSection = document.getElementById('inactive-view');

  shareInactiveSection.classList.add('display-none');
  shareInactiveSection.classList.remove('display-flex');

  shareActiveSection.classList.remove('display-none');
  shareActiveSection.classList.add('display-flex');
  shareActiveSection.getElementsByClassName('active-view--container')[0].classList.add('display-flex')

});
