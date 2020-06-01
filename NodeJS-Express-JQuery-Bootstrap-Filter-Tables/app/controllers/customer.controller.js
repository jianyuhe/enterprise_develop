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
					},
					{
						id: 6,
						name: "Aries",
						age: 19,
						address: {
							street: "Broadway/Reade St, New York",
							postcode: "10007"
						}
					},
					{
						id: 7,
						name: "Brice",
						age: 39,
						address: {
							street: "Columbus, OH 43215, USA",
							postcode: "43215"
						}
					},
					{
						id: 8,
						name: "Cage",
						age: 24,
						address: {
							street: "Plano, TX 75074",
							postcode: "75074"
						}
					},
					{
						id: 9,
						name: "Ellen",
						age: 41,
						address: {
							street: "Modesto, CA 95354",
							postcode: "95354"
						}
					},
					{
						id: 10,
						name: "Brice",
						age: 32,
						address: {
							street: "Atlanta, GA 30334",
							postcode: "30334"
						}
					}
			]
			
exports.getAll = (req, res) => {
	console.log("--->Get All Customers: \n" + JSON.stringify(customers, null, 4));
    res.send(customers); 
};