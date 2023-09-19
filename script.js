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
    var html = "";
    for (i = 0; i < filtered.length; i++) {
        html += (i+1) + " <b>" + filtered[i] + "</b><br>";
    }
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

/*
function allPossibleCombinations(items, isCombination = false) {
    // finding all possible combinations of the last 2 items
    // remove those 2, add these combinations
    // isCombination shows if the last element is itself part of the combination series
    if (items.length == 1) {
        return items[0]
    }
    else if (items.length == 2) {
        var combinations = []
        for (var i = 0; i < items[1].length; i++) {
            for (var j = 0; j < items[0].length; j++) {
                if (isCombination) {
                    // clone array to not modify original array
                    var combination = items[1][i].slice();
                    combination.push(items[0][j]);
                }
                else {
                    var combination = [items[1][i], items[0][j]];
                }
                combinations.push(combination);
            }
        }
        return combinations
    }
    else if (items.length > 2) {
        var last2 = items.slice(-2);
        var butLast2 = items.slice(0, items.length - 2);
        last2 = allPossibleCombinations(last2, isCombination);
        butLast2.push(last2)
        var combinations = butLast2;
        return allPossibleCombinations(combinations, isCombination = true)
    }
}
*/