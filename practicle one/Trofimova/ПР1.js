let KomAnton = (89+120+103)/3
let KomIvan = (116+94+123)/3
let KomMari = (97+134+105)/3
        if ((KomAnton>KomIvan) && (KomAnton>KomMari)) {
            document.write("Команда Антона набрала больше очков")
        } else if ((KomIvan>KomAnton) && (KomIvan>KomMari)) {
            document.write("Команда Ивана набрала больше очков")
        } else document.write("Команда Марии набрала больше очков")