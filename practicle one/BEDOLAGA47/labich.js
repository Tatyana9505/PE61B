let Antona = (89 + 120 + 103) / 3, Ivana = (116 + 94 + 123) / 3,
Marii = (97 + 134 + 105) / 3;

if ((Antona > Ivana) && (Antona > Marii)) {

	result = 'Antona';
}
	else if (Ivana > Marii) {

		result = 'Ivana';
	}
		else {

			result = 'Marii';
		}

alert(result + ' набрал больше очков');