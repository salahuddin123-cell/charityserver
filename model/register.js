
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RegisterSchema = new Schema({

FullName: {
	type: String
},

Email: {
	type: String
},
Age: {
	type: String
},
MobileNumber:{
	type: String
},
WhatsappNumber: {
	type: String
},
Sex:{
	type: String
},
Married:{
	type: String
},

VoterId: {
	type: String
},
PresentAddress: {
	type: String
},
PermanentAddress: {
	type: String
},
ActiveVolunteer: {
	type: String
},
Category: {
	type: String
},
Course: {
	type: String
},
stipendget: {
	type: String
},
Membershipscheme: {
	type: String
},
iammuslim: {
	type: String
},
careofummah: {
	type: String
},
obeyrules: {
	type: String
},
noobjection: {
	type: String
},
Highestqualification: {
	type: String
},
Designation: {
	type: String
},
Employmentdetails: {
	type: String
},
Occupationdetails: {
	type: String
},
Password: {
	type: String
}


}, {
	collection: 'addregistration'
})

module.exports = mongoose.model('NewRegistration', RegisterSchema)