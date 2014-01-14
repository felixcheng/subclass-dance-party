var SpinDancer = function (top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('spin');
};

SpinDancer.prototype = Object.create(Dancer.prototype);

SpinDancer.constructor = Dancer;

SpinDancer.prototype.oldStep = SpinDancer.prototype.step;

SpinDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
