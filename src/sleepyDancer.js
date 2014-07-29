var SleepyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass('sleepy');
};

SleepyDancer.prototype = Object.create(Dancer.prototype);
SleepyDancer.prototype.constructor = SleepyDancer;




