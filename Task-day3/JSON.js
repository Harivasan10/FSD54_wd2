const obj1 = {
    name: "person",
    age: "5"
}

const obj2 = {
    age: "5",
    name: "person"
}

JSON.srtingify(obj1) === JSON.srtingify(obj2)

_.isequal(obj1, obj2);

console.log("two jsons sre equal")
