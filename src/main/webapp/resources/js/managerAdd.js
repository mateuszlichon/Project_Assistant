$(function() {
  var ajax = new Ajax();
  var formUtil = new FormUtil();
  var beneficiaryDescription = "";
  var projectDescription = "";
  var taskDescription = "";
  var selectedBeneficiary;
  var selectedProject;

  function renderExistingBeneficiariesList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      $('#existingBeneficiaries').empty();
      var data = response.content;
      response.forEach(function(elem) {
        $('#existingBeneficiaries').append('<button type="button" class="btn btn-primary btn-block beneficiaries-choice" data-beneficiary=' + elem.id + '>' + elem.name + '</button>' +
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
      console.log(response);
      var data = response.content;
      response.forEach(function(elem) {
        $('#projectsTasks').append('<button type="button" class="btn btn-warning btn-block task-choice" data-task=' + elem.id + '>' + elem.name + '</button>' +
          '<div class="tasksDetails" id="task' + elem.id + 'Details"></div><br/>');
      })
    })
  }

  function showBeneficiaryDetails(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      selectedBeneficiary = response;
      $('.beneficiaryName').empty();
      $('.beneficiaryName').append(response.name);
      beneficiaryDescription = "";
      beneficiaryDescription = '<li>id@: ' + response.id + '</li>' +
        '<li>nazwa: ' + response.name + '</li>';
    })
  }

  function showProjectDetails(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      projectDescription = "";
      projectDescription = '<li>wojewodztwo: ' + response.voivodeship + '</li>';
      selectedProject = response;
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

  $('#projectForm').on('submit', function(e) {
    e.preventDefault();
    var project = formUtil.createObjectFromForm($('#project'));
    project.beneficiary = selectedBeneficiary;
    ajax.ajaxPostCallback("/projects", project, function(response) {
    })
    $('#projectName').val("");
    $('#projectVoivodeship').val("");
    renderBeneficiariesProjectList('/projects/beneficiary/' + selectedBeneficiary.id);
  })

  $('#taskForm').on('submit', function(e) {
    e.preventDefault();
    var task = formUtil.createObjectFromForm($('#task'));
    task.project = selectedProject;
    ajax.ajaxPostCallback("/tasks", task, function(response) {
    })
    $('#taskName').val("");
    $('#groupAmount').val("");
    $('#participantAmount').val("");
    renderProjectsTasksList('/tasks/project/' + selectedProject.id);
  })

  $('#existingBeneficiaries').on('click', '.beneficiaries-choice', function(e) {
    e.preventDefault();
    renderBeneficiariesProjectList('/projects/beneficiary/' + $(e.target).data('beneficiary'));
    showBeneficiaryDetails('/beneficiaries/' + $(e.target).data('beneficiary'));
    $('.beneficiaries-choice').removeClass('btn-primary');
    $('.beneficiaries-choice').addClass('btn-light');
    $(e.target).removeClass('btn-light');
    $(e.target).addClass('btn-danger');
    $('.beneficiariesDetails').empty();
    $('#beneficiary' + $(e.target).data('beneficiary') + 'Details').append('<p class="text-center">' + beneficiaryDescription + '</p>');
  })

  $('#beneficiariesProjects').on('click', '.projects-choice', function(e) {
    e.preventDefault();
    showProjectDetails('/projects/' + $(e.target).data('project'));
    renderProjectsTasksList('/tasks/project/' + $(e.target).data('project'));
    $('.projectsDetails').empty();
    $('#project' + $(e.target).data('project') + 'Details').append('<p class="text-center">' + projectDescription + '</p>');
  })

  $('#projectsTasks').on('click', '.task-choice', function(e) {
    e.preventDefault();
    $('.tasksDetails').empty();
    showTaskDetails('/tasks/' + $(e.target).data('task'));
    $('#task' + $(e.target).data('task') + 'Details').append('<p class="text-center">' + taskDescription + '</p>');
  })

  $('.addFormsOn').on('click', function() {
    $('.addForms').toggle('hidden');
  })

  renderExistingBeneficiariesList('/beneficiaries');

});
