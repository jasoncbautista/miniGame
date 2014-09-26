
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var xPos= 10;
var render = function(){
    xPos += 5;
    root.football.css("left", xPos + "px");
};


var root = this;


$(document).ready(function(){

    // Initialize ;
    root.football = $("<img class='football' src='college_football.png'/>");
    $("body").append(root.football);

    $(document).click(function(ee){
        console.log(ee);
        xPox = 10;
        render();
        
    });
    (function animloop(){
      root.requestAnimFrame(animloop);
      render();
    })();


});
