/* check the answer and print an alert in dog-page */
function checkAnswer() {
      if (document.getElementById('correct').checked) {
          alert('Correct answer!')
      }
      else if (document.getElementById('incorrect').checked) {
          alert('Oops, you must have misclicked. You might want to try again!')
      }
  }


  /* check which radio button is checked, and change which elements to display in hobbies page */
 function showMusic() {
   if (document.getElementById('music').checked) {
     document.getElementById('p_music').style.display = 'block';
     document.getElementById('img_music').style.display = 'block';
     document.getElementById('p_gaming').style.display = 'none';
     document.getElementById('p_outdoors').style.display = 'none';
     document.getElementById('img_gaming').style.display = 'none';
     document.getElementById('img_outdoors').style.display = 'none';
   }
 }

 function showGaming() {
  if (document.getElementById('gaming').checked) {
    document.getElementById('p_gaming').style.display = 'block';
    document.getElementById('img_gaming').style.display = 'block';
    document.getElementById('p_music').style.display = 'none';
    document.getElementById('p_outdoors').style.display = 'none';
    document.getElementById('img_music').style.display = 'none';
    document.getElementById('img_outdoors').style.display = 'none';
  }
}

function showOutdoors() {
  if (document.getElementById('outdoors').checked) {
    document.getElementById('p_outdoors').style.display = 'block';
    document.getElementById('img_outdoors').style.display = 'block';
    document.getElementById('p_music').style.display = 'none';
    document.getElementById('p_gaming').style.display = 'none';
    document.getElementById('img_music').style.display = 'none';
    document.getElementById('img_gaming').style.display = 'none';
  }
}
  