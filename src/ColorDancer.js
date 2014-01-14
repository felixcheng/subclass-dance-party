var ColorDancer = function (top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);

  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var border = '10px solid rgb(' + red + ',' + green + ',' + blue +')';
  this.$node.css('border', border);
};

ColorDancer.prototype = Object.create(BlinkyDancer.prototype);

ColorDancer.constructor = BlinkyDancer;
