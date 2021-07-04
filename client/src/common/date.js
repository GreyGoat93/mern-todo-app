export const getNewDate = function() {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const dateObjectToString = function(date) {
    let newDate = "";
    newDate += date.slice(8, 10) + ".";
    newDate += date.slice(5, 7) + ".";
    newDate += date.slice(0, 4);
    return newDate;
}