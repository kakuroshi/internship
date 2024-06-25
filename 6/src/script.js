//Local Storage
//Не пропадает даже если закрыть браузер
const inpLocal = document.querySelector(".storages__local-inp");
const addLocal = document.querySelector(".storages__local-but");
const delLocal = document.querySelector(".storages__local-del");
const divLocal = document.querySelector(".storages__local-txt");

let eventMas = [];
let lsContent = JSON.parse(localStorage.getItem("ls"));

if (lsContent) {
	eventMas = lsContent;

	for (let i = 0; i < eventMas.length; i++) {
		const addItem = document.createElement("p");
		addItem.textContent = eventMas[i];
		divLocal.append(addItem);
	}
}

addLocal.addEventListener("click", () => {
	if (lsContent) {
		eventMas.push(inpLocal.value);
		localStorage.setItem("ls", JSON.stringify(eventMas));
	} else {
		eventMas.push(inpLocal.value);
		localStorage.setItem("ls", JSON.stringify(eventMas));
	}

	const addItem = document.createElement("p");
	addItem.textContent = inpLocal.value;
	divLocal.append(addItem);

	inpLocal.value = "";
});

delLocal.addEventListener("click", () => {
	localStorage.removeItem("ls");

	window.location.reload();
});

//Session Storage
//Пропадет как только закроем браузер
const inpSes = document.querySelector(".storages__session-inp");
const addSes = document.querySelector(".storages__session-but");
const delSes = document.querySelector(".storages__session-del");
const divSes = document.querySelector(".storages__session-txt");

let eventMasSes = [];
let sesContent = JSON.parse(sessionStorage.getItem("ses"));

if (sesContent) {
	eventMasSes = sesContent;

	for (let i = 0; i < eventMasSes.length; i++) {
		const addItem = document.createElement("p");
		addItem.textContent = eventMasSes[i];
		divSes.append(addItem);
	}
}

addSes.addEventListener("click", () => {
	if (sesContent) {
		eventMasSes.push(inpSes.value);
		sessionStorage.setItem("ses", JSON.stringify(eventMasSes));
	} else {
		eventMasSes.push(inpSes.value);
		sessionStorage.setItem("ses", JSON.stringify(eventMasSes));
	}

	const addItem = document.createElement("p");
	addItem.textContent = inpSes.value;
	divSes.append(addItem);

	inpSes.value = "";
});

delSes.addEventListener("click", () => {
	sessionStorage.removeItem("ses");

	window.location.reload();
});

//BOM
const navigatorBtn = document.querySelector(".BOM__navigator");

navigatorBtn.addEventListener("click", () => {
	console.log(window.navigator);
});

const pageCh = document.querySelector(".BOM__page");

pageCh.addEventListener("click", () => {
	window.location.href = "./page.html";
});

const historyForward = document.querySelector(".BOM__forward");
const historyBack = document.querySelector(".BOM__back");

historyForward.addEventListener("click", () => history.forward());
historyBack.addEventListener("click", () => history.back());

const historyB = document.querySelector(".BOM__history");

historyB.addEventListener("click", () => {
	console.log(window.history);
});

const addHist = document.querySelector(".BOM__clear-history");
addHist.addEventListener("click", () =>
	history.pushState({ page: 1 }, "title 1", "?page=1")
);

//Cookie
document.querySelector(".cookies__see").addEventListener("click", () => {
	console.log(document.cookie);
});

const inpCookie = document.querySelector(".cookies__add-inp");
const addCookie = document.querySelector(".cookies__add-but");

addCookie.addEventListener("click", () => {
	let cookieArr = document.cookie.split(";");

	document.cookie = `parameter${cookieArr.length}=${inpCookie.value}`;
	inpCookie.value = "";
});

const delInpCookie = document.querySelector(".cookies__del-inp");
const delButCookie = document.querySelector(".cookies__del-but");

delButCookie.addEventListener("click", () => {
	document.cookie =
		delInpCookie.value + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	delInpCookie.value = "";
});
