const logElement =  document.querySelector('.event-log-contents');
const reloadButton = document.querySelector('#reload');

reloadButton.addEventListener('click', () => {
  logElement.textContent = '';
  window.setTimeout(()=>{
    window.location.reload(true);
  }, 1000);
});

window.addEventListener('load', event => {
  logElement.textContent = `${logElement.textContent} load event: The window load event fires at the end of the document loading process.\n At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading. \n \n`;
});

document.addEventListener('readystatechange', () => {
  switch (document.readyState) {
    case 'loading':
      logElement.textContent = `${logElement.textContent} readystate: ${document.readyState} \n The document is still loading. \n\n`;      
      break;
    case 'interactive':
      logElement.textContent = `${logElement.textContent} readystate: ${document.readyState} \n The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading. \n \n`;      
      break;
    case 'complete':
      logElement.textContent = `${logElement.textContent} readystate: ${document.readyState} \n The document and all sub-resources have finished loading. The state indicates that the load event is about to fire. \n \n`;      
      break;
    default:
      break;
  }
});


window.addEventListener('DOMContentLoaded', (event) => {
  logElement.textContent = `${logElement.textContent} window: The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. \n \n`;
});

document.addEventListener('DOMContentLoaded', () => {
  logElement.textContent = `${logElement.textContent} document: The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. \n \n`;
});