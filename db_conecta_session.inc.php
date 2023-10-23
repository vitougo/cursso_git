<?php
session_start();
include('adodb/adodb-exceptions.inc.php'); 
include('adodb/adodb.inc.php'); 
$DB = NewADOConnection("oci8po"); //oracle 9.2 o superior
//$db = NewADOConnection("oci8"); //oracle 8i 0 9i
//$db = NewADOConnection("oracle"); //oracle 7
$rnum=rand(0,99999999);
//echo $_SESSION['usuario'];
try {
	$DB->Connect("(DESCRIPTION =
       		    (ADDRESS =
		    (PROTOCOL = TCP)
        		(HOST = 172.16.10.18)
		        (PORT = 1521)
		        (HASH = '.$rnum.')
		     )
		(CONNECT_DATA =(SID = DESA))
             )", $_SESSION['usuario'], $_SESSION['clave']);
	}
	catch  (exception $e) 
	{ 
	die("<a href=\"index.php\">Su sesion en el sistema ha expirado, por favor vuelava a ingresar</a><br>".$DB->ErrorMsg());
	}
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
   $DB->StartTrans();
}
function FinalizarTransaccion($DB) {
   $DB->CompleteTrans($autoComplete=true);
}
?>