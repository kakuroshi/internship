export function seeName(name = "Аноним", age = "неизвестен") {
	//Здесь используется литерал `, который позволяет использование выражений внутри строки и сохраняетт перенос строк
	//Получаем шаблонную строку
	console.log(`Меня зовут ${name}, 
мой возраст ${age}`);
	console.log(`через 5 лет - ${age + 5}`);
	console.log("-------------------------------");
}