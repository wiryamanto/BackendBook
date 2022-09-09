const { book } = require("../models/");


module.exports={
    getAllBook: (req, res) => {

        book.findAll()
            .then((data) => {
                res.send({
                    msg: "success",
                    status: "200",
                    data
                })
            })
            .catch((err) => {
                res.send({
                    msg: "error",
                    status: "500",
                    err,
                });
            });
    },
}