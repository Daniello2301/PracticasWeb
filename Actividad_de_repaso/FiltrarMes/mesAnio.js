const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]

function get(index)
{
    let monthSaver = months.find(month =>  month == months[index-1])
    if(monthSaver)
    {
        return monthSaver
    }else
    {
        return "No se encuentra el mes"
    }
}


console.log(get(15))