var gform_count = 0;
var gform_submitted = false;

+(function(window, document) {
  //"use strict";

  function load_gform() {
    if (gform_submitted) {
      window.location = window.location.href;
    }
  }

  function addiframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", "hidden_iframe");
    iframe.setAttribute("name", "hidden_iframe");
    iframe.setAttribute("style", "display:none");
    iframe.setAttribute("onload", "load_gform()");
    document.body.appendChild(iframe); // Not entirely sure if this is necessary
  }

  function post_to_gform(path, params, method) {
    addiframe();
    method = method || "post"; // Set method to post by default, if not specified.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", "hidden_iframe");
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);

      form.appendChild(hiddenField);
    }

    document.body.appendChild(form); // Not entirely sure if this is necessary
    submitted = true;
    form.submit();
  }

  window.load_gform = load_gform;
  window.post_to_gform = post_to_gform;
  
})(window, window.document);
