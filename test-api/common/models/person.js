'use strict';

module.exports = function (Person) {
  Person.firstnames = function (cb) {
    Person.find({}, function (err, people) {
      if (people === null) {
        console.log(err);
        cb(err);
      }
      let firstnames = people.map(person => person.firstname);
      cb(null, firstnames);
    });
  };
  Person.remoteMethod(
    'firstnames', {
      http: {
        path: '/firstnames',
        verb: 'get'
      },
      returns: {
        arg: 'firstnames',
        type: 'string'
      }
    }
  );
};
