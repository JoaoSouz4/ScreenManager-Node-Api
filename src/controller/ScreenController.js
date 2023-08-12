const Screen = require("../model/ScreenModel.js");
const mongoose = require('mongoose');

function formatedScreen(string) {
            
    let lowercaseString = string.toLowerCase();
    return lowercaseString;
  }

class ScreenController{
    async InsertScreen(req, res){
        const {name, brand, prices, description} = req.body;
        const nameConverted = formatedScreen(name);

        const screen = new Screen({name: nameConverted, brand: brand, prices: prices, description: description});

        try{
            await screen.save();
            return res.status(201).json({
                message: 'registrado com sucesso',
                isSuecess: true,
                data: screen
            })
        }catch(e){console.log('error : ', e)}
    }

    async GetAllScreen(req, res){
        const screens = await Screen.find({});
        return res.status(200).json({list: screens, isSucess: true});
    }

    async FindScreen(req, res){

        const {screen} = req.params;
        const screenConverted = formatedScreen(screen);
        const item = await Screen.find({name: screenConverted});
        if(item.length <=0 ){
            return res.status(401).json({isSucess: false, message: 'Item não encontrado no sistema'})
        } else {
            return res.status(200).json({list: item, isSucess: true});
        }
    }

    async FindScreenById(req, res){
        const {id} = req.params;

        const item = await Screen.findById({_id: id});
        return res.status(200).json({list: item, isSucess: true});
        
    }

    async DeleteScreen(req, res){
        const {id} = req.params;
        const screen = await Screen.findById({_id: id});
        if(!screen) {
            return res.status(401).json({isSucess: false, message: 'Não foi possível encontrar o item'})
        }
        await Screen.deleteOne({name: screen.name});
        const currentList = await Screen.find({});
        return res.status(200).json({isSucess: true, message: 'deleted with sucess', currentList: currentList})
    }

    async EditScreen(req, res){
        const {latestId} = req.body;
        const {name, brand, description, prices} = req.body;

        const screenTarget = await Screen.findById({_id: latestId});
        const nameHasRegister = await Screen.findOne({name: name});

        if(nameHasRegister){
            if(nameHasRegister.equals(screenTarget)){
                await screenTarget.updateOne({
                    name: name,
                    brand: brand, 
                    description: description,
                    prices: {
                        parallel: prices.parallel,
                        medium: prices.medium,
                        firstLine: prices.firstLine,
                    }
                })

                return res.status(200).json({isSucess: true, message: 'Dados atualizado com sucesso'})
            } else {
                return res.json({isSucess: false, message: `${name} Já foi registrado, use outro`})
            }  
        }else {
            await screenTarget.updateOne({
                name: name,
                brand: brand, 
                description: description,
                prices: {
                    parallel: prices.parallel,
                    medium: prices.medium,
                    firstLine: prices.firstLine,
                }
            })

            return res.status(200).json({isSucess: true, message: 'Dados atualizados com sucesso'})
        }
    }
}

module.exports =  new ScreenController;