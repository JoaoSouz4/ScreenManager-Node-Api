const Labor = require("../model/laborModel");

class LaborController {
    async updateLaborValue(req, res){
        const {laborValue} = req.body;
        
        const laborDocument = await Labor.findOne({});

        if(!laborDocument){
            const newLaborDocument = await Labor.create({laborValue: laborValue});
            return res.status(200).json({isSucess: true, message: 'Valor atualizado com sucess', currentValue: newLaborDocument})
        } else {
            await laborDocument.updateOne({laborValue: laborValue});
            return res.status(200).json({isSucess: true, message: 'Valor atualizado', currentValue: laborDocument})
        }  
    }

    async getLaborValue(req, res){
        const laborDocument = await Labor.findOne({});
        if(!laborDocument) return res.status(401).json({isSucess: false, message: 'O valor da mão de obra ainda não foi cadastrado'});
        return res.status(200).json({isSucess: true, laborDocument: laborDocument});
    }
}

module.exports = new LaborController