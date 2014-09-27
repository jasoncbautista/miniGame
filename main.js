
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
var yPos = 10;

var footballWidth = 50;
var footballHeight = 20;


var render = function(){
    xPos += 5;
    root.football.css("left", (xPos - footballWidth ) + "px");
    root.football.css("top", (yPos - footballHeight/2)+ "px");
};


var root = this;


$(document).ready(function(){

    // Initialize ;
    root.football = $("<img class='football' src='college_football.png'/>");
    $("body").append(root.football);

    $("body").click(function(ee){
        console.log(ee);
        xPos = ee.pageX;
        yPos = ee.pageY;
        render();
        
    });
    (function animloop(){
      root.requestAnimFrame(animloop);
      render();
    })();


});
