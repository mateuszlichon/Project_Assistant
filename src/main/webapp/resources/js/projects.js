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
        '<td>        <div class="dropdown">' +
            '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">' +
                'Zadania w projekcie' +
            '</button>' +
            '<div class="dropdown-menu project'+elem.id+'-tasks">' +
            '</div>' +
        '</div>' +
        '</td>' +
        '</tr>');
        renderTastksForMenu(elem)
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
        numberOfPartners ++;
      })
      $('.project'+elem.id+'-tasks').append('<a class="dropdown-item" href="#">' + task.name + ' <br>('+ partners +')</a>')
    })
  }

  renderProjectsList('/projects');

});
