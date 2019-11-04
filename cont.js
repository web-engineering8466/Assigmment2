function cont() {
var USD = document.getElementsByName("USD")[0].value;
    
    
	var eur =Number(USD) * 0.90;
	var gbp =Number(USD) * 0.77;

document.getElementsByName("EUR")[0].value = eur;
document.getElementsByName("GBP")[0].value = gbp;

	}
	