const Route = require('../controllers/controller')
module.exports=[
  
    {
        method: 'POST',
        path: '/enter/icons',
        handler: Route.enterIcons,
    },

    {
        method: 'POST',
        path: '/enter/details',
        handler: Route.enterDetails,
    },

    {
        method: 'PATCH',
        path: '/patch/details/{id}',
        handler: Route.updateDetails,
    },

    {
        method: 'GET',
        path: '/eager',
        handler: Route.getEagerData
    },

    {
        method: 'GET',
        path: '/update/childtoparent/{id}',
        handler: Route.updateChildToParent
    },

    {
        method: 'POST',
        path: '/update/parent/tochild/{id}',
        handler: Route.updateParentToChild
    },

]