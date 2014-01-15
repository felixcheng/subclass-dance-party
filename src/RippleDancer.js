var RippleDancer = function (top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node.removeClass('dancer');
  this.$node.addClass('ripple');
};

RippleDancer.prototype = Object.create(Dancer.prototype);

RippleDancer.constructor = Dancer;

RippleDancer.prototype.oldStep = RippleDancer.prototype.step;

RippleDancer.prototype.step = function(){
  this.oldStep();
  this.$node.removeClass('dancer');
  this.$node.toggleClass('rEffect');
};

// line update
// each nod's left po => new var da