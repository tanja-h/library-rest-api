const bcrypt = require('bcrypt');
const saltRounds = 10;

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

async function checkIsPasswordValid(hashedPassword, password) {
    const isPasswordValid = await bcrypt.compare(hashedPassword, password);
    return isPasswordValid;
}

module.exports = { encryptPassword, checkIsPasswordValid }