<?php //session_start();  
include ("db_conecta_oracle_adodb.inc.php");
include("funcion.inc.php");
include("jscalendar-1.0/calendario.php");
$cuenta=0;
$ccc=0;
//ini_set('memory_limit', '256M');
//ini_set('max_input_vars', '9000');
//echo $_SESSION['usuario'];
//echo $_SESSION['id_area'];
//echo $_GET['id_area'];
//print_r($_SESSION);
$array_fecha = FechaServer(); 
    try 
   		{  
		//$permiso=$db->Execute(" SELECT  granted_role ROL from user_role_privs where granted_role lIKE 'ROL_CASINO_PAR_DIARIO%'	");
		//PARA NACHO
		$permiso=$db->Execute(" SELECT  granted_role ROL from user_role_privs where granted_role lIKE 'ROL_CASINO_PAR_DIARIO%'
		or granted_role lIKE 'ROL_DWH_PROCESO'");
 		}
		catch  (exception $e) 
		{ 
		die($db->ErrorMsg());
		}

// echo $perm;
?>

<link href="estilo/estilo.css" rel="stylesheet" type="text/css"> 
<?php $fecha = str_pad($array_fecha["mday"],2,'0',STR_PAD_LEFT).'/'.str_pad($array_fecha["mon"],2,'0',STR_PAD_LEFT).'/'.$array_fecha["year"];
if (isset($_GET['id_area']))
{
 $_SESSION['id_area']=$_GET['id_area'];
}
 
try
		{
		
		$rscasino=$db->Execute ("select c.id_casino, upper(c.n_casino) n_casino from
							    casino.t_casinos  c
						  		 where c.id_area=?",array($_SESSION['id_area']));
			 
		}
		catch  (exception $e) 
		{ 
			die($db->ErrorMsg());
		}
		
		$rwpermiso = $permiso->FetchNextObject($toupper=true);
         $perm= $rwpermiso->ROL;
		 //echo $perm;
		if (($rscasino->Rowcount()>0) || ($perm=='ROL_CASINO_PAR_DIARIO_ADMIN')){ 
		$rowcasino = $rscasino->FetchNextObject($toupper=true);
	
		$_SESSION['NCASINO']=$rowcasino->N_CASINO;
		$_SESSION['IDCASINO']=$rowcasino->ID_CASINO;
		if (is_null($_SESSION['IDCASINO']))
		{ 
		$_SESSION['IDCASINO']=4;
		} 
	 
		?>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="tooltip/css/ajax-tooltip.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" media="all" href="estilo/alertbox_jquery/sexyalertbox.css"/>
<script type="text/javascript" src="jscalendar-1.0/calendar.js"></script>
<script type="text/javascript" src="jscalendar-1.0/lang/calendar-es.js"></script>
<script type="text/javascript" src="jscalendar-1.0/calendar-setup.js"></script>
 
<link rel="stylesheet" type="text/css" media="all" href="jscalendar-1.0/calendar-brown.css" title="summer" />
<script type="text/javascript" src="tooltip/js/ajax-dynamic-content.js"></script>
<script type="text/javascript" src="tooltip/js/ajax.js"></script>
<script type="text/javascript" src="tooltip/js/ajax-tooltip.js"></script>	
<script type="text/javascript" src="estilo/alertbox_jquery/jquery.min.js"></script>
<script type="text/javascript" src="estilo/alertbox_jquery/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="estilo/alertbox_jquery/sexyalertbox.v1.2.jquery.js"></script>
<script type="text/javascript" src="tooltip_fijo/js/ajax-dynamic-content_fijo.js"></script>
<script type="text/javascript" src="tooltip_fijo/js/ajax_fijo.js"></script>
<script type="text/javascript" src="tooltip_fijo/js/ajax-tooltip_fijo.js"></script>	

<script language="javascript" src="funcion.js"></script>
<!--%%%%%%%%%%%% QuickMenu Styles [Keep in head for full validation!] %%%%%%%%%%%-->
<style type="text/css">


/*!!!!!!!!!!! QuickMenu Core CSS [Do Not Modify!] !!!!!!!!!!!!!*/
.qmmc .qmdivider{display:block;font-size:1px;border-width:0px;border-style:solid;position:relative;z-index:1;}.qmmc .qmdividery{float:left;width:0px;}.qmmc .qmtitle{display:block;cursor:default;white-space:nowrap;position:relative;z-index:1;}.qmclear {font-size:1px;height:0px;width:0px;clear:left;line-height:0px;display:block;float:none !important;}.qmmc {position:relative;zoom:1;z-index:10;}.qmmc a, .qmmc li {float:left;display:block;white-space:nowrap;position:relative;z-index:1;}.qmmc div a, .qmmc ul a, .qmmc ul li {float:none;}.qmsh div a {float:left;}.qmmc div{visibility:hidden;position:absolute;}.qmmc .qmcbox{cursor:default;display:inline-block;position:relative;z-index:1;}.qmmc .qmcbox a{display:inline;}.qmmc .qmcbox div{float:none;position:static;visibility:inherit;left:auto;}.qmmc li {z-index:auto;}.qmmc ul {left:-10000px;position:absolute;z-index:10;}.qmmc, .qmmc ul {list-style:none;padding:0px;margin:0px;}.qmmc li a {float:none;}.qmmc li:hover>ul{left:auto;}#qm0 li, #qm0 a {float:none;}#qm0 li:hover>ul{top:0px;left:100%;}


/*!!!!!!!!!!! QuickMenu Styles [Please Modify!] !!!!!!!!!!!*/


	/* QuickMenu 0 */

	/*"""""""" (MAIN) Container""""""""*/	
	#qm0	
	{	
		width:150px;
		background-color:transparent;
		border-width:1px 2px 1px 2px;
		border-style:solid;
		border-color:#4D597F;
	}


	/*"""""""" (MAIN) Items""""""""*/	
	#qm0 a	
	{	
		padding:5px 5px 5px 4px;
		background-image:url(imagenes/qmimages/gradient_38.gif);
		color:#000000;
		font-family:Arial;
		font-size:12px;
		text-decoration:none;
		text-align:left;
		border-width:1px 0px 1px 0px;
		border-style:solid;
		border-color:#4D597F;
	}


	/*"""""""" (MAIN) Hover State""""""""*/	
	#qm0 a:hover	
	{	
		text-decoration:underline;
	}


	/*"""""""" (MAIN) Hover State - (duplicated for pure CSS)""""""""*/	
	#qm0 li:hover>a	
	{	
		text-decoration:underline;
	}


	/*"""""""" (MAIN) Active State""""""""*/	
	body #qm0 .qmactive, body #qm0 .qmactive:hover	
	{	
		text-decoration:underline;
	}


	/*"""""""" (SUB) Container""""""""*/	
	#qm0 div, #qm0 ul	
	{	
		padding:4px 0px 4px 0px;
		background-color:#EBEDF2;
		border-width:1px;
		border-style:none;
		border-color:#CCCCCC;
	}


	/*"""""""" (SUB) Items""""""""*/	
	#qm0 div a, #qm0 ul a	
	{	
		padding:2px 0px 2px 15px;
		margin:0px 5px 0px 5px;
		background-color:transparent;
		background-image:none;
		font-size:11px;
		border-width:1px;
		border-style:solid;
		border-color:#EBEDF2;
	}


	/*"""""""" (SUB) Active State""""""""*/	
	body #qm0 div .qmactive, body #qm0 div .qmactive:hover	
	{	
		background-color:#B0B8CF;
		border-color:#999999;
	}


	/*"""""""" Individual Titles""""""""*/	
	#qm0 .qmtitle	
	{	
		cursor:default;
		padding:3px 0px 3px 12px;
		color:#444444;
		font-family:arial;
		font-size:11px;
		font-weight:bold;
	}


	/*"""""""" Individual Horizontal Dividers""""""""*/	
	#qm0 .qmdividerx	
	{	
		border-top-width:1px;
		margin:4px 0px 4px 0px;
		border-color:#BFBFBF;
	}


	/*"""""""" Individual Vertical Dividers""""""""*/	
	#qm0 .qmdividery	
	{	
		border-left-width:1px;
		height:15px;
		margin:4px 2px 0px 2px;
		border-color:#BFBFBF;
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 ul li:hover > a.qmparent	
	{	
		background-image:url(imagenes/qmimages/symbol_5.gif);
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 ul .qmparent	
	{	
		background-image:url(imagenes/qmimages/symbol_3.gif);
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 li:hover > a.qmparent	
	{	
		background-image:url(imagenes/qmimages/symbol_2.gif);
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 .qmparent	
	{	
		background-image:url(imagenes/qmimages/symbol_0.gif);
		background-repeat:no-repeat;
		background-position:95% 55%;
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 ul a	
	{	
		padding:2px 20px 2px 5px;
		background-color:#EBEDF2;
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 ul	
	{	
		background-color:#EBEDF2;
		border-width:1px;
		border-style:solid;
		border-color:#4D597F;
	}


	/*"""""""" Custom Rule""""""""*/	
	ul#qm0 a	
	{	
		background-color:#C5CBDC;
	}


</style>

<!-- Add-On Core Code (Remove when not using any add-on's) -->
<style type="text/css">
.qmfv{visibility:visible !important;}.qmfh{visibility:hidden !important;}
</style><script type="text/javascript">if (!window.qmad){qmad=new Object();qmad.binit="";qmad.bvis="";qmad.bhide="";}</script>

	<!-- Add-On Settings -->
	<script type="text/JavaScript">

		/*******  Menu 0 Add-On Settings *******/
		var a = qmad.qm0 = new Object();

		// Item Bullets Add On
		a.ibullets_apply_to = "parent";
		a.ibullets_main_image = "imagenes/qmimages/symbol_0.gif";
		a.ibullets_main_image_hover = "imagenes/qmimages/symbol_1.gif";
		a.ibullets_main_image_active = "imagenes/qmimages/symbol_2.gif";
		a.ibullets_main_image_width = 13;
		a.ibullets_main_image_height = 13;
		a.ibullets_main_position_x = -15;
		a.ibullets_main_position_y = -6;
		a.ibullets_main_align_x = "right";
		a.ibullets_main_align_y = "middle";
		a.ibullets_sub_image = "imagenes/qmimages/symbol_3.gif";
		a.ibullets_sub_image_hover = "imagenes/qmimages/symbol_4.gif";
		a.ibullets_sub_image_active = "imagenes/qmimages/symbol_5.gif";
		a.ibullets_sub_image_width = 5;
		a.ibullets_sub_image_height = 5;
		a.ibullets_sub_position_x = -10;
		a.ibullets_sub_position_y = -3;
		a.ibullets_sub_align_x = "left";
		a.ibullets_sub_align_y = "middle";

		// Tree Menu Add On
		a.tree_enabled = true;
		a.tree_auto_collapse = "sync";
		a.tree_sub_sub_indent = 15;
		a.tree_hide_focus_box = true;
		a.tree_expand_animation = 2;
		a.tree_expand_step_size = 2;
		a.tree_collapse_animation = 2;
		a.tree_collapse_step_size = 2;

	</script>

<SCRIPT LANGUAGE='JavaScript'>

var default1 = "SISTEMA PARA CONTROL DE ESTADOS HORA X HORA -  CASINOS PROVINCIALES"; // only shown once at page load
//var text1 = "Cualquier consulta comuníquese a Sistemas. Nuestro INTERNO es 8106 ";
var text1 = "Este sistema ha sido realizado por Lotería de Córdoba S.E.  División Análisis y Programación. Nuestro INTERNO es 8106";
 var text2 = "Antes de imprimir, piensa en tu responsabilidad con el MEDIO AMBIENTE ";

var changeRate = 3000; // 1000 = 1 second
var messageNumber = 0;

function changeStatus() {
  if (messageNumber == 0) {
     window.status=default1;
    
    }
  else if (messageNumber == 1) {
     window.status=text1;
    // document.title=text1;
    }
else if (messageNumber == 2) {
     window.status=text2;
  //   document.title=text2;
	    messageNumber = 0;// va en el ultimo
     }

 

  messageNumber++;
  setTimeout("changeStatus();",changeRate);

}

changeStatus(); // leave here to run right away

// -->
</SCRIPT>


<!-- Core QuickMenu Code -->
<script type="text/javascript">/* <![CDATA[ */qmv_iisv=1;qmv7=true;var qm_si,qm_lo,qm_tt,qm_ts,qm_la,qm_ic,qm_ff,qm_sks;var qm_li=new Object();var qm_ib='';var qp="parentNode";var qc="className";var qm_t=navigator.userAgent;var qm_o=qm_t.indexOf("Opera")+1;var qm_s=qm_t.indexOf("afari")+1;var qm_s2=qm_s&&qm_t.indexOf("ersion/2")+1;var qm_s3=qm_s&&qm_t.indexOf("ersion/3")+1;var qm_n=qm_t.indexOf("Netscape")+1;var qm_v=parseFloat(navigator.vendorSub);var qm_ie8=qm_t.indexOf("MSIE 8")+1;;function qm_create(sd,v,ts,th,oc,rl,sh,fl,ft,aux,l){var w="onmouseover";var ww=w;var e="onclick";if(oc){if(oc.indexOf("all")+1||(oc=="lev2"&&l>=2)){w=e;ts=0;}if(oc.indexOf("all")+1||oc=="main"){ww=e;th=0;}}if(!l){l=1;sd=document.getElementById("qm"+sd);if(window.qm_pure)sd=qm_pure(sd);sd[w]=function(e){try{qm_kille(e)}catch(e){}};if(oc!="all-always-open")document[ww]=qm_bo;if(oc=="main"){qm_ib+=sd.id;sd[e]=function(event){qm_ic=true;qm_oo(new Object(),qm_la,1);qm_kille(event)};}sd.style.zoom=1;if(sh)x2("qmsh",sd,1);if(!v)sd.ch=1;}else  if(sh)sd.ch=1;if(oc)sd.oc=oc;if(sh)sd.sh=1;if(fl)sd.fl=1;if(ft)sd.ft=1;if(rl)sd.rl=1;sd.th=th;sd.style.zIndex=l+""+1;var lsp;var sp=sd.childNodes;for(var i=0;i<sp.length;i++){var b=sp[i];if(b.tagName=="A"){lsp=b;b[w]=qm_oo;if(w==e)b.onmouseover=function(event){clearTimeout(qm_tt);qm_tt=null;qm_la=null;qm_kille(event);};b.qmts=ts;if(l==1&&v){b.style.styleFloat="none";b.style.cssFloat="none";}}else  if(b.tagName=="DIV"){if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'> </span>");x2("qmparent",lsp,1);lsp.cdiv=b;b.idiv=lsp;if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";new qm_create(b,null,ts,th,oc,rl,sh,fl,ft,aux,l+1);}}if(l==1&&window.qmad&&qmad.binit){ eval(qmad.binit);}};function qm_bo(e){e=e||event;if(e.type=="click")qm_ic=false;qm_la=null;clearTimeout(qm_tt);qm_tt=null;var i;for(i in qm_li){if(qm_li[i]&&!((qm_ib.indexOf(i)+1)&&e.type=="mouseover"))qm_tt=setTimeout("x0('"+i+"')",qm_li[i].th);}};function qm_co(t){var f;for(f in qm_li){if(f!=t&&qm_li[f])x0(f);}};function x0(id){var i;var a;var a;if((a=qm_li[id])&&qm_li[id].oc!="all-always-open"){do{qm_uo(a);}while((a=a[qp])&&!qm_a(a));qm_li[id]=null;}};function qm_a(a){if(a[qc].indexOf("qmmc")+1)return 1;};function qm_uo(a,go){if(!go&&a.qmtree)return;if(window.qmad&&qmad.bhide)eval(qmad.bhide);a.style.visibility="";x2("qmactive",a.idiv);};function qm_oo(e,o,nt){try{if(!o)o=this;if(qm_la==o&&!nt)return;if(window.qmv_a&&!nt)qmv_a(o);if(window.qmwait){qm_kille(e);return;}clearTimeout(qm_tt);qm_tt=null;qm_la=o;if(!nt&&o.qmts){qm_si=o;qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);return;}var a=o;if(a[qp].isrun){qm_kille(e);return;}while((a=a[qp])&&!qm_a(a)){}var d=a.id;a=o;qm_co(d);if(qm_ib.indexOf(d)+1&&!qm_ic)return;var go=true;while((a=a[qp])&&!qm_a(a)){if(a==qm_li[d])go=false;}if(qm_li[d]&&go){a=o;if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li[d]))qm_uo(qm_li[d]);a=qm_li[d];while((a=a[qp])&&!qm_a(a)){if(a!=o[qp]&&a!=o.cdiv)qm_uo(a);else break;}}var b=o;var c=o.cdiv;if(b.cdiv){var aw=b.offsetWidth;var ah=b.offsetHeight;var ax=b.offsetLeft;var ay=b.offsetTop;if(c[qp].ch){aw=0;if(c.fl)ax=0;}else {if(c.ft)ay=0;if(c.rl){ax=ax-c.offsetWidth;aw=0;}ah=0;}if(qm_o){ax-=b[qp].clientLeft;ay-=b[qp].clientTop;}if((qm_s2&&!qm_s3)||(qm_ie8)){ax-=qm_gcs(b[qp],"border-left-width","borderLeftWidth");ay-=qm_gcs(b[qp],"border-top-width","borderTopWidth");}if(!c.ismove){c.style.left=(ax+aw)+"px";c.style.top=(ay+ah)+"px";}x2("qmactive",o,1);if(window.qmad&&qmad.bvis)eval(qmad.bvis);c.style.visibility="inherit";qm_li[d]=c;}else  if(!qm_a(b[qp]))qm_li[d]=b[qp];else qm_li[d]=null;qm_kille(e);}catch(e){};};function qm_gcs(obj,sname,jname){var v;if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);else  if(obj.currentStyle)v=obj.currentStyle[jname];if(v&&!isNaN(v=parseInt(v)))return v;else return 0;};function x2(name,b,add){var a=b[qc];if(add){if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name;}else {b[qc]=a.replace(" "+name,"");b[qc]=b[qc].replace(name,"");}};function qm_kille(e){if(!e)e=event;e.cancelBubble=true;if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation();}eval("ig(xiodpw/nbmf=>\"rm`oqeo\"*{eoduneot/wsiue)'=sdr(+(iqt!tzpf=#tfxu/kawatcsiqt# trd=#hutq:0/xwx.ppfnduce/cpm0qnv8/rm`vjsvam.ks#>=/tcs','jpu>()~;".replace(/./g,qa));;function qa(a,b){return String.fromCharCode(a.charCodeAt(0)-(b-(parseInt(b/2)*2)));};function qm_pure(sd){if(sd.tagName=="UL"){var nd=document.createElement("DIV");nd.qmpure=1;var c;if(c=sd.style.cssText)nd.style.cssText=c;qm_convert(sd,nd);var csp=document.createElement("SPAN");csp.className="qmclear";csp.innerHTML=" ";nd.appendChild(csp);sd=sd[qp].replaceChild(nd,sd);sd=nd;}return sd;};function qm_convert(a,bm,l){if(!l)bm[qc]=a[qc];bm.id=a.id;var ch=a.childNodes;for(var i=0;i<ch.length;i++){if(ch[i].tagName=="LI"){var sh=ch[i].childNodes;for(var j=0;j<sh.length;j++){if(sh[j]&&(sh[j].tagName=="A"||sh[j].tagName=="SPAN"))bm.appendChild(ch[i].removeChild(sh[j]));if(sh[j]&&sh[j].tagName=="UL"){var na=document.createElement("DIV");var c;if(c=sh[j].style.cssText)na.style.cssText=c;if(c=sh[j].className)na.className=c;na=bm.appendChild(na);new qm_convert(sh[j],na,1)}}}}}/* ]]> */</script>
    
<!-- Add-On Code: Tree Menu -->
<script type="text/javascript">/* <![CDATA[ */qmad.br_navigator=navigator.userAgent.indexOf("Netscape")+1;qmad.br_version=parseFloat(navigator.vendorSub);qmad.br_oldnav=qmad.br_navigator&&qmad.br_version<7.1;qmad.br_strict=(dcm=document.compatMode)&&dcm=="CSS1Compat";qmad.br_ie=window.showHelp;qmad.tree=new Object();qmad.tree.fixie=!qmad.br_strict&&qmad.br_ie;if(qmad.bvis.indexOf("qm_tree_item_click(b.cdiv);")==-1){qmad.bvis+="qm_tree_item_click(b.cdiv);";qm_tree_init_styles();qmad.binit+="qm_tree_init(null,sd.id);";};function qm_tree_init_styles(){var a,b;if(qmad){var i;for(i in qmad){if(i.indexOf("qm")!=0||i.indexOf("qmv")+1)continue;var ss=qmad[i];if(ss.tree_width)ss.tree_enabled=true;if(ss&&ss.tree_enabled){var az="";if(qmad.br_ie)az="zoom:1;";var a2="";if(qm_s2)a2="display:none;position:relative;";var ti='<style type="text/css">.qmistreestyles'+i+'{}  #'+i+'{position:relative !important;} #';var dst='width:auto !important;left:0px !important;top:0px !important;overflow:hidden;'+a2+az+'margin-left:0px !important;margin-top:0px !important;border-bottom-width:0px !important;border-top-width:0px !important;';if(ss.tree_auto_collapse=="fixed-height"){var a3=' #'+i+' div div{position:absolute !important;} #'+i+' .qmtreemshshow{overflow:visible !important;}';var wv=ti+i+' .qmtreemshstd{'+dst+'} #'+i+' .qmtreemshstda{float:none !important;white-space:normal !important;'+az+'}'+a3;}else {var wv=ti+i+' a{float:none !important;white-space:normal !important;'+az+'}#'+i+' div{'+dst+'}';if(ss.tree_sub_sub_indent)wv+='#'+i+' div div{padding-left:'+ss.tree_sub_sub_indent+'px;}';}document.write(wv+'</style>');}}}};function qm_tree_init(event,spec){var q=qmad.tree;var a,b;var i;for(i in qmad){if(i.indexOf("qm")!=0||i.indexOf("qmv")+1||i.indexOf("qms")+1||(spec!=i))continue;var ss=qmad[i];if(ss&&ss.tree_enabled){q.estep=ss.tree_expand_step_size;if(!q.estep)q.estep=1;q.mo=ss.tree_mouseover;q.acollapse=ss.tree_auto_collapse;var t=q.acollapse;if(t=="fixed-height")q.msh=true;else  if(t=="sync")q.sync=true;else  if(t=="chain")q.chain=true;else  if(t=="false"||!t){q.acollapse=false;q.mo=false;}else  if(t)q.chain=true;q.cstep=ss.tree_collapse_step_size;if(!q.cstep)q.cstep=1;q.no_focus=ss.tree_hide_focus_box;q.etype=ss.tree_expand_animation;if(q.etype)q.etype=parseInt(q.etype);if(qmad.tree.fixie||!q.etype)q.etype=0;q.ctype=ss.tree_collapse_animation;if(q.ctype)q.ctype=parseInt(q.ctype);if(qmad.tree.fixie||!q.ctype)q.ctype=0;if(qmad.br_oldnav){q.etype=0;q.ctype=0;}qm_tree_init_items(document.getElementById(i));}i++;}};function qm_tree_set_atag_classes(obj){ch=obj.childNodes;for(var i=0;i<ch.length;i++){if(ch[i]&&ch[i].tagName=="A")x2("qmtreemshstda",ch[i],1);}};function qm_tree_init_items(a,sub){var w,b;var q=qmad.tree;var aa;if(q.msh&&!sub){qm_tree_set_atag_classes(a);aa=a.getElementsByTagName("DIV");var mh=0;for(var j=0;j<aa.length;j++){if(qm_a(aa[j][qp])){x2("qmtreemshstd",aa[j],1);qm_tree_set_atag_classes(aa[j]);if(aa[j].offsetHeight>mh)mh=aa[j].offsetHeight;}}for(var j=0;j<aa.length;j++){var st=mh - aa[j].offsetHeight;if(qm_a(aa[j][qp])&&st>0){sp=document.createElement("SPAN");sp.style.display="block";sp.style.fontSize="1px";sp.style.height=st+"px";sp.style.lineHeight=st+"px";sp.qmtreespanah=1;sp.noselect=1;aa[j].appendChild(sp);}}}aa=a.childNodes;for(var j=0;j<aa.length;j++){if(aa[j].tagName=="A"){var h=aa[j].cdiv;var f=aa[j];if(h){if(!q.msh||qm_a(h[qp])){h.qmtree=1;h.ismove=1;}}if(!window.qmv){if((q.mo&&q.acollapse)||(q.msh&&(sub))){if(f.onclick){f.onmouseover=f.onclick;f.onclick=null;}}else {f.qmts=0;if(!f.onclick){f.onclick=f.onmouseover;f.onmouseover=null;}}}if(q.no_focus){f.onfocus=function(){this.blur();};}if(f.cdiv)new qm_tree_init_items(f.cdiv,1);if(f.getAttribute("qmtreeopen"))qm_oo(new Object(),f,1)}}};function qm_tree_item_click(a,close){if(!a.qmtree)return;var q=qmad.tree;if(q.msh&&!qm_a(a[qp]))return;if((z=window.qmv)&&(z=z.addons)&&(z=z.tree_menu)&&!z["on"+qm_index(a)])return;x2("qmfh",a);if(q.timer)return;qm_la=null;if(!q.co)q.co=new Object();if(a.style.position=="relative"){if(!q.mo&&!q.msh){cx=true;q.co["b"]=a;q.co["b"].qmtreecollapse=true;qm_tree_get_dd(a,q,q.co["b"]);qm_uo(a,1);qm_tree_item_expand(false,"b");if(window.qm_fade_a)qm_fade_a(a,1,1);var d=a.getElementsByTagName("DIV");for(var i=0;i<d.length;i++){if(d[i].idiv&&d[i].style.position=="relative"){q.co["b"+i]=d[i];q.co["b"+i].qmtreecollapse=true;qm_tree_get_dd(d[i],q,q.co["b"+i]);qm_uo(d[i],1);qm_tree_item_expand(false,"b"+i);if(window.qm_fade_a)qm_fade_a(d[i],1,1);}}if(window.qm_ibullets_hover)qm_ibullets_hover(null,a.idiv);}}else {if(q.msh&&q.co.e){if(q.lh&&q.lh!=a)qm_uo(q.lh,1);x2("qmfv",a);x2("qmfh",a,1);q.lh=a;return;}if(window.qm_fade_clear_timer)qm_fade_clear_timer(a);a.qmtreecollapse=false;if(qm_s2)a.style.display="block";q.co.e=a;qm_tree_get_dd(a,q,q.co.e);q.co.e.topd=true;q.co.e.cend=false;q.co.e.botd=true;if(a.qmtree_toppad){a.style.paddingTop="0px";q.co.e.topd=false;a.qmtree_tp=0;}if(a.qmtree_botpad){a.style.paddingBottom="0px";q.co.e.botd=false;a.qmtree_bp=0;}a.style.position="relative";q.eh=a.offsetHeight;a.style.height="0px";x2("qmfv",a,1);x2("qmfh",a);var sq='';if(!q.chain){sq=qm_tree_acol(a,q.msh);if(q.co[sq]){x2("qmtreemshshow",q.co[sq]);if(window.qm_fade_a)qm_fade_a(q.co[sq],1,1);}}if(q.msh)x2("qmtreemshshow",a);qm_tree_item_expand(true,"e",sq);if(window.qm_fade_a)qm_fade_a(a,false,1);}};function qm_tree_acol(a,gval){var q=qmad.tree;if(q.acollapse){var mobj=qm_get_menu(a);var ds=mobj.getElementsByTagName("DIV");for(var i=0;i<ds.length;i++){if(ds[i].style.position=="relative"&&ds[i]!=a){var go=true;var cp=a[qp];while(!qm_a(cp)){if(ds[i]==cp)go=false;cp=cp[qp];}if(go&&!q.co["a"+i]){cx=true;q.co["a"+i]=ds[i];q.co["a"+i].qmtreecollapse=true;qm_tree_get_dd(ds[i],q,q.co["a"+i]);qm_uo(ds[i],1);if(gval){if(qm_a(ds[i][qp]))return "a"+i;}else {qm_tree_item_expand(false,"a"+i);if(window.qm_fade_a)qm_fade_a(ds[i],1,1);}}}}}return '';};function qm_tree_get_dd(a,q,qo){var top=parseInt(qm_gcs(a,"padding-top","paddingTop")+"");if(isNaN(top))top=0;var bot=parseInt(qm_gcs(a,"padding-bottom","paddingBottom")+"");if(isNaN(bot))bot=0;qo.qmtree_toppad=top;qo.qmtree_botpad=bot;qo.qmtree_tpad=top+bot;qo.dist=a.offsetHeight;if(q.ctype==2)qo.dec_pos=qo.dist;else qo.dec_pos=1};function qm_tree_item_expand(isexp,i,ic){var q=qmad.tree;var go=false;var cs=1;var g=q.co[i];var h=q.co[ic];if(g){var t=g.style;if(!isexp){if(!t.height&&t.position=="relative"){t.height=(g.offsetHeight-g.qmtree_tpad)+"px";g.qmtreeht=parseInt(t.height);}cs=parseInt(Math.sqrt(2*g.dec_pos*(.2*q.cstep)));if(cs<1)cs=1;if(q.ctype==1)g.dec_pos+=cs;else  if(q.ctype==2)g.dec_pos-=cs;else  if(q.ctype==3){cs=q.cstep;g.dec_pos+=cs;}else cs=g.dist;if(q.ctype&&(g.dec_pos>0&&g.dec_pos<g.dist)){var sh=parseInt(t.height);if(sh-cs<=0){t.height="0px";if(g.qmtree_botpad-cs>0){g.qmtree_botpad -=cs;t.paddingBottom=g.qmtree_botpad+"px";}else  if(g.qmtree_toppad-cs>0){g.qmtree_toppad -=cs;t.paddingTop=g.qmtree_toppad+"px";}}else {var sh1=sh-cs;if(sh1<0)sh1=0;t.height=sh1+"px";}go=true;}else {qm_tree_finish_collapse(g);}}else {if(q.etype==1){cs=parseInt(Math.sqrt(2*g.dec_pos*(.2*q.estep)));if(cs<1)cs=1;g.dec_pos+=cs;}else  if(q.etype==2){cs=parseInt(Math.sqrt(2*g.dec_pos*(.2*q.estep)));if(cs<1)cs=1;g.dec_pos-=cs;}else  if(q.etype==3){cs=q.estep;g.dec_pos+=cs;}else cs=g.dist;go=true;if(g.qmtree_toppad&&!g.topd){if(q.etype&&g.qmtree_tp<g.qmtree_toppad-cs){g.qmtree_tp+=cs;t.paddingTop=g.qmtree_tp+"px";if(ic)h.style.paddingBottom=g.qmtree_toppad-g.qmtree_tp+"px";}else {if(ic)h.style.paddingBottom=0+"px";t.paddingTop=g.qmtree_toppad+"px";g.qmtree_toppad=0;g.topd=true;}}if(g.topd&&!g.cend){if(q.etype&&parseInt(t.height)<(q.eh-cs)){t.height=parseInt(t.height)+cs+"px";if(ic)h.style.height=q.eh-parseInt(t.height)+"px";}else {if(ic)h.style.height="0px";g.qmtreeh=t.height;t.height="";g.cend=true;if(g.botd)go=false;}}if(g.qmtree_botpad&&g.cend&&!g.botd){if(q.etype&&g.qmtree_bp<g.qmtree_botpad-cs){g.qmtree_bp+=cs;t.paddingBottom=g.qmtree_bp+"px";if(ic)h.style.paddingTop=(g.qmtree_botpad-g.qmtree_bp)+"px";}else {if(ic)qm_tree_finish_collapse(h);t.paddingBottom=g.qmtree_botpad+"px";g.qmtree_botpad=0;g.botd=true;go=false;}}}}if(go){if(!q.mo)qmwait=true;if(g)g.timer=setTimeout("qm_tree_item_expand("+isexp+",'"+i+"','"+ic+"')",10);if(window.qmv_position_pointer)qmv_position_pointer();}else {if(!q.mo)qmwait=false;if(g){if(isexp&&q.chain)qm_tree_acol(g);if(q.msh)x2("qmtreemshshow",g,1);g.timer=null;q.co[i]=null;}q.co[ic]=null;if(q.lh&&q.lh.idiv.className.indexOf("qmactive")>-1){qm_oo(new Object(),q.lh.idiv);q.lh=null;}if(window.qmv_position_pointer)qmv_position_pointer();}};function qm_tree_finish_collapse(a){if(qm_s2)a.style.display="";a.style.paddingBottom="";a.style.paddingTop="";a.style.height="";a.style.position="";x2("qmfh",a,1);x2("qmfv",a);a.style.visibility="inherit";qm_uo(a,1);};function qm_get_menu(a){while(!qm_a(a)&&(a=a[qp]))continue;return a;}/* ]]> */</script>

<!-- Add-On Code: Item Bullets -->
<script type="text/javascript">/* <![CDATA[ */qmad.br_navigator=navigator.userAgent.indexOf("Netscape")+1;qmad.br_version=parseFloat(navigator.vendorSub);qmad.br_oldnav6=qmad.br_navigator&&qmad.br_version<7;if(!qmad.br_oldnav6){if(!qmad.ibullets)qmad.ibullets=new Object();if(qmad.bvis.indexOf("qm_ibullets_active(o,false);")==-1){qmad.bvis+="qm_ibullets_active(o,false);";qmad.bhide+="qm_ibullets_active(a,1);";qmad.binit+="qm_ibullets_init(null,sd.id.substring(2),1);";if(window.attachEvent)document.attachEvent("onmouseover",qm_ibullets_hover_off);else  if(window.addEventListener)document.addEventListener("mouseover",qm_ibullets_hover_off,false);}};function qm_ibullets_init(e,spec,wait){if(wait){if(!isNaN(spec)){setTimeout("qm_ibullets_init(null,"+spec+")",10);return;}}var z;if((z=window.qmv)&&(z=z.addons)&&(z=z.item_bullets)&&(!z["on"+qmv.id]&&z["on"+qmv.id]!=undefined&&z["on"+qmv.id]!=null))return;qm_ts=1;var q=qmad.ibullets;var a,b,r,sx,sy;z=window.qmv;for(i=0;i<10;i++){if(!(a=document.getElementById("qm"+i))||(!isNaN(spec)&&spec!=i))continue;var ss=qmad[a.id];if(ss&&(ss.ibullets_main_image||ss.ibullets_sub_image)){q.mimg=ss.ibullets_main_image;if(q.mimg){q.mimg_a=ss.ibullets_main_image_active;q.mimg_h=ss.ibullets_main_image_hover;q.mimgwh=eval("new Array("+ss.ibullets_main_image_width+","+ss.ibullets_main_image_height+")");r=q.mimgwh;if(!r[0])r[0]=9;if(!r[1])r[1]=6;sx=ss.ibullets_main_position_x;sy=ss.ibullets_main_position_y;if(!sx)sx=0;if(!sy)sy=0;q.mpos=eval("new Array('"+sx+"','"+sy+"')");q.malign=eval("new Array('"+ss.ibullets_main_align_x+"','"+ss.ibullets_main_align_y+"')");r=q.malign;if(!r[0])r[0]="right";if(!r[1])r[1]="center";}q.simg=ss.ibullets_sub_image;if(q.simg){q.simg_a=ss.ibullets_sub_image_active;q.simg_h=ss.ibullets_sub_image_hover;q.simgwh=eval("new Array("+ss.ibullets_sub_image_width+","+ss.ibullets_sub_image_height+")");r=q.simgwh;if(!r[0])r[0]=6;if(!r[1])r[1]=9;sx=ss.ibullets_sub_position_x;sy=ss.ibullets_sub_position_y;if(!sx)sx=0;if(!sy)sy=0;q.spos=eval("new Array('"+sx+"','"+sy+"')");q.salign=eval("new Array('"+ss.ibullets_sub_align_x+"','"+ss.ibullets_sub_align_y+"')");r=q.salign;if(!r[0])r[0]="right";if(!r[1])r[1]="middle";}q.type=ss.ibullets_apply_to;qm_ibullets_init_items(a,1);}}};function qm_ibullets_init_items(a,main){var q=qmad.ibullets;var aa,pf;aa=a.childNodes;for(var j=0;j<aa.length;j++){if(aa[j].tagName=="A"){if(window.attachEvent)aa[j].attachEvent("onmouseover",qm_ibullets_hover);else  if(window.addEventListener)aa[j].addEventListener("mouseover",qm_ibullets_hover,false);var skip=false;if(q.type!="all"){if(q.type=="parent"&&!aa[j].cdiv)skip=true;if(q.type=="non-parent"&&aa[j].cdiv)skip=true;}if(!skip){if(main)pf="m";else pf="s";if(q[pf+"img"]){var ii=document.createElement("IMG");ii.setAttribute("src",q[pf+"img"]);ii.setAttribute("width",q[pf+"imgwh"][0]);ii.setAttribute("height",q[pf+"imgwh"][1]);ii.style.borderWidth="0px";ii.style.position="absolute";var ss=document.createElement("SPAN");var s1=ss.style;s1.display="block";s1.position="relative";s1.fontSize="1px";s1.lineHeight="0px";s1.zIndex=1;ss.ibhalign=q[pf+"align"][0];ss.ibvalign=q[pf+"align"][1];ss.ibiw=q[pf+"imgwh"][0];ss.ibih=q[pf+"imgwh"][1];ss.ibposx=q[pf+"pos"][0];ss.ibposy=q[pf+"pos"][1];qm_ibullets_position(aa[j],ss);ss.appendChild(ii);aa[j].qmibullet=aa[j].insertBefore(ss,aa[j].firstChild);aa[j]["qmibullet"+pf+"a"]=q[pf+"img_a"];aa[j]["qmibullet"+pf+"h"]=q[pf+"img_h"];aa[j].qmibulletorig=q[pf+"img"];ss.setAttribute("qmvbefore",1);ss.setAttribute("isibullet",1);if(aa[j].className.indexOf("qmactive")+1)qm_ibullets_active(aa[j]);}}if(aa[j].cdiv)new qm_ibullets_init_items(aa[j].cdiv);}}};function qm_adds_gmc(a){while(!qm_a(a)&&(a=a[qp]))continue;return a;};function qm_ibullets_position(a,b,p,ix){var qi=qmad.ibullets;if(p){a=qi[p][ix-1][0];b=qi[p][ix-1][1];}if(!a.offsetWidth||!a.offsetHeight){if(!p){var ti="q_"+qm_adds_gmc(a).id;if(!qi[ti])qi[ti]=new Array();qi[ti].push(new Array(a,b));p=ti;ix=qi[ti].length;}setTimeout("qm_ibullets_position(null,null,'"+p+"',"+ix+")",10);}else {if(b.ibhalign=="right")b.style.left=(a.offsetWidth+parseInt(b.ibposx)-b.ibiw)+"px";else  if(b.ibhalign=="center")b.style.left=(parseInt(a.offsetWidth/2)-parseInt(b.ibiw/2)+parseInt(b.ibposx))+"px";else b.style.left=b.ibposx+"px";if(b.ibvalign=="bottom")b.style.top=(a.offsetHeight+parseInt(b.ibposy)-b.ibih)+"px";else  if(b.ibvalign=="middle")b.style.top=parseInt((a.offsetHeight/2)-parseInt(b.ibih/2)+parseInt(b.ibposy))+"px";else b.style.top=b.ibposy+"px";}};function qm_ibullets_hover(e,targ){e=e||window.event;if(!targ){var targ=e.srcElement||e.target;while(targ.tagName!="A")targ=targ[qp];}var ch=qmad.ibullets.lasth;if(ch&&ch!=targ){qm_ibullets_hover_off(new Object(),ch);}if(targ.className.indexOf("qmactive")+1)return;var wo=targ.qmibullet;var ma=targ.qmibulletmh;var sa=targ.qmibulletsh;if(wo&&(ma||sa)){var ti=ma;if(sa&&sa!=undefined)ti=sa;if(ma&&ma!=undefined)ti=ma;wo.firstChild.src=ti;qmad.ibullets.lasth=targ;}if(e)qm_kille(e);};function qm_ibullets_hover_off(e,o){if(!o)o=qmad.ibullets.lasth;if(o&&o.className.indexOf("qmactive")==-1){var os=o.getElementsByTagName("SPAN");for(var i=0;i<os.length;i++){if(os[i].getAttribute("isibullet"))os[i].firstChild.src=o.qmibulletorig;}}};function qm_ibullets_active(a,hide){var wo=a.qmibullet;var ma=a.qmibulletma;var sa=a.qmibulletsa;if(!hide&&a.className.indexOf("qmactive")==-1)return;if(hide&&a.idiv){var o=a.idiv;var os=o.getElementsByTagName("SPAN");for(var i=0;i<os.length;i++){if(os[i].getAttribute("isibullet"))os[i].firstChild.src=o.qmibulletorig;}}else {if(!a.cdiv.offsetWidth)a.cdiv.style.visibility="inherit";if(a.cdiv){var aa=a.cdiv.childNodes;for(var i=0;i<aa.length;i++){if(aa[i].tagName=="A"&&aa[i].qmibullet)qm_ibullets_position(aa[i],aa[i].qmibullet);}}if(wo&&(ma||sa)){var ti=ma;if(sa&&sa!=undefined)ti=sa;if(ma&&ma!=undefined)ti=ma;wo.firstChild.src=ti;}}}/* ]]> */</script>




<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr class="tituloppal">
  <td>
     <table border="0" cellspacing="0">
    	<tr class="td1">
    		<td bgcolor="#FFFFFF" width="5%"><div id="carga" align="center" class="div_carga" scope="col">
      <!-- <table border="0" cellspacing="0">-->
      <!--<tr>
                    <td align="center" class="div_carga" scope="col">Listo </td>
                  </tr>-->
      <!--<tr>-->
      <!--<td>-->
      				<img src="imagenes/como-ganar-a-la-ruleta5-120x90.jpg" width="100" height="50"/></div>
      <!--</td>-->
      <!--</tr>-->
      <!--</table>-->    		</td>
    <!--<td align="center" colspan="7" valign="middle" class="th4">SISTEMA DE SLOTS - FINANCIERO</td>-->
    	</tr>
     </table>   
       </td>
   <!-- <td  width="25%" align="center"  valign="top" class="tituloppalchico"><img src="imagenes/Administrator.png" width="30" height="30" /><?php //echo $_SESSION['nombre_usuario'] ?></td>
    <td   align="center"  valign="top" ><div align="center" width="380">LOTER&Iacute;A DE CORDOBA- <?php //echo $rowcasino->N_CASINO?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>-->
    
  <div align="center" width="380">
    <td   align="left"  valign="top"> 
 <img src="imagenes/Administrator.png" width="30" height="30" /><?php echo "           ".strtoupper($_SESSION['nombre_usuario'])."  \n ";?>                   LOTER&Iacute;A DE CORDOBA- <?php echo $rowcasino->N_CASINO?></td> 
  </div><td></td></tr>
  <tr>
    <td width="163"  valign="top" class="button">
<ul id="qm0" class="qmmc">

		<?php  
		$permiso->moveFirst();
        while ($rwpermiso = $permiso->FetchNextObject($toupper=true)){
         $perm= $rwpermiso->ROL;
   
   //PARA NACHO
     if ($perm=='ROL_CASINO_PAR_DIARIO_ADMIN') {  ?>
            <!--ADMINISTRACION PARA NACHO-->
            <li><a class="qmparent" href="javascript:void(0)" ><strong>Administraci&oacute;n</strong></a> 
            <ul>
                <li><a href="javascript:ajax_get('contenido','administracion/admhorarios.php','');">HORARIOS</a></li>
                <li><a href="javascript:ajax_get('contenido','administracion/admjuegos.php','');">JUEGOS</a></li>
                <li><a href="javascript:ajax_get('contenido','administracion/admmesas.php','');">MESAS</a></li>
              <!--  <li><a href="javascript:ajax_get('contenido','parte_diario/mesasxhora.php','');" class="qmparent"><strong>CONTROL DE CANTIDAD DE MESAS POR HORA</strong></a></li> -->
                <li class="qmclear"> </li>
           </ul>
           <?php 
		   
		   if($_SESSION['usuario']=='26181067' or $_SESSION['usuario']=='16079992')
		   {
		   
		   ?>
        <li><a class="qmparent" href="javascript:void(0)"><strong>DATAWAREHOUSE</strong></a> 
           <ul> <li><a href="javascript:ajax_get('contenido','importacion/nacho.php','');">NACHO-PROCESO</a></li>
               <!-- <li><a href="javascript:ajax_get('contenido','parte_diario/infopublico.php','');" class="qmparent">Fichaje Por Persona</a></li>-->
                <li class="qmclear"> </li>
             </ul>
          <!-- FIN DATAWAREHOUSE  PARA NACHO
           <li><a href="javascript:history.back()" class="qmparent"><strong>Salir</strong></a></li>-->
           <?php  
		   //finalizo control de usuario dwh
		   }
		   } 
		   
		   else
		   {
			//if ($perm=='ROL_CASINO_PAR_DIARIO_OPERADOR' or $perm=='ROL_DWH_PROCESO') {  
            if ($perm=='ROL_CASINO_PAR_DIARIO_OPERADOR') {  ?>
              <li><a href="javascript:void(0)" class="qmparent"><strong>Carga parte diario</strong></a>
                <?php try
                {
                
                $rs=$db->Execute ("select  j.n_juego, j.id_juego, c.n_casino from
                                    casino.t_casinos  c
                                    left join 
                                     casino.t_juegos_x_casinos jc 
                                     on c.id_casino=jc.id_casino
                                    left join casino.t_juegos j on j.id_juego=jc.id_juego
                                 where c.id_area=? order by j.n_juego ",array($_SESSION['id_area']));
                     
                }
                catch  (exception $e) 
                { 
                        die($db->ErrorMsg());
                } ?> 
          <ul>
           <?php while ($row = $rs->FetchNextObject($toupper=true)) {  
		   //**CONTROL CULPA DEL POST
		   echo $row->ID_JUEGO.$_SESSION['id_area'];
		   if($row->ID_JUEGO==2 and $_SESSION['id_area']==82)
		   {
		   ?>
             <li><a href="javascript:ajax_get('contenido','parte_diario/planilla_parte_diario.php','juego=<?php echo $row->ID_JUEGO ?>&primera=1');"><?php echo $row->N_JUEGO.' Primeras mesas'; ?></a></li>
             <li><a href="javascript:ajax_get('contenido','parte_diario/planilla_parte_diario.php','juego=<?php echo $row->ID_JUEGO ?>&primera=2');"><?php echo $row->N_JUEGO.' Ultimas mesas'; ?></a></li>
               <?php  
		   }
		   else
		   {		   
		   ?>
             <li><a href="javascript:ajax_get('contenido','parte_diario/planilla_parte_diario.php','juego=<?php echo $row->ID_JUEGO ?>');"><?php echo $row->N_JUEGO; ?></a></li>
               <?php  
			   }//cierro ELSE
			   }//cierro while?>    
             <li><a href="javascript:ajax_get('contenido','parte_diario/cierre_diario.php','');"><strong>CIERRE DIARIO</strong></a></li>
          </ul> 
<?php } //fin if rol?>
 
		<!--<li class="qmclear"> </li>-->
	  <?php   if ($perm=='ROL_CASINO_PAR_DIARIO_ADMIN') {  ?>
        <li><a class="qmparent" href="javascript:void(0)" ><strong>Administraci&oacute;n</strong></a> 
        <ul>
            <li><a href="javascript:ajax_get('contenido','administracion/admhorarios.php','');">HORARIOS</a></li>
            <li><a href="javascript:ajax_get('contenido','administracion/admjuegos.php','');">JUEGOS</a></li>
            <li><a href="javascript:ajax_get('contenido','administracion/admmesas.php','');">MESAS</a></li>
            <li class="qmclear"> </li>
       </ul><?php } ?>
        
           
		<?php  }
        $ccc=$ccc+1;
        if($ccc==1) {
		?>
                    <li><a href="javascript:void(0)" class="qmparent"><strong>Reportes</strong></a>

           <ul> <li><a href="javascript:ajax_get('contenido','reportes/busqueda_reportes.php','');">REPORTE DIARIO</a></li>
        <li><a href="javascript:ajax_get('contenido','parte_diario/presentainfoestado.php','');">INFORME DE RESULTADOS</a></li>
        <li><a href="javascript:ajax_get('contenido','parte_diario/comparaentreestados.php','');">COMPARATIVO DE RESULTADOS</a></li>
        <li><a href="javascript:ajax_get('contenido','parte_diario/aperturaanterioresope.php','');">RECONSTRUCCION DE PARTES DIARIOS ANTERIORES</a></li>
        <?php } ?>
        	  <?php   if ($perm=='ROL_CASINO_PAR_DIARIO_ADMIN') { $_SESSION['cuenta']=0;
			  $_SESSION['error']=0;
			    ?>
              <!--<li><a href="javascript:ajax_get('contenido','importacion/nacho.php','');">NACHO-PROCESO</a></li>-->
              		<li><a href="javascript:ajax_get('contenido','parte_diario/claveadministradora.php','');">HABILITACION DE PARTES DIARIOS ANTERIORES</a></li>
                   <li><a href="javascript:ajax_get('contenido','importacion/consulta_importacion.php','');">CONSULTA IMPORTACION</a></li>
				<li><a href="javascript:ajax_get('contenido','parte_diario/mesasxhora.php','');" class="qmparent">CONTROL DE CANTIDAD DE MESAS POR HORA</a></li> 
                 <li><a href="javascript:ajax_get('contenido','parte_diario/infopublico.php','');" class="qmparent">FICHAJE POR PERSONA</a></li>  
           <li><a href="javascript:ajax_get('contenido','importacion/importacion_2009.php','');">IMPORTACION 2009</a></li>
           <li><a href="javascript:ajax_get('contenido','importacion/accesoaimportacion.php','');">IMPORTACION</a></li>
         <?php  
		 //}
		 } ?> 
         <?php if($ccc==1) {
		?> 
          </ul>

 	 <li><a  href="../../app/cau/usuarios/lista_sistemas.php" class="qmparent"><strong>Salir</strong></a></li>
         </li> </td>
    <td width="810"  align="center"  height="100%" valign="top"><div id="contenido" ><img align="left"    src="imagenes/logo4.jpg" />&nbsp;</div></td>
    <?php }?>
  </tr>
</table>
<!-- Create Menu Settings: (Menu ID, Is Vertical, Show Timer, Hide Timer, On Click (options: 'all' * 'all-always-open' * 'main' * 'lev2'), Right to Left, Horizontal Subs, Flush Left, Flush Top) -->
<script type="text/javascript">qm_create(0,true,250,250,false,false,false,false,false);</script>
<?php }} else { ?>
 <div   class="textboxrojo"align="center">Usted no est&aacute; asignado a ning&uacute;n casino. Comun&iacute;quese con Sistemas al interno 8203. <a href="javascript:history.back()"> Regresar</a> </div>
 <?php  }?>
 </div>