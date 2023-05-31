const crypto = require('crypto')

var createHash =   (data, salt = '') => {
  let shasum = crypto.createHash('sha256').update(data + salt).digest('hex');
  return shasum;
};
module.exports = {
      createHash,
     
      RandomString : (length)=>{
        return crypto.randomBytes(length).toString('hex');
      }
      
}