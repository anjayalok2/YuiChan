function successfullMessage(msg) {
    return "✅ *YuiChan*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *YuiChan*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *YuiChan*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
