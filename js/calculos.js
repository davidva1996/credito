function calcular(event) {

    event.preventDefault();

    let cuota = document.forms["fhipotecario"]["fcuotaI"].value;
    let costoTotal = document.forms["fhipotecario"]["fvalortotalI"].value;
    let T_interes = document.forms["fhipotecario"]["ftaIntereses"].value;
    let PLazo_A = document.forms["fhipotecario"]["fplazo"].value;
    
    const anualidad = 12;

    const calculo_total = {

        totalPrestamo : 0,
        totalInteres : 0,
        cuotaMensual : 0
    };

    calculo_total.totalPrestamo = costoTotal - cuota;
    calculo_total.totalInteres = calculo_total.totalPrestamo * T_interes / 100;
    calculo_total.cuotaMensual = (calculo_total.totalPrestamo + calculo_total.totalInteres) / (PLazo_A * anualidad); 

    Mostrar_Resultado(calculo_total);

}

function Mostrar_Resultado(final_calculo) {

    document.getElementById("out_toprestamo").innerHTML = valueDolar(final_calculo.totalPrestamo) ;
    document.getElementById("out_cuota").innerHTML = valueDolar(final_calculo.cuotaMensual) ;

}

function reiniciarForm() {

    document.forms ["fhipotecario"].reset();

}

function valueDolar(valor) {

const dollar_f = new Intl.NumberFormat('en-US',{style:'currency',currency: 'USD',minimumFractionDigits:2});
return dollar_f.format(valor);

}