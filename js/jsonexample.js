var data = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];



function addRecipes(){
    var recipe = document.getElementById("cakeRecipe");
    for(var i=0;i<data.length;i++){
        recipe.innerHTML += "<tr>"+
                            "<td>"+ data[i].type +"</td>"
                            +"<td>"+ data[i].name +"</td>"
                            +"<td><ul id='batter"+i+"'>"
                                
                            +"</ul></td>"
                            +"<td>"
                                +"<ul id='topping"+i+"'>"
                                +"</ul>"
                            "</td>"+
                            "</tr>"

        for(var j=0;j<data[i].batters.batter.length;j++){
            var x = data[i].batters.batter[j];
            var dynamicId = "batter" + i;
            var batter = document.getElementById(dynamicId);
            batter.innerHTML += "<li>"+ x.type  +"</li>"
        }

        for(var k=0;k<data[i].topping.length;k++){
            var x = data[i].topping[k];
            var dynamicId = "topping" + i;
            var topping = document.getElementById(dynamicId);
            topping.innerHTML += "<li>"+ x.type  +"</li>"
        }
    }
}