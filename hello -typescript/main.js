var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; }); //Ex 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
