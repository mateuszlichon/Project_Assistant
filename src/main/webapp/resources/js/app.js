$(function () {
  var ajax = new Ajax();
  var beneficiariesList = $('.beneficiariesList');

  function renderBeneficiariesList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      beneficiariesList.empty();
      var data = response.content;
      response.forEach(function (elem) {
        $('.beneficiariesList').append('<tr class="table-active">' +
        '<th scope="row">Active</th>' +
        '<td>' + elem.name + '</td>' +
        '</tr>');
      })
    })
  }

  renderBeneficiariesList('/beneficiaries');

});
