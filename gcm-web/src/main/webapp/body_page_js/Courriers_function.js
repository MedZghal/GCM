

/* global paramater, dateServeur, patient */

function  CertificatMedicale(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0" style="margin-top: 50px;">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em>&nbsp;&nbsp;&nbsp; CERTIFICAT MÉDICAL</em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -50px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Je soussigné ';
        Certificat_html+='<strong>'+paramater.prenomMedecin+" "+paramater.nomMedecin+'</strong>, docteur en médecine, certifie avoir examiné ce jour:</p>';
        Certificat_html+='<p align="center"><strong>Mr(s) '+patient.prenom+" "+patient.nom+'</strong></p>';
        Certificat_html+='<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;Et que son état de santé nécessite un repos de .... jour(s) sauf complications. </p></td></tr></tbody></table>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  CertificatMedicaleDInaptitude(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em>Certificat Médical d"Inaptitude </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp; Je soussigné <STRONG>'+paramater.prenomMedecin+" "+paramater.nomMedecin+'</STRONG>, docteur en médecine, certifie que l’examen de&nbsp;';
        Certificat_html+='<STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> effectué ce jour, met en évidence des contre-indications à la pratique …………………………………….</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Ce certificat est délivré à l’intéressé pour servir et valoir ce que de droit.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  CertificatMedicaleDaptitude(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em>Certificat Médical d"Inaptitude </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp; Je soussigné <STRONG>'+paramater.prenomMedecin+" "+paramater.nomMedecin+'</STRONG>, docteur en médecine, certifie que l’examen de&nbsp;';
        Certificat_html+='<STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> effectué ce jour, ne met pas en évidence des contre-indications à la pratique …………………………………….</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Ce certificat est délivré à l’intéressé pour servir et valoir ce que de droit.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  CertificatMedicaleBonneSante(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em> Certificat Médical de Bonne Santé </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp; Je soussigné <STRONG>'+paramater.prenomMedecin+" "+paramater.nomMedecin+'</STRONG>, docteur en médecine, certifie avoir examiné ce jour ';
        Certificat_html+='<STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> . Et je déclare que cette personne est en bon état de santé apparente. </P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Ce certificat est délivré en main propre à l’intéressé pour servir et valoir ce que de droit.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  DemandeDExamenTomodensitométrique(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em> Demande d"Examen Tomodensitométrique (TDM) </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cher confrère,</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Je vous prie de bien vouloir pratiquer un&nbsp;Scanner ........... &nbsp;pour <STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> qui présente ...... ...... ...... ...... ...... ...... ';
        Certificat_html+='...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>Cet examen est demandé à la recherche de ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cordialement votre.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  DemandeDExamenEchographique(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em> Demande d"Examen Échographique </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cher confrère,</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Je vous prie de bien vouloir pratiquer une&nbsp;échographie ........... &nbsp;pour <STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> qui présente ...... ...... ...... ...... ...... ...... ';
        Certificat_html+='...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>Cet examen est demandé à la recherche de ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cordialement votre.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  DemandeDExamenRadiologiqueRayonsX(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em> Demande d"Examen Radiologique au Rayons X </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cher confrère,</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Je vous prie de bien vouloir pratiquer une&nbsp;radiographie ........... &nbsp;pour <STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> qui présente ...... ...... ...... ...... ...... ...... ';
        Certificat_html+='...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>Cet examen est demandé à la recherche de ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cordialement votre.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}

function  DemandeRadiographieThorax(){
    var Certificat_html="";
        Certificat_html+='<table cellspacing="0" cellpadding="2" width="523" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>';
        Certificat_html+='<span id="drname" class="pull-right" style="font-size: 14px;font-weight: bold;">'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</span>';
        Certificat_html+='<br/><hr/></tr>';
        Certificat_html+='<tr>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="middle" width="252"><strong>'+paramater.specialite+'</strong></td>';
        Certificat_html+=' <td style="FONT-SIZE: 18px" align="right" width="209"><strong class="trn">طب القلب والشرايين</strong></td>';
        Certificat_html+='</tr><tr><td style="FONT-SIZE: 20px" align="middle" colspan="2">&nbsp;</td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><strong>Téléphone : <em>'+paramater.fixe+' </em>: الهاتف</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.gsm+' </em></strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2" height="10"></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 16px" align="middle" colspan="2"><font size="1"></font></td></tr></tbody></table>&nbsp; ';
        Certificat_html+='<table width="527" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="97">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 22px" align="middle" width="319"><p align="center"><strong><em> Demande de Radiographie de Thorax </em></strong></p></td>';
        Certificat_html+='<td width="97">&nbsp;</td></tr></tbody></table>';
        Certificat_html+='<table style="MARGIN-LEFT: 10px; MARGIN-RIGHT: 10px;margin-top: -30px;" cellspacing="0" cellpadding="0" width="494" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td style="MARGIN-LEFT: 10px" align="middle" width="486" height="304">';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cher confrère,</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;Je vous prie de bien vouloir pratiquer une&nbsp;radiographie de thorax (face)&nbsp;pour <STRONG>Mr(s) '+patient.prenom+" "+patient.nom+'</STRONG> qui présente ...... ...... ...... ...... ...... ...... ';
        Certificat_html+='...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>Cet examen est demandé à la recherche de ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... ...... .</P>';
        Certificat_html+='<P align=justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cordialement votre.</P></TD></TR></TBODY></TABLE>';
        Certificat_html+='<p>&nbsp;</p>';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td>&nbsp;</td>';
        Certificat_html+='<td align="middle" width="314" height="21"><p align="center"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le <em>'+dateServeur+'</em>, à '+paramater.adresse+'</strong></p></td></tr>';
        Certificat_html+='<tr><td width="197">&nbsp;</td>';
        Certificat_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Certificat_html+='<div style="LEFT: 10px; BOTTOM: 0px;">';
        Certificat_html+='<table cellspacing="0" cellpadding="0" width="510" border="0">';
        Certificat_html+='<tbody><tr>';
        Certificat_html+='<td width="510" height="0px"><hr align="left" width="510" noshade=""></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;&nbsp;&nbsp;'+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong></td></tr>';
        Certificat_html+='<tr><td style="FONT-SIZE: 14px" align="middle"><strong>&nbsp;&nbsp;، عين جلولة، القيروان</strong></td></tr>';
        Certificat_html+='</tbody></table></div>';
        
        $("#container").empty().append(Certificat_html);
}