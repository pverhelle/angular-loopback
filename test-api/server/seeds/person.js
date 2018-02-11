'use strict';

module.exports = function (app) {
  app.dataSources.testDS.automigrate('Person', function (err) {
    if (err) throw err;

    app.models.Person.create([{
      firstname: 'Test',
      name: 'Tester',
      username: 'tester',
      email: 'test.ang.lb@mailinator.com'
    }], function (err, people) {
      if (err) throw err;
      console.log('Models created: \n', people);
    });
  });
};
