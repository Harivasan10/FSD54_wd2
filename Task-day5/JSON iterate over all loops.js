var json_data = {
    my_Name: "Harivasan",
    Email: "harivasan123@gmail.com",
    Date_of_birth: "28.10-2002",
    Age: 20,
    Nationality: "Indian",
    Languages_known: ["English", "Tamil"],
    Marks: { "B.E": "CGPA 7.92", "HSC ": "87%", SSLC: "85%" },
    Qualification: "B.E ECE",
    Key_strength: ["creative", "self learning"],
    Hobbies: ["Gaming", "listening music "],
};

const count = Object.keys(json_data);

// for Of
for (let i of count) {
    console.log(json_data[i]);
}

// for loop
for (let i = 0; i < count.length; i++) {
    console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
    console.log(json_data[keys]);
}


