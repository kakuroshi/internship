document.querySelector(".main__plus").addEventListener('click',() => calculation('+'))
document.querySelector(".main__minus").addEventListener('click', () => calculation('-'))
document.querySelector(".main__multiplication").addEventListener('click', () => calculation('x'))
document.querySelector(".main__division").addEventListener('click', () => calculation('/'))

function calculation (digit) {
    const mathFInp = Number(document.getElementById("fInp").value)
    const mathSInp = Number(document.getElementById("sInp").value)
    const mathRes = document.querySelector(".main__math-res")

    try {
        switch (digit) {
            case "+":
                console.log('Результат вычислений: ' + mathFInp + mathSInp);
                mathRes.textContent = (mathFInp + mathSInp)
                break
            case "-":
                console.log('Результат вычислений: ' + mathFInp - mathSInp);
                mathRes.textContent = (mathFInp - mathSInp)
                break
            case "x":
                helpMath(String((mathFInp * mathSInp).toFixed(2)))
                break
            case "/":
                if (mathSInp === 0) {
                    throw new Error('Деление на ноль невозможно')
                } else {
                    helpMath(String((mathFInp / mathSInp).toFixed(2)))
                }
                break
            default:
                mathRes.textContent = 'Error!'
        }
    } catch (error) {
        console.error(error.message);
        mathRes.textContent = error.message
    }

    function helpMath(res) {
        console.log('Результат вычислений: ' + res);

        let dotIndex = res.indexOf('.')
        if ((dotIndex != '-1') && (res.slice(dotIndex+1, dotIndex+3) === '00')) {  //строгое равенство сравнивает значения без преобразования их типов
            mathRes.textContent = res.slice(0, dotIndex)
        } else {
            mathRes.textContent = res
        }
    }
}

// строки
const textInp = document.getElementById('textInp')

//1
const conc = document.getElementById('conc')

textInp.addEventListener('input', () => {
    if (textInp.value) {
        conc.textContent = `Вы написали: "` + textInp.value + `", верно?`
    } else {
        conc.textContent = 'Конкетация'
    }
})

//2
const templ = document.getElementById('templ')
templ.textContent = '\'Я могу использовать кавычки только благодаря слэшу\', это не увидим - "\n :(", а \\n - да'

//3
const shield = document.getElementById('shield')
textInp.addEventListener('input', () => {
    if (textInp.value != '') {
        shield.textContent = `Вы написали: "${textInp.value}", верно?`
    } else {
        shield.textContent = 'Шаблонизация'
    }
})

//Пример цикл
document.getElementById('btnCyc').addEventListener('click', () => {
    const guys = [
        'Анна',
        'Иван',
        'Елена',
        'Петр',
        'Мария',
        'Александр',
        'София',
        'Михаил',
        'Алексей',
        'Ольга',
        'Дмитрий',
        'Екатерина',
        'Артем',
        'Наталья',
        'Сергей'
      ]

    for (let i = 0; i <= guys.length; i++) {
        
        if (i < guys.length) {
            setTimeout(() => {
                console.log(guys[i]);
            }, i * 1000);
        } else if (i === guys.length) {
            setTimeout(() => {
                console.log('Это всё!!!');
            }, guys.length * 1000)
        }
    }
})

function checkDif () {
    var checkVar = 'я var'
    let checkLet = 'я let'
    const checkConst = 'я const'

    console.log(checkVar);
    console.log(checkLet);
    console.log(checkConst);
    console.log('------------------');

    //const переопределить нельзя, что можно выполнять с другими переменными
    checkVar = 'var'
    checkLet = 'let'
    // checkConst = 'const'

    console.log(checkVar);
    console.log(checkLet);
    console.log('------------------');

    //может быть переобъявлена
    // var checkVar = 'я v'
    // console.log(checkVar);
    // console.log('------------------');

    if (checkVar != checkConst) {
        var v = 'v'
        // let l = 'l'
        // const c = 'c'
    }
    console.log(v);
    // Мы не сможем использовать переменные l и c, т.к. они имеют блочную видимость, а переменная v - функциональную
    // console.log(l);
    // console.log(c);

}
checkDif()

function checkOperands () {
    let a = null
    let b = 1
    let c = 10

    console.log(b && c); // Если все true - вернет последний, иначе первый false
    console.log(c || b); // ИЛИ вернет первое со значением true
    console.log((a ?? b) ?? c); // Возвращает не ложеподобное
    console.log('----------');

    a ??= b           // a = a ?? b
    console.log(a);

    a &&= c
    console.log(a);

    b ??= a
    console.log(b);

    !b ? console.log('не увидим(') : console.log('! - отрицание(инверсия), значит 1(true) превращается в false');

    let zero = 0
    zero ? console.log('не увидим(') : console.log("false, 0, null, undefined, NaN и пустая строка - являются false");

    a = null;
    ((a ??= b) === c) > ((a && c) > c - b) ? null : console.log(((a ??= b) === c) > ((a && c) > c - b)); // 1 > 1
}
console.log('-----Операторы-----');
checkOperands()