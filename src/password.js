module.exports = async function password(size) {
    let caracteres = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890&#@!?-_=+"]

    let password = [];

    for(let i = 0; i < size; i++) {
        password.push(caracteres[Math.floor(Math.random() * caracteres.length)]);
    }

    return `${password.join("")}`;

}