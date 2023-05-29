const uuids = require("uuid")

module.exports = async function uuid() {
    const uuid = uuids.v4()

    return uuid;
};