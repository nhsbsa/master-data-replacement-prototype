/* jshint esversion: 6 */

function CopyToClipboard() {
  'use strict';
  // Adds an icon to allow copy to clipboard functionality
  let targets = document.getElementsByClassName('js-copy-to-clipboard');
  for (let i = 0; i < targets.length; i++) {
    const element = targets[i];
    element.insertAdjacentHTML('beforeend',
        '<svg class="nhsuk-icon nhsuk-icon__tick nhsuk-u-inline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="none">'
        +
        '<rect x="9" y="5" rx="1" ry="1" width="9" height="11" style="fill:white;stroke:black; stroke-width:1;opacity:1" />'
        +
        '<rect x="6" y="8" rx="1" ry="1" width="9" height="11" style="fill:white;stroke:black; stroke-width:1;opacity:1" />'
        +
        '<line x1="8" y1="12" x2="13" y2="12" style="stroke:black;stroke-width:1" />'
        +
        '<line x1="8" y1="14" x2="13" y2="14" style="stroke:black;stroke-width:1" />'
        +
        '<line x1="8" y1="16" x2="13" y2="16" style="stroke:black;stroke-width:1" />'
        +
        '</svg>');
    element.querySelector('svg').addEventListener('click', function () {
      var copiedTag = document.createElement('span');
      copiedTag.className = 'nhsuk-tag--copied';
      copiedTag.innerText = 'Copied';
      var tempInput = document.createElement("input");

      var textCopy = element.innerText.indexOf('Copied') == -1
          ? element.innerText : element.innerText.substr(0,
              element.innerText.indexOf('Copied'));

      tempInput.value = textCopy;

      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      element.insertAdjacentElement('beforeend', copiedTag);

      setTimeout(function () {
        element.removeChild(copiedTag);
      }, 2000);
    });
  }
}