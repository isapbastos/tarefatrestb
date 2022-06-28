const express = require('express');
const router = express.Router();

router.get('/param/:id', (req, res) => {//regex
	res.send("Seu param é: " + req.params.id);
});

module.exports = router;