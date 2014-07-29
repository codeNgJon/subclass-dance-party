$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);

    $('.dogFace').on('mouseover', function(){
      $(this).addClass("rotate");
    });
  });

  $('.lineUpButton').on('click', function(){
    for(var i = 0; i< window.dancers.length; i++){
      var dancer = window.dancers[i];
      dancer.lineUp();
    }
  });

  $('.interactButton').on('click', function(){
    var randomPosition = function() {
      return Math.floor(Math.random() * window.dancers.length);
    }

    //chooses a random dancer
    var firstRandom = randomPosition();
    var first = window.dancers[firstRandom];

    //chooses a second different random dancer
    var secondRandom = randomPosition();
    while(secondRandom === firstRandom) {
      secondRandom = randomPosition();
    }
    var second = window.dancers[secondRandom];

    //moves first and second dancers to the center
    first.interact($('body').height() * 0.5, $('body').width() * 0.4);
    second.reflection();
    second.interact($('body').height() * 0.5, $('body').width() * 0.5);

    //moves the other dancers to the top
    for(var i = 0; i < window.dancers.length; i++) {
      if(i !== firstRandom && i !== secondRandom) {
        window.dancers[i].$node.animate({top: '50px'}, 300);
      }
    }
  });

});

