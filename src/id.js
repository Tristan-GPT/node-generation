module.exports = async function id(size) {
    let number = [..."1234567890"];

    let id = [];

    for(let i = 0; i < size; i++) {
        id.push(number[Math.floor(Math.random() * number.length)]);
    }

    return `${id.join("")}`;
}