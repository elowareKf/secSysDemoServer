var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
}).post('/', function (req, res, next) {
    const content = req.body
    let errorMessage = new Object()
    let error = false

    if (isEmptyString(content["device"])) {
        errorMessage["device"] = "missing"
        error = true
    }

    if (isEmptyString(content["message"])) {
        errorMessage["message"] = "missing"
        error = true
    }

    if (isEmptyString(content["content"]) && isEmptyString(content["rawMessage"])){
        errorMessage["content"] = "content and rawMessage missing"
        error = true
    }

    if (error) {
        res.status(400)
        res.header("Result", "Failed")
        res.json(errorMessage)
        return
    }

    res.status(204)
    res.header("Result", "Success")
    res.send()
});

function isEmptyString(value){
    return value == null || value.trim() === ""
}

module.exports = router;
