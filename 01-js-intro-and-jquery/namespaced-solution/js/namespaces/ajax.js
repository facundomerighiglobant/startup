var ajax = ajax || {};

ajax.performQuery = function(_url, _type, _data, successAction, errorAction) {
  $.ajax({
    type: _type,
    url: _url,
    data: _data,
    success: function(res) {
      successAction(res);
    },
    error: function() {
      errorAction();
    }
  });
}
