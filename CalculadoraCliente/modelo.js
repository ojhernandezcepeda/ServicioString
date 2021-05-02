function displayRequest(request){
    solicitud = $.format(request.toString(),{ method: 'xml'});
    $('#input-code').text(solicitud);
    console.log("solicitud"+solicitud);
};

function displayResult(response){
    respuesta = $.format(response.toString(),{method: 'xml'});
    $('#output-code').text(respuesta);
    $('#output-container').removeClass("error");
    console.log("respuesta"+ respuesta);
};

function displayError(response){
    respuesta = $.format(response.toString(),{method: 'xml'});
    $('#output-code').text(respuesta);
    $('#output-container').addClass("error");
    console.log("respuesta Error"+ respuesta);
};

function sendRequest(method, data){
    console.log("Entra a sendRequest");
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
    console.log("Entra a clic Unir");
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