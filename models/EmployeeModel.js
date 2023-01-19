const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
const ActionDetails = {
   ActionTakenOn: { type: Date }
};

let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: String
   },
   uniqueID:{
      type: String
   },
   ActionDetails: ActionDetails
}, {
   collection: 'employees'
}) 
module.exports = mongoose.model('Employee', Employee)