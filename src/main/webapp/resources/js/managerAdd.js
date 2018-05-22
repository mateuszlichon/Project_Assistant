$(function() {
  var ajax = new Ajax();
  var formUtil = new FormUtil();

  function renderExistingBeneficiariesList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      $('#existingBeneficiaries').empty();
      var data = response.content;
      response.forEach(function (elem) {
        $('#existingBeneficiaries').append('<button type="button" class="btn btn-secondary btn-block beneficiaries-choice" data-beneficiary='+elem.id+'>'+elem.name+'</button>');
      })
    })
  }

  function renderBeneficiariesProjectList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      $('#beneficiariesProjects').empty();
      $('#projectsTasks').empty();
      var data = response.content;
      response.forEach(function (elem) {
        $('#beneficiariesProjects').append('<button type="button" class="btn btn-info btn-block projects-choice" data-project='+elem.id+'>'+elem.name+'</button>');
      })
    })
  }

  function renderProjectsTasksList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      $('#projectsTasks').empty();
      var data = response.content;
      response.task.forEach(function (elem) {
        $('#projectsTasks').append('<button type="button" class="btn btn-warning btn-block projects-choice" data-task='+elem.id+'>'+elem.name+'</button>');
      })
    })
  }

  $('#beneficiaryForm').on('submit', function(e) {
    e.preventDefault();
    var beneficiary = formUtil.createObjectFromForm($('#beneficiary'));
    ajax.ajaxPostCallback("/beneficiaries", beneficiary, function(response) {})
    $('#beneficiaryName').val("");
    renderExistingBeneficiariesList('/beneficiaries');
  })

  $('#existingBeneficiaries').on('click', '.beneficiaries-choice', function(e) {
    e.preventDefault();
    renderBeneficiariesProjectList('/projects/beneficiary/' + $(e.target).data('beneficiary'));
  })

  $('#beneficiariesProjects').on('click', '.projects-choice', function(e) {
    e.preventDefault();
    renderProjectsTasksList('/projects/' + $(e.target).data('project'));
  })

  renderExistingBeneficiariesList('/beneficiaries');

});
