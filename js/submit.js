// #####################################################################
function submit_post_via_hidden_form(url, params) {
  var f = $("<form method='POST' style='display:none;'></form>").attr({
    action: url,
    method: "post",
    target: "_blank"
  }).appendTo(document.body);
  for(var i in params) {
    if(params.hasOwnProperty(i)) {
      $('<input type="hidden" />').attr({
        name: i,
        value: params[i]
      }).appendTo(f);
    }
  }
  f.submit();
  f.remove();
}
// #####################################################################
