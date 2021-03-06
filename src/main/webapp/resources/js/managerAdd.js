$(function() {
  var ajax = new Ajax();
  var formUtil = new FormUtil();
  var beneficiaryDescription = "";
  var projectDescription = "";
  var taskDescription = "";
  var selectedBeneficiary;
  var selectedProject;
  var addButtonOn = "";
  var addButtonOff = "hidden";
  var deleteButtonOn = "";
  var deleteButtonOff = "hidden";
  var editButtonOn = "";
  var editButtonOff = "hidden";

  function renderExistingBeneficiariesList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      $('#existingBeneficiaries').empty();
      var data = response.content;
      response.forEach(function(elem) {
        $('#existingBeneficiaries').append('<div class="btn-group btn-block btn-group-toggle" data-toggle="buttons"><button type="button" class="btn btn-info btn-block beneficiaries-choice" data-beneficiary=' + elem.id + '>' + elem.name + '</button>' +
          '<div class="delete-button-beneficiary hidden"><button type="button" class="btn btn-danger" data-beneficiary=' + elem.id + ' id="delete-beneficiary-' + elem.id + '">usun</button></div></div>' +
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
        $('#beneficiariesProjects').append('<div class="btn-group btn-block btn-group-toggle" data-toggle="buttons"><button type="button" class="btn btn-info btn-block projects-choice" data-project=' + elem.id + '>' + elem.name + '</button>' +
          '<div class="delete-button-project hidden"><button type="button" class="btn btn-danger" data-project=' + elem.id + ' id="delete-project-' + elem.id + '">usun</button></div></div>' +
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
        $('#projectsTasks').append('<div class="btn-group btn-block btn-group-toggle" data-toggle="buttons"><button type="button" class="btn btn-info btn-block task-choice" data-task=' + elem.id + '>' + elem.name + '</button>' +
          '<div class="delete-button-task hidden"><button type="button" class="btn btn-danger" data-task=' + elem.id + ' id="delete-task-' + elem.id + '">usun</button></div></div>' +
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
      beneficiaryDescription = '<div class="card bg-light">'+
        '<div class="card-body text-center">'+
          '<p class="card-text"><li>id@: ' + response.id + '</li>'+
          '<li>nazwa: ' + response.name + '</li></p>'+
        '</div>'+
      '</div>'
    })
  }

  function showProjectDetails(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      projectDescription = "";
      projectDescription = '<div class="card bg-light">'+
        '<div class="card-body text-center">'+
          '<p class="card-text"><li>wojewodztwo: ' + response.voivodeship + '</li></p>'+
        '</div>'+
      '</div>'
      selectedProject = response;
      $('.projectName').empty();
      $('.projectName').append(response.name);
    })
  }

  function showTaskDetails(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      taskDescription = "";
      taskDescription = '<div class="card bg-light">'+
        '<div class="card-body text-center">'+
          '<p class="card-text"><li>liczba grup: ' + response.groupAmount + '</li>'+
          '<li>liczba uczestnikow: ' + response.participantAmount + '</li></p>'+
        '</div>'+
      '</div>'
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
    ajax.ajaxPostCallback("/projects", project, function(response) {})
    $('#projectName').val("");
    $('#projectVoivodeship').val("");
    renderBeneficiariesProjectList('/projects/beneficiary/' + selectedBeneficiary.id);
  })

  $('#taskForm').on('submit', function(e) {
    e.preventDefault();
    var task = formUtil.createObjectFromForm($('#task'));
    task.project = selectedProject;
    ajax.ajaxPostCallback("/tasks", task, function(response) {})
    $('#taskName').val("");
    $('#groupAmount').val("");
    $('#participantAmount').val("");
    renderProjectsTasksList('/tasks/project/' + selectedProject.id);
  })

  $('#existingBeneficiaries').on('click', '.beneficiaries-choice', function(e) {
    e.preventDefault();
    renderBeneficiariesProjectList('/projects/beneficiary/' + $(e.target).data('beneficiary'));
    showBeneficiaryDetails('/beneficiaries/' + $(e.target).data('beneficiary'));
    adjustChoiceCollor($(e.target), $('.beneficiaries-choice'));
    selectedProject = undefined;
    updateAddView();
    updateDeleteView();
    $('.beneficiariesDetails').empty();
    $('#beneficiary' + $(e.target).data('beneficiary') + 'Details').append('<p class="text-center">' + beneficiaryDescription + '</p>');
  })

  function adjustChoiceCollor(target, category) {
    category.removeClass('btn-info');
    category.removeClass('btn-warning');
    category.removeClass('btn-basic');
    category.addClass('btn-basic');
    target.removeClass('btn-basic');
    target.addClass('btn-warning');
  }

  $('#beneficiariesProjects').on('click', '.projects-choice', function(e) {
    e.preventDefault();
    showProjectDetails('/projects/' + $(e.target).data('project'));
    renderProjectsTasksList('/tasks/project/' + $(e.target).data('project'));
    adjustChoiceCollor($(e.target), $('.projects-choice'));
    $('.projectsDetails').empty();
    updateAddView();
    updateDeleteView();
    $('#project' + $(e.target).data('project') + 'Details').append('<p class="text-center">' + projectDescription + '</p>');
  })

  $('#projectsTasks').on('click', '.task-choice', function(e) {
    e.preventDefault();
    $('.tasksDetails').empty();
    adjustChoiceCollor($(e.target), $('.task-choice'));
    showTaskDetails('/tasks/' + $(e.target).data('task'));
    updateAddView();
    updateDeleteView();
    $('#task' + $(e.target).data('task') + 'Details').append('<p class="text-center">' + taskDescription + '</p>');
  })

  $('.viewButtons').on('click', '.addFormsOn', function() {
    addButtonOn = "hidden";
    addButtonOff = "";
    renderViewButtons();
    updateAddView();
  })

  $('.viewButtons').on('click', '.addFormsOff', function() {
    addButtonOn = "";
    addButtonOff = "hidden";
    renderViewButtons();
    updateAddView();
  })

  $('.viewButtons').on('click', '.deleteButtonsOn', function() {
    deleteButtonOn = "hidden";
    deleteButtonOff = "";
    renderViewButtons();
    updateDeleteView();
  })

  $('.viewButtons').on('click', '.deleteButtonsOff', function() {
    deleteButtonOn = "";
    deleteButtonOff = "hidden";
    renderViewButtons();
    updateDeleteView();
  })

  $('.viewButtons').on('click', '.editButtonsOn', function() {
    editButtonOn = "hidden";
    editButtonOff = "";
    renderViewButtons();
    // updateDeleteView();
  })

  $('.viewButtons').on('click', '.editButtonsOff', function() {
    editButtonOn = "";
    editButtonOff = "hidden";
    renderViewButtons();
    // updateDeleteView();
  })

  function updateAddView() {
    if (addButtonOff == "") {
      $('#beneficiaryForm').removeClass('hidden');
    } else {
      $('#beneficiaryForm').addClass('hidden');
    }
    if (selectedBeneficiary != undefined && addButtonOff == "") {
      $('#projectForm').removeClass('hidden');
    } else {
      $('#projectForm').addClass('hidden');
    }

    if (selectedProject != undefined && addButtonOff == "") {
      $('#taskForm').removeClass('hidden');
    } else {
      $('#taskForm').addClass('hidden');
    }

  }

  function updateDeleteView() {
    if (deleteButtonOff == "") {
      $('.delete-button-beneficiary').removeClass('hidden');
    } else {
      $('.delete-button-beneficiary').addClass('hidden');
    }
    if (selectedBeneficiary != undefined && deleteButtonOff == "") {
      $('.delete-button-project').removeClass('hidden');
    } else {
      $('.delete-button-project').addClass('hidden');
    }

    if (selectedProject != undefined && deleteButtonOff == "") {
      $('.delete-button-task').removeClass('hidden');
    } else {
      $('.delete-button-task').addClass('hidden');
    }

  }

  function renderViewButtons() {
    $('.viewButtons').empty();
    $('.viewButtons').append(
      '<div class="btn-group">' +
      '<div class="' + addButtonOn + '"><button class="addFormsOn btn btn-success">Pokaz opcje dodawania</button></div>' +
      '<div class="' + addButtonOff + '"><button class="addFormsOff btn btn-success">Ukryj opcje dodawania</button></div>' +
      '<div class="' + deleteButtonOn + '"><button class="deleteButtonsOn btn btn-danger">Pokaz opcje usuwania</button></div>' +
      '<div class="' + deleteButtonOff + '"><button class="deleteButtonsOff btn btn-danger">Ukryj opcje usuwania</button></div>' +
      '<div class="' + editButtonOn + '"><button class="editButtonsOn btn btn-primary">Pokaz opcje edycji</button></div>' +
      '<div class="' + editButtonOff + '"><button class="editButtonsOff btn btn-primary">Ukryj opcje edycji</button></div>' +
      '</div>'
    )
  }

  $('#existingBeneficiaries').on('click', '.delete-button-beneficiary', function(e) {
    e.preventDefault();
    console.log(e.target);
    ajax.ajaxDeleteCallback('/beneficiaries/' + $(e.target).data('beneficiary'), function(response) {})
    renderExistingBeneficiariesList('/beneficiaries');
  })

  $('#beneficiariesProjects').on('click', '.delete-button-project', function(e) {
    e.preventDefault();
    console.log(e.target);
    ajax.ajaxDeleteCallback('/projects/' + $(e.target).data('project'), function(response) {});
    renderBeneficiariesProjectList('/projects/beneficiary/' + selectedBeneficiary.id);
  })

  $('#projectsTasks').on('click', '.delete-button-task', function(e) {
    e.preventDefault();
    console.log($(e.target).data('task'));
    ajax.ajaxDeleteCallback('/tasks/' + $(e.target).data('task'), function(response) {});
    renderProjectsTasksList('/tasks/project/' + selectedProject.id);
  })

  renderExistingBeneficiariesList('/beneficiaries');
  renderViewButtons();

});
