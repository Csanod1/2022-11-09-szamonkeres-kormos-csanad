"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Statue_height;
let abc = [",", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var szobrok;
class Statue {
    constructor(title, year, price, height) {
        _Statue_height.set(this, void 0);
        this.title = title;
        this.year = year;
        this.price = price;
        __classPrivateFieldSet(this, _Statue_height, height, "f");
    }
}
_Statue_height = new WeakMap();
console.log('Almafa kezdés');
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('feltoltGomb')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        console.log('megy nélküle is');
        let muremeknev = document.getElementById('muremekNev');
        let keszitesEve = document.getElementById('keszitesEve');
        let kikialtasiAr = document.getElementById('kikialtasiAr');
        let magassag = document.getElementById('magassag');
        for (let i = 0; i < muremeknev.value.length; i++) {
            if (!abc.includes(muremeknev.value[i])) {
                console.log('hinás karakter(ek)');
                ((_a = document.getElementById('muremekNevHibaUzenet')) === null || _a === void 0 ? void 0 : _a.textContent) == 'A név csak angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat';
            }
        }
        console.log(muremeknev.value + ", ");
        let szobor = new Statue(muremeknev.value, parseFloat(keszitesEve.value), parseFloat(kikialtasiAr.value), parseFloat(magassag.value));
        szobrok.push(szobor);
        ((_b = document.getElementById('muvekDarabszama')) === null || _b === void 0 ? void 0 : _b.textContent) == szobrok.length.toString();
    });
});
