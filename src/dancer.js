// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var context = this;
  // closure created for context with the anonymous fxn
  setTimeout(function(){ context.step(); }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.$node.animate({ left: '80%'}, 500);
};

Dancer.prototype.interact = function(top, left){
  this.$node.animate({ top: top, left: left }, 1000);
};

Dancer.prototype.reflection = function() {
  this.$node.toggleClass('reflection');
};
