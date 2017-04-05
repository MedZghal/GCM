/* Shivving (IE8 is not supported, but at least it won't look as awful)
/* ========================================================================== */

var canvas;
var iframe;
function get_Medicament_Prix(id_medic){
    
    var prix=0;
    $.each(Medicaments , function(i){
        if(Medicaments[i].numMedic.toString()===id_medic.toString()){
            prix=Medicaments[i].prix;
            return false;
        }
    });
    return prix;
}

function get_Medicament_PrixbyDsg(dsg_medic){
    
    var prix=0;
    $.each(Medicaments , function(i){
        if(Medicaments[i].desgMedic.toString()===dsg_medic.toString()){
            prix=Medicaments[i].prix;
            return false;
        }
    });
    return prix;
}

              
//create pdf
function createPDF(form,cache_width,a4){
        getCanvas(form,a4).then(function(canvas){
        form.width(cache_width);
        });
}

// create canvas object
function getCanvas(form,a4){
        form.width((a4[0]*1.33333) -80).css('max-width','none');
        return html2canvas(form,{background:'#fff',
        onrendered: function(canvas) {
         var doc = new jsPDF();
         var marginLeft=0;
         var marginRight=0;
         var ctx = canvas.getContext('2d');
         ctx.scale(2,2);

         doc.addImage(canvas.toDataURL("image/jpeg"),"jpeg",marginLeft,marginRight);

                 document.body.appendChild(iframe);
                 iframe.src = doc.output('datauristring'); 
}	
});
}

function demoFromHTML() {
       var pdf = new jsPDF('p', 'pt', 'letter');
        var canvas = pdf.canvas;
        canvas.height = 72 * 11;
        canvas.width=72 * 8.5;;
        // var width = 400;
        html2pdf($("#container"), pdf, function(pdf) {
                iframe = document.getElementById('result');
                
                document.body.appendChild(iframe);
                iframe.src = pdf.output('datauristring');

               //var div = document.createElement('pre');
               //div.innerText=pdf.output();
               //document.body.appendChild(div);
            }
        );
}


 
(function (document) {
	var
	head = document.head = document.getElementsByTagName('head')[0] || document.documentElement,
	elements = 'article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output picture progress section summary time video x'.split(' '),
	elementsLength = elements.length,
	elementsIndex = 0,
	element;

	while (elementsIndex < elementsLength) {
		element = document.createElement(elements[++elementsIndex]);
	}

	element.innerHTML = 'x<style>' +
		'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
		'audio[controls],canvas,video{display:inline-block}' +
		'[hidden],audio{display:none}' +
		'mark{background:#FF0;color:#000}' +
	'</style>';

	return head.insertBefore(element.lastChild, head.firstChild);
})(document);

/* Prototyping
/* ========================================================================== */

(function (window, ElementPrototype, ArrayPrototype, polyfill) {
	function NodeList() { [polyfill]; }
	NodeList.prototype.length = ArrayPrototype.length;

	ElementPrototype.matchesSelector = ElementPrototype.matchesSelector ||
	ElementPrototype.mozMatchesSelector ||
	ElementPrototype.msMatchesSelector ||
	ElementPrototype.oMatchesSelector ||
	ElementPrototype.webkitMatchesSelector ||
	function matchesSelector(selector) {
		return ArrayPrototype.indexOf.call(this.parentNode.querySelectorAll(selector), this) > -1;
	};

	ElementPrototype.ancestorQuerySelectorAll = ElementPrototype.ancestorQuerySelectorAll ||
	ElementPrototype.mozAncestorQuerySelectorAll ||
	ElementPrototype.msAncestorQuerySelectorAll ||
	ElementPrototype.oAncestorQuerySelectorAll ||
	ElementPrototype.webkitAncestorQuerySelectorAll ||
	function ancestorQuerySelectorAll(selector) {
		for (var cite = this, newNodeList = new NodeList; cite = cite.parentElement;) {
			if (cite.matchesSelector(selector)) ArrayPrototype.push.call(newNodeList, cite);
		}

		return newNodeList;
	};

	ElementPrototype.ancestorQuerySelector = ElementPrototype.ancestorQuerySelector ||
	ElementPrototype.mozAncestorQuerySelector ||
	ElementPrototype.msAncestorQuerySelector ||
	ElementPrototype.oAncestorQuerySelector ||
	ElementPrototype.webkitAncestorQuerySelector ||
	function ancestorQuerySelector(selector) {
		return this.ancestorQuerySelectorAll(selector)[0] || null;
	};
})(this, Element.prototype, Array.prototype);

/* Helper Functions
/* ========================================================================== */
var i=1;
var medic;
var posl;
function generateTableRow() {
    var Medicaments = JSON.parse(localStorage.getItem("Medicaments"));  
	var emptyColumn = document.createElement('tr');
        var MedColunm;
        $.each(Medicaments , function(i){
                   MedColunm +="<option value='"+Medicaments[i].numMedic+"' selected>"+Medicaments[i].desgMedic+"</option>";
                })  ;
	emptyColumn.innerHTML = '<td><a class="cut">-</a> <div><span>médicament: </span><a href="javascript:;" class="tooltips" data-tooltip="tooltip" title="" id="medic'+i+'" data-type="select2"  data-original-title="Select Médicament"> </a> </div> '+
             
                '</td>' +
		'<td style="padding: 10px 0px 10px 10px;">'+
                '<div><span>posologie : </span><a href="#" class="tooltips" data-tooltip="tooltip" title="" id="posologie'+i+'" data-type="address" data-original-title="Enter Posologie de Médicament"> </a> </div>'+

            '</td>';
    medic= "#medic"+i;
    posl= "#posologie"+i;
   
	return emptyColumn;
}

function parseFloatHTML(element) {
	return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
}

function parsePrice(number) {
	return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
}

/* Update Number
/* ========================================================================== */

function updateNumber(e) {
	var
	activeElement = document.activeElement,
	value = parseFloat(activeElement.innerHTML),
	wasPrice = activeElement.innerHTML == parsePrice(parseFloatHTML(activeElement));

	if (!isNaN(value) && (e.keyCode == 38 || e.keyCode == 40 || e.wheelDeltaY)) {
		e.preventDefault();

		value += e.keyCode == 38 ? 1 : e.keyCode == 40 ? -1 : Math.round(e.wheelDelta * 0.025);
		value = Math.max(value, 0);

		activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
	}

	//updateInvoice();
}

/* Update Invoice
/* ========================================================================== */

function updateInvoice() {
    
     $(medic).editable({
        placement: 'right',
        select2:{
          width:'600px'  
        },
     inputclass: 'form-control input-medium',
            source: medics
    });
    
    $(medic).on('save', function(e, params) {
            prix_+=parseInt(get_Medicament_Prix(params.newValue));
            $("#mntOrd").empty().append(prix_.toFixed(2));
        });
        
    $(posl).editable({
        title: 'Enter Posologie de Médicament :'
    });
    i++;
    
      
}

/* On Content Load
/* ========================================================================== */

function onContentLoad() {
	

	var
	input = document.querySelector('input'),
	image = document.querySelector('img');

	function onClick(e) {
		var element = e.target.querySelector('[contenteditable]'), row;

		element && e.target != document.documentElement && e.target != document.body && element.focus();

		if (e.target.matchesSelector('.add')) {
			document.querySelector('table.inventory tbody').appendChild(generateTableRow());
                        updateInvoice();
		}
		else if (e.target.className == 'cut') {
			row = e.target.ancestorQuerySelector('tr');

			row.parentNode.removeChild(row);
                        prix_ =0;
                        $('#preOrd > tbody  > tr').each(function(tr) {
                           $this = $(this);
                           prix_+=parseInt(get_Medicament_PrixbyDsg($this.find("[data-type='select2']").text()));
                        });
                        $("#mntOrd").empty().append(prix_.toFixed(2));
		}
               
		
	}

	function onEnterCancel(e) {
		e.preventDefault();

		image.classList.add('hover');
	}

	function onLeaveCancel(e) {
		e.preventDefault();

		image.classList.remove('hover');
	}

	function onFileInput(e) {
		image.classList.remove('hover');

		var
		reader = new FileReader(),
		files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
		i = 0;

		reader.onload = onFileLoad;

		while (files[i]) reader.readAsDataURL(files[i++]);
	}

	function onFileLoad(e) {
		var data = e.target.result;

		image.src = data;
	}

	if (window.addEventListener) {
		document.addEventListener('click', onClick);

		document.addEventListener('mousewheel', updateNumber);
		document.addEventListener('keydown', updateNumber);

		document.addEventListener('keydown', updateInvoice);
		document.addEventListener('keyup', updateInvoice);

		/*input.addEventListener('focus', onEnterCancel);
		input.addEventListener('mouseover', onEnterCancel);
		input.addEventListener('dragover', onEnterCancel);
		input.addEventListener('dragenter', onEnterCancel);

		input.addEventListener('blur', onLeaveCancel);
		input.addEventListener('dragleave', onLeaveCancel);
		input.addEventListener('mouseout', onLeaveCancel);

		input.addEventListener('drop', onFileInput);
		input.addEventListener('change', onFileInput);*/
	}
        
}

window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);