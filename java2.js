 function guardar() {
    localStorage.Comprobantes = document.getElementById("comp").value;
    localStorage.Periodos = document.getElementById("per").value;
    localStorage.Cantidad = document.getElementById("cant").value;
    localStorage.Costo = document.getElementById("cost").value;
 }
 
 function actualizar1() {
if ((localStorage.Comprobantes != undefined) ) {{
    document.getElementById("datos1a").innerHTML = "" + localStorage.Comprobantes;
} if ((localStorage.Periodos != undefined)) {
    document.getElementById("datos1b").innerHTML = "" + localStorage.Periodos;
} if ((localStorage.Cantidad != undefined)) {
    document.getElementById("datos1c").innerHTML = "" + localStorage.Cantidad;
} else {document.getElementById("datos1a").innerHTML = "No has introducido datos"; document.getElementById("datos1b").innerHTML = "No has introducido datos";}
} if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "0-100") ) {
    document.getElementById("datos1d").innerHTML = 1*100*30;
} if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "101-200") ) {
    document.getElementById("datos1d").innerHTML = 1*200*30;
} if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "201-500") ) {
    document.getElementById("datos1d").innerHTML = 1*500*30;
} if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "501-1000") ) {
    document.getElementById("datos1d").innerHTML = 1*750*30;
} if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "Más de 1000") ) {
    document.getElementById("datos1d").innerHTML = 1*1000*30;
} if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "0-100") ) {
    document.getElementById("datos1d").innerHTML = 0.1*100*30;
} if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "101-200") ) {
    document.getElementById("datos1d").innerHTML = 0.1*200*30;
} if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "201-500") ) {
    document.getElementById("datos1d").innerHTML = 0.1*500*30;
} if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "501-1000") ) {
    document.getElementById("datos1d").innerHTML = 0.1*750*30;
} if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "Más de 1000") ) {
    document.getElementById("datos1d").innerHTML = 0.1*1000*30;
} if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "0-100") ) {
    document.getElementById("datos1d").innerHTML = 0.01*100*30;
} if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "101-200") ) {
    document.getElementById("datos1d").innerHTML = 0.01*200*30;
} if ((localStorage.Periodos == "Anuual") && (localStorage.Cantidad == "201-500") ) {
    document.getElementById("datos1d").innerHTML = 0.01*500*30;
} if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "501-1000") ) {
    document.getElementById("datos1d").innerHTML = 0.01*750*30;
} if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "Más de 1000") ) {
    document.getElementById("datos1d").innerHTML = 0.01*1000*30;
}}
function actualizar2() {
    if ((localStorage.Comprobantes != undefined) ) {{
        document.getElementById("datos2a").innerHTML = "" + localStorage.Comprobantes;
    } if ((localStorage.Periodos != undefined)) {
        document.getElementById("datos2b").innerHTML = "" + localStorage.Periodos;
    } if ((localStorage.Cantidad != undefined)) {
        document.getElementById("datos2c").innerHTML = "" + localStorage.Cantidad;
    } else {document.getElementById("datos2a").innerHTML = "No has introducido datos"; document.getElementById("datos1b").innerHTML = "No has introducido datos";}
    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "0-100") ) {
        document.getElementById("datos2d").innerHTML = 1*100*30;
    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "101-200") ) {
        document.getElementById("datos2d").innerHTML = 1*200*30;
    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "201-500") ) {
        document.getElementById("datos2d").innerHTML = 1*500*30;
    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "501-1000") ) {
        document.getElementById("datos2d").innerHTML = 1*750*30;
    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "Más de 1000") ) {
        document.getElementById("datos2d").innerHTML = 1*1000*30;
    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "0-100") ) {
        document.getElementById("datos2d").innerHTML = 0.1*100*30;
    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "101-200") ) {
        document.getElementById("datos2d").innerHTML = 0.1*200*30;
    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "201-500") ) {
        document.getElementById("datos2d").innerHTML = 0.1*500*30;
    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "501-1000") ) {
        document.getElementById("datos2d").innerHTML = 0.1*750*30;
    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "Más de 1000") ) {
        document.getElementById("datos2d").innerHTML = 0.1*1000*30;
    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "0-100") ) {
        document.getElementById("datos2d").innerHTML = 0.01*100*30;
    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "101-200") ) {
        document.getElementById("datos2d").innerHTML = 0.01*200*30;
    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "201-500") ) {
        document.getElementById("datos2d").innerHTML = 0.01*500*30;
    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "501-1000") ) {
        document.getElementById("datos2d").innerHTML = 0.01*750*30;
    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "Más de 1000") ) {
        document.getElementById("datos2d").innerHTML = 0.01*1000*30;
    }}
    function actualizar3() {
        if ((localStorage.Comprobantes != undefined) ) {{
            document.getElementById("datos3a").innerHTML = "" + localStorage.Comprobantes;
        } if ((localStorage.Periodos != undefined)) {
            document.getElementById("datos3b").innerHTML = "" + localStorage.Periodos;
        } if ((localStorage.Cantidad != undefined)) {
            document.getElementById("datos3c").innerHTML = "" + localStorage.Cantidad;
        } else {document.getElementById("datos3a").innerHTML = "No has introducido datos"; document.getElementById("datos1b").innerHTML = "No has introducido datos";}
        } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "0-100") ) {
            document.getElementById("datos3d").innerHTML = 1*100*30;
        } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "101-200") ) {
            document.getElementById("datos3d").innerHTML = 1*200*30;
        } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "201-500") ) {
            document.getElementById("datos3d").innerHTML = 1*500*30;
        } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "501-1000") ) {
            document.getElementById("datos3d").innerHTML = 1*750*30;
        } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "Más de 1000") ) {
            document.getElementById("datos3d").innerHTML = 1*1000*30;
        } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "0-100") ) {
            document.getElementById("datos3d").innerHTML = 0.1*100*30;
        } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "101-200") ) {
            document.getElementById("datos3d").innerHTML = 0.1*200*30;
        } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "201-500") ) {
            document.getElementById("datos3d").innerHTML = 0.1*500*30;
        } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "501-1000") ) {
            document.getElementById("datos3d").innerHTML = 0.1*750*30;
        } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "Más de 1000") ) {
            document.getElementById("datos3d").innerHTML = 0.1*1000*30;
        } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "0-100") ) {
            document.getElementById("datos3d").innerHTML = 0.01*100*30;
        } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "101-200") ) {
            document.getElementById("datos3d").innerHTML = 0.01*200*30;
        } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "201-500") ) {
            document.getElementById("datos3d").innerHTML = 0.01*500*30;
        } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "501-1000") ) {
            document.getElementById("datos3d").innerHTML = 0.01*750*30;
        } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "Más de 1000") ) {
            document.getElementById("datos3d").innerHTML = 0.01*1000*30;
        }}
        function actualizar4() {
            if ((localStorage.Comprobantes != undefined) ) {{
                document.getElementById("datos4a").innerHTML = "" + localStorage.Comprobantes;
            } if ((localStorage.Periodos != undefined)) {
                document.getElementById("datos4b").innerHTML = "" + localStorage.Periodos;
            } if ((localStorage.Cantidad != undefined)) {
                document.getElementById("datos4c").innerHTML = "" + localStorage.Cantidad;
            } else {document.getElementById("datos4a").innerHTML = "No has introducido datos"; document.getElementById("datos1b").innerHTML = "No has introducido datos";}
            } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "0-100") ) {
                document.getElementById("datos4d").innerHTML = 1*100*30;
            } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "101-200") ) {
                document.getElementById("datos4d").innerHTML = 1*200*30;
            } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "201-500") ) {
                document.getElementById("datos4d").innerHTML = 1*500*30;
            } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "501-1000") ) {
                document.getElementById("datos4d").innerHTML = 1*750*30;
            } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "Más de 1000") ) {
                document.getElementById("datos4d").innerHTML = 1*1000*30;
            } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "0-100") ) {
                document.getElementById("datos4d").innerHTML = 0.1*100*30;
            } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "101-200") ) {
                document.getElementById("datos4d").innerHTML = 0.1*200*30;
            } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "201-500") ) {
                document.getElementById("datos4d").innerHTML = 0.1*500*30;
            } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "501-1000") ) {
                document.getElementById("datos4d").innerHTML = 0.1*750*30;
            } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "Más de 1000") ) {
                document.getElementById("datos4d").innerHTML = 0.1*1000*30;
            } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "0-100") ) {
                document.getElementById("datos4d").innerHTML = 0.01*100*30;
            } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "101-200") ) {
                document.getElementById("datos4d").innerHTML = 0.01*200*30;
            } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "201-500") ) {
                document.getElementById("datos4d").innerHTML = 0.01*500*30;
            } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "501-1000") ) {
                document.getElementById("datos4d").innerHTML = 0.01*750*30;
            } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "Más de 1000") ) {
                document.getElementById("datos4d").innerHTML = 0.01*1000*30;
            }}
            function actualizar5() {
                if ((localStorage.Comprobantes != undefined) ) {{
                    document.getElementById("datos5a").innerHTML = "" + localStorage.Comprobantes;
                } if ((localStorage.Periodos != undefined)) {
                    document.getElementById("datos5b").innerHTML = "" + localStorage.Periodos;
                } if ((localStorage.Cantidad != undefined)) {
                    document.getElementById("datos5c").innerHTML = "" + localStorage.Cantidad;
                } else {document.getElementById("datos5a").innerHTML = "No has introducido datos"; document.getElementById("datos1b").innerHTML = "No has introducido datos";}
                } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "0-100") ) {
                    document.getElementById("datos5d").innerHTML = 1*100*30;
                } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "101-200") ) {
                    document.getElementById("datos5d").innerHTML = 1*200*30;
                } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "201-500") ) {
                    document.getElementById("datos5d").innerHTML = 1*500*30;
                } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "501-1000") ) {
                    document.getElementById("datos5d").innerHTML = 1*750*30;
                } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "Más de 1000") ) {
                    document.getElementById("datos5d").innerHTML = 1*1000*30;
                } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "0-100") ) {
                    document.getElementById("datos5d").innerHTML = 0.1*100*30;
                } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "101-200") ) {
                    document.getElementById("datos5d").innerHTML = 0.1*200*30;
                } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "201-500") ) {
                    document.getElementById("datos5d").innerHTML = 0.1*500*30;
                } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "501-1000") ) {
                    document.getElementById("datos5d").innerHTML = 0.1*750*30;
                } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "Más de 1000") ) {
                    document.getElementById("datos5d").innerHTML = 0.1*1000*30;
                } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "0-100") ) {
                    document.getElementById("datos5d").innerHTML = 0.01*100*30;
                } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "101-200") ) {
                    document.getElementById("datos5d").innerHTML = 0.01*200*30;
                } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "201-500") ) {
                    document.getElementById("datos5d").innerHTML = 0.01*500*30;
                } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "501-1000") ) {
                    document.getElementById("datos5d").innerHTML = 0.01*750*30;
                } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "Más de 1000") ) {
                    document.getElementById("datos5d").innerHTML = 0.01*1000*30;
                }}
                function actualizar6() {
                    if ((localStorage.Comprobantes != undefined) ) {{
                        document.getElementById("datos6a").innerHTML = "" + localStorage.Comprobantes;
                    } if ((localStorage.Periodos != undefined)) {
                        document.getElementById("datos6b").innerHTML = "" + localStorage.Periodos;
                    } if ((localStorage.Cantidad != undefined)) {
                        document.getElementById("datos6c").innerHTML = "" + localStorage.Cantidad;
                    } else {document.getElementById("datos6a").innerHTML = "No has introducido datos"; document.getElementById("datos1b").innerHTML = "No has introducido datos";}
                    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "0-100") ) {
                        document.getElementById("datos6d").innerHTML = 1*100*30;
                    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "101-200") ) {
                        document.getElementById("datos6d").innerHTML = 1*200*30;
                    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "201-500") ) {
                        document.getElementById("datos6d").innerHTML = 1*500*30;
                    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "501-1000") ) {
                        document.getElementById("datos6d").innerHTML = 1*750*30;
                    } if ((localStorage.Periodos == "Diario") && (localStorage.Cantidad == "Más de 1000") ) {
                        document.getElementById("datos6d").innerHTML = 1*1000*30;
                    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "0-100") ) {
                        document.getElementById("datos6d").innerHTML = 0.1*100*30;
                    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "101-200") ) {
                        document.getElementById("datos6d").innerHTML = 0.1*200*30;
                    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "201-500") ) {
                        document.getElementById("datos6d").innerHTML = 0.1*500*30;
                    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "501-1000") ) {
                        document.getElementById("datos6d").innerHTML = 0.1*750*30;
                    } if ((localStorage.Periodos == "Mensual") && (localStorage.Cantidad == "Más de 1000") ) {
                        document.getElementById("datos6d").innerHTML = 0.1*1000*30;
                    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "0-100") ) {
                        document.getElementById("datos6d").innerHTML = 0.01*100*30;
                    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "101-200") ) {
                        document.getElementById("datos6d").innerHTML = 0.01*200*30;
                    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "201-500") ) {
                        document.getElementById("datos6d").innerHTML = 0.01*500*30;
                    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "501-1000") ) {
                        document.getElementById("datos6d").innerHTML = 0.01*750*30;
                    } if ((localStorage.Periodos == "Anual") && (localStorage.Cantidad == "Más de 1000") ) {
                        document.getElementById("datos6d").innerHTML = 0.01*1000*30;
                    }}
function eliminar1() {
localStorage.ComprobantesE = document.remoteITEM("datos1a").value;
localStorage.PeriodosE = document.remoteITEM("datos1b").value;
localStorage.CantidadE = document.remoteITEM("datos1c").value;
localStorage.CostosE = document.remoteITEM("datos1d").value;

if ((localStorage.Comprobantes != undefined) ) {{
    document.remoteITEM("datos1a").innerHTML = "" + localStorage.ComprobantesE;
}} }