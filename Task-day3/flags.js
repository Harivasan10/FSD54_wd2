var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status >= 0 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        t.forEach(element => {
            for (let key in t) {
                console.log(t[key].fag)
            }
        });
    }
    else {
        console.log(xhr.responseText);
    }
};
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();