const router = require('express').Router();
const temple = require('./temple');

// router.get('/', (req, res) => {
//   res.send('Hello World');
// });
router.use('/',require('./swagger'));
router.use('/contacts', require('./contacts'));
routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = router;
