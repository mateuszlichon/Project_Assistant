$(function() {
  var ajax = new Ajax();
  var formUtil = new FormUtil();

  function renderExistingBeneficiariesList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      $('#existingBeneficiaries').empty();
      var data = response.content;
      response.forEach(function (elem) {
        $('#existingBeneficiaries').append('<button type="button" class="btn btn-secondary btn-block">'+elem.name+'</button>');
      })
    })
  }

  $('#beneficiaryForm').on('submit', function(e) {
    e.preventDefault();
    var beneficiary = formUtil.createObjectFromForm($('#beneficiary'));
    ajax.ajaxPostCallback("/beneficiaries", beneficiary, function(response) {})
    $('#beneficiaryName').val("");
  })

  renderExistingBeneficiariesList('/beneficiaries');

});
