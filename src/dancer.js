var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition();
  this.lineup = false;
};

Dancer.prototype.step = function(){
  // this === dancer
  var self = this;
  setTimeout(function(){self.step();}, self.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(){
  var styleSettings = {
      top: this.top,
      left: this.left
    };
  this.$node.css(styleSettings);
};


