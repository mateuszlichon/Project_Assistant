$(function () {
  var ajax = new Ajax();
  var projectsList = $('.projectsList');

  // function renderProjectsList(endpoint) {
  //   ajax.ajaxGetCallback(endpoint, function (response) {
  //     projectsList.empty();
  //     var data = response.content;
  //     response.forEach(function (elem) {
  //       $('.projectsList').append('<tr class="table-active">' +
  //       '<td>' + elem.voivodeship + '</td>' +
  //       '<td>' + elem.name + '</td>' +
  //       '<td>' + elem.beneficiary.name + '</td>' +
  //       '<td>        <div class="dropdown">' +
  //           '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">' +
  //               'Zadania w projekcie' +
  //           '</button>' +
  //           '<div class="dropdown-menu project'+elem.id+'-tasks">' +
  //             elem.task.forEach(function(task) {
  //               task.name
  //               // console.log(task.name) +
  //               console.log($('.project4-tasks')) +
  //               $('.project4-tasks').append('<a class="dropdown-item" href="#">' + task.name + '</a>')
  //             }) +
  //           '</div>' +
  //       '</div>' +
  //       '</td>' +
  //       '</tr>');
  //     })
  //   })
  // }

  function renderProjectsList(endpoint) {
    ajax.ajaxGetCallback(endpoint, function (response) {
      projectsList.empty();
      var data = response.content;
      response.forEach(function (elem) {
        $('.projectsList').append('<tr class="table-active">' +
        '<td>' + elem.voivodeship + '</td>' +
        '<td>' + elem.name + '</td>' +
        '<td>' + elem.beneficiary.name + '</td>' +
        '<td>        <div class="dropdown">' +
            '<button class="btn btn-primary project'+elem.id+' tasks" type="button" >' +
                'Zadania w projekcie' +
            '</button>' +
            '<div class="dropdown-menu project'+elem.id+'-tasks">' +
              elem.task.forEach(function(task) {
                task.name
                // console.log(task.name) +
                console.log($('.project4-tasks')) +
                $('.project4-tasks').append('<a class="dropdown-item" href="#">' + task.name + '</a>')
              }) +
            '</div>' +
        '</div>' +
        '</td>' +
        '</tr><div class="project'+elem.id+'-tasks"></div>');
      })
    })
  }

  projectsList.on('click', '.tasks', function (e) {
      console.log(e);
  });

  renderProjectsList('/projects');

});
