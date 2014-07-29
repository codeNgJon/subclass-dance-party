var SleepyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node = $('<span class="sleepy"></span>');
};

SleepyDancer.prototype = Object.create(Dancer.prototype);
SleepyDancer.prototype.constructor = SleepyDancer;

SleepyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
