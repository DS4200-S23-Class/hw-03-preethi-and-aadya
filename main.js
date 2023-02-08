// interactive button
  let color = 'white';

  function change_color() {
      // conditions for color change
      if (color == 'white') {
          document.body.style.backgroundColor = "pink";
      }
      else {
          document.body.style.backgroundColor = 'white';
      }
      color = document.body.style.backgroundColor;
  }