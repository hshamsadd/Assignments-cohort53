/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
hijackGoogleLogo();

function hijackGoogleLogo() {
  const googleLogo = document.querySelector('svg.lnXdpd');
  if (googleLogo) {
    const hyfLogo = document.createElement('img');
    hyfLogo.src =
      'https://raw.githubusercontent.com/HackYourFuture/Assignments/refs/heads/main/assets/hyf-logo-black-bg-small.png';
    hyfLogo.srcset =
      'https://raw.githubusercontent.com/HackYourFuture/Assignments/refs/heads/main/assets/hyf-logo-black-bg-small.png';
    hyfLogo.alt = 'HackYourFuture';
    hyfLogo.style.height = googleLogo.style.height + 'px';
    hyfLogo.style.width = googleLogo.style.width + 'px';
    googleLogo.parentNode.replaceChild(hyfLogo, googleLogo);
    console.log('Logo hijack successful!');
  }
}

hijackGoogleLogo();
