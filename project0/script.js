function lightmode()
{
  let x = document.querySelectorAll('body *');
  let y = document.querySelectorAll('div *');
  for(let i = 0; i < y.length; i++)
  {
    y[i].style.color = '#404040';
    x[i].style.backgroundColor = 'white';
  }
}

function darkmode()
{
  let x = document.querySelectorAll('body *');
  let y = document.querySelectorAll('div *');
  for(let i = 0; i < y.length; i++)
  {
    y[i].style.color = '#bfbfbf';

  }
}

function myFunction(id) {
  let x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1)
  {
    x.className += " w3-show";
  }
  else
  {
    x.className = x.className.replace(" w3-show", "");
  }
}
