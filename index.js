let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]

let promt = prompt("Выберите компанию").toLocaleLowerCase().trim()

for (let item of cars) {
    if (item.company == promt) {
        let model = prompt(`У нас имеется ${item.model}`)
        if (item.model === model) {
            let price = prompt(`Оплатите ${item.price}`)
            console.log(item.price);
            if (price == item.price) {
                alert("спасибо что выбрaли нас")
            } else if (price > item.price) {
                let change = price - item.price
                alert(`Ваша сдача сер${change}`)
            } else if (price < item.price) {
                let more = item.price - price
                alert(`Вы еще ${more} должны`)
            }
        }
    }
}