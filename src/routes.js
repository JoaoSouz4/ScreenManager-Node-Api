
const {Router} = require('express');
const { checkScreen } = require('./middlewares/checkScreen.js');
const ScreenController = require('./controller/ScreenController.js');
const LaborController = require('./controller/LaborController.js');

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({message: 'initial route'}));
routes.post('/post/insert', checkScreen, ScreenController.InsertScreen);
routes.post('/delete/deletescreen/:id', ScreenController.DeleteScreen)
routes.get('/get/allscreen', ScreenController.GetAllScreen);
routes.get('/get/findscreen/:screen', ScreenController.FindScreen);
routes.get('/get/findscreen/', ScreenController.GetAllScreen);
routes.post('/post/editscreen', ScreenController.EditScreen);
routes.get('/get/findscreenbyid', ScreenController.FindScreenById)
routes.post('/post/insertlaborvalue', LaborController.updateLaborValue);
routes.get('/get/getlaborvalue', LaborController.getLaborValue);
module.exports = routes