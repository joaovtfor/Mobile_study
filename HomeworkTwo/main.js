var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa.prototype.showData = function () {
        document.write("Name: " + this.name + "\nIdade: " + this.age);
    };
    return Pessoa;
}());
function enviar() {
    var inputName = document.getElementById("name");
    var name = inputName.value;
    var inputAge = document.getElementById("age");
    var age = Number(inputAge.value);
    alert("Nome: " + name + '\nIdade: ' + age);
    var ppl = new Pessoa(name, age);
    ppl.showData();
}
