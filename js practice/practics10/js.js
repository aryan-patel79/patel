class complex {
    constructor(real, imaginare){
        this.real = real
        this.imaginare = imaginare
    }
    add(num){
        this.real = this.real + num.real
        this.imaginare = this.imaginare + num.imaginare
    }
}

let a = new complex(2, 4)
let b = new complex(6, 2)
a.add(b)
console.log(`${a.real} ${a.imaginare}`);

