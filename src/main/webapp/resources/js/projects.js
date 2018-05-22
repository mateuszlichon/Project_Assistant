$(function() {
  var ajax = new Ajax();
  var projectsList = $('.projectsList');
  var subtasksList = $('.subtasksList');

  function renderProjectsList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      projectsList.empty();
      var data = response.content;
      response.forEach(function(elem) {
        $('.projectsList').append('<tr class="table-active">' +
          '<td>' + elem.beneficiary.name + '</td>' +
          '<td>' + elem.voivodeship + '</td>' +
          '<td>' + elem.name + '</td>' +
          '<td>        <div class="dropdown">' +
          '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">' +
          'Zadania w projekcie' +
          '</button>' +
          '<div class="dropdown-menu project' + elem.id + '-tasks">' +
          '</div>' +
          '</div>' +
          '</tr>');
        renderTastksForMenu(elem)
      })
    })
  }

  function renderSubtasksList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function(response) {
      subtasksList.empty();
      var data = response.content;
      response.forEach(function(elem) {
        $('.subtasksList').append('<tr class="table-active">' +
          '<td>' + elem.name + '</td>' +
          '<td>' + elem.address + '</td>' +
          '<td>' + elem.numberOfParticipants + '</td>' +
          '<td>' + elem.numberOfHours + '</td>' +
          '<td>' + elem.executingEntity.name + '</td>' +
          '<td>' + 'trenerzy' + '</td>' +
          '</tr>');
      })
    })
  }

  function renderTastksForMenu(elem) {
    elem.task.forEach(function(task) {
      var partners = "";
      var numberOfPartners = 1;
      var coma = "";
      task.partner.forEach(function(partner) {
        if (numberOfPartners > 1) {
          coma = ", "
        }
        partners += coma + partner.name;
        numberOfPartners++;
      })
      $('.project' + elem.id + '-tasks').append('<a class="dropdown-item task' + task.id + '-subtasks subtasks"  data-task=' + task.id + ' href="#">' + task.name + ' <br>(' + partners + ')</a>')
    })
  }

  projectsList.on('click', '.subtasks', function(e) {
    console.log($(e.target).data('task'));
    $('.project-table').toggle('hidden');
    $('.task-table').toggle('hidden');
    renderSubtasksList('/subtasks');
  })

  renderProjectsList('/projects');

});
