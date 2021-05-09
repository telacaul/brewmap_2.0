const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blog-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/blog', blogRoutes);


router.use((req, res) => {
    res.status(404).end();
});



module.exports = router;