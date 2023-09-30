function sendEmail(){
    (function(){
        emailjs.init("OwFLsmMOnAdh-iyLl");
    })();

    var params = {
        sendername : document.querySelector("#sendername").value,
        message : document.querySelector("#message").value,
    };

    var serviceID = "service_uwhwoub";
    var templateID = "template_tb4oxvc";
    
    emailjs.send(serviceID, templateID, params)
    .then( res =>{
        alert("Email sent success!");
    })
    .catch();
}