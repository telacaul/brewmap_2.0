const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homepage');
});

router.get('/aboutus', (req,res) =>{
    res.render('aboutus');
});

router.get('/favorites', (req,res) => {
    res.render('favorites');
});

// login
router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


module.exports = router;