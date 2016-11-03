"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalClass = function GlobalClass() {
    _classCallCheck(this, GlobalClass);
};

GlobalClass.displayName = "GlobalClass";
exports.default = GlobalClass;


function scope() {
    var ScopedClass = function ScopedClass() {
        _classCallCheck(this, ScopedClass);
    };

    ScopedClass.displayName = "ScopedClass";
}