function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  var success = false;
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    success = successful;
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
  return success;
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
    var elements = document.getElementsByClassName('picto-large');
    if (elements.length === 0) return false;

    var images = elements[0].getElementsByTagName('img');
    if (images.length === 0) return false;

    var image = images[0];
    var imageLink = image.getAttribute('src');
    var title = image.getAttribute('alt');
    if (imageLink.length === 0) return false;

    var text = 'sclera: ' + title + ' (' + imageLink.substr(imageLink.lastIndexOf('/') + 1) + ')';
	if (text.length > 0 && copyTextToClipboard(text)) {
        this.innerText = "Picture code copied to clipboard";
        this.style.cssText = 'margin-right: 10px; background-color: #92ce90; cursor: default;';
    }
    return false;
};

