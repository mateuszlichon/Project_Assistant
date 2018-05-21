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
  <div class="container">

    <body>
      <div>
        <div>
          <h1 class="text-center">Dodawanie</h1>
        </div>
      </div>
      <br/>
      <fieldset>
        <legend>Nowy beneficjent</legend>
        <div class="form-group">
          <div id="name" class="container">
            <label for="name">Nazwa beneficjenta</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" name="question" id="name" placeholder="wprowadz nazwe"><br>
          </div>
          <div class="container">
            <button type="submit" class="btn btn-primary">Zatwierdz</button>
          </div>
      </fieldset>
      </form>
      </div>
      <!-- scripts -->
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="..\resources\js\util.js"></script>
      <script src="..\resources\js\projects.js"></script>
    </body>

  </html>
