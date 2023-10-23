<?php 
session_start();
include("adodb/adodb.inc.php");				//ya las llamo en la conexion de mysql
include('adodb/adodb-exceptions.inc.php');	//ya las llamo en la conexion de mysql

$db2 = NewADOConnection("oci8po"); 		//oracle 9.2 o superior
//$db = NewADOConnection("mysql"); 		//MySQL
//$db = NewADOConnection("oci8"); 		//oracle 8i 0 9i
//$db = NewADOConnection("oracle"); 	//oracle 7

$rnum=rand(0,99999999);
try {
	// $db->Connect("central", "CASINO", "ESQUEMA");				//	base, usuario, clave
//						//	string de conexion, usuario, clave, base
 $db2->Connect("(DESCRIPTION =
       		    (ADDRESS =
				    (PROTOCOL = TCP)
	        		(HOST = 172.16.10.18)
			        (PORT = 1521)
			        (HASH = '.$rnum.'))
	 (CONNECT_DATA =(SID = DESA)))","CASINO","ESQUEMA");
 
	 
		
	 /*	$db->Connect("(DESCRIPTION =
       		    (ADDRESS =
				    (PROTOCOL = TCP)
	        		(HOST = 172.16.10.18)
			        (PORT = 1521)
			        (HASH = '.$rnum.'))
	 (CONNECT_DATA =(SID = DESA)))","DU".$_SESSION['usuario'],"USUARIO");
	 
*/ 
	 
	 	}
		
catch  (exception $e) 
	{ 
	//echo  $db->ErrorMsg();

		/*if ($this->dataProvider=='ORA-01017')
		{
		
		echo 'USUARIO O CLAVE INCORRECTOS';
		} */
	die($db2->ErrorMsg()."<br><br><a href=\"index.php\">Regresar a pagina anterior.</a><br><br>");
	}

//$db->charSet = 'utf-8';//oracle
//$db->debug = true; // si lo habilito muestra las transacciones en el navegador
//$db->LogSQL(); // turn on logging (solo utilizarlo cuando el sistema esta estable porque no muestra los errores de mysql) // solo para mantenimiento

##Libreria oci8po distinta forma de acceder a variables bind
##Libreria oci8
/*
try {
	//$rs = $db->Execute("select * from emp where empno>:emp order by empno", array('emp' => 7900));
	$rs = $db->SelectLimit("select * from emp where empno=>:emp order by empno",10,1, array('emp'=>7900));
	}
	catch  (exception $e) 
	{ 
	die($db->ErrorMsg());
	}
*/
##Librerias oracle y oci8
	/*
    $rs = $db->Execute("select * from emp where empno>:emp order by empno", array('emp' => 7900));
	*/
//echo $rs->RowCount();

function ComenzarTransaccion($db2) {
	$db2->StartTrans();
}

function FinalizarTransaccion($db2) {
	$db2->CompleteTrans($autoComplete=true);
}

?>