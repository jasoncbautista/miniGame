
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var render = function(){
    
};


var root = this;


$(document).ready(function(){

    // Initialize ;
    root.football = $("<img class='football' src='college_football.png'/>");
    $("body").append(root.football);


    (function animloop(){
      root.requestAnimFrame(animloop);
      render();
    })();


});
