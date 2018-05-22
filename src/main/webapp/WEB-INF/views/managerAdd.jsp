<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="..\resources\css\style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

    <title>Project Assistant</title>
  </head>

  <body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Project Assistant</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active ml-auto">
            <a class="nav-link" href="#">Strona glowna <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link" href="#">Beneficjenci</a>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link" href="#">Projekty</a>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link" href="#">Zadania</a>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link" href="#">O programie</a>
          </li>
        </ul>
      </div>
    </nav>
    <br/>

    <div>
      <div>
        <h1 class="text-center">Dodawanie</h1>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-sm-3">
        <form method="post" id="beneficiaryForm">
          <br><br>
          <fieldset>
            <legend>Nowy beneficjent</legend>
            <div class="form-group">
              <div id="beneficiary" class="container">
                <!-- <label for="beneficiaryName">Nazwa beneficjenta</label> -->
                <input type="text" class="form-control" aria-describedby="emailHelp" name="name" id="beneficiaryName" placeholder="nazwa beneficjenta"><br>
              </div>
              <div class="container">
                <button type="submit" class="btn btn-primary">Zatwierdz</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-sm-3">
        <form method="post" id="projectForm">
          <br><br>
          <fieldset>
            <legend>Nowe zadanie beneficjenta <div class="beneficiaryName"></div></legend>
            <div class="form-group">
              <div id="project" class="container">
                <!-- <label for="projectName">Nazwa zadania</label> -->
                <input type="text" class="form-control" aria-describedby="emailHelp" name="name" id="projectName" placeholder="nazwa projektu"><br>
                <!-- <label for="projectName">wojewodztwo</label> -->
                <input type="text" class="form-control" aria-describedby="emailHelp" name="voivodeship" id="projectVoivodeship" placeholder="wojewodztwo"><br>
              </div>
              <div class="container">
                <button type="submit" class="btn btn-primary">Zatwierdz</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-sm-3">
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <div id="existingBeneficiaries"></div>
      </div>
      <div class="col-sm-3">
        <div id="beneficiariesProjects"></div>
      </div>
      <div class="col-sm-3">
        <div id="projectsTasks"></div>
      </div>
    </div>
    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="..\resources\js\util.js"></script>
    <script src="..\resources\js\managerAdd.js"></script>
  </body>

  </html>
