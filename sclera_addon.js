function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a
  // flash, so some of these are just precautions. However in
  // Internet Explorer the element is visible whilst the popup
  // box asking the user for permission for the web page to
  // copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}


var downloadLinks = document.getElementsByClassName("btn-dwnl");
//TODO check length;
var downloadLink = downloadLinks[0];

var copyCodeLink = document.createElement('a');
copyCodeLink.innerText = 'Copy code for Google Calendar';

//var calendarIcon = chrome.extension.getURL("images/google_calendar.png");
copyCodeLink.classList.add("btn");
copyCodeLink.style.cssText = 'margin-right: 10px; background-color: #4688f4; cursor: pointer;';
downloadLink.parentElement.insertBefore(copyCodeLink, downloadLink);

copyCodeLink.onclick = function(){
	var url = window.location.href;
var url = window.location.href
copyTextToClipboard('foo barr');
    console.log('copy link clicked');
    return false;
}

