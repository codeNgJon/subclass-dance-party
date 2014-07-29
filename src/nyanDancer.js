var NyanDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass('nyan');
};

NyanDancer.prototype = Object.create(Dancer.prototype);
NyanDancer.prototype.constructor = NyanDancer;

NyanDancer.prototype.lineUp = function() {
  this.$node.animate({ left: '80%' }, 5000);
};

