// Email.send("njideka.okafor.175510@unn.edu.ng",
// "njideka.okafor.175510@unn.edu.ng",
// "Hola Amiga",
// "this is the body",
// "smtpjs.com",
// {token: "08278b5a-b3dc-48bd-b7b1-b657318c8e9a",callback: function done(message) { alert("sent")}});
(function(){
    emailjs.init("user_hQW8HSYb0Mnh6deg611Kt");
})();
window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    this.contact_number.value = Math.random()*100000|0;
    this.admin_name.value = "Njay"; 
    emailjs.sendForm('njayokafor_gmail_com','template_PWInfJoa',this);
    });
}