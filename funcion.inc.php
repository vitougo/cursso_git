<?php 
function esPar($numero){ 
   $resto = $numero%2; 
   if (($resto==0) && ($numero!=0)) { 
        return true ;
   }else{ 
        return false;
   }  
 }  
function redondear ($numero, $decimales) { 
   $factor = pow(10, $decimales); 
   $numero_redondeado=round($numero*$factor)/$factor;
   return ($numero_redondeado);
    } 


function calcular_retencion($idtipoimpuesto, $idconcepto, $factura, $item, $objeto){
//echo "Res. " . $_SESSION['idresolucion'] . " - " . $idtipoimpuesto . " - conc= " . $idconcepto;
$_SESSION['idresolucion']= (int) $_SESSION['idresolucion'];
$idtipoimpuesto= (int) $idtipoimpuesto;
$idconcepto= (int) $idconcepto;
global $db;
switch ($objeto) {
	case 'resolucion':
		try {
			$rsp = $db->Execute("select administrativo.f_retencion_x_resolucion(?,?,?) as valor from dual"
								,array($_SESSION['idresolucion'], $idtipoimpuesto, $idconcepto));
			}
			catch  (exception $e) 
			{ 
			die($db->ErrorMsg());
			} 
		break;
	case 'factura':
		try {
			$rsp = $db->Execute("select administrativo.f_retencion_x_factura(?,?,?) as valor from dual"
								,array($factura, $idtipoimpuesto, $idconcepto));
			}
			catch  (exception $e) 
			{ 
			die($db->ErrorMsg());
			} 
		break;
	case 'item':
		try {
			$rsp = $db->Execute("select administrativo.f_retencion_x_item(?,?,?) as valor from dual"
								,array($item, $idtipoimpuesto, $idconcepto));
			}
			catch  (exception $e) 
			{ 
			die($db->ErrorMsg());
			} 
		break;
	}
//	if ($rsp){
		$row = $rsp->FetchNextObject($toupper=true);
		if (is_numeric($row->VALOR)) {
			echo "$ " . number_format($row->VALOR,2,'.',',');
		} else {
			echo $row->VALOR;
		}
}

#Funcion paginar
# Calcula la cantidad de paginas  
# Devuelve un objeto select con cantidad de paginas	 	
function paginar($pagina,$filas,$reg,$limite)
		{
		$hasta = ceil($filas/$limite);
		$objeto = "<form name='paginacion'>".
					"<div align='right'>".
					  "<select name='pagina' class='small' onChange='ir_a_pagina(this,0)'>";
						for($i=1;$i<=ceil($filas/$limite);$i++)
							{
							$desde = $i;
							$reg_desde = ($i-1)*$limite;
							if ($reg_desde==$reg) 
								{ 
								$seleccion = "selected";
								} 
								else
								{
								$seleccion = "";
								}
					  $objeto.=  "<option value='$pagina?reg_desde=$reg_desde'".$seleccion.">Página $desde de $hasta</option>";
					  }
					  $objeto.=  "</select>".
							"</div>".
						"</form>";
		 echo $objeto;
		 }
#Funcion paginar con parametros
#Calcula la cantidad de paginas  
#Devuelve un objeto select con cantidad de paginas	 	
#Devuelve un objeto select con cantidad de paginas y mueve variables entre las paginas	
function paginar_con_variables($pagina,$filas,$reg,$limite,$param)
		{
		$hasta = ceil($filas/$limite);
		$objeto = "<form name='paginacion'>".
					"<div align='right'>".
					  "<select name='pagina' class='small' onChange='ir_a_pagina(this,0)'>";
						for($i=1;$i<=ceil($filas/$limite);$i++)
							{
							$desde = $i;
							$reg_desde = ($i-1)*$limite;
							if ($reg_desde==$reg) 
								{ 
								$seleccion = "selected";
								} 
								else
								{
								$seleccion = "";
								}
					 		 $objeto.=  "<option value='$pagina?reg_desde=$reg_desde$param'".$seleccion.">Página $desde de $hasta</option>";
							 }
							 $objeto.=  "</select>".
							"</div>".
						"</form>";
		 echo $objeto;
		 }
		 
#Funcion date_diff
# Calculate the difference between 2 dates in YYYY-MM-DD format.
# Returns the number of days difference.

function date_diff2($date1, $date2)
	{
	//$date1  today, or any other day
	//$date2  date to check against

	$d1 = explode("-", $date1);
	$y1 = $d1[0];
	$m1 = $d1[1];
	$d1 = $d1[2];

	$d2 = explode("-", $date2);
	$y2 = $d2[0];
	$m2 = $d2[1];
	$d2 = $d2[2];

	$date1_set = mktime(0,0,0, $m1, $d1, $y1);
	$date2_set = mktime(0,0,0, $m2, $d2, $y2);

return(round(($date2_set-$date1_set)/(60*60*24))); 
}
#Funcion descargar archivo
#Esta funcion envia las salidas de una pagina a archivo plano
function Descargar($ElFichero)
	{ 
		$TheFile = basename($ElFichero); 
	    header( "Content-Type: text/plain");  
	    header( "Content-Length: ".filesize($ElFichero));  
	    header( "Content-Disposition: attachment; filename=".$TheFile."");  
	    readfile($ElFichero);  
	} 

#Funcion color dinamico de grilla
#Esta funcion intercala lineas de dos colores ditintos en las td

function dinamic_back_color()
	{
	global $linea_dbc;
	if (isset($linea_dbc))
			{
			$linea_dbc++;
			}
			else
			{
			$linea_dbc=0;
			}
	if (fmod($linea_dbc,2)==0)
		{
		echo " bgcolor='#BBBB77'";
		}
		else
		{
		echo " bgcolor='#C8C891'";
		}
	}

#Estas funciones se utilizan para descargar paginas en forma zipeada
#zip_inicio va al principio del documento
#zip_fin va al final del documento
function zip_inicio()
	{	
	ob_start();
	}
function zip_fin()
	{
	$x=ob_get_contents();
	if ($x==true)
		{
		ob_end_clean();
		$x=str_replace("\n","",$x);
		$x=ereg_replace("[[:space:]]+",",",$x);
		ob_start("ob_gzhandler");
		echo $x;
		ob_end_flush();
		}
	}
function armar_combo_fecha($dia,$dia_nombre,$mes,$mes_nombre,$anio,$anio_nombre)
 	 {
 	 	$combo=	"<select name='".$dia_nombre."' id='".$dia_nombre."' onChange='validar_fecha(".$dia_nombre.",".$mes_nombre.",".$anio_nombre.")' class='small'>
			          <option value='01'";if ($dia=='01') {$combo.=' selected';} $combo.=">01</option>
			          <option value='02'";if ($dia=='02') {$combo.=' selected';} $combo.=">02</option>
			          <option value='03'";if ($dia=='03') {$combo.=' selected';} $combo.=">03</option>
			          <option value='04'";if ($dia=='04') {$combo.=' selected';} $combo.=">04</option>
			          <option value='05'";if ($dia=='05') {$combo.=' selected';} $combo.=">05</option>
			          <option value='06'";if ($dia=='06') {$combo.=' selected';} $combo.=">06</option>
			          <option value='07'";if ($dia=='07') {$combo.=' selected';} $combo.=">07</option>
			          <option value='08'";if ($dia=='08') {$combo.=' selected';} $combo.=">08</option>
			          <option value='09'";if ($dia=='09') {$combo.=' selected';} $combo.=">09</option>
			          <option value='10'";if ($dia=='10') {$combo.=' selected';} $combo.=">10</option>
			          <option value='11'";if ($dia=='11') {$combo.=' selected';} $combo.=">11</option>
			          <option value='12'";if ($dia=='12') {$combo.=' selected';} $combo.=">12</option>
			          <option value='13'";if ($dia=='13') {$combo.=' selected';} $combo.=">13</option>
			          <option value='14'";if ($dia=='14') {$combo.=' selected';} $combo.=">14</option>
			          <option value='15'";if ($dia=='15') {$combo.=' selected';} $combo.=">15</option>
			          <option value='16'";if ($dia=='16') {$combo.=' selected';} $combo.=">16</option>
			          <option value='17'";if ($dia=='17') {$combo.=' selected';} $combo.=">17</option>
			          <option value='18'";if ($dia=='18') {$combo.=' selected';} $combo.=">18</option>
			          <option value='19'";if ($dia=='19') {$combo.=' selected';} $combo.=">19</option>
			          <option value='20'";if ($dia=='20') {$combo.=' selected';} $combo.=">20</option>
			          <option value='21'";if ($dia=='21') {$combo.=' selected';} $combo.=">21</option>
			          <option value='22'";if ($dia=='22') {$combo.=' selected';} $combo.=">22</option>
			          <option value='23'";if ($dia=='23') {$combo.=' selected';} $combo.=">23</option>
			          <option value='24'";if ($dia=='24') {$combo.=' selected';} $combo.=">24</option>
			          <option value='25'";if ($dia=='25') {$combo.=' selected';} $combo.=">25</option>
			          <option value='26'";if ($dia=='26') {$combo.=' selected';} $combo.=">26</option>
			          <option value='27'";if ($dia=='27') {$combo.=' selected';} $combo.=">27</option>
			          <option value='28'";if ($dia=='28') {$combo.=' selected';} $combo.=">28</option>
			          <option value='29'";if ($dia=='29') {$combo.=' selected';} $combo.=">29</option>
			          <option value='30'";if ($dia=='30') {$combo.=' selected';} $combo.=">30</option>
			          <option value='31'";if ($dia=='31') {$combo.=' selected';} $combo.=">31</option>
		            </select>
		            <select name='".$mes_nombre."'id='".$mes_nombre."' onChange='validar_fecha(".$dia_nombre.",".$mes_nombre.",".$anio_nombre.")' class='small'>
		              <option value='01'"; if ($mes=='01') {$combo.=' selected';} $combo.=">Enero</option>
		              <option value='02'"; if ($mes=='02') {$combo.=' selected';} $combo.=">Febrero</option>
		              <option value='03'"; if ($mes=='03') {$combo.=' selected';} $combo.=">Marzo</option>
		              <option value='04'"; if ($mes=='04') {$combo.=' selected';} $combo.=">Abril</option>
		              <option value='05'"; if ($mes=='05') {$combo.=' selected';} $combo.=">Mayo</option>
		              <option value='06'"; if ($mes=='06') {$combo.=' selected';} $combo.=">Junio</option>
		              <option value='07'"; if ($mes=='07') {$combo.=' selected';} $combo.=">Julio</option>
		              <option value='08'"; if ($mes=='08') {$combo.=' selected';} $combo.=">Agosto</option>
		              <option value='09'"; if ($mes=='09') {$combo.=' selected';} $combo.=">Septiembre</option>
		              <option value='10'"; if ($mes=='10') {$combo.=' selected';} $combo.=">Octubre</option>
		              <option value='11'"; if ($mes=='11') {$combo.=' selected';} $combo.=">Noviembre</option>
		              <option value='12'"; if ($mes=='12') {$combo.=' selected';} $combo.=">Diciembre</option>
	                </select>
		            <select name='".$anio_nombre."'id='".$anio_nombre."' onChange='validar_fecha(".$dia_nombre.",".$mes_nombre.",".$anio_nombre.")' class='small'>
		              <option value='1950'"; if ($anio=='1950') {$combo.=' selected';} $combo.=">1950</option>
		              <option value='1951'"; if ($anio=='1951') {$combo.=' selected';} $combo.=">1951</option>
		              <option value='1952'"; if ($anio=='1952') {$combo.=' selected';} $combo.=">1952</option>
		              <option value='1953'"; if ($anio=='1953') {$combo.=' selected';} $combo.=">1953</option>
		              <option value='1954'"; if ($anio=='1954') {$combo.=' selected';} $combo.=">1954</option>
		              <option value='1955'"; if ($anio=='1955') {$combo.=' selected';} $combo.=">1955</option>
		              <option value='1956'"; if ($anio=='1956') {$combo.=' selected';} $combo.=">1956</option>
		              <option value='1957'"; if ($anio=='1957') {$combo.=' selected';} $combo.=">1957</option>
		              <option value='1958'"; if ($anio=='1958') {$combo.=' selected';} $combo.=">1958</option>
		              <option value='1959'"; if ($anio=='1959') {$combo.=' selected';} $combo.=">1959</option>
		              <option value='1960'"; if ($anio=='1960') {$combo.=' selected';} $combo.=">1960</option>
		              <option value='1961'"; if ($anio=='1961') {$combo.=' selected';} $combo.=">1961</option>
		              <option value='1962'"; if ($anio=='1962') {$combo.=' selected';} $combo.=">1962</option>
		              <option value='1963'"; if ($anio=='1963') {$combo.=' selected';} $combo.=">1963</option>
		              <option value='1964'"; if ($anio=='1964') {$combo.=' selected';} $combo.=">1964</option>
		              <option value='1965'"; if ($anio=='1965') {$combo.=' selected';} $combo.=">1965</option>
		              <option value='1966'"; if ($anio=='1966') {$combo.=' selected';} $combo.=">1966</option>
		              <option value='1967'"; if ($anio=='1967') {$combo.=' selected';} $combo.=">1967</option>
		              <option value='1968'"; if ($anio=='1968') {$combo.=' selected';} $combo.=">1968</option>
		              <option value='1969'"; if ($anio=='1969') {$combo.=' selected';} $combo.=">1969</option>
		              <option value='1970'"; if ($anio=='1970') {$combo.=' selected';} $combo.=">1970</option>
		              <option value='1971'"; if ($anio=='1971') {$combo.=' selected';} $combo.=">1971</option>
		              <option value='1972'"; if ($anio=='1972') {$combo.=' selected';} $combo.=">1972</option>
		              <option value='1973'"; if ($anio=='1973') {$combo.=' selected';} $combo.=">1973</option>
		              <option value='1974'"; if ($anio=='1974') {$combo.=' selected';} $combo.=">1974</option>
		              <option value='1975'"; if ($anio=='1975') {$combo.=' selected';} $combo.=">1975</option>
		              <option value='1976'"; if ($anio=='1976') {$combo.=' selected';} $combo.=">1976</option>
		              <option value='1977'"; if ($anio=='1977') {$combo.=' selected';} $combo.=">1977</option>
		              <option value='1978'"; if ($anio=='1978') {$combo.=' selected';} $combo.=">1978</option>
		              <option value='1979'"; if ($anio=='1979') {$combo.=' selected';} $combo.=">1979</option>
		              <option value='1980'"; if ($anio=='1980') {$combo.=' selected';} $combo.=">1980</option>
		              <option value='1981'"; if ($anio=='1981') {$combo.=' selected';} $combo.=">1981</option>
		              <option value='1982'"; if ($anio=='1982') {$combo.=' selected';} $combo.=">1982</option>
		              <option value='1983'"; if ($anio=='1983') {$combo.=' selected';} $combo.=">1983</option>
		              <option value='1984'"; if ($anio=='1984') {$combo.=' selected';} $combo.=">1984</option>
		              <option value='1985'"; if ($anio=='1985') {$combo.=' selected';} $combo.=">1985</option>
		              <option value='1986'"; if ($anio=='1986') {$combo.=' selected';} $combo.=">1986</option>
		              <option value='1987'"; if ($anio=='1987') {$combo.=' selected';} $combo.=">1987</option>
		              <option value='1988'"; if ($anio=='1988') {$combo.=' selected';} $combo.=">1988</option>
		              <option value='1989'"; if ($anio=='1989') {$combo.=' selected';} $combo.=">1989</option>
		              <option value='1990'"; if ($anio=='1990') {$combo.=' selected';} $combo.=">1990</option>
		              <option value='1991'"; if ($anio=='1991') {$combo.=' selected';} $combo.=">1991</option>
		              <option value='1992'"; if ($anio=='1992') {$combo.=' selected';} $combo.=">1992</option>
		              <option value='1993'"; if ($anio=='1993') {$combo.=' selected';} $combo.=">1993</option>
		              <option value='1994'"; if ($anio=='1994') {$combo.=' selected';} $combo.=">1994</option>
		              <option value='1995'"; if ($anio=='1995') {$combo.=' selected';} $combo.=">1995</option>
		              <option value='1996'"; if ($anio=='1996') {$combo.=' selected';} $combo.=">1996</option>
		              <option value='1997'"; if ($anio=='1997') {$combo.=' selected';} $combo.=">1997</option>
		              <option value='1998'"; if ($anio=='1998') {$combo.=' selected';} $combo.=">1998</option>
		              <option value='1999'"; if ($anio=='1999') {$combo.=' selected';} $combo.=">1999</option>
		              <option value='2000'"; if ($anio=='2000') {$combo.=' selected';} $combo.=">2000</option>
		              <option value='2001'"; if ($anio=='2001') {$combo.=' selected';} $combo.=">2001</option>
		              <option value='2002'"; if ($anio=='2002') {$combo.=' selected';} $combo.=">2002</option>
		              <option value='2003'"; if ($anio=='2003') {$combo.=' selected';} $combo.=">2003</option>
		              <option value='2004'"; if ($anio=='2004') {$combo.=' selected';} $combo.=">2004</option>
		              <option value='2005'"; if ($anio=='2005') {$combo.=' selected';} $combo.=">2005</option>
		              <option value='2006'"; if ($anio=='2006') {$combo.=' selected';} $combo.=">2006</option>
		              <option value='2007'"; if ($anio=='2007') {$combo.=' selected';} $combo.=">2007</option>
		              <option value='2008'"; if ($anio=='2008') {$combo.=' selected';} $combo.=">2008</option>
		              <option value='2009'"; if ($anio=='2009') {$combo.=' selected';} $combo.=">2009</option>
		              <option value='2010'"; if ($anio=='2010') {$combo.=' selected';} $combo.=">2010</option>
		              <option value='2011'"; if ($anio=='2011') {$combo.=' selected';} $combo.=">2011</option>
		              <option value='2012'"; if ($anio=='2012') {$combo.=' selected';} $combo.=">2012</option>
		              <option value='2013'"; if ($anio=='2013') {$combo.=' selected';} $combo.=">2013</option>
		              <option value='2014'"; if ($anio=='2014') {$combo.=' selected';} $combo.=">2014</option>
		              <option value='2015'"; if ($anio=='2015') {$combo.=' selected';} $combo.=">2015</option>
		              <option value='2016'"; if ($anio=='2016') {$combo.=' selected';} $combo.=">2016</option>
		              <option value='2017'"; if ($anio=='2017') {$combo.=' selected';} $combo.=">2017</option>
		              <option value='2018'"; if ($anio=='2018') {$combo.=' selected';} $combo.=">2018</option>
		              <option value='2019'"; if ($anio=='2019') {$combo.=' selected';} $combo.=">2019</option>
		              <option value='2020'"; if ($anio=='2020') {$combo.=' selected';} $combo.=">2020</option>
		              <option value='2021'"; if ($anio=='2021') {$combo.=' selected';} $combo.=">2021</option>
		              <option value='2022'"; if ($anio=='2022') {$combo.=' selected';} $combo.=">2022</option>
		              <option value='2023'"; if ($anio=='2023') {$combo.=' selected';} $combo.=">2023</option>
		              <option value='2024'"; if ($anio=='2024') {$combo.=' selected';} $combo.=">2024</option>
		              <option value='2025'"; if ($anio=='2025') {$combo.=' selected';} $combo.=">2025</option>
		              <option value='2026'"; if ($anio=='2026') {$combo.=' selected';} $combo.=">2026</option>
		              <option value='2027'"; if ($anio=='2027') {$combo.=' selected';} $combo.=">2027</option>
		              <option value='2028'"; if ($anio=='2029') {$combo.=' selected';} $combo.=">2028</option>
		              <option value='2029'"; if ($anio=='2029') {$combo.=' selected';} $combo.=">2029</option>
		              <option value='2030'"; if ($anio=='2030') {$combo.=' selected';} $combo.=">2030</option>
		              <option value='2999'"; if ($anio=='2999') {$combo.=' selected';} $combo.=">2999</option>
	                </select>";
    		echo $combo;
	 }
function armar_combo($rs,$nombre,$puntero)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='tdVerde'>";
    		$columna = $rs->MoveFirst();
		
		while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_onChange($rs,$nombre,$puntero,$funcion)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='small' onChange='$funcion'>";
    	while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_ninguno($rs,$nombre,$puntero)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox'>";
		$combo.= "<option value=0>Ninguno</option>";
    	while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_seleccione($rs,$nombre,$puntero)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox'>";
		$combo.= "<option value=0>Seleccione...</option>";
    	$columna = $rs->MoveFirst();
		while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".utf8_encode($columna->DESCRIPCION)."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_disabled($rs,$nombre,$puntero)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox' disabled=disabled>";
		//$combo.= "<option value=0>Ninguno</option>";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_ninguno_disabled($rs,$nombre,$puntero)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox' disabled=disabled>";
		$combo.= "<option value=0>Ninguno</option>";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_todos($rs,$nombre,$puntero)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox'>";
		$combo.= "<option value=0>Todos</option>";
    	$columna = $rs->MoveFirst();
		while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".utf8_encode($columna->DESCRIPCION)."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_ejecutar($rs,$nombre,$puntero,$nombre_formulario)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange='document.".$nombre_formulario.".submit()'>";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='textbox' value='Buscar'>";
		echo $combo;
	 }
function armar_combo_todos_ajax_variables($rs,$nombre,$puntero,$target,$archivo,$variables)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox' onChange=\"ajax_get('$target','$archivo','codigo='+this.value+'$variables')\">";
		$combo.= "<option value=0 ";if ($puntero==0) {$combo.=' selected';} $combo.=" >Todos</option>";
    	$columna = $rs->MoveFirst();
		while ($columna = $rs->FetchNextObject($toupper=true)) {
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".utf8_encode($columna->DESCRIPCION)."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
	 function armar_combo_todos_ajax_variables_multiple($rs,$nombre,$puntero,$target,$archivo,$variables,$target2,$archivo2,$variables2)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox' onChange=\"ajax_get('$target','$archivo','codigo='+this.value+'$variables'); ajax_get_multiple('$target2','$archivo2','codigo='+this.value+'$variables2')\">";
		$combo.= "<option value=0 ";if ($puntero==0) {$combo.=' selected';} $combo.=" >Todos</option>";
    	$columna = $rs->MoveFirst();
		while ($columna = $rs->FetchNextObject($toupper=true)) {
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".utf8_encode($columna->DESCRIPCION)."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_ajax_variables($rs,$nombre,$puntero,$target,$archivo,$variables)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox' onChange=\"ajax_get('$target','$archivo','codigo='+this.value+'$variables')\">";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select>";
		echo $combo;
	 }
function armar_combo_ejecutar_ajax_post($rs,$nombre,$puntero,$target,$destino,$formulario)
 	 { 	 	
 	    $combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange=\"ajax_post('$target','$destino',document."."$formulario);\">";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='textbox' value='Buscar'>";
		echo $combo;
	 }
	 
	 function armar_combo_todos_ejecutar_ajax_post($rs,$nombre,$puntero,$target,$destino,$formulario)
 	 { 	 	
 	    $combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange=\"ajax_post('$target','$destino',document."."$formulario);\">";
		$combo.= "<option value=0>Todos</option>";
    	while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {				$combo.=' selected';} $combo.=">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='textbox' value='Buscar'>";
		echo $combo;
	 }
	 
function armar_combo_todos_ejecutar_ajax_post1($rs,$nombre,$puntero,$target,$destino,$formulario)
 	 { 	 	
 	    $combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange=\"ajax_post('$target','$destino',document."."$formulario);\">";
		$combo.= "<option value=0>Todos</option>";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='textbox' value='Buscar'>";
		echo $combo;
	 }
function armar_combo_ejecutar_ninguno_ajax_get($rs,$nombre,$target,$destino)
 	 { 	 	
 	    $combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange=\"ajax_get('$target','$destino','$nombre='+this.value);\">";
		$combo.= "<option value=0 selected >Seleccione...</option>";
   		while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'".">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='textbox' value='Buscar'>";
		
		echo $combo;
	 }
function armar_combo_ejecutar_ninguno_ajax_get_puntero($rs,$nombre,$puntero,$target,$destino)
 	 { 	 	
 	    $combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange=\"ajax_get('$target','$destino','$nombre='+this.value);\">";
		$combo.= "<option value=0 selected >Seleccione...</option>";
   		while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'"; if ($columna->CODIGO==$puntero) {$combo.=' selected';} $combo.=">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='textbox' value='Buscar'>";
		
		echo $combo;
	 }
function armar_combo_todos_ejecutar($rs,$nombre,$puntero,$nombre_formulario)
 	 {
 	 	$combo = "<select name='$nombre' id='$nombre' class='textbox' onChange='document.".$nombre_formulario.".submit()'>";
		$combo.= "<option value=0>Todos</option>";
    	while ($columna = $rs->FetchRow()) 
			{
			$combo.= "<option value='".$columna['codigo']."'"; if ($columna['codigo']==$puntero) {$combo.=' selected';} $combo.=">".$columna['descripcion']."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='small' value='Buscar'>";
		echo $combo;
	 }
function lista_valores($puntero_codigo,$puntero_descripcion,$pagina_destino,$variables_get,$campo_codigo_destino,$campo_descripcion_destino,$reset)
 	 {
 	 $combo = "<input name=\"$campo_codigo_destino\" type=\"hidden\" id=\"$campo_codigo_destino\" class=\"small\" value=\"$puntero_codigo\">";
	 $combo.= "<input name=\"$campo_descripcion_destino\" type=\"text\" id=\"$campo_descripcion_destino\" class=\"small\" value=\"$puntero_descripcion\" readonly=\"true\" size=\"50\">";
	 $combo.= "<input type=\"button\" id=\"Submit$campo_descripcion_destino\" name=\"Submit$campo_descripcion_destino\" value=\"...\" class=\"small\" onClick=\"abrir_ventana_cabecera('$pagina_destino','$variables_get',this.form.name,'$campo_codigo_destino','$campo_descripcion_destino'); $reset;\" >";
	 echo $combo;
	 }
function mostrar_elementos_array($array)
	{
		$n=0;
		foreach($array as $valor) {
		   	print "Elemento: ".$n." -> $valor <BR>";
			$n++;
		}
	}
//include("../db_conecta.inc.php");
function ValidarPermiso($sistema){
	global $DB;
	session_start();
	try {
		$rs = $DB->Execute("Select count(*) as cantidad 
		from si_usuario a, si_usuario_sistema b, si_sistema c
		where a.cod_usuario = b.cod_usuario
		and b.cod_sistema = c.cod_sistema
		and a.cod_usuario = ?
		and c.cod_sistema = ?",array($_SESSION['cod_usuario'],$sistema));
		}
		catch  (exception $e) 
		{ 
		die($DB->ErrorMsg());
		}
		$row = $rs->FetchNextObject($toupper=true);
	if ($row->CANTIDAD == 0) {header("location: ../modulo_no_autorizado.php");}
}
function FechaServer() {
//echo date_default_timezone_get();
date_default_timezone_set("America/Argentina/Cordoba"); // cuando regresemos a nuevo horario (Marzo 2008)
//date_default_timezone_set("America/Montevideo");
return getdate(mktime(date("h"), date("i"), date("s"), date("m")  , date("d"), date("Y"))); 

}
 function devolverDiacastellano($dia){
$DIA= strtoupper($dia);
switch ($DIA) {
case 'MONDAY':$result = 'Lunes'; break;
case 'TUESDAY': $result = 'Martes'; break;
case 'WEDNESDAY': $result = 'Miercoles'; break;
case 'THURSDAY': $result = 'Jueves'; break;
case 'FRIDAY': $result = 'Viernes'; break;
case 'SATURDAY': $result = 'S&aacute;bado'; break;
case 'SUNDAY': $result = 'Domingo'; break;
default: $result = 'errorenfecha';  }
 return $result;
 }
 function devolvermescastellano($month){
$MES= strtoupper($month);
switch ($MES) {
case 'JANUARY':$result = 'Enero'; break;
case 'FEBRUARY': $result = 'Febrero'; break;
case 'MARCH': $result = 'Marzo'; break;
case 'APRIL': $result = 'Abril'; break;
case 'MAY': $result = 'Mayo'; break;
case 'JUNE': $result = 'Junio'; break;
case 'JULY': $result = 'Julio'; break;
case 'AUGUST': $result = 'Agosto'; break;
case 'SEPTEMBER': $result = 'Septiembre'; break;
case 'OCTOBER': $result = 'Octubre'; break;
case 'NOVEMBER': $result = 'Noviembre'; break;
case 'DECEMBER': $result = 'Diciembre'; break;
 
default: $result = 'errorenfecha';  }
 return $result;
 }
function FormatearFactura($numero){
	return str_pad($numero, 13, "0001-00000000", STR_PAD_LEFT);
}
function FormatearCuit($numero){
	return str_pad(substr($numero,0,2), 2, "00", STR_PAD_LEFT).'-'.str_pad(substr($numero,2,8), 6, "0", STR_PAD_LEFT).'-'.str_pad(substr($numero,10,1), 1, "0", STR_PAD_LEFT);
}

	
	
	
function  grabarcampoclob($idtabla ,$idvalor , $tabla, $campo, $campovalor)
{   global $db;
	session_start();
$tabla='administrativo.'.$tabla;
 
$ancho=strlen($campovalor);
$cant=ceil($ancho/3500);

 try {
		$rs = $db->Execute("update  $tabla set $campo=null where 
		$idtabla=$idvalor ");
		}
		catch  (exception $e) 
		{ 
		die($db->ErrorMsg());
		}


for($i=0;$i<$cant;$i++) {
 	$cadena=substr($campovalor,$i*3500,3500);
	$comando='update '.$tabla. ' set '.$campo.'=concat( '.utf8_decode($campo).',\''.utf8_decode($cadena).'\') where '.
		$idtabla. '='.$idvalor ;

 	try {
		$rs = $db->Execute($comando);
		}
		catch  (exception $e) 
		{ 
		die($db->ErrorMsg());
		}
		
}


}
 function armar_combo_ejecutar_ajax_get_orden_compra($rs,$nombre,$target,$destino, $parametros, $parametro2)
 	 { 	 	// echo "parametro2 ".$parametro2;
 	    $combo = "<select name='$nombre' id='$nombre' class='textbox'  onChange=\"ajax_get('$target','$destino','$nombre='+this.value+'&idproveedor='+$parametros+'&tipo=$parametro2');\">";
		$combo.= "<option value=0 selected >Seleccione...</option>";
   		while ($columna = $rs->FetchNextObject($toupper=true)) 
			{
			$combo.= "<option value='".$columna->CODIGO."'".">".$columna->DESCRIPCION."</option>";
			}
		$combo.= "</select><input name='Submit' type='hidden' class='small' value='Buscar'>";
		
		echo $combo;
	 }


 
?>