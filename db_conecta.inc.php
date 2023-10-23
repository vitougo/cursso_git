<?php 
include('adodb/adodb-exceptions.inc.php'); 
include('adodb/adodb.inc.php'); 
$DB = NewADOConnection("oci8po"); //oracle 9.2 o superior
//$db = NewADOConnection("oci8"); //oracle 8i 0 9i
//$db = NewADOConnection("oracle"); //oracle 7
//$DB->NLS_DATE_FORMAT =  'RRRR-MM-DD HH24:MI:SS';
//$DB->charSet = 'we8iso8859p1';//oracle
$rnum=rand(0,99999999);
//$DB->Connect("XE", "rrhh", "esquema");
try 
{
$DB->Connect("(DESCRIPTION =
       		    (ADDRESS =
		    (PROTOCOL = TCP)
        		(HOST = 172.16.10.18)
		        (PORT = 1521)
		        (HASH = '.$rnum.')
		     )
		(CONNECT_DATA =(SID = DESA))
		)", "RRHH", "esquema");
}
catch  (exception $e) 
{ 
die($db->ErrorMsg()."<br><br><a href=\"../cau/index.php\">Regresar a pagina anterior.</a><br><br>");
}
/*
try {$db->Connect("(DESCRIPTION =				
       		    (ADDRESS =
				    (PROTOCOL = TCP)
	        		(HOST = 172.16.0.102)
			        (PORT = 1521)
			        (HASH = '.$rnum.'))
				  (CONNECT_DATA =(SID = central)))", "DU".$_SESSION['usuario'], $_SESSION['clave']); }   //Conexion local
	catch  (exception $e) { die($db->ErrorMsg()."<br><br><a href=\"../cau/index.php\">Regresar a pagina anterior.</a><br><br>");}
*/

//$DB = NewADOConnection('mysql'); 
//$DB->Connect("localhost"/*Server*/, "delicity"/*User*/, "delicity"/*PASS*/, "delicity"/*Base*/);# M'soft style data retrieval with binds 
//try {
//	$DB->Execute("SET CHARACTER SET 'utf8'");
//	}
//	catch  (exception $e) 
//	{ 
//	die($DB->ErrorMsg());
//	}
//$DB->charSet = 'utf-8';//oracle
//$DB->debug = true; // si lo habilito muestra las transacciones en el navegador
//$DB->LogSQL(); // turn on logging (solo utilizarlo cuando el sistema esta estable porque no muestra los errores de mysql) // solo para mantenimiento
function ComenzarTransaccion($DB) {
	Try {
		$DB->Execute("SET AUTOCOMMIT=0");
		}
		catch  (exception $e) 
		{ 
		die($DB->ErrorMsg());
		}
	Try {
		$DB->Execute("Start transaction");
		}
		catch  (exception $e) 
		{ 
		die($DB->ErrorMsg());
		}
}
function FinalizarTransaccion($DB) {
	Try {
		$DB->Execute("Commit");
		}
		catch  (exception $e) 
		{ 
		die($DB->ErrorMsg());
		}
}
?>