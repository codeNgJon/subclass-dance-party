var SleepyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass('sleepy');
};

SleepyDancer.prototype = Object.create(Dancer.prototype);
SleepyDancer.prototype.constructor = SleepyDancer;

SleepyDancer.prototype.lineUp = function() {
  this.$node.animate({ left: 10 }, 5000);
};


