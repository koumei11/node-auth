const body = document.getElementsByTagName('body')[0];
const selectButton = document.getElementsByClassName('triangle')[0];
const logoutDiv = document.getElementsByClassName('logout')[0];
const logoutButton = document.getElementsByClassName('inner')[0];

body.addEventListener('click', (e) => {
  if (logoutDiv.style.display != 'none') {
    logoutDiv.style.display = 'none'
  }
});

selectButton.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log(logoutDiv.style.display);
  if (logoutDiv.style.display == 'inline-block') {
    logoutDiv.style.display = 'none';
  } else {
    logoutDiv.style.display = 'inline-block';
  }
});

// logoutButton.addEventListener('click', (e) => {
//   e.stopPropagation();

// });