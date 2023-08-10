
const {Router} = require('express');
const { checkScreen } = require('./middlewares/checkScreen.js');
const ScreenController = require('./controller/ScreenController.js');

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({message: 'initial route'}));
routes.post('/post/insert', checkScreen, ScreenController.InsertScreen);
routes.post('/delete/deletescreen/:id', ScreenController.DeleteScreen)
routes.get('/get/allscreen', ScreenController.GetAllScreen);
routes.get('/get/findscreen/:screen', ScreenController.FindScreen);
routes.get('/get/findscreen/', ScreenController.GetAllScreen)

module.exports = routes