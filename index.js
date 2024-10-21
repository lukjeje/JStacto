window.addEventListener('resize', function() {
    var dynamicContent = document.getElementById('name');
    
    if (window.innerWidth < 259) {
        dynamicContent.innerHTML = '<p id="name">tic <br> X <br> tac <br> O <br> toe</p>';
    } else {
        dynamicContent.innerHTML = '<p id="name">tic X tac O toe</p>';
    }
  });