const Ajv = require("ajv");
const ajv = new Ajv();
const textSchema = require("./textSchema.json");

const validate = ajv.compile(textSchema);

module.exports = validate;
