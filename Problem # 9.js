class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(5);
console.log("Area:", circle.calculateArea().toFixed(4));
console.log("Perimeter:", circle.calculatePerimeter().toFixed(4));
