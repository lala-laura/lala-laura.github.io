//Read More Button
function myFunction() {
  let dots = document.getElementById('dots');
  let readMore = document.getElementById('cont');
  let btnText = document.getElementById('moreBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    //  btnText.innerHTML = 'Read more';
    readMore.style.display = 'none';
  } else {
    dots.style.display = 'none';
    // btnText.innerHTML = 'Read less';
    readMore.style.display = 'inline';
  }
}
