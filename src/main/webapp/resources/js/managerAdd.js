$(function() {
    var ajax = new Ajax();
    var formUtil = new FormUtil();
    var projectDescription = "";
    var taskDescription = "";

    function renderExistingBeneficiariesList(endpoint) {
      ajax.ajaxGetCallback(endpoint, function(response) {
        $('#existingBeneficiaries').empty();
        var data = response.content;
        response.forEach(function(elem) {
          $('#existingBeneficiaries').append('<button type="button" class="btn btn-secondary btn-block beneficiaries-choice" data-beneficiary=' + elem.id + '>' + elem.name + '</button>' +
            '<div class="beneficiariesDetails" id="beneficiary' + elem.id + 'Details"></div><br/>');
        })
      })
    }

    function renderBeneficiariesProjectList(endpoint) {
      ajax.ajaxGetCallback(endpoint, function(response) {
        $('#beneficiariesProjects').empty();
        $('#projectsTasks').empty();
        var data = response.content;
        response.forEach(function(elem) {
          $('#beneficiariesProjects').append('<button type="button" class="btn btn-info btn-block projects-choice" data-project=' + elem.id + '>' + elem.name + '</button>' +
            '<div class="projectsDetails" id="project' + elem.id + 'Details"></div><br/>');
        })
      })
    }

    function renderProjectsTasksList(endpoint) {
      ajax.ajaxGetCallback(endpoint, function(response) {
        $('#projectsTasks').empty();
        var data = response.content;
        projectDescription = "";
        projectDescription = '<li>wojewodztwo: ' + response.voivodeship + '</li>';
        response.task.forEach(function(elem) {
          $('#projectsTasks').append('<button type="button" class="btn btn-warning btn-block task-choice" data-task=' + elem.id + '>' + elem.name + '</button>' +
            '<div class="tasksDetails" id="task' + elem.id + 'Details"></div><br/>');
        })
      })
    }

    function showTaskDetails(endpoint) {
      ajax.ajaxGetCallback(endpoint, function(response) {
        taskDescription = "";
        taskDescription = '<li>liczba grup: ' + response.groupAmount + '</li>' +
          '<li>liczba uczestnikow: ' + response.participantAmount + '</li>';
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
  $('.beneficiariesDetails').empty();
  $('#beneficiary' + $(e.target).data('beneficiary') + 'Details').append('<p class="text-center">szczegoly beneficjenta</p>');
})

$('#beneficiariesProjects').on('click', '.projects-choice', function(e) {
  e.preventDefault();
  renderProjectsTasksList('/projects/' + $(e.target).data('project'));
  $('.projectsDetails').empty();
  $('#project' + $(e.target).data('project') + 'Details').append('<p class="text-center">' + projectDescription + '</p>');
})

$('#projectsTasks').on('click', '.task-choice', function(e) {
  e.preventDefault();
  $('.tasksDetails').empty();
  showTaskDetails('/tasks/'+$(e.target).data('task'));
  $('#task' + $(e.target).data('task') + 'Details').append('<p class="text-center">' + taskDescription + '</p>');
})

renderExistingBeneficiariesList('/beneficiaries');

});
