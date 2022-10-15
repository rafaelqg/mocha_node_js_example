let DAOMongoDB = require ("../dao_mongodb/DAOMongoDB");
let assert = require('assert'); 


let daoMongoDB = new DAOMongoDB();
let documents = null;
init = async () =>{
    documents =  await daoMongoDB.getAllEmployees();
};
init();
describe('DAOMongoDB', function () {
  describe('#getAllEmployees', function () {
    it('should return more than 0 documents', function () {
      console.log("test mongo", documents);
      assert.equal(documents.length>0, true);
    });
  });
});
