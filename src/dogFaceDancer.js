var DogFaceDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass('dogFace').fadeIn();
}

DogFaceDancer.prototype = Object.create(Dancer.prototype);
DogFaceDancer.prototype.constructor = DogFaceDancer;

