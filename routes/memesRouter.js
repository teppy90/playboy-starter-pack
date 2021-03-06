const express = require('express');
const router = express.Router();

const MemesController = require('../controllers/memesController');


router.post('/meme', MemesController.createMeme);
router.get('/memes', MemesController.getMemes);
router.get('/meme/:id', MemesController.getMemeById);
router.put('/meme/:id', MemesController.updateMeme);
router.delete('/meme/:id', MemesController.deleteMeme);

module.exports = router;