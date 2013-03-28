//https://api.mongolab.com/api/1/databases/angularkeep/collections/notes/:id apiKey=myAPIKey


angular.module('mongolab', ['ngResource']).
    factory('Note', function($resource) {

      var Note = $resource('https://api.mongolab.com/api/1/databases' +
          '/angularkeep/collections/notes/:id',
          { apiKey: 'lETGjyQOlevVcNN4U3lVTnfjPw6pPea-' }, {
            update: { method: 'PUT' }
          }
      );
 
      Note.prototype.update = function(cb) {
        return Note.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      Note.prototype.destroy = function(cb) {
        return Note.remove({id: this._id.$oid}, cb);
      };
 
      return Note;
    }
);

