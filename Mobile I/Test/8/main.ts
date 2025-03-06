class Pessoa {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    showData(): void {
        document.write("Name: " + this.name + "\nIdade: " + this.age);
    }

}

function enviar() {
    const inputName:HTMLInputElement = document.getElementById("name") as HTMLInputElement;
    const name:string = inputName.value;

    const inputAge:HTMLInputElement = document.getElementById("age") as HTMLInputElement;
    const age:number = Number(inputAge.value);

    let ppl = new Pessoa (name, age);
    ppl.showData();
}
