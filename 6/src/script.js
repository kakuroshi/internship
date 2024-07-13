//Local
//Данные останутся, если закрыть браузер
const lsInp = document.getElementById("lsInp");
const lsAdd = document.getElementById("lsAdd");
const lsClear = document.getElementById("lsClear");
const lsHelp = document.getElementById("lsHelp");

let lsMas = [];
if (localStorage.getItem("ls")) {
	lsMas = JSON.parse(localStorage.getItem("ls"));

	for (let i = 0; i < lsMas.length; i++) {
		const newItem = document.createElement("p");
		newItem.textContent = lsMas[i];
		lsHelp.append(newItem);
	}
}

lsAdd.addEventListener("click", () => {
	if (lsInp.value) {
		lsMas.push(lsInp.value);
		localStorage.setItem("ls", JSON.stringify(lsMas));

		const newItem = document.createElement("p");
		newItem.textContent = lsInp.value;

		lsHelp.append(newItem);

		lsInp.value = "";
	}
});

lsClear.addEventListener("click", () => {
	localStorage.removeItem("ls");
	window.location.reload();
});

//Session
//Данные в Session Storage доступны только в течение текущей сессии страницы.
//Когда пользователь закрывает вкладку или браузер, все данные из Session Storage удаляются.
const ssInp = document.getElementById("ssInp");
const ssAdd = document.getElementById("ssAdd");
const ssClear = document.getElementById("ssClear");
const ssHelp = document.getElementById("ssHelp");

let ssMas = [];
if (sessionStorage.getItem("ss")) {
	ssMas = JSON.parse(sessionStorage.getItem("ss"));

	for (let i = 0; i < ssMas.length; i++) {
		const newItem = document.createElement("p");
		newItem.textContent = ssMas[i];
		ssHelp.append(newItem);
	}
}

ssAdd.addEventListener("click", () => {
	if (ssInp.value) {
		ssMas.push(ssInp.value);
		sessionStorage.setItem("ss", JSON.stringify(ssMas));

		const newItem = document.createElement("p");
		newItem.textContent = ssInp.value;

		ssHelp.append(newItem);

		ssInp.value = "";
	}
});

ssClear.addEventListener("click", () => {
	sessionStorage.removeItem("ss");
	window.location.reload();
});

//BOM
const backBtn = document.getElementById("backHistory");
const forwardBtn = document.getElementById("forwardHistory");

backBtn.addEventListener("click", () => history.back());
forwardBtn.addEventListener("click", () => history.forward());

document
	.getElementById("logNav")
	.addEventListener("click", () => console.log(window.navigator));

document
	.getElementById("seeHist")
	.addEventListener("click", () => console.log(window.history));

document
	.getElementById("chngHist")
	.addEventListener("click", () =>
		history.pushState({ page: 1 }, "new", "?newPage")
	);

document.getElementById("toPage").addEventListener("click", () => {
	alert("ВЫ ПЕРЕХОДИТЕ НА ДРУГУЮ СТРАНИЦУ");
	window.location.href = "./page.html";
});

//Cookies
const cookieInp = document.getElementById("cookieInp");
const cookieAdd = document.getElementById("cookieAdd");

cookieAdd.addEventListener("click", () => {
	if (cookieInp.value) {
		let cookiesMas = [];

		if (document.cookie) {
			cookiesMas = document.cookie.split(";");
		}

		document.cookie = `cookie${cookiesMas.length} = ${cookieInp.value}`;
		cookieInp.value = "";
	}
});

const cookieDel = document.getElementById("cookieDel");
const cookieDelBtn = document.getElementById("cookieDelBtn");

cookieDelBtn.addEventListener("click", () => {
	if (cookieDel.value) {
		document.cookie =
			cookieDel.value + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		cookieDel.value = "";
	}
});

document
	.getElementById("cookieLog")
	.addEventListener("click", () => console.log(document.cookie));

document.getElementById("cookieParam").addEventListener("click", () => {
	//max-age - сколько живет живет cookie в секундах
	//Существует параметр domain, он задает домен, к которому cookie будет доступен. По умолчанию это текущий домен.
	//secure - указывает, что cookie будет передаваться только через защищенное соединение (HTTPS).

	//samesite - управляет тем, как cookie отправляется с кросс-сайтовыми запросами.
	//Strict - cookie отправляется только в том случае, если запрос исходит с того же сайта, что и cookie.
	//Lax - cookie отправляется с кросс-сайтовыми запросами, но только для безопасных методов (например, GET).
	//None - cookie отправляется с кросс-сайтовыми запросами без ограничений.
	document.cookie = `cookieParam=newCookie; max-age=10; path=/; secure; samesite=Strict`;
	console.log(window.location);
});

//Оператор debugger позволяет приостановить выполнение кода в определенном месте.
//Когда интерпретатор JavaScript встречает оператор debugger, выполнение приостанавливается, если открыты инструменты разработчика.
function testDebug() {
	alert("откройте консоль");
	console.log("вот это начало");
	debugger;
	console.log("конец");
}

document.getElementById("deb").addEventListener("click", () => testDebug());
