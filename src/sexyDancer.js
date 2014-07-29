var SexyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // this.$node.addClass("sexy");
  this.$node = $('<span class="sexy"></span>');
}

SexyDancer.prototype = Object.create(Dancer.prototype);
SexyDancer.prototype.constructor = SexyDancer;

