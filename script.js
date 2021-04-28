/* events can trigger actions, which we can capture and work with, by using 'addEventListener' method */

/*we capture events in HTML, JS listens for certain events, when events happenJS acts on it, we can add to HTML but will attched to the entire doc. */


/* What events to listen for and what to do when it occurs, below is an ex of an event when a key is pressed and released
 */

document.addEventListener ("keyup", function (event) {
  if (event.key == "l"|| event.key == "L") {
    lightTheme();
  
  }

  if (event.key == "d" || event.key == "D") {
    darkTheme();
  }

});



function lightTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}

function darkTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}

