//Mas en: http://javascript.espaciolatino.com/
//Objeto oNumero
function noDecimales(texto)

{

for(i=0;i<40;i++)

{
 
if ((texto.value.charAt(i)==",") || (texto.value.charAt(i)=="."))
{

alert ("No se admiten decimales");
return false;
} 

}

return false;

}

 
function imprimir(que) {
    var ventana = window.open("", "", "");
    var contenido = "<html><body onload='window.print();window.close();'>" + document.getElementById(que).innerHTML + "</body></html>";
    ventana.document.open();
    ventana.document.write(contenido);
    ventana.document.close();
    
}
function confirmacion_ventana(div, pagina, formulario, mensaje, titulo) {
	Sexy.confirm('<h1>'+titulo+'</h1><p>'+mensaje+'</p><p>Pulsa "Ok" para continuar, o pulsa "Cancelar" para salir.</p>', { onComplete: 
		function(titulo) {
			if(titulo){
				ajax_post(div,pagina,formulario);
				} else {
				
				return false;
					}
			}
			
			
		});
}
function confirmacion_get(div, pagina, cadena, mensaje, titulo) {

var si=confirm(mensaje);
	if (si)
	{
			ajax_get(div,pagina,cadena);
				return false ;
	}
	else
		{
		return false ;
		}

}

function confirmacion(div, pagina, form, mensaje, titulo) {

var si=confirm(mensaje);
	if (si)
	{
			ajax_post(div,pagina,form);
	}
	else
		{
		return false ;
		}

}
function confirmacion_get(div, pagina, cadena, mensaje, titulo) {
	Sexy.confirm('<h1>'+titulo+',</h1><p>'+mensaje+'</p><p>Pulsa "Ok" para continuar, o pulsa "Cancelar" para salir.</p>', { onComplete: 
		function(titulo) {
			if(titulo){
				ajax_get(div,pagina,cadena);
				} else {
					return false;
					}
			}
		});
}
function seleccionar_todo(form)
{ 
 
   for (i=0;i<eval('document.'+form.name+'.elements.length');i++) 
      if(eval('document.'+form.name+'.elements[i].type') == "checkbox") 
      eval('document.'+form.name+'.elements[i].checked=1' )
} 
function deseleccionar_todo(form){ 
 
   for (i=0;i<eval('document.'+form.name+'.elements.length');i++) 
      if(eval('document.'+form.name+'.elements[i].type') == "checkbox") 
      eval('document.'+form.name+'.elements[i].checked=0' )
} 



function addslashes( str ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +   improved by: marrtins
    // +   improved by: Nate
    // +   improved by: Onno Marsman
    // *     example 1: addslashes("kevin's birthday");
    // *     returns 1: 'kevin\'s birthday'
 
    return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
}
//Mas en: http://javascript.espaciolatino.com/
//Objeto oNumero
function oNumero(numero) {
	//Propiedades 
	this.valor = numero || 0
	this.dec = -1;
	//Métodos 
	this.formato = numFormat;
	this.ponValor = ponValor;
	//Definición de los métodos 
function ponValor(cad) {
	if (cad =='-' || cad=='+') return
	if (cad.length ==0) return
	if (cad.indexOf('.') >=0)
		this.valor = parseFloat(cad);
	else 
		this.valor = parseInt(cad);
	} 
function numFormat(dec, miles) {
	var num = this.valor, signo=3, expr;
	var cad = ""+this.valor;
	var ceros = "", pos, pdec, i;
	for (i=0; i < dec; i++)
	ceros += '0';
	pos = cad.indexOf('.')
	if (pos < 0)
		cad = cad+"."+ceros;
	else
		{
		pdec = cad.length - pos -1;
		if (pdec <= dec)
			{
			for (i=0; i< (dec-pdec); i++)
				cad += '0';
			}
		else
			{
			num = num*Math.pow(10, dec);
			num = Math.round(num);
			num = num/Math.pow(10, dec);
			cad = new String(num);
			}
		}
	pos = cad.indexOf('.')
	if (pos < 0) pos = cad.lentgh
	if (cad.substr(0,1)=='-' || cad.substr(0,1) == '+') 
		   signo = 4;
	if (miles && pos > signo)
		do{
			expr = /([+-]?\d)(\d{3}[\.\,]\d*)/
			cad.match(expr)
			cad=cad.replace(expr, RegExp.$1+','+RegExp.$2)
			}
	while (cad.indexOf(',') > signo)
		if (dec<0) cad = cad.replace(/\./,'')
			return cad;
	}
}//Fin del objeto oNumero:

//Funciones para generacion del doiMenu//
function go2URL(address,target)
{
	window.open(address,target);
}
function newWindow(address)
{
	var maxW = screen.width;
	var maxH = screen.height;
	var w = 800;
	var h = 600;
	var _top = Math.floor((maxH - h) / 2);
	var _left = Math.floor((maxW - w) / 2);
	
	var win = window.open(address,'doiW',"toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes,width="+w+",height="+h);
	win.moveTo(_left,_top);
	win.focus();
}
//Fin del apartado del doiMenu



//Funcion seleccionar un campo
function SeleccionarCampo(campo) {
		document.getElementById(campo).select();
	}

//desactivo la tecla enter para todo el sistema (cross browser)
document.onkeypress = stopRKey; 
function stopRKey(evt) {
	var evt = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	if ((evt.keyCode == 13) && (node.type=="text")) {return false;}
}

function ValidarAlfanumerico(objeto_string) {
	VarEstadoAlfa = true;
	alfabetico = false;
	numerico = false;
	principio = true;
	if (objeto_string.value.length == 10) {
		CPalabraMayuscula = objeto_string.value.toUpperCase();
		CCaracterMayuscula = CPalabraMayuscula.substr(0,1);
		if (
			CCaracterMayuscula=='A' || 
			CCaracterMayuscula=='B' || 
			CCaracterMayuscula=='C' || 
			CCaracterMayuscula=='D' || 
			CCaracterMayuscula=='E' || 
			CCaracterMayuscula=='F' || 
			CCaracterMayuscula=='G' || 
			CCaracterMayuscula=='H' || 
			CCaracterMayuscula=='I' || 
			CCaracterMayuscula=='J' || 
			CCaracterMayuscula=='K' || 
			CCaracterMayuscula=='L' || 
			CCaracterMayuscula=='M' || 
			CCaracterMayuscula=='N' || 
			CCaracterMayuscula=='O' || 
			CCaracterMayuscula=='P' || 
			CCaracterMayuscula=='Q' || 
			CCaracterMayuscula=='R' || 
			CCaracterMayuscula=='S' || 
			CCaracterMayuscula=='T' || 
			CCaracterMayuscula=='U' || 
			CCaracterMayuscula=='V' || 
			CCaracterMayuscula=='W' || 
			CCaracterMayuscula=='X' || 
			CCaracterMayuscula=='Y' || 
			CCaracterMayuscula=='Z' 
			) {
			//Si comienza con caracter alfabetico
		} else {
			alert("La clave debe comenzar con caracteres alfabeticos!...");
			VarEstadoAlfa = false;
			principio = false;
		}
		for(x_i=0; x_i < objeto_string.value.length; x_i++) {
			CPalabraMayuscula = objeto_string.value.toUpperCase();
			CCaracterMayuscula = CPalabraMayuscula.substr(x_i,1);
			if (
				CCaracterMayuscula.indexOf('A')!=-1 || 
				CCaracterMayuscula.indexOf('B')!=-1 || 
				CCaracterMayuscula.indexOf('C')!=-1 || 
				CCaracterMayuscula.indexOf('D')!=-1 || 
				CCaracterMayuscula.indexOf('E')!=-1 || 
				CCaracterMayuscula.indexOf('F')!=-1 || 
				CCaracterMayuscula.indexOf('G')!=-1 || 
				CCaracterMayuscula.indexOf('H')!=-1 || 
				CCaracterMayuscula.indexOf('I')!=-1 || 
				CCaracterMayuscula.indexOf('J')!=-1 || 
				CCaracterMayuscula.indexOf('K')!=-1 || 
				CCaracterMayuscula.indexOf('L')!=-1 || 
				CCaracterMayuscula.indexOf('M')!=-1 || 
				CCaracterMayuscula.indexOf('N')!=-1 || 
				CCaracterMayuscula.indexOf('O')!=-1 || 
				CCaracterMayuscula.indexOf('P')!=-1 || 
				CCaracterMayuscula.indexOf('Q')!=-1 || 
				CCaracterMayuscula.indexOf('R')!=-1 || 
				CCaracterMayuscula.indexOf('S')!=-1 || 
				CCaracterMayuscula.indexOf('T')!=-1 || 
				CCaracterMayuscula.indexOf('U')!=-1 || 
				CCaracterMayuscula.indexOf('V')!=-1 || 
				CCaracterMayuscula.indexOf('W')!=-1 || 
				CCaracterMayuscula.indexOf('X')!=-1 || 
				CCaracterMayuscula.indexOf('Y')!=-1 || 
				CCaracterMayuscula.indexOf('Z')!=-1 || 
				CCaracterMayuscula.indexOf('1')!=-1 || 
				CCaracterMayuscula.indexOf('2')!=-1 || 
				CCaracterMayuscula.indexOf('3')!=-1 || 
				CCaracterMayuscula.indexOf('4')!=-1 || 
				CCaracterMayuscula.indexOf('5')!=-1 || 
				CCaracterMayuscula.indexOf('6')!=-1 || 
				CCaracterMayuscula.indexOf('7')!=-1 || 
				CCaracterMayuscula.indexOf('8')!=-1 || 
				CCaracterMayuscula.indexOf('9')!=-1 || 
				CCaracterMayuscula.indexOf('0')!=-1
				) {
				//Si todo anduvo bien no hago nada
			} else {
				alert('Ha ingresado el caracter '+ CCaracterMayuscula +' Solo puede ingresar los siguientes caracteres: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0');
				VarEstadoAlfa = false;
				return false;
				objeto_string.value="";
				objetos_string.focus;
			}
			if (
				CCaracterMayuscula.indexOf('A')!=-1 || 
				CCaracterMayuscula.indexOf('B')!=-1 || 
				CCaracterMayuscula.indexOf('C')!=-1 || 
				CCaracterMayuscula.indexOf('D')!=-1 || 
				CCaracterMayuscula.indexOf('E')!=-1 || 
				CCaracterMayuscula.indexOf('F')!=-1 || 
				CCaracterMayuscula.indexOf('G')!=-1 || 
				CCaracterMayuscula.indexOf('H')!=-1 || 
				CCaracterMayuscula.indexOf('I')!=-1 || 
				CCaracterMayuscula.indexOf('J')!=-1 || 
				CCaracterMayuscula.indexOf('K')!=-1 || 
				CCaracterMayuscula.indexOf('L')!=-1 || 
				CCaracterMayuscula.indexOf('M')!=-1 || 
				CCaracterMayuscula.indexOf('N')!=-1 || 
				CCaracterMayuscula.indexOf('O')!=-1 || 
				CCaracterMayuscula.indexOf('P')!=-1 || 
				CCaracterMayuscula.indexOf('Q')!=-1 || 
				CCaracterMayuscula.indexOf('R')!=-1 || 
				CCaracterMayuscula.indexOf('S')!=-1 || 
				CCaracterMayuscula.indexOf('T')!=-1 || 
				CCaracterMayuscula.indexOf('U')!=-1 || 
				CCaracterMayuscula.indexOf('V')!=-1 || 
				CCaracterMayuscula.indexOf('W')!=-1 || 
				CCaracterMayuscula.indexOf('X')!=-1 || 
				CCaracterMayuscula.indexOf('Y')!=-1 || 
				CCaracterMayuscula.indexOf('Z')!=-1 
				) {
				alfabetico = true;
				}
			if (
				CCaracterMayuscula.indexOf('1')!=-1 || 
				CCaracterMayuscula.indexOf('2')!=-1 || 
				CCaracterMayuscula.indexOf('3')!=-1 || 
				CCaracterMayuscula.indexOf('4')!=-1 || 
				CCaracterMayuscula.indexOf('5')!=-1 || 
				CCaracterMayuscula.indexOf('6')!=-1 || 
				CCaracterMayuscula.indexOf('7')!=-1 || 
				CCaracterMayuscula.indexOf('8')!=-1 || 
				CCaracterMayuscula.indexOf('9')!=-1 || 
				CCaracterMayuscula.indexOf('0')!=-1
				) {
				numerico = true;
			}
		}
	} else {
		VarEstadoAlfa = false;
		alert("La clave debe tener 10 caracteres de largo!...");
		objeto_string.focus;
		return false;
	}
	if (!alfabetico || !numerico) {
		alert("La clave debe ser alfanumerico!...")
		VarEstadoAlfa = false;
	}
	if (VarEstadoAlfa){
		return true;
	} else {
		return false;
	}
}

/*document.all = TeclaPulsada(event)
function TeclaPulsada(evento) {
  // averiguamos el código de la tecla pulsada (keyCode para IE y which para Firefox)
  tecla = (document.all) ? evento.keyCode :evento.which;
  // si la tecla no es 13 devuelve verdadero,  si es 13 devuelve false y la pulsación no se ejecuta
  if (tecla==13) {
	  return false;
  }
}
*/
//var ns4 = (document.layers)? true:false
/*var ie4 = (document.all)? true:false
document.onkeydown = TeclaPulsada
function TeclaPulsada () {
	if(ie4) {
		var teclaCodigo = event.keyCode
	} else {
		var teclaCodigo = event.which
		alert(teclaCodigo)
	}
	if (teclaCodigo==13) {
		return false;
	}	
}
/*
/*function TeclaPulsada ()
{
	var teclaCodigo = event.keyCode
	var teclaReal   = String.fromCharCode (teclaCodigo)
	alert("Código de la tecla: " + teclaCodigo + "\nTecla pulsada: " + teclaReal)
}
*/
/*function click() 
	{
		if (event.button==2) 
		{
		alert ('Este boton esta desabilitado.')
		}
	}
document.onmousedown=click*/
function redondear(cantidad, decimales) {
	var Cantidad_ = parseFloat(cantidad);
	var Decimales_ = parseFloat(decimales);
	Decimales_ = (!Decimales_ ? 2 : Decimales_);
	return Math.round(Cantidad_ * Math.pow(10, Decimales_)) / Math.pow(10, Decimales_);
} 
function anyoBisiesto(ano)
  {
    if ((ano % 4 == 0) || ((ano % 100 == 0) && (ano % 400 == 0)))
       {
   	     return true;
       }
       else
       {
         return false;
       }
   }
   

function validar_fecha(dia,mes,ano)
	{
		if (anyoBisiesto(ano.value))
	   	  {
          var febrero=29;
		  }
       	  else
	   	  {
          var febrero=28;
		  }
	  /*si el mes introducido es febrero y el dia es mayor que el correspondiente, al año introducido > alertamos y detenemos ejecucion*/
	  if ((mes.value==2) && ((dia.value<1) || (dia.value>febrero)))
	     {
		 alert("Dia Invalido.");
	     return false;
	     }
      if (((mes.value==1) || (mes.value==3) || (mes.value==5) || (mes.value==7) || (mes.value==8) || (mes.value==10) || (mes.value==12)) && ((dia.value<1) || (dia.value>31)))
	   	 {
		 alert("Dia Invalido.");
		 return false;
	     }
	if (((mes.value==4) || (mes.value==6) || (mes.value==9) || (mes.value==11)) && ((dia.value<1) || (dia.value>30)))
		 {
	     alert("Dia Invalido.");
		 return false;
	     }
	return true;
   	  /*si el mes introducido es de 30 dias y el dia introducido es mayor de 30 > alertamos y detenemos ejecucion*/
		 /*en caso de que todo sea correcto > enviamos los datos del formulario, para ello debeis descomentar la ultima sentencia	*/
	}
function comparar_fechas(dia1,mes1,ano1,dia2,mes2,ano2) 
	{
	var fecha_desde = new Date(ano1.value,mes1.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia1.value);
   	var fecha_hasta = new Date(ano2.value,mes2.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia2.value);
if (fecha_desde.getTime()>fecha_hasta.getTime())
   		{
   		alert('La fecha desde debe ser menor o igual que la fecha hasta');
   		//for (n=0;n<=fecha_hasta_dia.length-1;n++)
   		//{
   		//	if (fecha_hasta_dia.options[n].value==10)
		//	{
		//		fecha_hasta_dia.options[n].selected = true ;
		//	}
		//}
   		//fecha_hasta_mes.selectedIndex=fecha_desde_mes.selectedIndex;
   		//fecha_hasta_ano.selectedIndex=fecha_desde_ano.selectedIndex;
   		return false ;
  		}
   		else
   		{
   		return true ;
   		}
	}
function comparar_fechas_mensaje(dia1,mes1,ano1,dia2,mes2,ano2,mensaje) 
	{
	var fecha_desde = new Date(ano1.value,mes1.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia1.value);
   	var fecha_hasta = new Date(ano2.value,mes2.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia2.value);
if (fecha_desde.getTime()>fecha_hasta.getTime())
   		{
   		alert(mensaje);
   		//for (n=0;n<=fecha_hasta_dia.length-1;n++)
   		//{
   		//	if (fecha_hasta_dia.options[n].value==10)
		//	{
		//		fecha_hasta_dia.options[n].selected = true ;
		//	}
		//}
   		//fecha_hasta_mes.selectedIndex=fecha_desde_mes.selectedIndex;
   		//fecha_hasta_ano.selectedIndex=fecha_desde_ano.selectedIndex;
   		return false ;
  		}
   		else
   		{
   		return true ;
   		}
	}
function comparar_fechas_calendario_mensaje(fecha_desde,fecha_hasta,mensaje) 
	{
	var fecha1 = fecha_desde.value;
	var fecha2 = fecha_hasta.value;
	var dia1 = fecha1.substr(0,2)
	var mes1 = fecha1.substr(3,2)
	var ano1 = fecha1.substr(6,4)
	var hora1 = fecha1.substr(11,2)
	var minutos1 = fecha1.substr(14,2)
	var segundos1 = fecha1.substr(17,2)

	var dia2 = fecha2.substr(0,2)
	var mes2 = fecha2.substr(3,2)
	var ano2 = fecha2.substr(6,4)
	var hora2 = fecha2.substr(11,2)
	var minutos2 = fecha2.substr(14,2)
	var segundos2 = fecha2.substr(17,2)
//	alert(dia1+mes1+ano1+"  "+dia2+mes2+ano2)
	var fecha_desde = new Date(ano1,mes1-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia1,hora1,minutos1,segundos1);
   	var fecha_hasta = new Date(ano2,mes2-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia2,hora2,minutos2,segundos2);
	if (fecha_desde.getTime()>fecha_hasta.getTime())
   		{
   		alert(mensaje);
  		//for (n=0;n<=fecha_hasta_dia.length-1;n++)
   		//{
   		//	if (fecha_hasta_dia.options[n].value==10)
		//	{
		//		fecha_hasta_dia.options[n].selected = true ;
		//	}
		//}
   		//fecha_hasta_mes.selectedIndex=fecha_desde_mes.selectedIndex;
   		//fecha_hasta_ano.selectedIndex=fecha_desde_ano.selectedIndex;
  		return false ;
  		}
   		else
   		{
   		return true ;
   		}
	}

function comparar_fechas_calendario(fecha_desde,fecha_hasta) 
	{
	var fecha1 = fecha_desde.value;
	var fecha2 = fecha_hasta.value;
	var dia1 = fecha1.substr(0,2)
	var mes1 = fecha1.substr(3,2)
	var ano1 = fecha1.substr(6,4)
	var hora1 = fecha1.substr(11,2)
	var minutos1 = fecha1.substr(14,2)
	var segundos1 = fecha1.substr(17,2)

	var dia2 = fecha2.substr(0,2)
	var mes2 = fecha2.substr(3,2)
	var ano2 = fecha2.substr(6,4)
	var hora2 = fecha2.substr(11,2)
	var minutos2 = fecha2.substr(14,2)
	var segundos2 = fecha2.substr(17,2)
//	alert(dia1+mes1+ano1+"  "+dia2+mes2+ano2)
	var fecha_desde = new Date(ano1,mes1-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia1,hora1,minutos1,segundos1);
   	var fecha_hasta = new Date(ano2,mes2-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia2,hora2,minutos2,segundos2);
	if (fecha_desde.getTime()>fecha_hasta.getTime())
   		{
   		alert('La fecha desde debe ser menor o igual que la fecha hasta');
  		//for (n=0;n<=fecha_hasta_dia.length-1;n++)
   		//{
   		//	if (fecha_hasta_dia.options[n].value==10)
		//	{
		//		fecha_hasta_dia.options[n].selected = true ;
		//	}
		//}
   		//fecha_hasta_mes.selectedIndex=fecha_desde_mes.selectedIndex;
   		//fecha_hasta_ano.selectedIndex=fecha_desde_ano.selectedIndex;
  		return false ;
  		}
   		else
   		{
   		return true ;
   		}
	}
function fecha_rango(dia,mes,ano,dia1,mes1,ano1,dia2,mes2,ano2) 
	{
		var fecha = new Date(ano.value,mes.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia.value);
		var fecha_desde = new Date(ano1.value,mes1.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia1.value);
		var fecha_hasta = new Date(ano2.value,mes2.value-1/*los meses cuentan entre cero y 11, por eso se suma 1*/,dia2.value);
		if ((fecha.getTime()<fecha_desde.getTime()) || (fecha.getTime()>fecha_hasta.getTime()))
		   {
		   alert('La fecha desde se encuentra fuera del rango de la reserva');
		   dia.focus()
		   return false ;
		   }
		   else
		   {
		   return true;
		   }
	}
function validar_hora(campo_hora)  {
	var hora = campo_hora.value;
	var horas = hora.substr(0,2);
	var minutos = hora.substr(3,2);
	//alert(minutos);
	//return false;
	if (!isNaN(horas) && !isNaN(minutos) && hora!="") {
		if ((horas>=0) && (horas<=23) && (minutos>=0) && (minutos<=59)) {
			return true;
		}
		else
		{
		alert("Hora invalida!.....");
		campo_hora.value="00:00";
		return false;
		}
	}
	else
	{
	alert("Hora invalida!...");
	campo_hora.value="00:00";
	return false;
	}
}
/////////////////////////////
//Validacion para campo vacio
/////////////////////////////
function IsEmpty(campo) {
       for (LargoCampoAValidar = 0; LargoCampoAValidar < campo.length; LargoCampoAValidar++) {   
                if (campo.charAt(LargoCampoAValidar) != " ") {  // charAt() evalua cada caracter
                        return true;   
                }   
        }   
        return false;   
}   
  
function validar_campo(aTextField) {
   if ((aTextField.value.length==0) || !IsEmpty(aTextField.value)) {
	   if ((aTextField.name=="descripcion") || (aTextField.name=="nmesa")) {
		  var alerta = "Debe asignar una " + aTextField.name;
	   } else {
	   	  var alerta = "Debe asignar un " + aTextField.name;
	   }
 	  alert(alerta);
	  aTextField.focus();
      return false;
   } else { 
   	  return true; 
   }
}

function mostrarnumeropedido(pedido)
{
	alert(pedido);
	return false;
	}

function validar_campo_silencioso(aTextField) {
   if ((aTextField.value.length==0) || !IsEmpty(aTextField.value)) {
	  aTextField.focus();
      return false;
   } else { 
   	  return true; 
   }
}
/*function validar_no_sujeto(campo1, campo2, formulario)
{
 var numero = new oNumero(parsefloat(campo1.value));
 if (numero>=0)
 {

	
	document.formulario.porcentajenosujeto.value=0;
	 document.formulario.porcentajenosujeto.enabled=false;
      return false;
	  
	  }
	  else
	  { 
	  document.formulario.porcentajenosujeto.value=0;
	 document.formulario.porcentajenosujeto.enabled=false;
	 return true;}
	  
  
}*/
	
//function validar_campo(campo) 
//	{
//		if ((campo.value==0) || (campo.value==""))
//			{
//			var alerta = "Debe asignar un "+campo.name;
//			alert(alerta);
//			campo.focus();
//			return false;
//			}
//			else
//			{
//			return true;
//			}
//	}	

function validar_solo_numerico_si_nulo(campo){
	if (isNaN(campo.value)==true ) { /*tambien se puede usar (isNaN(parseFloat(campo.value) Ej: ver agregar_movim.php*/
		var alerta = campo.name+" debe ser numerico.";
		alert(alerta);
		campo.focus();
		return false;
	} else {
		return true;
	}
}

function validar_solo_numerico(campo){
	if (isNaN(campo.value)==true || (campo.value=="")) { /*tambien se puede usar (isNaN(parseFloat(campo.value) Ej: ver agregar_movim.php*/
		var alerta = campo.alt + " debe ser numerico.";
		alert(alerta);
		campo.value= 0;
		campo.focus();
		return false;
	} else {
		return true;
	}
}	
function validar_existe_resultado(formulario,valor){ 

resul=eval("document."+formulario.name+".resultado"+valor);	
caja=eval("document."+formulario.name+".caja_empleado"+valor);	
if   (caja.value!="")
{ 
if (resul.value=="")
	{alert ('Debe cargar un resultado');
	
	resul.focus();
	return false;
	}
}
}
function validar_distintos_cero(campo1,campo2) 
	{
	if ((parseFloat(campo1.value)==0) && (parseFloat(campo2.value)==0))
		{
		var alerta = campo1.name+" y "+campo2.name+" deben ser distintos de cero!...";
		alert(alerta);
		campo1.focus();
		return false;
		}
		else
		{
		return true;
		}
	}
function validar_distinto_cero(campo) 
	{
	if ((parseFloat(campo.value)==0))
		{
		var alerta = campo.name+" debe ser distinto de cero!...";
		alert(alerta);
		campo.focus();
		return false;
		}
		else
		{
		return true;
		}
	}
function validar_mayor_cero(campo) 
	{
	if ((parseFloat(campo.value)<=0))
		{
		var alerta = " El valor del campo debe ser mayor a cero";
		alert(alerta);
		campo.focus();
		return false;
		}
		else
		{
		return true;
		}
	}

function cerrar_ventana2() 
	{
		window.close()
	}
function ir_a_pagina(objeto,restore){ //v3.0
  eval("self.location='"+objeto.options[objeto.selectedIndex].value+"'");
  if (restore) objeto.selectedIndex=0;
}
function confirmSubmit(valor)
	{
	var si=confirm("Desea realmente eliminar "+valor+" ?");
	if (si)
		return true ;
	else
		return false ;
}
function confirmEliminar(valor)
	{
	var si=confirm("Desea realmente eliminar "+valor+" ?");
	if (si)
		return true ;
	else
		return false ;
}
function confirmanularpp(div,pagina_destino,idpedido,nropedido)
	{
	
	var si=confirm("Esta seguro de anular el pp nro: "+nropedido+"?");
	if (si)	
	{ ajax_get(div,pagina_destino,idpedido);
		return true ;}
	else
	{ 
		return false ;
}}
function confirmaranularordencompra(div,pagina_destino,idordencompra,nrordencompra)
	{
	
	var si=confirm("Esta seguro de anular la orden de compra nro: "+nrordencompra+"?");
	if (si)	
	{ ajax_get(div,pagina_destino,idordencompra);
		return true ;}
	else
	{ 
		return false ;
}}
	function confirmSubmit(div,pagina_destino,variables,valor)
	{
	var si=confirm("Desea realmente eliminar al articulo :"+valor+" ?");
	if (si)
		{
		ajax_get(div,pagina_destino,variables);
		return true ;}
	else
		{return false ;}
}


function confirmborrarrubro(valor)
	{
	var si=confirm("Desea realmente eliminar el rubro ?");
	if (si)
		return true ;
	else
		return false ;
}
function pedido_imp(div,pagina_destino,formulario,valor)
	{
	
	window.open('listados/pedido_provision.php', '_blank', 'height=480, width=640, left=0, top=0, toolbar=no, menubar=no, titlebar=no, resizable=yes, scrollbars=yes');
			ajax_post(div,pagina_destino,formulario);
		return true ;
		
}
function confirmSubmitSinValor(valor)
	{
	var si=confirm(valor);
	if (si)
		return true ;
	else
		return false ;
}
function VerificarEmail(campo_mail){
	if(campo_mail.value.indexOf('@',0)==-1 || campo_mail.value.indexOf(';',0)!=-1
		|| campo_mail.value.indexOf(' ',0)!=-1 || campo_mail.value.indexOf('/',0)!=-1
		|| campo_mail.value.indexOf(';',0)!=-1 || campo_mail.value.indexOf('<',0)!=-1
		|| campo_mail.value.indexOf('>',0)!=-1 || campo_mail.value.indexOf('*',0)!=-1
		|| campo_mail.value.indexOf('|',0)!=-1 || campo_mail.value.indexOf('`',0)!=-1
		|| campo_mail.value.indexOf('&',0)!=-1 || campo_mail.value.indexOf('$',0)!=-1
		|| campo_mail.value.indexOf('!',0)!=-1 || campo_mail.value.indexOf('"',0)!=-1
		|| campo_mail.value.indexOf(':',0)!=-1) {
		alert("Direccion de mail incorrecta!...");
		campo_mail.focus();
		return false;
	} else {
		return true;
	}
}
/*
*Esta libreria es una libreria AJAX creada por Javier Mellado
*y descargada del portal AJAX Hispano http://www.ajaxhispano.com
*contacto javiermellado@gmail.com
*
*Puede ser utilizada, pasada, modificada pero no olvides mantener
*el espiritu del software libre y respeta GNU-GPL
*/ 
function objetus() 
	{
	var objetus=false;
	try {
		objetus = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
					try {
						objetus = new ActiveXObject("Microsoft.XMLHTTP");
						} catch (E) {
									objetus = false;
									}
						}
		if (!objetus && typeof XMLHttpRequest!='undefined') 
			{
			objetus = new XMLHttpRequest();
			}
		return objetus;
	}
var enviar = false

function ajax_get(_target,archivo,variables) {
 // linea para que aparezca imagen
 
 document.getElementById('carga').innerHTML = '<table border=\"0\" cellspacing=\"0\"><tr><td align=\"center\" class=\"div_carga\" scope=\"col\">Procesando </td></tr><tr><td><img src=\"imagenes/procesa.gif\" width=\"30\" height=\"15\"></td></tr></table>';

 
	if (enviar) {
		alert("Aguarde un instante por favor. El servidor esta ocupado!...")
	} else {
//		alert(_target + " " + archivo + " " + variables);
		enviar = true
		if(ajax_tooltipObj) {
			ajax_hideTooltip();
		}
		ImagenIndicador = new Image()
		ImagenIndicador.src = "indicator.gif"
		ImagenClock_off = new Image()
		ImagenClock_off.src = "clock_off.gif"
		ImagenClock_on = new Image()
		ImagenClock_on.src = "clock_on.gif"
		//alert(archivo+variables)
		_objetus=objetus()
		_values_send_get=variables
		var tiempo = new Date();
		//alert(tiempo.getTime());
		archivo = archivo+"?jsfecha="+tiempo.getTime();
		if (variables=="")
			{
			_URL_=archivo
			}
			else
			{
			_URL_=archivo+"&"
			}
		//alert(_URL_+_values_send_get)
		_objetus.open("GET",_URL_+_values_send_get,true);
		_objetus.onreadystatechange=function(){
		if (_objetus.readyState==0)
			{
			var mensaje_carga = "Inicializando......"	
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
		else if (_objetus.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>";//no toma foco control ingreso si lo descomento
			//var mensaje_carga = "<img src='clock_on.gif' name='ImagenClock_on' /><img src='clock_off.gif' name='ImagenClock_off' /><img src='indicator.gif' name='ImagenIndicador' />Cargando..."//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus.readyState==4)
					{
					if (_objetus.status==200)
						{
							
							document.getElementById('carga').innerHTML = '<table border=\"0\" cellspacing=\"0\"><tr><td align=\"center\" class=\"div_carga\" scope=\"col\"> Listo... </td></tr><tr><td><img src=\"imagenes/24px-Crystal_Clear_action_apply.png\" width=\"30\" height=\"15\"></td></tr></table>';
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus.responseText;
						document.location.hash="posicion1"
						//document.location.hash=_target
						setTimeout("setFocus()",100);
						//setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						enviar = false
						}
						else if (_objetus.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus.responseText;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
			_objetus.send(null);
		}
	}






function ajax_get11(_target,archivo,variables) {
 
	if (enviar) {
		alert("Aguarde un instante por favor. El servidor esta ocupado!...")
	} else {
//		alert(_target + " " + archivo + " " + variables);
		enviar = true
		if(ajax_tooltipObj) {
			ajax_hideTooltip();
		}
		ImagenIndicador = new Image()
		ImagenIndicador.src = "indicator.gif"
		ImagenClock_off = new Image()
		ImagenClock_off.src = "clock_off.gif"
		ImagenClock_on = new Image()
		ImagenClock_on.src = "clock_on.gif"
		//alert(archivo+variables)
		_objetus=objetus()
		_values_send_get=variables
		var tiempo = new Date();
		//alert(tiempo.getTime());
		archivo = archivo+"?jsfecha="+tiempo.getTime();
		if (variables=="")
			{
			_URL_=archivo
			}
			else
			{
			_URL_=archivo+"&"
			}
		//alert(_URL_+_values_send_get)
		_objetus.open("GET",_URL_+_values_send_get,true);
		_objetus.onreadystatechange=function(){
		if (_objetus.readyState==0)
			{
			var mensaje_carga = "Inicializando......"	
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
		else if (_objetus.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>";//no toma foco control ingreso si lo descomento
			//var mensaje_carga = "<img src='clock_on.gif' name='ImagenClock_on' /><img src='clock_off.gif' name='ImagenClock_off' /><img src='indicator.gif' name='ImagenIndicador' />Cargando..."//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus.readyState==4)
					{
					if (_objetus.status==200)
						{
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus.responseText;
						document.location.hash="posicion1"
						//document.location.hash=_target
						setTimeout("setFocus()",100);
						//setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						enviar = false
						}
						else if (_objetus.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus.responseText;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
			_objetus.send(null);
		}
	}
	
	function ajax_get_multiple(_target,archivo,variables) {
		if(ajax_tooltipObj) {
			ajax_hideTooltip();
		}
		ImagenIndicador = new Image()
		ImagenIndicador.src = "indicator.gif"
		ImagenClock_off = new Image()
		ImagenClock_off.src = "clock_off.gif"
		ImagenClock_on = new Image()
		ImagenClock_on.src = "clock_on.gif"
		//alert(archivo+variables)
		_objetus2=objetus()
		_values_send_get=variables
		var tiempo = new Date();
		//alert(tiempo.getTime());
		archivo = archivo+"?jsfecha="+tiempo.getTime();
		if (variables=="")
			{
			_URL_=archivo
			}
			else
			{
			_URL_=archivo+"&"
			}
		//alert(_URL_+_values_send_get)
		_objetus2.open("GET",_URL_+_values_send_get,true);
		_objetus2.onreadystatechange=function(){
		if (_objetus2.readyState==0)
			{
			var mensaje_carga = "Inicializando......"	
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
		else if (_objetus2.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>";//no toma foco control ingreso si lo descomento
			//var mensaje_carga = "<img src='clock_on.gif' name='ImagenClock_on' /><img src='clock_off.gif' name='ImagenClock_off' /><img src='indicator.gif' name='ImagenIndicador' />Cargando..."//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus2.readyState==4)
					{
					if (_objetus2.status==200)
						{
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus2.responseText;
						document.location.hash="posicion1"
						//document.location.hash=_target
						setTimeout("setFocus()",100);
						//setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						enviar = false
						}
						else if (_objetus2.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus2.responseText;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
			_objetus2.send(null);
	
	}
	
	
	
	function ajax_post(_target,archivo,formulario) {
	
	// linea para que aparezca imagen
 
 document.getElementById('carga').innerHTML = '<table border=\"0\" cellspacing=\"0\"><tr><td align=\"center\" class=\"div_carga\" scope=\"col\"> Procesando... </td></tr><tr><td><img src=\"imagenes/procesa.gif\" width=\"30\" height=\"15\"></td></tr></table>';

	
	if (enviar) {
		alert("Aguarde un instante por favor. El servidor esta ocupado!...")
		return false
	} else {
		enviar = true
		if(ajax_tooltipObj) {
			ajax_hideTooltip();
		}
		_values_send_post=""
		if (formulario.elements.length>1)//desde la seguna variable en adelante
			{
			//for(i=1;i<formulario.elements.length;i++)
			for(i=0;i<formulario.elements.length;i++)
				{
				if (formulario.elements[i].type=="checkbox" || formulario.elements[i].type=="radio") // si el objeto es radio o check
					{
					if (formulario.elements[i].checked==true)
						{
						//alert(formulario.elements[i].name+' '+formulario.elements[i].checked+' '+formulario.elements[i].value)
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+escape(formulario.elements[i].value)+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+unescape(formulario.elements[i].value)+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURI(formulario.elements[i].value)+"'")
						if (i==0) {
								eval("_values_send_post=_values_send_post+'"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
							} else {
								eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
							}
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
						}
					}
					else
					{
					//alert(formulario.elements[i].name+'='+formulario.elements[i].value)
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURI(formulario.elements[i].value)+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+escape(formulario.elements[i].value)+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+unescape(formulario.elements[i].value)+"'")		
					if (i==0) {
							eval("_values_send_post=_values_send_post+'"+formulario.elements[i].name+"="+addslashes(encodeURIComponent(formulario.elements[i].value))+"'")//traduce los enter en las objetos textarea			
						} else {
							eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+addslashes(encodeURIComponent(formulario.elements[i].value))+"'")//traduce los enter en las objetos textarea			
					}
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")
					}
				}
			}
			//alert(_values_send_post);
		_objetus=objetus()
		_URL_=archivo
		_objetus.open("POST",_URL_,true);
		_objetus.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		_objetus.setRequestHeader('Accept-Charset', 'UTF-8');
		_objetus.send(_values_send_post);
		_objetus.onreadystatechange=function(){
		if (_objetus.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>"//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus.readyState==4)
					{
					if (_objetus.status==200)
						{
							
							
							document.getElementById('carga').innerHTML = '<table border=\"0\" cellspacing=\"0\"><tr><td align=\"center\" class=\"div_carga\" scope=\"col\"> Listo... </td></tr><tr><td><img src=\"imagenes/24px-Crystal_Clear_action_apply.png\" width=\"30\" height=\"15\"></td></tr></table>';

						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus.responseText;
						//ocument.location.hash=_target
						document.location.hash="posicion1"
						//alert("LLegando")
						enviar = false
						setTimeout("setFocus()",100);
						//setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						}
						else if (_objetus.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"		
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus.status;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
	}
}
	
	
	
	
	
function ajax_post11(_target,archivo,formulario) {
	if (enviar) {
		alert("Aguarde un instante por favor. El servidor esta ocupado!...")
		return false
	} else {
		enviar = true
		if(ajax_tooltipObj) {
			ajax_hideTooltip();
		}
		_values_send_post=""
		if (formulario.elements.length>1)//desde la seguna variable en adelante
			{
			//for(i=1;i<formulario.elements.length;i++)
			for(i=0;i<formulario.elements.length;i++)
				{
				if (formulario.elements[i].type=="checkbox" || formulario.elements[i].type=="radio") // si el objeto es radio o check
					{
					if (formulario.elements[i].checked==true)
						{
						//alert(formulario.elements[i].name+' '+formulario.elements[i].checked+' '+formulario.elements[i].value)
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+escape(formulario.elements[i].value)+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+unescape(formulario.elements[i].value)+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURI(formulario.elements[i].value)+"'")
						if (i==0) {
								eval("_values_send_post=_values_send_post+'"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
							} else {
								eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
							}
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
						}
					}
					else
					{
					//alert(formulario.elements[i].name+'='+formulario.elements[i].value)
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURI(formulario.elements[i].value)+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+escape(formulario.elements[i].value)+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+unescape(formulario.elements[i].value)+"'")		
					if (i==0) {
							eval("_values_send_post=_values_send_post+'"+formulario.elements[i].name+"="+addslashes(encodeURIComponent(formulario.elements[i].value))+"'")//traduce los enter en las objetos textarea			
						} else {
							eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+addslashes(encodeURIComponent(formulario.elements[i].value))+"'")//traduce los enter en las objetos textarea			
					}
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")
					}
				}
			}
			//alert(_values_send_post);
		_objetus=objetus()
		_URL_=archivo
		_objetus.open("POST",_URL_,true);
		_objetus.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		_objetus.setRequestHeader('Accept-Charset', 'UTF-8');
		_objetus.send(_values_send_post);
		_objetus.onreadystatechange=function(){
		if (_objetus.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>"//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus.readyState==4)
					{
					if (_objetus.status==200)
						{
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus.responseText;
						//ocument.location.hash=_target
						document.location.hash="posicion1"
						//alert("LLegando")
						enviar = false
						setTimeout("setFocus()",100);
						//setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						}
						else if (_objetus.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"		
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus.status;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
	}
}
function ajax_get_tooltip(_target,archivo,variables) {
	if (enviar) {
		alert("Aguerde un instante por favor. El servidor esta ocupado!...")
	} else {
		enviar = true
		ImagenIndicador = new Image()
		ImagenIndicador.src = "indicator.gif"
		ImagenClock_off = new Image()
		ImagenClock_off.src = "clock_off.gif"
		ImagenClock_on = new Image()
		ImagenClock_on.src = "clock_on.gif"
		//alert(archivo+variables)
		_objetus=objetus()
		_values_send_get=variables
		var tiempo = new Date();
		//alert(tiempo.getTime());
		archivo = archivo+"?jsfecha="+tiempo.getTime();
		if (variables=="")
			{
			_URL_=archivo
			}
			else
			{
			_URL_=archivo+"&"
			}
		//alert(_URL_+_values_send_get)
		_objetus.open("GET",_URL_+_values_send_get,true);
		_objetus.onreadystatechange=function(){
		if (_objetus.readyState==0)
			{
			var mensaje_carga = "Inicializando......"	
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
		else if (_objetus.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>";//no toma foco control ingreso si lo descomento
			//var mensaje_carga = "<img src='clock_on.gif' name='ImagenClock_on' /><img src='clock_off.gif' name='ImagenClock_off' /><img src='indicator.gif' name='ImagenIndicador' />Cargando..."//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus.readyState==4)
					{
					if (_objetus.status==200)
						{
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus.responseText;
						document.location.hash="posicion1"
						//document.location.hash=_target
						setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						enviar = false
						}
						else if (_objetus.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus.responseText;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
			_objetus.send(null);
		}
	}
function ajax_post_tooltip(_target,archivo,formulario) {
	if (enviar) {
		alert("Aguerde un instante por favor. El servidor esta ocupado!...")
		return false
	} else {
		enviar = true
		_values_send_post=""
		if (formulario.elements.length>1)//desde la seguna variable en adelante
			{
			//for(i=1;i<formulario.elements.length;i++)
			for(i=0;i<formulario.elements.length;i++)
				{
				if (formulario.elements[i].type=="checkbox" || formulario.elements[i].type=="radio") // si el objeto es radio o check
					{
					if (formulario.elements[i].checked==true)
						{
						//alert(formulario.elements[i].name+' '+formulario.elements[i].checked+' '+formulario.elements[i].value)
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+escape(formulario.elements[i].value)+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+unescape(formulario.elements[i].value)+"'")		
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURI(formulario.elements[i].value)+"'")
						if (i==0) {
								eval("_values_send_post=_values_send_post+'"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
							} else {
								eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
							}
						//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
						}
					}
					else
					{
					//alert(formulario.elements[i].name+'='+formulario.elements[i].value)
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURI(formulario.elements[i].value)+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+escape(formulario.elements[i].value)+"'")		
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+unescape(formulario.elements[i].value)+"'")		
					if (i==0) {
							eval("_values_send_post=_values_send_post+'"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
						} else {
							eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+encodeURIComponent(formulario.elements[i].value)+"'")//traduce los enter en las objetos textarea			
					}
					//eval("_values_send_post=_values_send_post+'&"+formulario.elements[i].name+"="+formulario.elements[i].value+"'")
					}
				}
			}
			//alert(_values_send_post);
		_objetus=objetus()
		_URL_=archivo
		_objetus.open("POST",_URL_,true);
		_objetus.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		_objetus.setRequestHeader('Accept-Charset', 'UTF-8');
		_objetus.send(_values_send_post);
		_objetus.onreadystatechange=function(){
		if (_objetus.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>"//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus.readyState==4)
					{
					if (_objetus.status==200)
						{
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus.responseText;
						//ocument.location.hash=_target
						document.location.hash="posicion1"
						setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						enviar = false
						}
						else if (_objetus.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"		
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus.status;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
	}
}
function setFocus() 
{
  var f = null;
  if (document.getElementById("formulario_foco")) 
  		{ 
   		f = document.getElementById("formulario_foco");
				if (f.text_foco)
					{
	      			f.text_foco.focus();					
					}
					else
					{
					alert('No existe elemento text con name = text_foco')
					}
		}
}
var ventanaLista=false
function abrir_ventana_cabecera(pagina_destino,variables_get,nombre_formulario_destino,campo_codigo_destino,campo_descripcion_destino){
	/*if (typeof ventanaLista.document == "object") {
		ventanaLista.close()
	}*/
	ventanaLista = window.open(pagina_destino+"?nombre_formulario_destino="+nombre_formulario_destino+"&campo_codigo_destino="+campo_codigo_destino+"&campo_descripcion_destino="+campo_descripcion_destino+"&"+variables_get,'Consulta', "height=500, width=700, left=0, top=0, toolbar=no, menubar=no, titlebar=no, resizable=no, scrollbars=yes");
}
/*var ventanaLista2=false
function abrir_ventana_cabecera2(pagina_destino,variables_get,nombre_formulario_destino,campo_codigo_destino,campo_descripcion_destino){
	if (typeof ventanaLista2.document == "object") {
		ventanaLista2.close()
	}
	ventanaLista2 = window.open(pagina_destino+"?nombre_formulario_destino="+nombre_formulario_destino+"&campo_codigo_destino="+campo_codigo_destino+"&campo_descripcion_destino="+campo_descripcion_destino+"&"+variables_get,Aleatorio(1,100), "height=500, width=700, left=0, top=0, toolbar=no, menubar=no, titlebar=no, resizable=no, scrollbars=yes");
}*/
function devuelve_valores(codigo,descripcion,nombre_formulario_destino,campo_codigo_destino,campo_descripcion_destino,campo_codigo_blanquear,campo_descripcion_blanquear,boton){
	//Se encarga de escribir en el formulario adecuado los valores seleccionados
	//también debe cerrar la ventana del calendario
	//eval("opener.document." + nombre_formulario_destino + ".Submit"+campo_descripcion_destino + ".disabled='true'")
	//alert("opener.document." + nombre_formulario_destino + "." + campo_codigo_destino + ".value='" + codigo + "'")
	eval ("opener.document." + nombre_formulario_destino + "." + campo_codigo_destino + ".value='" + codigo + "'")
	eval ("opener.document." + nombre_formulario_destino + "." + campo_descripcion_destino + ".value='" + descripcion + "'")
	//eval ("opener.document." + nombre_formulario_destino + ".submit()")
	window.close()
}
function validar_mail(div,pagina_destino,formulario,direccion,nombre,asunto,mensaje)
	{
	if 	(!validar_campo(direccion) || !validar_campo(nombre) || !validar_campo(asunto) || !validar_campo(mensaje)) 
		{
		return false
		}
		else
		{
		ajax_post(div,pagina_destino,formulario)
		}
	}
//Para tooltip javascript
var theObj = ""; 
function toolTip(text,me) {
	theObj=me;
	theObj.onmousemove=updatePos;
	document.getElementById('toolTipBox').innerHTML=text;
	document.getElementById('toolTipBox').style.display="block";
	window.onscroll=updatePos;
}
function updatePos() {
	var ev = arguments[0]?arguments[0]:event;
	var x  = ev.clientX;
	var y  = ev.clientY;
	diffX = 24;
	diffY = 0;
	document.getElementById('toolTipBox').style.top = y-2 + diffY + document.body.scrollTop + 'px';
	document.getElementById('toolTipBox').style.left = x-2 + diffX + document.body.scrollLeft + 'px';
	theObj.onmouseout=hideMe;
}
function hideMe() {
	document.getElementById('toolTipBox').style.display = "none";
}	
//Devualeve posicion en pantalla
var PosicionX=0
var PosicionY=0
function CapturarPosicionEnPantalla(objeto) {
	theObj=objeto;
	theObj.onmousemove=VerificarPosicion;
	//alert(PosicionX+' - '+PosicionY)
}
function VerificarPosicion() {
	var ev = arguments[0]?arguments[0]:event;
	PosicionX = ev.clientX
	PosicionY = ev.clientY
}
function Aleatorio( min, max ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Leslie Hoare
    // *     example 1: rand(1, 1);
    // *     returns 1: 1
 
    if( max ) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min + 1));
    }
}
///////////////////////////////////
//
function validar_localidad(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_sucursal(div,pagina_destino,formulario,descripcion,direccion,telefono,fax,email)
	{
	if (!validar_campo(descripcion) || !validar_campo(direccion) || !validar_campo(telefono) || !validar_campo(fax) || !VerificarEmail(email))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_usuario(div,pagina_destino,formulario,descripcion,nombre)
	{
	if (!validar_solo_numerico(descripcion) || !validar_distinto_cero(descripcion)  || !validar_campo(nombre))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_parametro(div,pagina_destino,formulario,importe_impuesto,ficha_base)
	{
	if (!validar_solo_numerico(importe_impuesto) || !validar_solo_numerico(ficha_base))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}	
function validar_cotizacion(div,pagina_destino,formulario,descripcion,cotizacion_compra,cotizacion_venta)
	{
	if (!validar_campo(descripcion) || !validar_solo_numerico(cotizacion_compra)  || !validar_solo_numerico(cotizacion_venta))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}	
function validar_ejercicio(div,pagina_destino,formulario,ejercicio,fecha_desde,fecha_hasta)
	{
	if (!comparar_fechas_calendario(fecha_desde,fecha_hasta) || !validar_solo_numerico(ejercicio))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_cuenta(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_rubro(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
	
	function validar_carga_archivo(formulario)
	{
	
	if (formulario.tipoarchivo.value==0)
		{
		alert("seleccione una clasificacion para el archivo");
		return false;
		}
		
	}
	
	function validar_proveedor(div,pagina_destino,formulario,cuit,razon_social)
	{
	if (!validar_campo(cuit))
		{
		return false;
		}
	else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	if (!validar_campo(razon_social))
		{
		return false;
		}
	else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
	

		function confirmborrarrubro(div,pagina_destino,formulario,rubro)
	{
			if  (rubro==0)
			
			{
			alert("Debe elegir  un rubro");
			return false;
			}
			else
			{
				
				var si=confirm("Desea realmente eliminar el rubro?");
				if (si)
					{
					ajax_post(div,pagina_destino,formulario);
					return true ;
					}
				else
					{
						return false ;
					}
			}
	}
		
function validar_modelo_presentacion(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_modelo(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_asiento(div,pagina_destino,formulario,total_debe,total_haber)
	{	
		if(total_debe.value == total_haber.value) {
				 if(total_debe.value!=0) {
				 	ajax_post(div,pagina_destino,formulario);
				 } else {
					 alert("La suma de los Debitos y los Creditos no puede ser cero !...");
					 return false;
				 }
		} else {
			alert("El asiento esta desbalanceado !...");
			return false;
		}
	}
function TotalizarAsiento() {
	document.form1.total_debe.value = 0;
	document.form1.total_haber.value = 0;
	for (i=1;i<=document.form1.cantidad.value;i++) {
		eval("document.form1.total_debe.value = parseFloat(document.form1.total_debe.value) + parseFloat(document.form1.debe"+i+".value)");
		eval("document.form1.total_haber.value = parseFloat(document.form1.total_haber.value) + parseFloat(document.form1.haber"+i+".value)");
	}
}
function validar_moneda(div,pagina_destino,formulario,descripcion,cotizacion)
	{
	if (!validar_campo(descripcion) || !validar_solo_numerico(cotizacion))
		{
		return false;
		}
		else
		{
		ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_proveedor(div,pagina_destino,formulario,descripcion,cuit,cod_localidad)
	{
	if (!validar_campo(descripcion) || !validar_campo(cuit))
		{
		return false;
		}
		else
		{
	if (cod_localidad.value==0) {
	alert('Debe asignar una localidad!...');
	return false;
	} else {	ajax_post(div,pagina_destino,formulario);
				}
		}
	}
	
	
function validar_cliente(div,pagina_destino,formulario,descripcion,cuit,cod_localidad)
	{
	if (!validar_campo(descripcion) || !validar_campo(cuit))
		{
		return false;
		}
		else
		{
				if (cod_localidad.value==0) {
					alert('Debe asignar una localidad!...');
					return false;
				} else {
					ajax_post(div,pagina_destino,formulario);
				}
		}
	}
function validar_cliente_sin_ajax(descripcion,cuit,cod_localidad)
	{
	if (!validar_campo(descripcion) || !validar_campo(cuit))
		{
		return false;
		}
		else
		{
				if (cod_localidad.value==0) {
					alert('Debe asignar una localidad!...');
					return false;
				} else {
					return true;
				}
		}
	}
/*function validar_banco(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_cuenta_bancaria(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}*/
function validar_dato_empresa(div,pagina_destino,formulario,descripcion,cuit)
	{
	if (!validar_campo(descripcion) || !validar_campo(cuit)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_producto(div,pagina_destino,formulario,descripcion,precio_costo,coeficiente_utilidad,cantidad,cod_entidad,punto_pedido)
	{
	if (!validar_campo(descripcion) || !validar_solo_numerico(precio_costo) || !validar_mayor_cero(precio_costo) || !validar_solo_numerico(coeficiente_utilidad) || !validar_mayor_cero(coeficiente_utilidad) || !validar_solo_numerico(punto_pedido)) {
			return false;
		} else {
			for (i=1;i<=cantidad.value;i++) {
				//alert(eval("document."+formulario.name+".coeficiente"+i+".value"))
				//if (!validar_solo_numerico(eval("document."+formulario.name+".coeficiente"+i)) || !validar_mayor_cero(eval("document."+formulario.name+".coeficiente"+i))) {
				if (!validar_solo_numerico(eval("document."+formulario.name+".coeficiente"+i))) {
					return false;
				}
			}
			if (cod_entidad.value==0) {
				alert("Debe seleccinar un proveedor!...")
				return false;
			} else {
				ajax_post(div,pagina_destino,formulario);
			}
		}
	}
function validar_localidad_sin_ajax(descripcion,codigo_postal) {
	if (!validar_campo(descripcion) || !validar_solo_numerico(codigo_postal) || !validar_distinto_cero(codigo_postal)) {
			return false;
		} else {
			return true;
		}
	}
function validar_tipo_precio(div,pagina_destino,formulario,descripcion)
	{
	if (!validar_campo(descripcion)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function totalizar_agregar_presupuesto(formulario,cantidad) {
	var total = 0;
	var valor = 0;
	for (i=1;i<=cantidad.value;i++) {
		valor = parseFloat(eval("document."+formulario.name+".importe"+i+".value"));
		total = total + valor;
	}
	var descuento_general = eval("document."+formulario.name+".descuento_general.value");
	total = redondear(total-(total/100*descuento_general),2);
	eval("document."+formulario.name+".total.value="+total);
}
function validar_presupuesto(div,pagina_destino,formulario,cantidad,total,cod_entidad) {
	if (!validar_solo_numerico(total)) {
		return false;
	} else {
		var carga = 0;
		for (i=1;i<=cantidad.value;i++) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".cantidad"+i)) || !validar_solo_numerico(eval("document."+formulario.name+".precio_unitario"+i))) {
			return false;
			}
			if (eval("document."+formulario.name+".cod_producto"+i+".value")!=0) {
				carga++;
				if (!(parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"))>0 && parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value"))>0)) {
					alert("El item "+i+" debe tener cantidad y precio unitario mayores a cero!...");
					return false;
				}
			}
		}
		if (carga==0) {
			alert("No se cargaron productos");
			return false;
		}
		else
		{
			if (cod_entidad.value==0) {
				alert("Debe seleccionar un Cliente !...");
				return false;
			}
			else
			{
				ajax_post(div,pagina_destino,formulario);
			}
		}
	}
}
function validar_movimiento_caja(div,pagina_destino,formulario,importe)
	{
	if (!validar_solo_numerico(importe) || !validar_distinto_cero(importe)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_caja(div,pagina_destino,formulario,numero,descripcion)
	{
	if (!validar_solo_numerico(numero) || !validar_distinto_cero(numero) || !validar_campo(descripcion)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_movimiento_banco(div,pagina_destino,formulario,importe,cod_modelo_automatico1)
	{
	if (!validar_solo_numerico(importe) || !validar_distinto_cero(importe)) {
			return false;
		} else {
			if (cod_modelo_automatico1.value==25) {
				if (!validar_campo(eval("document."+formulario.name+".nro_cheque"))) {
                   	return false;
				} else { 
				ajax_post(div,pagina_destino,formulario);
				}
			} else {
				ajax_post(div,pagina_destino,formulario);
			}
	}
}
function validar_movimiento_cliente_efectivo(div,pagina_destino,formulario,efectivo,cantidad,total)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(efectivo)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(efectivo.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		total.value = redondear(suma,2);
		ajax_post(div,pagina_destino,formulario);
	} else {
		alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
function totalizar_movimiento_cliente_efectivo(formulario,efectivo,cantidad,total)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(efectivo)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(efectivo.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		total.value = redondear(suma,2);
	} else {
		alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
function validar_movimiento_proveedor_efectivo(div,pagina_destino,formulario,efectivo,cantidad,total)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(efectivo)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(efectivo.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		total.value = redondear(suma,2);
		ajax_post(div,pagina_destino,formulario);
	} else {
		alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
function totalizar_movimiento_proveedor_efectivo(formulario,efectivo,cantidad,total)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(efectivo)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(efectivo.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		total.value = redondear(suma,2);
	} else {
		alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
function validar_movimiento_proveedor_cheque_propio(div,pagina_destino,formulario,importe_libre,cantidad,importe_cheque,diferencia,nro_cheque)	{
	var estado = true;
	if (!validar_solo_numerico(importe_libre) || !validar_solo_numerico(importe_cheque) || !validar_campo(nro_cheque)) {
			estado = false;
		} else {
			diferencia.value = redondear(parseFloat(importe_cheque.value),2) - redondear(parseFloat(importe_libre.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			diferencia.value = diferencia.value - redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (diferencia.value==0 && estado) {
		ajax_post(div,pagina_destino,formulario);
	} else {
		alert("La diferencia eltre los distintos pagos y el importe del cheque debe ser cero!...");
		return false;
	}
}
function totalizar_movimiento_proveedor_cheque_propio(formulario,importe_libre,cantidad,importe_cheque,diferencia)	{
	var estado = true;
	if (!validar_solo_numerico(importe_libre) || !validar_solo_numerico(importe_cheque)) {
			estado = false;
		} else {
			diferencia.value = redondear(parseFloat(importe_cheque.value),2) - redondear(parseFloat(importe_libre.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			diferencia.value = diferencia.value - redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (diferencia.value==0 && estado) {
		return true;
	} else {
		//alert("La diferencia eltre los distintos pagos y el importe del cheque debe ser cero!...");
		return false;
	}
}
function validar_movimiento_proveedor_cheque_tercero(div,pagina_destino,formulario,cantidad,importe_libre)	{
	var estado = true;
	var total = 0;
	for (i=1;i<=cantidad.value;i++) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
			} else {
				total = parseFloat(total) + parseFloat(eval("document."+formulario.name+".importe"+i+".value"));
				estado = true;
			}
	}
	//alert(total)
	//alert(importe_libre.value)
	//alert(redondear(parseFloat(importe_libre.value),2)+redondear(parseFloat(total),2))
	if (estado && (total>0 || importe_libre.value>0) && (redondear(parseFloat(importe_libre.value),2)+redondear(parseFloat(total),2)==redondear(parseFloat(formulario.cheques.value),2))) {
		ajax_post(div,pagina_destino,formulario);
	} else {
		alert("Verifique los datos ingresado!...");
		return false;
	}
}
function totalizar_movimiento_proveedor_cheque_tercero(formulario,importe_libre,cantidad,cheques)	{
	var estado = true;
	var parciales = 0;
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			parciales = redondear(parseFloat(parciales),2) + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if ((redondear(parseFloat(cheques.value),2) >= redondear(parseFloat(parciales),2)) && estado) {
			importe_libre.value = redondear(parseFloat(cheques.value),2) - redondear(parseFloat(parciales),2);
			return true;
	} else { 
		importe_libre.value = 0;
		for (i=1;i<=cantidad.value;i++) {
				eval("document."+formulario.name+".importe"+i+".value=0");
		}
	}
	eval("document."+formulario.name+".total"+".value="+total);
}
function validar_movimiento_cliente_cheque_tercero(div,pagina_destino,formulario,importe_libre,cantidad,importe_cheque,diferencia,nro_cheque,cuenta,banco,persona)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(importe_libre) || !validar_solo_numerico(importe_cheque) || !validar_solo_numerico(diferencia) || !validar_campo(nro_cheque) || !validar_campo(cuenta) || !validar_campo(banco) || !validar_campo(persona)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(importe_libre.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		diferencia.value = redondear(parseFloat(importe_cheque.value),2)-redondear(suma,2);
		if (diferencia.value!=0 || importe_cheque.value==0) {
			alert("La diferencia debe ser cero y importe del cheque debe ser distinto de cero !...");
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	} else {
		alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
function totalizar_movimiento_cliente_cheque_tercero(formulario,importe_libre,cantidad,importe_cheque,diferencia)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(importe_cheque)) {
			estado = false;
	}
	if (!validar_solo_numerico(importe_libre)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(importe_libre.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		diferencia.value = redondear(parseFloat(importe_cheque.value),2)-redondear(suma,2);
		if (diferencia.value!=0) {
			return false
			//alert("La diferencia debe ser cero !...");
		}
	} else {
		//alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
/*
function validar_movimiento_proveedor_cheque_tercero(div,pagina_destino,formulario,importe_libre,cantidad,importe_cheque,diferencia,nro_cheque,cuenta,banco,persona)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(importe_libre) || !validar_solo_numerico(importe_cheque) || !validar_solo_numerico(diferencia) || !validar_campo(nro_cheque) || !validar_campo(cuenta) || !validar_campo(banco) || !validar_campo(persona)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(importe_libre.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		diferencia.value = redondear(parseFloat(importe_cheque.value),2)-redondear(suma,2);
		if (diferencia.value!=0 || importe_cheque.value==0) {
			alert("La diferencia debe ser cero y importe del cheque debe ser distinto de cero !...");
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	} else {
		alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
function totalizar_movimiento_proveedor_cheque_tercero(formulario,importe_libre,cantidad,importe_cheque,diferencia)	{
	var estado = true;
	var suma = 0;
	if (!validar_solo_numerico(importe_cheque)) {
			estado = false;
	}
	if (!validar_solo_numerico(importe_libre)) {
			estado = false;
		} else {
			suma = suma + redondear(parseFloat(importe_libre.value),2);
	}
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".importe"+i))) {
				estado = false;
		} else {
			suma = suma + redondear(parseFloat(eval("document."+formulario.name+".importe"+i+".value")),2);
		}
	}
	if (suma!=0 && estado) {
		diferencia.value = redondear(parseFloat(importe_cheque.value),2)-redondear(suma,2);
		if (diferencia.value!=0) {
			return false
			//alert("La diferencia debe ser cero !...");
		}
	} else {
		//alert("Debe utilizar al menos una forma de cobro y cargar valores numericos!...");
		return false;
	}
}
*/
function validar_movimiento_proveedor(div,pagina_destino,formulario,efectivo,cheques,cheque_propio,nro_cheque)	{
	if (!validar_solo_numerico(efectivo) || !validar_solo_numerico(cheques) || !validar_solo_numerico(cheque_propio)) {
			return false;
	} else {
			if (parseFloat(cheques.value)==0 && parseFloat(efectivo.value)==0 && parseFloat(cheque_propio.value)==0) {
				alert("Debe utilizar al menos una forma de cobro!...");
				return false;
			} else {
				if(parseFloat(cheque_propio.value)>0) {
					if (!validar_campo(nro_cheque)) {
						return false;
					} else {
					ajax_post(div,pagina_destino,formulario);
					}
				} else {
					ajax_post(div,pagina_destino,formulario);
				}
			}
		}
	}
function validar_movimiento_producto(div,pagina_destino,formulario,entrada,salida)
	{
	if (!validar_solo_numerico(entrada) || !validar_solo_numerico(salida)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_factura(div,pagina_destino,formulario,cantidad,total,cod_entidad,efectivo,cuenta_corriente,cheques) {
	if (!validar_solo_numerico(total) || !validar_solo_numerico(efectivo) || !validar_solo_numerico(cuenta_corriente) || !validar_solo_numerico(cheques)) {
		return false;
	} else {
		var carga = 0;
		for (i=1;i<=cantidad.value;i++) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".cantidad"+i)) || !validar_solo_numerico(eval("document."+formulario.name+".precio_unitario"+i))) {
			return false;
			}
			if (eval("document."+formulario.name+".cod_producto"+i+".value")!=0) {
				carga++;
				if (!(parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"))>0 && parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value"))>0)) {
					alert("El item "+i+" debe tener cantidad y precio unitario mayores a cero!...");
					return false;
				}
			}
		}
		if (carga==0) {
			alert("No se cargaron productos");
			return false;
		}
		else
		{
			if (cod_entidad.value==0) {
				alert("Debe seleccionar un Cliente !...");
				return false;
			}
			else
			{
				//alert(redondear(efectivo.value,2)+redondear(cuenta_corriente.value,2)+redondear(cheques.value,2))
				if(redondear(parseFloat(redondear(efectivo.value,2)+redondear(cuenta_corriente.value,2)+redondear(cheques.value,2)),2)!=redondear(parseFloat(redondear(total.value,2)),2)){
					alert("Efectivo + Cuenta corriente + Cheques deben ser igual al total de la factura, Total: " + redondear(total.value,2) + ". Suma de importes: " + redondear(parseFloat(redondear(cuenta_corriente.value,2)+redondear(cheques.value,2)+redondear(efectivo.value,2)),2) + ". Diferencia: " + redondear(parseFloat(redondear(total.value,2) - redondear(cuenta_corriente.value,2) - redondear(cheques.value,2) - redondear(efectivo.value,2)),2))
					return false;
				} else { 
					ajax_post(div,pagina_destino,formulario);
				}
			}
		}
	}
}
function validar_factura_res(div,pagina_destino,formulario) {
	var carga = 0;
	for(i=0;i<formulario.elements.length;i++) {
		if (formulario.elements[i].type=="checkbox") { // si el objeto es radio o check
			if (formulario.elements[i].checked==true) {
				carga++;
				}
			}
		}
	if (carga==0) {
		alert("No se marcaron facturas para pagar");
		return false;
		} else {
		ajax_post(div,pagina_destino,formulario);
		}

}
function validar_eliminar_res(div,pagina_destino,formulario,observaciones) {
//	alert(observaciones.value);
	if (observaciones.value!=null && observaciones.value!="") {
	//	alert("Ingreso al post");
		ajax_post(div, pagina_destino,formulario);
		} else {
			alert("Debe ingresar un detalle de la causa de la Resolucion");
			return false;
			}
}
function validar_contador_factura(div,pagina_destino,formulario,proximo_numero)
	{
	if (!validar_solo_numerico(proximo_numero)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function TotalizarChequesTercero(formulario,cantidad) {
	var total = 0;
	var estado = true;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("parseFloat(document."+formulario.name+".importe_cheque"+i+".value)")>0) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".importe_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".nro_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".cuenta"+i)) || !validar_campo(eval("document."+formulario.name+".banco"+i)) || !validar_campo(eval("document."+formulario.name+".persona"+i)) || !comparar_fechas_calendario(eval("document."+formulario.name+".fecha_emision"+i),eval("document."+formulario.name+".fecha_vencimiento"+i))) {
				estado = false;
				}
				total = eval("parseFloat(total) + parseFloat(document."+formulario.name+".importe_cheque"+i+".value)");
			}
	}
	if(estado) {	
		formulario.cheques.value = total;
		return true;
		//alert(total)
	} else {
		return false;
	}
}
function TotalizarPagosTercero(formulario,cantidad) {
	var total = 0;
	var estado = true;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("parseFloat(document."+formulario.name+".importe_pago"+i+".value)")>0) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".importe_pago"+i))) {
				estado = false;
				}
				total = redondear(eval("parseFloat(total) + parseFloat(document."+formulario.name+".importe_pago"+i+".value)"),2);
			}
	}
	if(estado) {	
		formulario.cuenta_corriente.value = total;
		return true;
		//alert(total)
	} else {
		return false;
	}
}
function TotalizarChequesTerceroModuloCaja(formulario,cantidad) {
	var total = 0;
	var estado = true;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("parseFloat(document."+formulario.name+".importe_cheque"+i+".value)")>0) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".importe_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".nro_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".cuenta"+i)) || !validar_campo(eval("document."+formulario.name+".banco"+i)) || !validar_campo(eval("document."+formulario.name+".persona"+i)) || !comparar_fechas_calendario(eval("document."+formulario.name+".fecha_emision"+i),eval("document."+formulario.name+".fecha_vencimiento"+i))) {
				estado = false;
				}
				total = eval("parseFloat(total) + parseFloat(document."+formulario.name+".importe_cheque"+i+".value)");
			}
	}
	if(estado) {	
		formulario.importe.value = total;
		return true;
		alert(total)
	} else {
		return false;
	}
}
function TotalizarChequesTerceroModuloCheque(formulario,cantidad) {
	var total = 0;
	var estado = true;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("parseFloat(document."+formulario.name+".importe_cheque"+i+".value)")>0) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".importe_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".nro_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".cuenta"+i)) || !validar_campo(eval("document."+formulario.name+".banco"+i)) || !validar_campo(eval("document."+formulario.name+".persona"+i)) || !comparar_fechas_calendario(eval("document."+formulario.name+".fecha_emision"+i),eval("document."+formulario.name+".fecha_vencimiento"+i))) {
				estado = false;
				}
				total = eval("parseFloat(total) + parseFloat(document."+formulario.name+".importe_cheque"+i+".value)");
			}
	}
	if(estado) {	
		formulario.importe.value = total;
		return true;
	} else {
		return false;
	}
}
function validar_entrega_cheque(div,pagina_destino,formulario,opcion_0,opcion_1,persona_entrega,entidad)
	{
	if (opcion_0.checked==true) {
			if (!validar_campo(persona_entrega)) {
				return false;
			} else {
				ajax_post(div,pagina_destino,formulario);
			}
	}
	if (opcion_1.checked==true) {
			if (!validar_campo(entidad)) {
				return false;
			} else {
				ajax_post(div,pagina_destino,formulario);
			}
	}
}
function validar_movimiento_forma_pago_gasto(div,pagina_destino,formulario,efectivo,cheque_propio,cheques,nro_cheque,monto)
	{
	if (!validar_solo_numerico(efectivo) || !validar_solo_numerico(cheque_propio) || !validar_solo_numerico(cheques)) {
			return false;
		} else {
			if ((parseFloat(cheques.value)==0 && parseFloat(efectivo.value)==0 && parseFloat(cheque_propio.value)==0) || (redondear(parseFloat(cheques.value),2) + redondear(parseFloat(efectivo.value),2) + redondear(parseFloat(cheque_propio.value),2) != redondear(monto.value,2))) {
				alert("Debe utilizar al menos una forma de pago y debe cubrir el monto total!...");
				return false;
			} else {
					if (parseFloat(cheque_propio.value)>0) {
						if (!validar_campo(nro_cheque)) {
							return false
						} else  {
							ajax_post(div,pagina_destino,formulario);
						}
						
					} else {
						ajax_post(div,pagina_destino,formulario);
					}
			}
		}
	}
function validar_movimiento_gasto(div,pagina_destino,formulario,concepto,importe) {
	if (!validar_campo(concepto) || !validar_distinto_cero(importe)) {
		return false;
	} else {
		ajax_post(div,pagina_destino,formulario);
	}
}
function totalizar_agregar_compra(formulario,cantidad) {
	var total = 0;
	var iva = 0;
	for (i=1;i<=cantidad.value;i++) {
		total = parseFloat(total) + parseFloat(eval("document."+formulario.name+".importe"+i+".value"));
		iva = parseFloat(iva) +  redondear(parseFloat(eval("document."+formulario.name+".cantidad"+i+".value")) * parseFloat(eval("document."+formulario.name+".iva"+i+".value")/100) * parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value")) * ( 1 - (parseFloat(eval("document."+formulario.name+".descuento"+i+".value"))/100)) , 2);
	}
	//alert(iva)
	var descuento_general = eval("document."+formulario.name+".descuento_general.value");
	total = redondear(total-(total/100*descuento_general),2);
	eval("document."+formulario.name+".total.value="+parseFloat(total));
	eval("document."+formulario.name+".iva_general.value="+parseFloat(iva));
}
//function totalizar_agregar_compra(formulario,cantidad) {
//	var total = 0;
//	var valor = 0;
//	for (i=1;i<=cantidad.value;i++) {
//		valor = parseFloat(eval("document."+formulario.name+".importe"+i+".value"));
//		total = total + valor;
//	}
//	var descuento_general = eval("document."+formulario.name+".descuento_general.value");
//	total = redondear(total-(total/100*descuento_general),2);
//	eval("document."+formulario.name+".total.value="+total);
//}	  
function validar_compra(div,pagina_destino,formulario,cantidad,total,cod_entidad,efectivo,cuenta_corriente,cheque_propio,cheques,nro_factura,nro_cheque) {
	if (!validar_campo(nro_factura) || !validar_solo_numerico(total) || !validar_distinto_cero(total) || !validar_solo_numerico(efectivo) || !validar_solo_numerico(cuenta_corriente) || !validar_solo_numerico(cheque_propio) || !validar_solo_numerico(cheques)) {
		return false;
	} else {
		var carga = 0;
		for (i=1;i<=cantidad.value;i++) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".cantidad"+i)) || !validar_solo_numerico(eval("document."+formulario.name+".precio_unitario"+i))) {
			return false;
			}
			if (eval("document."+formulario.name+".cod_producto"+i+".value")!=0) {
				carga++;
				if (!(parseFloat(eval("document."+formulario.name+".cod_producto"+i+".value"))>0 && parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"))>0 && parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value"))>0)) {
					alert("El item "+i+" debe tener cantidad y precio unitario mayores a cero y debe seleccionar un producto!...");
					return false;
				}
			}
		}
		if (carga==0) {
			alert("No se cargaron productos");
			return false;
		}
		else
		{
			if (cod_entidad.value==0) {
				alert("Debe seleccionar un Proveedor !...");
				return false;
			}
			else
			{
				//alert('paso')
				if(redondear(parseFloat(efectivo.value),2)+redondear(parseFloat(cuenta_corriente.value),2)+redondear(parseFloat(cheque_propio.value),2)+redondear(parseFloat(cheques.value),2)!=redondear(parseFloat(total.value),2)){
					//alert("Efectivo + Cuenta corriente + Cheque propio + Cheques de terceros deben ser igual al total de la factura");
					alert("Efectivo + Cuenta corriente + Cheque propio + Cheques deben ser igual al total de la factura, Total: " + redondear(parseFloat(total.value),2) + ". Suma de importes: " + redondear(parseFloat(redondear(parseFloat(cuenta_corriente.value),2) + redondear(parseFloat(cheques.value),2) + redondear(parseFloat(efectivo.value),2) + redondear(parseFloat(cheque_propio.value),2)),2) + ". Diferencia: " + redondear(parseFloat(redondear(parseFloat(total.value),2) - redondear(parseFloat(cuenta_corriente.value),2) - redondear(parseFloat(cheques.value),2) - redondear(parseFloat(efectivo.value),2) - redondear(parseFloat(cheque_propio.value),2)),2));
					return false;
				} else { 
					if(parseFloat(cheque_propio.value)>0 && !validar_campo(nro_cheque)) {
						return false;
					} else {
						ajax_post(div,pagina_destino,formulario);
					}
				}
			}
		}
	}
}
function TotalizarChequesTerceroModuloCompra(formulario,cantidad) {
	var total = 0;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("document."+formulario.name+".seleccionado"+i+".checked")) {
				total = parseFloat(total) + parseFloat(eval("document."+formulario.name+".importe_cheque"+i+".value"));
			}
	}
	formulario.cheques.value = redondear(total,2);
}
function validar_cantidad_modelo_cuenta(formulario,cantidad,asignadas)
	{
		var contador = 0;
		var estado = true;
		//alert(asignadas.value)
		for (i=1;i<=cantidad.value;i++) {
			if (eval("document."+formulario.name+".asignar"+i+".checked")==true) {
					contador++;
				}
			if (parseInt(contador)>(parseInt(2)-asignadas.value)) {
				eval("document."+formulario.name+".asignar"+i+".checked=false")
				estado = false;
			}
			if (!estado) {
				break;
			}
		}
		if (!estado) {
			alert("Solo pueden elejirse dos cuentas!...");
			return false;
		} else {
			return true;
		}
	}
function validar_transferencia_bancaria(div,pagina_destino,formulario,importe,tope)
	{
	if (!validar_solo_numerico(importe) || !validar_distinto_cero(importe)) {
			return false;
		} else {
			if(parseFloat(importe.value)>parseFloat(tope.value)) {
				alert("El monto maximo a transferir es $"+tope.value);
				importe.value = tope.value;
				return false;
			} else {
				ajax_post(div,pagina_destino,formulario);
			}
		}
	}
function TotalizarChequesTerceroModuloCliente(formulario,cantidad) {
	var total = 0;
	var estado = true;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("parseFloat(document."+formulario.name+".importe_cheque"+i+".value)")>0) {
			if (!validar_solo_numerico(eval("document."+formulario.name+".importe_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".nro_cheque"+i)) || !validar_campo(eval("document."+formulario.name+".cuenta"+i)) || !validar_campo(eval("document."+formulario.name+".banco"+i)) || !validar_campo(eval("document."+formulario.name+".persona"+i)) || !comparar_fechas_calendario(eval("document."+formulario.name+".fecha_emision"+i),eval("document."+formulario.name+".fecha_vencimiento"+i))) {
				estado = false;
				}
				total = eval("parseFloat(total) + parseFloat(document."+formulario.name+".importe_cheque"+i+".value)");
			}
	}
	if(estado) {	
		formulario.cheques.value = redondear(total,2);
		return true;
		//alert(total)
	} else {
		return false;
	}
}
function TotalizarChequesTerceroModuloProveedor(formulario,cantidad,cantidad_facturas,importe_libre) {
	var estado = true;
	var total = 0;
	var cant = 0;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("document."+formulario.name+".seleccionado"+i+".checked")) {
				cant++;
			}
	}
	for (i=1;i<=cantidad.value;i++) {
		if (eval("document."+formulario.name+".seleccionado"+i+".checked")) {
				total = parseFloat(total) + parseFloat(eval("document."+formulario.name+".importe_cheque"+i+".value"));
			}
	}
	if (cant <= 1 && total > 0) {
		formulario.cheques.value = redondear(total,2);
		estado = true;
	} else {
		alert('Debe seleccionar un unico cheque y debe imputar el monto!...')
		importe_libre.value = 0;
		formulario.cheques.value = 0;
		for (i=1;i<=cantidad.value;i++) {
			eval("document."+formulario.name+".seleccionado"+i+".checked=false")
		}
		for (i=1;i<=cantidad_facturas.value;i++) {
			eval("document."+formulario.name+".importe"+i+".value=0")
		}
		estado = false;
	}
	if (estado) {
		return true;
	} else {
		return false;
	}
}
function totalizar_agregar_venta(formulario,cantidad) {
	var total = 0;
	var valor = 0;
	var iva_total = 0;
	var valor_iva = 0;
	for (i=1;i<=cantidad.value;i++) {
		if (eval("document."+formulario.name+".producto"+i+".value")!="") {
			valor_iva = (parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value"))*parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"))*(1-parseFloat(eval("document."+formulario.name+".descuento"+i+".value"))))*parseFloat(eval("document."+formulario.name+".iva"+i+".value")/100);
			iva_total = iva_total + valor_iva;
			valor = parseFloat(eval("document."+formulario.name+".importe"+i+".value"));
			total = total + valor;
		}
	}
	var descuento_general = eval("document."+formulario.name+".descuento_general.value");
	iva_total = redondear(iva_total-(iva_total/100*descuento_general),2);
	eval("document."+formulario.name+".iva_total.value="+iva_total);
	total = redondear(total-(total/100*descuento_general),2);
	eval("document."+formulario.name+".total.value="+total);
}
function totalizar_agregar_presupuesto(formulario,cantidad) {
	var total = 0;
	var valor = 0;
	var iva_total = 0;
	var valor_iva = 0;
	for (i=1;i<=cantidad.value;i++) {
		//valor_iva = (parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value"))*parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"))*(1-parseFloat(eval("document."+formulario.name+".descuento"+i+".value"))))*parseFloat(eval("document."+formulario.name+".iva"+i+".value"));
		valor_iva = (parseFloat(eval("document."+formulario.name+".precio_unitario"+i+".value"))*parseFloat(eval("document."+formulario.name+".cantidad"+i+".value")));
		iva_total = iva_total + valor_iva;
		valor = parseFloat(eval("document."+formulario.name+".importe"+i+".value"));
		total = total + valor;
	}
	var descuento_general = eval("document."+formulario.name+".descuento_general.value");
	iva_total = redondear(iva_total-(iva_total/100*descuento_general),2);
	//eval("document."+formulario.name+".iva_total.value="+iva_total);
	total = redondear(total-(total/100*descuento_general),2);
	eval("document."+formulario.name+".total.value="+total);
}
function validar_nota_debito(div,pagina_destino,formulario,importe)
	{
	if (!validar_mayor_cero(importe)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function validar_nota_credito(div,pagina_destino,formulario,importe)
	{
	if (!validar_mayor_cero(importe)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
/*
function validar_cobranza_cliente(div,pagina_destino,formulario,concepto)
	{
	if (!validar_campo(concepto)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
*/	
function validar_remito_produccion_masivo(div,pagina_destino,formulario,cantidad) {
	var carga = 0;
	for (i=1;i<=cantidad.value;i++) {
		if (!validar_solo_numerico(eval("document."+formulario.name+".cantidad"+i)) || !validar_solo_numerico(eval("document."+formulario.name+".precio_costo"+i))) {
			return false;
		}
		if (eval("document."+formulario.name+".cod_producto"+i+".value")!=0) {
			if (!(parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"))>0 && parseFloat(eval("document."+formulario.name+".precio_costo"+i+".value"))>0)) {
				alert("El item "+i+" debe tener cantidad y precio de costo mayores a cero!...");
				return false;
			} else {
				carga++;
			}
		}
	}
	if (carga==0) {
		alert("No se cargaron productos");
		return false;
	} else {
		ajax_post(div,pagina_destino,formulario);
	}
}
function validar_movimiento_cliente_saldo_inicio(div,pagina_destino,formulario,importe)	{
	if (!validar_mayor_cero(importe)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}
function validar_movimiento_proveedor_saldo_inicio(div,pagina_destino,formulario,importe)	{
	if (!validar_mayor_cero(importe)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}
function validar_nota_pedido_proveedor(div,pagina_destino,formulario,cantidad) {
	var VarCantidad = false;
	for (i=1;i<=cantidad.value;i++) {
		//alert(eval("document."+formulario.name+".cantidad"+i+".value"));
		if (!validar_solo_numerico(eval("document."+formulario.name+".cantidad"+i))) {
			return false;
		}
		if (eval("document."+formulario.name+".cantidad"+i+".value")!=0) {
			VarCantidad = true;
		}
	}
	if (!VarCantidad) {
		alert("No se cargaron cantidades de productos");
		return false;
	} else {
		ajax_post(div,pagina_destino,formulario);
	}
}
function validar_unidad_medida(div,pagina_destino,formulario,descripcion)	{
	if (!validar_campo(descripcion)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}
function validar_aumento_precio_producto(div,pagina_destino,formulario,porcentaje)	{
	if (!validar_solo_numerico(porcentaje)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}
function validar_modificar_clave(actual,nueva1,nueva2) {
	if 	(!validar_campo(actual) || !validar_campo(nueva1) || !validar_campo(nueva2)) {
		return false;
	} else { 
		if (nueva1.value==nueva2.value) {
			return true;
		} else {
			alert("Las claves son distintas !...")
			return false;
		}
	}
}
function validar_clave(div,pagina_destino,formulario,actual,nueva_clave,re_ingreso)
	{
	if (!validar_modificar_clave(actual,nueva_clave,re_ingreso)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
	}
function calcular_impuesto(text,impuesto,ficha_base,importe_fichas,importe_impuesto,importe_vuelto)	{
	var cont  = true
	var imp_fichas = Math.floor(text.value/ficha_base.value)*ficha_base.value;
	for(i=1;cont==true;i++){
		var imp_impuesto = imp_fichas*impuesto.value;
		if (parseFloat(imp_impuesto) <= (parseFloat(text.value) - parseFloat(imp_fichas)))  {
//			alert("Importe en fichas: "+paso1+" Impuesto:"+paso2)
			importe_fichas.value  =parseFloat(imp_fichas);
			importe_impuesto.value=parseFloat(imp_impuesto)
			importe_vuelto.value=redondear(parseFloat(text.value)-(parseFloat(importe_fichas.value)+parseFloat(importe_impuesto.value)),2);
			var numero = new oNumero(importe_vuelto.value)
			importe_vuelto.value=numero.formato(2,true);
			numero = new oNumero(importe_fichas.value)
			importe_fichas.value=numero.formato(2,true);
			numero = new oNumero(importe_impuesto.value)
			importe_impuesto.value=numero.formato(2,true);
			cont = false
		} else {
			imp_fichas = parseFloat(imp_fichas) - parseFloat(ficha_base.value)
//			alert(paso1)
		}		
	}
}
function validar_movimiento_caja(div,pagina_destino,formulario,text_foco)	{
	if (!validar_solo_numerico(text_foco) || !validar_mayor_cero(text_foco)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}
function validar_acceso(rol,valor,nombre) {
	retorno = false;
	if (rol!=valor) {
		alert("Acceso denegado!.. para el Usuario... "+nombre);
		retorno =  false;
	} else {
		retorno =  true;
	}
	return retorno;
}
function validar_acceso_2(rol,valor,nombre) {
	retorno = false;
	campo   = new String(valor)
	if ((rol==campo.substr(0,1) || rol==campo.substr(1,1)) ) {
		retorno =  true;
	} else {
		alert("Acceso denegado!.. para el Usuario... "+nombre);
		retorno =  false;
	}
	return retorno;
}
function validar_acceso_3(rol,valor,nombre) {
	retorno = false;
	if (rol==valor) {
		alert("Acceso denegado!.. para el Usuario... "+nombre);
		retorno =  false;
	} else {
		retorno =  true;
	}
	return retorno;
}
function validar_fecha_operacion(div,pagina_destino,formulario,fecha,ultima_fecha)	{
	if (!comparar_fechas_calendario_mensaje(ultima_fecha,fecha,'Existe una fecha posterior...')) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}

function validar_rubros(div,pagina_destino,formulario,descripcion)	{
	if (!validar_campo(descripcion)) {
			return false;
		} else {
			ajax_post(div,pagina_destino,formulario);
		}
}

function calcular_neto(fbruto,fiva,fotros,fivapercepcion)
{
	if(!validar_solo_numerico(fbruto)||!validar_mayor_cero(fbruto))
	{
		return false;}
	if(!validar_solo_numerico(fiva))
	{
		return false;}
	if(!validar_solo_numerico(fotros))
	{
		return false;}
	if(!validar_solo_numerico(fivapercepcion))
	{
		return false;}
	neto=parseFloat(fbruto.value)+parseFloat(fiva.value)+parseFloat(fotros.value)+parseFloat(fivapercepcion.value);
	var numero = new oNumero(neto);
	document.formFactura.neto.value=numero.formato(2,true);
	return true;
}
function calcular_total_pedido(formulario, fprecio,fcantidad)
{ 

	if(!validar_solo_numerico_si_nulo(fprecio)||!validar_mayor_cero(fcantidad))
	{
		return false;}

	total=parseFloat(fprecio.value)*parseFloat(fcantidad.value);
	var numero = new oNumero(total);
	
	
	eval('document.'+formulario.name+'.total.value=numero.formato(2,true)')
	


	return true;
}


function calcular_total_orden_compra(formulario,fimporte,fprecio,fcantidad,cantitems)
{ 	
var total=0;
var totales=0;
var valor=0;
    for (i=1;i<=cantitems.value;i++) 
	{
		
		
					
	if ((eval("document."+formulario.name+".monto"+i+".value")=="") ||  (eval("document."+formulario.name+".cantidad"+i+".value")=="") )
	{
	valor=0;
	}
	else
	{
	precio=parseFloat(eval("document."+formulario.name+".monto"+i+".value"));
	cantidad=parseFloat(eval("document."+formulario.name+".cantidad"+i+".value"));				   


var numero1 = new oNumero(precio);
 
 	valor =numero1.formato(2,true)*cantidad;
	}
 
total=valor+total;

var numero2 = new oNumero(total);
	
	
 
							 
	} 
	eval('document.'+formulario.name+'.total.value=numero2.formato(2,true)')
	

	return true;
}
function validar_factura(div,pagina_destino,formulario,items) {
	if (!validar_campo(formulario.cuit)) {
		return false;
	}
	if (!validar_campo(formulario.nro_fact)) {
		return false;
	}
	if (!validar_campo(formulario.t_fact)) {
		return false;
	}
	if ((formulario.neto.value)==0){
		alert("Debe cargar monto e IVA");
		return false;
	}
	if (formulario.t_fact.value=="A" && (formulario.iva.value==0||formulario.iva.value=="")){
		alert("Las Facturas tipo \"A\" deben discriminar IVA");
		return false;
	}
	//Obliga a cargar el primero
	if (formulario.moneda.value==0){
		alert("Debe seleccionar la moneda de la compra");
		return false;
	}
	if (formulario.moneda.value!=1){
		if (formulario.cotbruto.value==0){
			alert("Debe cargar el monto de la prestaci\u00f3n en otra moneda");
			return false;
		} 
		if (formulario.cotizacion.value==0||formulario.cotizacion.value==""){
			alert("Debe cargar la cotizaci\u00f3n de la otra moneda");
			return false;
		} 
	}
	var tope;
	if ((formulario.modificar.value)=="si") {
		tope=items.value-2;
		//alert(tope);
		//return false;
	} else {
		tope=items.value;
		//alert(tope);
		//return false;
	}
	
	if (!validar_campo(eval("document."+formulario.name+".cant1")) || !validar_campo(eval("document."+formulario.name+".descripcion1"))) {
		return false;
	}
	//si hay mas los valida que los cargados sean los dos completos
	if (tope>1) {
		for (i=2;i<=tope;i++) {
			//alert ("i "+i);
			//if ( ((eval("document."+formulario.name+".cant"+i+".value.length!=0")) || IsEmpty(eval("document."+formulario.name+".cant"+i+".value")))  || ((eval("document."+formulario.name+".descripcion"+i+".value.length!=0")) || IsEmpty(eval("document."+formulario.name+".descripcion"+i+".value")))  ) {
				if (!validar_campo(eval("document."+formulario.name+".cant"+i)) || !validar_campo(eval("document."+formulario.name+".descripcion"+i))) {
					return false;
				}
			//}
		}
	}
	var monto_items=0;
	for (h=1;h<=items.value;h++) {
		monto_items=monto_items+(parseFloat(eval("document."+formulario.name+".monto"+h+".value")));
	}
	formulario.neto.value= replace(formulario.neto.value,",","");
	if (redondear(monto_items,2) != formulario.bruto.value) {
		alert("No coinciden los montos de la prestaci\u00f3n y la suma de los detalles");
		return false;
	}
	if ((formulario.modificar.value)=="si") {
			var carga = 0;
			var box=0;
			for(i=0;i<formulario.elements.length;i++) {
				if (formulario.elements[i].type=="checkbox") { // si el objeto es radio o check
					box++;
					if (formulario.elements[i].checked==true) {
						carga++;
						}
					}
				}
			if (box == carga) {
				alert("No puede eliminar todos los items"); 
				return false;
		}
	}
	if (formulario.moneda.value!=1){
		var cotprest=new oNumero(formulario.cotbruto.value);
		var cotmoneda=new oNumero(formulario.cotizacion.value);
		var prestacion = redondear(cotprest.valor*cotmoneda.valor,2);
		if (prestacion!=formulario.bruto.value) {
			if (!confirm("No coincide el monto de prestaci\u00f3n con el valor convertido. \n\n Desea Continuar?")){
				return false;
			}
		}
	}
	ajax_post(div,pagina_destino,formulario);
}

function validar_honorarios(div,pagina_destino,formulario) {
	if (!validar_solo_numerico(formulario.masde) || !validar_solo_numerico(formulario.a) || !validar_solo_numerico(formulario.fijo) || !validar_solo_numerico(formulario.retencion) || !validar_solo_numerico(formulario.excedente)) {
		return false;
	} else if(!validar_mayor_cero(formulario.a) || !validar_mayor_cero(formulario.retencion))
		{ return false; }
		else {		
		ajax_post(div,pagina_destino,formulario);
		}
}


function CALCULAR_RETENCION_RESOLUCION(PORCENTAJE_INSCRIPTO,PORCENTAJE_NO_INSCRIPTO,IMPORTE_NO_RETENIBLE,MONTO)
{ 
 //alert("Entro al function");
	// montototal=0;
	if ((PORCENTAJE_INSCRIPTO!=null && MONTO!=null) &&  IMPORTE_NO_RETENIBLE!=null) 
		{
		
			montototal=(parseFloat(MONTO.value))+((parseFloat(MONTO.value)*parseFloat(PORCENTAJE_INSCRIPTO.value))/100)-(parseFloat(IMPORTE_NO_RETENIBLE.value));
			
		//			alert((parseFloat(MONTO.value))+((parseFloat(MONTO.value)*parseFloat(PORCENTAJE_INSCRIPTO.value))/100)); return false;	
		}
		else
			{
				montototal=0;}
	if ((PORCENTAJE_NO_INSCRIPTO!=null && MONTO!=null) &&  IMPORTE_NO_RETENIBLE!=null) 
		{
			montototal=parseFloat(MONTO.value)+(parseFloat(MONTO.value)*parseFloat(PORCENTAJE_INSCRIPTO.value)/100)-parseFloat(IMPORTE_NO_RETENIBLE.value);
		
		
		} 
			else
			{
				montototal=0;}
				
				document.formcalculoret.resul.value=montototal;
								return true;		

}

function validar_proveedor(div,pagina_destino,formulario){
	if (!validar_campo(formulario.cuit)) {
		return false;
	}
	if	(!comparar_fechas_calendario_mensaje(formulario.f_desde,formulario.f_hasta,"Verifique las fechas del certificado fiscal, la fecha desde es mayor a la fecha hasta")) {
		return false;
	}
	if ((formulario.cuit.value.length!=11)) {
		alert ("la cantidad de digitos del cuit debe ser 11");
		return false;
	}
	
	if (!validar_solo_numerico(formulario.telefono))
	{return false;}
	
	if (!validar_solo_numerico(formulario.telefono))
	{return false;}

	if (!validar_solo_numerico(formulario.fax))
	{return false;}
	
	
	if (!validar_campo(formulario.razonsocial)) {
		return false;
	}
	if (!validar_campo(formulario.domicilio)) {
		return false;
	}
	if (formulario.cod_localidad.value==0){
		alert ("Debe asignar una localidad");
		return false;
	}
	if (!validar_campo(formulario.telefono)) {
		return false;
	}
	//alert(formulario.cantimpuestos.value);
	elegido=0;
	for(i=0;i<formulario.elements.length;i++) {
		if (formulario.elements[i].type=="radio" && formulario.elements[i].checked) { 
			elegido++;
			}
	}
	if (elegido<formulario.cantimpuestos.value){
		alert ("Faltan asignar impuestos");
		return false;
	}
	ajax_post(div,pagina_destino,formulario);
}
function validar_articulo(div,pagina_destino,formulario){
	if (!validar_campo(formulario.articulo)) {
		return false;
	}
	if (formulario.tipoarticulo.value==0){
		alert ("Debe asignar un tipo de articulo");
		return false;
	}if (formulario.unidadmed.value==0){
		alert ("Debe asignar una unidad de medida");
		return false;
	}
	if (formulario.unidadiva.value==0){
		alert ("Debe asignar un porcentaje de iva");
		return false;
	}
	
ajax_post(div,pagina_destino,formulario);
}
function validar_tipoarticulo(div,pagina_destino,formulario){
	
	if (!validar_campo(formulario.tipoarticulo)) {
		return false;
	}
	
	

	ajax_post(div,pagina_destino,formulario);
}

function validar_pedido(div,pagina_destino,formulario){
	if (!validar_campo(formulario.articulo)) {
		return false;
	}
	
	if (!validar_campo(formulario.cantidad)) {
		return false;
	}
	
	ajax_post(div,pagina_destino,formulario);
}
function validar_ofertas(div,pagina_destino,formulario)
{
	
	if (!validar_campo(formulario.proveedor)) 
	{
		return false;
	}
		
for (i=0;i<formulario.cantidad.value;i++)
 {

	if (!validar_campo(eval("document."+formulario.name+".precio"+i)))
	{
		return false;
	}

}	

	ajax_post(div,pagina_destino,formulario);

	
	
	
	
}
	
	
	
	
function validar_checks_ret(formulario,cliqueado,facturas,items) {
	if (cliqueado.name=="retencion") {
		if (formulario.retencion.checked==true) {
			for(i=0;i<formulario.elements.length;i++) {
				if (formulario.elements[i].type=="checkbox") { 
					formulario.elements[i].checked=false; 
					formulario.elements[i].disabled=true; 
					}
			}
			formulario.retencion.checked=true;
			formulario.retencion.disabled=false; 
		} else {
			for(i=0;i<formulario.elements.length;i++) {
				if (formulario.elements[i].type=="checkbox") { 
					formulario.elements[i].disabled=false; 
					}
			}
		}
	} else {
		opcion=cliqueado.name.substring(0,2);
		fila=cliqueado.name.substring(2);
		for (j=1;j<=fila;j++)
		{
				if (opcion=="of" && fila==j) {
					opcion="oi" + j;
					if (cliqueado.checked==true) {
						//alert ("Formulario "+formulario.name);
						eval("document."+formulario.name+"."+opcion+".checked=false"); 
						eval("document."+formulario.name+"."+opcion+".disabled=true"); 
						formulario.retencion.checked=false;
						formulario.retencion.disabled=true; 
					} else {
						eval("document."+formulario.name+"."+opcion+".disabled=false"); 
					}
				}
		
				if (opcion=="oi" && fila==j) {
					opcion="of" + j;
					if (cliqueado.checked==true) {
						eval("document."+formulario.name+"."+opcion+".checked=false"); 
						eval("document."+formulario.name+"."+opcion+".disabled=true"); 
						formulario.retencion.checked=false;
						formulario.retencion.disabled=true; 
					} else {
						eval(formulario.name+"."+opcion+".disabled=false"); 				
					}
				}
		}
		var carga = 0;
		for(i=1;i<=facturas;i++) {
			if (eval("document."+formulario.name+".of"+i+".checked==true") || eval("document."+formulario.name+".oi"+i+".checked==true")) {
				carga++;
			}
		}
		if (carga==0) { formulario.retencion.disabled=false; }
	}
	return true;
}


function validar_retencion(div,pag_destino,formulario) {
	var check;
	check=0;
	for(i=0;i<formulario.elements.length;i++) {
		//alert(formulario.elements[i].name);
		if (formulario.elements[i].type=="checkbox") { 
			if (formulario.elements[i].checked!=false) {
				check++; 
			} 
		}
	}
	//alert(check==1 && formulario.retencion.checked);
	if (check==0) {
		alert("No hay elementos seleccionados");
		return false;
	} else if (!(check==1 && formulario.retencion.checked)&&!(formulario.cant_facs.value==check)) {
					alert("Hay elementos de las facturas sin seleccionar");
					return false;
				
	} 
	if (formulario.otra_moneda.value=="si") {
		if (formulario.cotactual.value=="") {
			alert ("Debe actualizar la cotizacion");
			return false;
		}
	}
	ajax_post(div,pag_destino,formulario);
	
}

function validar_cuarta(div,pag_destino,formulario) {
	alert(pag_destino);
/*	var check;
	check=0;
	alert(pag_destino);
	if (!validar_solo_numerico(eval("document."+formulario.name.remuneracion)) {
		alert("La Remuneración debe ser un número");
		return false;
		} else	{*/
		ajax_post(div,pagina_destino,formulario);
//		}
}

function replace(texto,s1,s2){
	return texto.split(s1).join(s2);
}

function validar_todos_numerico(div,pag_destino,formulario) {
	volver= 0;
	for(i=0;i<formulario.elements.length;i++) {
		if (formulario.elements[i].type=="text") {
			if (isNaN(eval(formulario.elements[i].value))==true || (eval(formulario.elements[i].value)=="")) {
				alert("El importe debe ser -numerico");
				volver= 1;
				return false;
			}
		}
	}
	
	if (volver== 0) { 
		alert("div: "+div+" - dest: "+pag_destino+" - form: "+formulario.name); 
		ajax_post(div,pagina_destino,formulario);
	}
}	
function activar_retencion(check,formulario,nro_campo) {
	if (check.checked==true) {
		 eval(formulario.name+".conceptoimpuesto"+nro_campo+".disabled=false");
		 eval(formulario.name+".montoret"+nro_campo+".disabled=false");
	 } else {
		 eval(formulario.name+".conceptoimpuesto"+nro_campo+".disabled=true");
		 eval(formulario.name+".conceptoimpuesto"+nro_campo+".value=''");
		 eval(formulario.name+".montoret"+nro_campo+".disabled=true");
		 eval(formulario.name+".montoret"+nro_campo+".value=''");
	 }
	 
}
function validar_mesa(div,pag_destino,formulario)
{
  if ((formulario.nmesa.value.length==0) || !IsEmpty(formulario.nmesa.value)) {
  
	alert('Debe asignar la denominacion de la mesa');
	return false;} 
	 if (!validar_solo_numerico(formulario.nmesa)) {
		return false;
	}
		ajax_post(div,pag_destino,formulario);
	} 

function validar_pago (div,pag_destino,formulario) {
	if (!validar_campo(formulario.concepto)) {
		return false;
	}
	var cantimpuestos=formulario.cuantascols.value;
	if (formulario.esretencion.value==1) {
		if (formulario.cuenta.value==0) {
			alert ("Debe elegir la cuenta para debitar");
			return false;
		}
		if (formulario.descret.value==0) {
			alert ("Debe elegir la descripcion para DGR");
			return false;
		}
		for (i=1;i<=cantimpuestos;i++) {
			check="retiene"+i;
			if (document.getElementById(check)!=null) {
				if ((eval(formulario.name+".retiene"+i+".checked==true")) && (eval(formulario.name+".idconcepto"+i+".value==''"))){
					alert ("Esta reteniendo un impuesto sin asignar concepto");
					return false;
				}
			 } 
		}
	} else {
		var cantfacturas=formulario.cuantasfacs.value;
		var h=1;
		for (j=0;j<cantfacturas;j++) {
			if (eval(formulario.name+".cuenta"+(j+1)+".value==0")) {
				alert ("Falta elegir una cuenta para debitar");
				return false;
			}
			if (eval(formulario.name+".descret"+(j+1)+".value==0")) {
			alert ("Debe elegir la descripcion para DGR");
			return false;
			}
			for (i=1;i<=cantimpuestos;i++) {
				check="retiene"+h;
				if (document.getElementById(check)!=null) {
					if ((eval(formulario.name+".retiene"+h+".checked==true")) && (eval(formulario.name+".idconcepto"+h+".value==''"))){
						alert ("Esta reteniendo un impuesto sin asignar concepto");
						return false;
					}
			 	}
			h++;
			}
		}
	}
	ajax_post(div,pag_destino,formulario);
}

function ajax_showOptions(inputObj,paramToExternalFile,e)
	{
		if(e.keyCode==13 || e.keyCode==9)return;
		if(ajax_list_currentLetters[inputObj.name]==inputObj.value)return;
		if(!ajax_list_cachedLists[paramToExternalFile])ajax_list_cachedLists[paramToExternalFile] = new Array();
		ajax_list_currentLetters[inputObj.name] = inputObj.value;
		if(!ajax_optionDiv){
			ajax_optionDiv = document.createElement('DIV');
			ajax_optionDiv.id = 'ajax_listOfOptions';	
			document.body.appendChild(ajax_optionDiv);
			
			if(ajax_list_MSIE){
				ajax_optionDiv_iframe = document.createElement('IFRAME');
				ajax_optionDiv_iframe.border='0';
				ajax_optionDiv_iframe.style.width = ajax_optionDiv.clientWidth + 'px';
				ajax_optionDiv_iframe.style.height = ajax_optionDiv.clientHeight + 'px';
				ajax_optionDiv_iframe.id = 'ajax_listOfOptions_iframe';
				
				document.body.appendChild(ajax_optionDiv_iframe);
			}
			
			var allInputs = document.getElementsByTagName('INPUT');
			for(var no=0;no<allInputs.length;no++){
				if(!allInputs[no].onkeyup)allInputs[no].onfocus = ajax_options_hide;
			}			
			var allSelects = document.getElementsByTagName('SELECT');
			for(var no=0;no<allSelects.length;no++){
				allSelects[no].onfocus = ajax_options_hide;
			}

			var oldonkeydown=document.body.onkeydown;
			if(typeof oldonkeydown!='function'){
				document.body.onkeydown=ajax_option_keyNavigation;
			}else{
				document.body.onkeydown=function(){
					oldonkeydown();
				ajax_option_keyNavigation() ;}
			}
			var oldonresize=document.body.onresize;
			if(typeof oldonresize!='function'){
				document.body.onresize=function() {ajax_option_resize(inputObj); };
			}else{
				document.body.onresize=function(){oldonresize();
				ajax_option_resize(inputObj) ;}
			}
				
		}
		
		if(inputObj.value.length<minimumLettersBeforeLookup){
			ajax_options_hide();
			return;
		}
				

		ajax_optionDiv.style.top = (ajax_getTopPos(inputObj) + inputObj.offsetHeight + ajaxBox_offsetY) + 'px';
		ajax_optionDiv.style.left = (ajax_getLeftPos(inputObj) + ajaxBox_offsetX) + 'px';
		if(ajax_optionDiv_iframe){
			ajax_optionDiv_iframe.style.left = ajax_optionDiv.style.left;
			ajax_optionDiv_iframe.style.top = ajax_optionDiv.style.top;			
		}
		
		ajax_list_activeInput = inputObj;
		ajax_optionDiv.onselectstart =  ajax_list_cancelEvent;
		currentListIndex++;
		if(ajax_list_cachedLists[paramToExternalFile][inputObj.value.toLowerCase()]){
			ajax_option_list_buildList(inputObj.value,paramToExternalFile,currentListIndex);			
		}
		else{
			var tmpIndex=currentListIndex/1;
			ajax_optionDiv.innerHTML = '';
			var ajaxIndex = ajax_list_objects.length;
			ajax_list_objects[ajaxIndex] = new sack();
		var url = ajax_list_externalFile + '?' + paramToExternalFile + '=1&letters=' + inputObj.value.replace(" ","+");
			ajax_list_objects[ajaxIndex].requestFile = url;	// Specifying which file to get
			ajax_list_objects[ajaxIndex].onCompletion = function(){ ajax_option_list_showContent(ajaxIndex,inputObj,paramToExternalFile,tmpIndex); };	// Specify function that will be executed after file has been found
			ajax_list_objects[ajaxIndex].runAJAX();		// Execute AJAX function		
		}
	}
function  validar_cierre_diario(div,pagina,formulario,pregunta)
{
var cuenta=0;
 partes=eval("document."+formulario.name+".cantidadpartes.value");
//confirmacion(div,pagina,formulario,pregunta);
//alert(partes);
  		for (i=1;i<=partes;i++)
  		{ 
	//	alert (eval("document."+formulario.name+".publico"+i+".value"));
		 	 	if ((
				  (eval("document."+formulario.name+".fichaje"+i+".value")=="")
				  || (eval("document."+formulario.name+".fichaje"+i+".value")==0)
				  )
				  && (eval("document."+formulario.name+".acumres"+i+".value")!=0) )
				 {  
				 
				 
				 
				 
				cuenta=cuenta+1;
				alert('Ningun fichaje puede quedar vacio o 0');
				eval("document."+formulario.name+".fichaje"+i+".focus()");
				return false;
				}  
	  	}
		 
		 if (cuenta==0)
		  {
			  ajax_post(div,pagina,formulario);
			} 
	} 

function calcular_total(formulario,i,cantidad,cantidad2){ 	
 
 totalresultado=0;
 totalcaj=0;
    
		for (j=1;j<=cantidad2.value;j++) 
		{
		resul=eval("document."+formulario.name+".resultado"+i+"_"+j+".value");	
		 caja=eval("document."+formulario.name+".caja_empleado"+i+"_"+j+".value");	
 		 //var numero1 = new oNumero(resul);
	 	 //var numero2 = new oNumero(caja);
		// var totalres=numero1.formato(2,true);		
		// var totalcaja=numero2.formato(2,true);	
		if(resul==''){resul=0;}
		if(caja==''){caja=0;}
		totalresultado=parseFloat(resul)+parseFloat(totalresultado);
		totalcaj=parseFloat(caja)+parseFloat(totalcaj);
		//totalres=totalresultado.formato(2,true);
		eval('document.'+formulario.name+".totalresul"+i+".value=totalresultado");	
	 	eval('document.'+formulario.name+".totalcaja"+i+".value=totalcaj");	
		 }
		


}

 /*
 function calcular_total(formulario,cantidad,cantidad2){ 	

//alert(cantidad.value);alert(cantidad2.value);
 totalresultado=0;
 totalcaja=0;
    for (i=1;i<=cantidad.value;i++) {
		for (j=1;j<=cantidad2.value;j++) {
			//alert(eval("document."+formulario.name+".resultado"+i+"_"+j+".value"));
			resul=eval("document."+formulario.name+".resultado"+i+"_"+j+".value");	
			//caja=eval('document.'+formulario+'.caja_empleado'+i+'_'+j+'.value');	
			
			 var numero1 = new oNumero(resul);
			//var numero2 = new oNumero(caja);
						 
			 totalresultado=numero1+totalresultado;
			//	totalcaja=numero2+totalcaja;
					 
			//	var totcaj = new oNumero(totalcaja);
			}
					
		eval(formulario.name+".totalresul"+i+".value="+totalresultado);	
	
		//eval('document.'+formulario.name+'.totalcaja'+i+'.value=totalcaja.formato(2,true)')
		return true;
		}


}
*/
function ajax_get_multiple(_target,archivo,variables) {
		if(ajax_tooltipObj) {
			ajax_hideTooltip();
		}
		ImagenIndicador = new Image()
		ImagenIndicador.src = "indicator.gif"
		ImagenClock_off = new Image()
		ImagenClock_off.src = "clock_off.gif"
		ImagenClock_on = new Image()
		ImagenClock_on.src = "clock_on.gif"
		//alert(archivo+variables)
		_objetus2=objetus()
		_values_send_get=variables
		var tiempo = new Date();
		//alert(tiempo.getTime());
		archivo = archivo+"?jsfecha="+tiempo.getTime();
		if (variables=="")
			{
			_URL_=archivo
			}
			else
			{
			_URL_=archivo+"&"
			}
		//alert(_URL_+_values_send_get)
		_objetus2.open("GET",_URL_+_values_send_get,true);
		_objetus2.onreadystatechange=function(){
		if (_objetus2.readyState==0)
			{
			var mensaje_carga = "Inicializando......"	
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
		else if (_objetus2.readyState==1)
			{
			var mensaje_carga = "<div id='cargando'>Cargando</div>";//no toma foco control ingreso si lo descomento
			//var mensaje_carga = "<img src='clock_on.gif' name='ImagenClock_on' /><img src='clock_off.gif' name='ImagenClock_off' /><img src='indicator.gif' name='ImagenIndicador' />Cargando..."//no toma foco control ingreso si lo descomento
			document.getElementById(_target).innerHTML=mensaje_carga
			} 
			else if (_objetus2.readyState==4)
					{
					if (_objetus2.status==200)
						{
						//txt=unescape(_objetus.responseText);
						//txt2=txt.replace(/\+/gi," ");
						//tambien se puede probar un replace del signo mas si fuera necesario
						//ademas en el codigo php se debe colocar esto
						//$variable = urlencode($variable);
						//document.getElementById(_target).innerHTML=txt2;
						document.getElementById(_target).innerHTML=_objetus2.responseText;
						document.location.hash="posicion1"
						//document.location.hash=_target
						setTimeout("setFocus()",100);
						//setFocus()//da foco si existe un formulario con name="formulario_foco" y un campo name="text_foco o bien solamente con los id"
						enviar = false
						}
						else if (_objetus2.status==404)
						{
						var mensaje_carga = "Documento no encontrado ("+archivo+")"	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
						else
						{
						var mensaje_carga = "Error :"+_objetus2.responseText;	
						document.getElementById(_target).innerHTML=mensaje_carga
						}
					}
			}
			_objetus2.send(null);
	
	}