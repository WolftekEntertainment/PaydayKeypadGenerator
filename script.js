function run() {

    var items = document.getElementById("items").value;
    //console.log(items);
    items = items.split("");
    //console.log(items);

    var res = combinations(items, 3, 4);
    var filtered = [];

    for (let i = 0; i < res.length; i++) {
        item = res[i];
        var ignore = false
        if (item.length == 4 && items.length == 3) {
            var locked = false;
            for (j = 0; j < items.length; j++) {
                var c = 0;
                for (k = 0; k < item.length; k++) {
                    if (item[k] == items[j]) {
                        c += 1;
                        if (c > 1) {
                            if (locked) {
                                ignore = true;
                            }
                            locked = true;
                        }
                    }
                }
            }
        }
        else if (item.length == 4 && items.length == 4) {
            for (j = 0; j < items.length; j++) {
                var c = 0;
                for (k = 0; k < item.length; k++) {
                    if (item[k] == items[j]) {
                        c += 1;
                        if (c > 1) {
                            ignore = true;
                            break;
                        }
                    }
                }
            }
        }
        else {
            ignore = true;
        }
        if (ignore) {
            continue;
        }
        filtered.push(item);
    }
    
    console.log(filtered)
    var html = "<table>";
    for (i = 0; i < filtered.length; i++) {
        html += "<tr onclick='toggle(this)'><td>" + (i + 1) + ":</td><td><b>" + filtered[i].split('').join('-') + "</b></td></tr>";
    }
    html += "</table>";
    document.getElementById("results").innerHTML = html;
}

const combinations = (arr, min = 1, max) => {
    const combination = (arr, depth) => {
        if (depth === 1) {
            return arr;
        } else {
            const result = combination(arr, depth - 1).flatMap((val) =>
                arr.map((char) => val + char)
            );
            return arr.concat(result);
        }
    };

    return combination(arr, max).filter((val) => val.length >= min);
};

function toggle(object) {
    object.classList.toggle("toggled");
}