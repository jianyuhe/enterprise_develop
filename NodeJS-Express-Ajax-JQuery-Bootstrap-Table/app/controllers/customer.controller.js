// Fetch all Customers
var customers = [
					{
						id: 1,
						name: "Jack",
						age: 25,
						address:{
							street: "NANTERRE CT",
							postcode: "77471"
						}
					},
					{
						id: 2,
						name: "Mary",
						age: 37,
						address:{
							street: "W NORMA ST",
							postcode: "77009"
						}
					},
					{
						id: 3,
						name: "Peter",
						age: 17,
						address:{
							street: "S NUGENT AVE",
							postcode: "77571"
						}
					},
					{
						id: 4,
						name: "Amos",
						age: 23,
						address:{
							street: "E NAVAHO TRL",
							postcode: "77449"
						}
					},
					{
						id: 5,
						name: "Craig",
						age: 45,
						address: {
							street: "AVE N",
							postcode: "77587"
						}
					}
			]
			
exports.getAll = (req, res) => {
	console.log("--->Get All Customers: \n" + JSON.stringify(customers, null, 4));
    res.send(customers); 
};