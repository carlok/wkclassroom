"use strict";
//tsc --out out.js a.ts
function getArea(s) {
    return s.width * s.height / 2;
}
//const area = getArea({ width: 20, height: 30 });
const area = getArea({ width: '20', height: 30 }); // intentionally broken
console.log(area.toString());
