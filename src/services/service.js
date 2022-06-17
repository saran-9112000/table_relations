const Icons = require("../models/icons.model")
const Details= require("../models/details.model");
const { payload } = require("@hapi/hapi/lib/validation");


exports.enterIcons = async(payload) => {
    try{
        const icons = await Icons.query().insert({
            listOrder:payload.listOrder,
            iconName:payload.iconName
    });
    return icons
    }
    catch (err){
        return err
    }   
}

exports.enterDetails = async(payload) => {
    try{
        const details = await Details.query().insert({
            iconId:payload.iconId,
            listOrder:payload.listOrder,
            detailsName:payload.detailsName
    });
    return details
    }
    catch (err){
        return err
    }   
}

exports.getEagerData = async() => {
    try{
        const getEager =await Icons.query().withGraphFetched('Detail').modifyGraph('Detail',builder =>{
            builder.orderBy('listOrder')
        })
        console.log(getEager)
    return getEager
    }
    catch (err){
        return err
    }   
}

exports.updateDetails = async(payload,params) => {
    try{
        console.log("payload",payload.listOrder)
        console.log(params,"params")
        const details = await Details.query().findOne({id:params}).patch({
            iconId:payload.iconId,
            listOrder:payload.listOrder,
    });
    console.log(details)
    return "updated details table"
    }
    catch (err){
        return err
    }   
}

exports.updateChildToParent = async(params) => {
    try{
        console.log(params,"params")
        const details = await Details.query().findOne({id:params})
        const Conversion = await Icons.query().insert({
            listOrder:details.listOrder,
            iconName:details.detailsName
        })
        const deleteChild =  await Details.query().findOne({id:params}).delete()
    console.log(details)
    return Conversion
    }
    catch (err){
        return err
    }   
}

exports.updateParentToChild = async(params,payload) => {
    try{
        console.log(params,"params")
        const icons = await Icons.query().findOne({id:params})
        const details = await Details.query().where({iconId:params}).update({iconId:payload.iconId})
        const icon = await Details.query().insert({
            iconId:payload.iconId,
            listOrder:payload.listOrder,
            detailsName:icons.iconName
        })
        const deleteicons = await Icons.query().findOne({id:params}).delete()
        return icon
    }
    catch (err){
        return err
    }   
}