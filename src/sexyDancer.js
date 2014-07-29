var SexyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass('sexy').fadeIn();
}

SexyDancer.prototype = Object.create(Dancer.prototype);
SexyDancer.prototype.constructor = SexyDancer;

