const kiszamolButton = document.querySelector('#kiszamol-button')
const sebesseg = document.querySelector('#sebesseg')
const rangesebesseg = document.querySelector('#range-value')
const eredmeny = document.querySelector("#eredmeny")

function kattintas (){
    const kapacitas = parseInt(document.querySelector("#kapacitas").value)
    if(kapacitas < 0 || kapacitas > 5000){
        alert("Csak 0 és 5000 közötti értéket adhat meg!")
        return
    }
    const kapacitasSelect = document.querySelector("#kapacitas-select").value
    const sebesseg = parseInt(document.querySelector("#sebesseg").value)
    const sebessegSelect = document.querySelector("#sebesseg-select").value

    const convertedValue = Math.round(atalakit(kapacitas, kapacitasSelect, sebesseg, sebessegSelect))
    eredmeny.innerHTML = secondToMinute(convertedValue)
}
kiszamolButton.addEventListener("click", kattintas)

sebesseg.addEventListener('input', (e) => {
    rangesebesseg.innerHTML = e.target.value
})

const secondToMinute = (second) => {
    if(second < 60){
        return `${second} másodperc`
    } else {
        minutes = Math.floor(second / 60)
        seconds = second - minutes * 60
        return `${minutes} perc ${seconds} másodperc`
    }
}

const atalakit = (kapacitas, kapacitasSelect, sebesseg, sebessegSelect) => {
    let eredmeny = 0
    switch(kapacitasSelect){
        case "Mb":
            switch(sebessegSelect){
                case "mbps":
                    eredmeny = kapacitas / (sebesseg / 8)
                    break
                case "Kbps":
                    eredmeny = kapacitas / (sebesseg / 1000)
                    break
                case "Mbps":
                    eredmeny = kapacitas / sebesseg
                    break
                case "Gbps":
                    eredmeny = kapacitas / (sebesseg * 1000)
                    break
            }
            break
        case "Gb":
            switch(sebessegSelect){
                case "mbps":
                    eredmeny = kapacitas / (sebesseg / 1000 / 8)
                    break
                case "Kbps":
                    eredmeny = kapacitas / (sebesseg / 1000 / 1000)
                    break
                case "Mbps":
                    eredmeny = kapacitas / (sebesseg / 1000)
                    break
                case "Gbps":
                    eredmeny = kapacitas / sebesseg
                    break
            }
            break
        case "Tb":
            switch(sebessegSelect){
                case "mbps":
                    eredmeny = kapacitas / (sebesseg / 1000 / 1000 / 8)
                    break
                case "Kbps":
                    eredmeny = kapacitas / (sebesseg / 1000 / 1000 / 1000)
                    break
                case "Mbps":
                    eredmeny = kapacitas / (sebesseg / 1000 / 1000)
                    break
                case "Gbps":
                    eredmeny = kapacitas / (sebesseg / 1000)
                    break
            }
            break
    }

    return eredmeny
}