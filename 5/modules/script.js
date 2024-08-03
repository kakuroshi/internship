import { seeDifFun } from "./arrow.js";
import { seeName } from "./seeName.js";

seeName(); //Используются параметры, что мы задали как default
seeName("Миша", 18); //Используются переданные параметры
seeName(undefined, 20); //При передаче undefiend будет использоватьсе default parameter

//Классы
//Создаем класс
class Parent {
	//Функция, что выполняется сразу же после создания объекта
	constructor() {
		console.log("Parent constructor");
	}

	viewHello() {
		console.log("Hello!");
	}
}

//Дочерний класс, что наследует свойства класса Parent
class Child extends Parent {
	constructor() {
		//Super используется для вызова конструктора родителя и грамотной инициализации всех его свойств
		super();
		console.log("Child constructor");

		//Метод родителя
		this.viewHello();
	}
}

// Выводит "Parent constructor" и затем "Child constructor"
const c = new Child(); //Создаем новую переменнуювида объекта Child
c.viewHello();
console.log("-------------------------------");

//Spread/Rest
const numbers = [1, 2, 4, 234, 23423, 445];
const numbers1 = [5, 4, 3, 2, 1];

//Spread позволяет распаковать развернуть массив(объект)
const allNum = [...numbers, 18, 444444, ...numbers1];
console.log(allNum);

//Rest
//используется для сбора оставшихся аргументов в массив внутри функции или для сбора оставшихся свойств объекта в новый объект.
const { x, y, ...other } = { x: 52, y: 44, z: 1488, a: 17, b: 18 }; //Здесь используется деструктуризация
//Деструктуризация позволяет создать три переменные и сразу присвоить им значения
//Значения x и y - присваиваются одноименным переменным, а оставшиеся свойства собираются в объеккт с помощью Rest и присваивается переменной other

const [a, , , b] = [1, 2, 3, 4, 5]; //С помощью запятых в деструктуризации мы можем пропускать значения
console.log(a); //Присваиваем переменной a значение 0 индекса массива
console.log(b); //Присваиваем значение 3 индекса

console.log("Значение x - " + x);
console.log("Значение y - " + y);
console.log(other);
console.log("-------------------------------");

//arrow func возможности
const ge = new seeDifFun();
console.log(ge);

//yield
//Используется в контексте генераторов функций(могут приостановить выполнение и возобновить позже)
function* generatorFunction() {
	let id = 0;

	while (true) {
		yield ++id;
	}
}

const iterator = generatorFunction();

//yield приостанавливает работу функции и возвращает объект, в котором находятся переданное значение yield и булево значение, закончена ли функция
console.log(iterator.next());
console.log(iterator.next());
