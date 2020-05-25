function load(){
	if(localStorage.getItem("count")!= null){
		var demo_id = document.getElementById("demo");
		var value = Number(localStorage.getItem("count"));
		demo_id.value = value;
		demo_id.innerHTML = value.toString();
		demo_id.style.fontSize = "10vw";
		demo_id.style.color = "black";
	}else{
		var demo_id = document.getElementById("demo");
		localStorage.setItem("count","0");
		demo_id.value = value;
		demo_id.innerHTML = value.toString();
		demo_id.style.fontSize = "10vw";
		demo_id.style.color = "black";
	}
}

function inc(){
	var demo_id = document.getElementById("demo");
	var value = parseInt(demo_id.value,10);
	value = isNaN(value) ? 0: value;
	value++;
	demo_id.value = value;
	demo_id.innerHTML = value.toString();
	demo_id.style.fontSize = "10vw";
	demo_id.style.color = "black";
	localStorage.setItem("count",value);
}

var $button = document.querySelector('.increment-btn');
$button.addEventListener('click',inc,false);

var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jonathanwu1120:<password>@cluster0-rnb3s.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected");
  client.close();
});

*/