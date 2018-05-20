$(function () {
  var ajax = new Ajax();
  var projectsList = $('.projectsList');

  function renderProjectsList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      projectsList.empty();
      var data = response.content;
      response.forEach(function (elem) {
        $('.projectsList').append('<tr class="table-active">' +
        '<td>' + elem.voivodeship + '</td>' +
        '<td>' + elem.name + '</td>' +
        '<td>' + elem.beneficiary.name + '</td>' +
        '</tr>');
      })
    })
  }

  renderProjectsList('/projects');

});
