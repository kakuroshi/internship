document.querySelector(".main__plus").addEventListener('click',() => calculation('+'))
document.querySelector(".main__minus").addEventListener('click', () => calculation('-'))
document.querySelector(".main__multiplication").addEventListener('click', () => calculation('x'))
document.querySelector(".main__division").addEventListener('click', () => calculation('/'))

function calculation (digit) {
    const mathFInp = Number(document.getElementById("fInp").value)
    const mathSInp = Number(document.getElementById("sInp").value)
    const mathRes = document.querySelector(".main__math-res")

    switch (digit) {
        case "+":
            mathRes.textContent = (mathFInp + mathSInp)
            break
        case "-":
            mathRes.textContent = (mathFInp - mathSInp)
            break
        case "x":
            let finX = String((mathFInp * mathSInp).toFixed(2))
            helpMath(finX)
            break
        case "/":
            let finD = String((mathFInp / mathSInp).toFixed(2))
            helpMath(finD)
            break
        default:
            mathRes.textContent = 'Error!'
    }

    function helpMath(res) {
        if (res[res.indexOf('.')+1] == '0') {
            mathRes.textContent = res.slice(0, res.indexOf('.'))
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
    if (textInp.value != '') {
        conc.textContent = `Вы написали: "` + textInp.value + `", верно?`
    } else {
        conc.textContent = 'Конкетация'
    }
})

//2
const templ = document.getElementById('templ')
templ.textContent = '\'Я могу использовать кавычки только благодаря слэшу\''

//3
const shield = document.getElementById('shield')
textInp.addEventListener('input', () => {
    if (textInp.value != '') {
        shield.textContent = `Вы написали: "${textInp.value}", верно?`
    } else {
        shield.textContent = 'Экранирование'
    }
})