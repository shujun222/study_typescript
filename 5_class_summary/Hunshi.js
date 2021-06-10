"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.walk = function () {
        console.log("I am walking...");
    };
    return Person;
}());
;
var p = new Person();
p.walk();
console.log(p.name);
var Hunshi = /** @class */ (function (_super) {
    __extends(Hunshi, _super);
    function Hunshi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hunshi;
}(Person));
var tangsan = new Hunshi();
tangsan.walk();
console.log(tangsan.name);
