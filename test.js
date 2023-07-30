const Direction = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
};

class Triangle {
  constructor(direction, width, height) {
    this.direction = direction;
    this.width = width;
    this.height = height;
    this.top = this.getTop();
    this.bottom = this.getBottom();
    this.right = this.getRight();
    this.left = this.getLeft();
  }

  getStyle() {
    const left = this.left === this.right ? '' : this.pretty(this.left);
    return `${this.pretty(this.top)} ${this.pretty(this.right)} ${this.pretty(this.bottom)} ${left}`.trim();
  }

  pretty(side) {
    return (side && `${side}px`) || 0;
  }

  getHeight() {
    return [Direction.RIGHT, Direction.LEFT].includes(this.direction) ? this.height / 2 : this.height;
  }

  getWidth() {
    return [Direction.TOP, Direction.BOTTOM].includes(this.direction) ? this.width / 2 : this.width;
  }

  getTop() {
    return [Direction.TOP, Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(this.direction) ? 0 : this.getHeight();
  }

  getBottom() {
    return [Direction.BOTTOM, Direction.TOP_LEFT, Direction.BOTTOM_LEFT].includes(this.direction) ? 0 : this.getHeight();
  }

  getLeft() {
    return [Direction.LEFT, Direction.TOP_RIGHT, Direction.TOP_LEFT].includes(this.direction) ? 0 : this.getWidth();
  }

  getRight() {
    return [Direction.RIGHT, Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(this.direction) ? 0 : this.getWidth();
  }
}

(() => {
  Object.values(Direction)
    .forEach(direction => {
      const triangle = new Triangle(direction, 10, 6);
      console.log(direction, triangle.getStyle());
    });
})();
