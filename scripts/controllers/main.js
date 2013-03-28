'use strict';


angularkeepApp.controller('MainCtrl',  function ($scope, $location, Note) {
    
    // To upload images
    // Not done yet
    // var my = new Dropzone("form.dropzone", { url: "/do/post.php"});

    // Get notes from mongolab
    $scope.notes = Note.query();

    // Todos list
    $scope.todos = [];


    // Save each todo before save the note
    $scope.saveTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    }

    $scope.save = function() {
      $scope.note.options = $scope.todos;
      
      $scope.note.date = getCurrentDate();
      
      Note.save($scope.note, function(note){
        $scope.notes.unshift(note);
      });

      // Clear the fields
      $scope.todos = [];
      $scope.note = '';      
    }    

    $scope.destroy = function(idx) {
      // Get the note scope
      var note = $scope.notes[idx];
      // Destroy it
      note.destroy(function() {
        // Remove from scope
        $scope.notes.splice(idx, 1)
      });
    };

    var getCurrentDate = function() {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //Months are zero based
      var curr_year = d.getFullYear();
      
      return curr_date + "/" + curr_month + "/" + curr_year;      
    }
  });
