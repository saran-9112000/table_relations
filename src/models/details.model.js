const { Model } = require('objection');

class Details extends Model {
  static get tableName() {
    return 'details';
  };

  static get idColumn() {
    return 'id';
  };

  static get iconIdColumn() {
    return 'iconId';
  };

  static get listOrderColumn() {
    return 'listOrder';
  };

  static get detailsNameColumn() {
    return 'detailsName';
  };

}
module.exports = Details