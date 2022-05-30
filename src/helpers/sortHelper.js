
export function sortArr(orderType, items) {
    let sortedItemsList = items;
    switch (orderType) {
        case "0":
            return SortByPos(sortedItemsList);
        case "1":
            return SortByPrice(sortedItemsList, true);
        case "2":
            return SortByPrice(sortedItemsList, false);
        case "3":
            return SortByName(sortedItemsList, true);
        case "4":
            return SortByName(sortedItemsList, false);
        default:
            return sortedItemsList;
    }
}

function SortByName(items, isAsc) {
    let v = [...items];
    return v.sort(function (a, b) {
        if (isAsc) {
            return a.name.localeCompare(b.name, "ru", {
                ignorePunctuation: true,
            });
        } else {
            return b.name.localeCompare(a.name, "ru", {
                ignorePunctuation: true,
            });
        }
    });
}

function SortByPrice(items, isAsc) {
    let v = [...items];
    return v.sort(function (a, b) {
        if (isAsc) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

function SortByPos(items) {
    let v = [...items];
    return v.sort(function (a, b) {
        return a.pos - b.pos;
    });
}