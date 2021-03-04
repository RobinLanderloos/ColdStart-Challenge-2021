const getUser = (req) => {
    const header = req.headers["x-ms-client-principal"];
    console.log('Header');
    console.log(header);
    if (header != undefined) {
        const encoded = Buffer.from(header, "base64");
        const decoded = encoded.toString("ascii");

        return JSON.parse(decoded);
    } else {
        return null;
    }
};

module.exports = { getUser };