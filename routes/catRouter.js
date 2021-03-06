//'use strict'; module is strict by default 😉
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './public/uploads/'});
const catController = require('../controllers/catController');

router.route('/')
  .get(catController.cat_list_get)
  .post(upload.single('filename'), catController.cat_post_new_cat)
  .put(catController.cat_update_cat);

router.route('/:id')
  .get(catController.cat_get_by_id)
  .delete(catController.cat_delete_cat);

module.exports = router;
