const Service = require("../services/service")

exports.enterIcons = async(req,res,next) => {
    console.log(req.payload)
    const user = await Service.enterIcons(req.payload)
    console.log(user)
    return res.response(user).code(200)
}

exports.enterDetails = async(req,res,next) => {
    console.log(req.payload)
    const user = await Service.enterDetails(req.payload)
    console.log(user)
    return res.response(user).code(200)
}

exports.getEagerData = async(req,res,next) => {
    const user = await Service.getEagerData()
    console.log(user)
    return res.response(user).code(200)
}

exports.updateDetails = async(req,res,next) => {
    console.log(req.params)
    const user = await Service.updateDetails(req.payload,req.params.id)
    console.log(user)
    return res.response(user).code(200)
}

exports.updateChildToParent = async(req,res,next) => {
    console.log(req.params)
    const user = await Service.updateChildToParent(req.params.id)
    console.log(user)
    return res.response(user).code(200)
}

exports.updateParentToChild = async(req,res,next) => {
    console.log(req.params)
    const user = await Service.updateParentToChild(req.params.id,req.payload)
    console.log(user)
    return res.response(user).code(200)
}