function displayRequest(request){
    solicitud = $.format(request.toString(),{ method: 'xml'});
    $('#input-code').text(solicitud);
};

function displayResult(response){
    respuesta = $.format(response.toString(),{method: 'xml'});
    $('#output-code').text(respuesta);
    $('#output-container').removeClass("error");
    $('#output').removeClass("alert-light");
    $('#output').addClass('alert-success');
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(response,'text/xml');
    console.log(xmlDoc);
    var subtitulo = xmlDoc.getElementsByTagName("retval")[0].innerHTML;
    document.getElementById("respuesta").value = subtitulo;
};

function displayError(response){
    respuesta = $.format(response.toString(),{method: 'xml'});
    $('#output-code').text(respuesta);
    $('#output-container').addClass("error");
    $('#output').removeClass("alert-light");
    $('#output').addClass('alert-danger');
};

function sendRequest(method, data){
    $.soap({
        url: "https://gateway-tx-1.thriftly.io/dev/ep3ba9c4/StringService",        
        method: method,
        data: data,
        HTTPHeaders: {
            'Content-type':'application/xml',
            'Server-Protocol':'SOAP'
        },
        beforeSend: displayRequest,
        success: displayResult,
        error: displayError
    })
};
		
$("#Unir").click(function (){
    sendRequest("unir", {
        string1: $("#unirString1").val(),
        string2: $("#unirString2").val()
    })
});

$("#AMayusculas").click(function (){
    sendRequest("aMayusculas", {
        string1: $("#aMayusString1").val()        
    })
});

$("#AMinusculas").click(function (){
    sendRequest("aMinusculas", {
        string1: $("#aMinusString1").val()        
    })
});