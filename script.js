//your JS code here. If required.

document.getElementById("btn").addEventListener("click", (e)=> {
	e.preventDefault()
	
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;

	if(!age || !name) {
		alert("Please enter valid details");
	}
	
	let voter_age = parseInt(age);
	let voter_name = name;

	let promise = new Promise((resolve, reject) => {
		setTimeout(()=>{
			if(voter_age > 18) {
				resolve(`Welcome, ${voter_name}. You can vote.`)
			}else {
				reject(`Oh sorry ${voter_name}. You aren't old enough.`)
			}
		}, 4000)
	});


	promise.then((message)=> {
		alert(message);
	})
	.catch((err) => {
		alert(err);
	});
});