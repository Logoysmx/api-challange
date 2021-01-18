exports.success = (req, res, status, msg) => {
    res.status(status || 200).send(msg);
}

exports.error = (req, res, status, msg) => {
    res.status(status || 500).send(msg);
}