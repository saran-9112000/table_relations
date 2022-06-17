const { Model } = require('objection');
const Details = require('./details.model');


class Icons extends Model {
  static get tableName() {
    return 'jioicons';
  };

  static get idColumn() {
    return 'id';
  };

  static get listOrderColumn() {
    return 'listOrder';
  };

  static get iconNameColumn() {
    return 'iconName';
  };

  static get relationMappings() {
    return {
        Detail:{
            relation:Model.HasManyRelation,
            modelClass:Details,
            join:{
            from:'details.iconId',
            to:'jioicons.id'
            }
        },
        
    }
  }

}

module.exports = Icons