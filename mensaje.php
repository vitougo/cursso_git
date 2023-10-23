<?php session_start(); 
 $variables=str_replace('-','&',$_GET['variables']);
?>
<link href="estilo/estilo.css" rel="stylesheet" type="text/css" />
 
<table width="72%" height="79" border="0" align="center">
 
  <tr align="center">
    <td height="25" colspan="2" align="center" class="label"><div align="center" class="textboxrojo"><img src="imagenes/Error.png" width="50" height="50"  /><?php echo utf8_decode($_GET['mensaje']); ?></div></td>
  </tr>
</table>
<p><a href="#" onclick="ajax_get('<?php echo $_GET['div'] ?>','<?php echo $_GET['ira']; ?>','<?php echo $variables; ?>');"><img src="imagenes/24px-Crystal_Clear_action_reload.png" alt="Regresar" border="0" />Regresar</a></p>

 