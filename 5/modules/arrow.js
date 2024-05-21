export function seeDifFun() {
	//1
	this.age = 0;

	//Вызываем обычную функцию и получаем undefined, т.к. функция ищет в собственном this параметр age
	setTimeout(function seeNonAr() {
		console.log("--------------");
		console.log(this.age);
	}, 1000);

	//Вернет значение с 3 строки, стрелочные функции не имеют собственного this
	setTimeout(() => {
		console.log(this.age);
	}, 1000);

	//2
	// const Person = (name) => {
	//     console.log(name);
	// };

	function Person1(name) {
		console.log(name);
	}
	//Стрелочная функция не может выступать конструктором
	// const p = new Person("Alice");
	const p1 = new Person1("Alice");
	console.log(p1);
	console.log("-------------------------------");
}