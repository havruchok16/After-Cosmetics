
export function filterArr(category, filterItemsList) {
    console.log(filterItemsList);
    let newFilterArr = filterItemsList.filter(
        (item) => item.category == category
    );
    if (category == 0) {
        newFilterArr = filterItemsList;
    }
    if (newFilterArr.length === 0) {
        console.log("error");
    }
    console.log(newFilterArr);
    return newFilterArr;
}