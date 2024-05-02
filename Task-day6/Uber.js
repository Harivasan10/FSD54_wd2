class UberPrice {
    constructor(Metres) {
        this.Metres = Metres;

    }
    getPrice() {
        return (this.Metres) * 40;
    }
}

let uber = new UberPrice(20);

console.log(uber.getPrice());