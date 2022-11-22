const router = require("express").Router()

const controller = require("../controller/userController")

router
    .get("/", controller.getAllTitles)
    .get("/:id", controller.getTitle)
    .post("/", controller.createTitle)
    .put("/:id", controller.updateTitle)
    .delete("/:id", controller.deleteTitle)

module.exports = router;