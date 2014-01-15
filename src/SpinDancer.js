var SpinDancer = function (top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('spin');
  var timer;
    (function rotate(degree,that) {
        that.$node.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        that.$node.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            rotate(++degree,that);
        },5);
    })(0,this);

    };

SpinDancer.prototype = Object.create(Dancer.prototype);

SpinDancer.constructor = Dancer;

SpinDancer.prototype.oldStep = SpinDancer.prototype.step;

SpinDancer.prototype.step = function(){
  this.oldStep();
  //this.$node.toggle();
};
