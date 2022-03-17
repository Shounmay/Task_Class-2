class Category {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	getprocnt(prod_size) {
		this.pro_cnt = prod_size;
		return this.pro_cnt;
	}
}

class Product {
	constructor(name, color, categoryid) {
		this.name = name;
		this.color = color;
		this.categoryid = categoryid;
	}
}

let category = [];

let hashtable = {};

for (let i = 0; i < 5; i++) {
	category.push(new Category(i, "category" + String(i)));

	const key = String(i);

	hashtable[key] = [[], []];

	hashtable[key][0].push(category[i]);
}

let product = [];

for (let i = 0; i < 10; i++) {
	product.push(new Product("product" + String(i), "RGB" + String(i), i / 2));

	const key = String(Math.floor(i / 2));

	hashtable[key][1].push(product[i]);

	category[Math.floor(i / 2)].getprocnt(hashtable[key][1].length);
}

for (let i = 0; i < category.length; i++) {
	const key = String(i);
	console.log(
		category[i].name,
		",",
		hashtable[key][1],
		",",
		"product count is: ",
		category[i].pro_cnt
	);
}
