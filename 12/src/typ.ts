export default function typing(urName: string): void { //void - функция не возвращает ничего
	// описание объекта
	interface User {
		name: string;
		age: number;
		email?: string; // необязательное свойство
	}

	const user: User = {
		name: urName,
		age: 25
	};
    console.log(user);

	// приведение типов
	const num: number = 14.234234;
	console.log(("число: " + num) as string);
}
