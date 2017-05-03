// tsc --out out.js --pretty --target ES2015 --strict --alwaysStrict a.ts
function getArea(s) {
    return s.width * s.height / 2;
}
const area = getArea({ width: 20, height: 30 });
//const area = getArea({ width: '20', height: 30 }); // intentionally broken
console.log(area.toString());
