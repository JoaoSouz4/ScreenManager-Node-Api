const Screen = require('../model/ScreenModel');

async function checkScreen(req, res, next){
    const {name} = req.body;
    const isRegister = await Screen.findOne({name: name});
    if(isRegister) return res.status(401).json({isSucess: false, message: `${name} já foi registrado no sistema`});
    next();
}

module.exports = {checkScreen}