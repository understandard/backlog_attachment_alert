var injectScript;

injectScript = function(file, node) {
  var s, th;
  th = document.getElementsByTagName(node)[0];
  s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  return th.appendChild(s);
};

injectScript(chrome.extension.getURL('/event.simulate.js'), 'body');
injectScript(chrome.extension.getURL('/common.js'), 'body');