
const {Router} = require("express");
const expressFileUpload = require("express-fileupload");
const {uploadImg} = require("../controllers/upload")
const router = Router();
router.use(expressFileUpload());


router.put("/:tipo/:id", uploadImg)



module.exports = router