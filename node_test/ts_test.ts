// var Point = (function () {
//     function Point(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     Point.prototype.add = function (point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     };
//     return Point;
// })();


class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var a = new Point(1,5)
var b = new Point(1,6)
var count = a.add(b);
console.log(count) //Point { x: 2, y: 11 }