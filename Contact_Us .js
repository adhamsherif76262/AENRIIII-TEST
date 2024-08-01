var Contact_PageTitle = document.getElementById("Contact_Us_Page_Title");
var Contact_H1 = document.getElementById("7amada");
function Contact_Load_Content_Ar(){
    Contact_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
    HomePageTitle[0].innerHTML = "الإتصال بنا";
}
function Contact_Load_Content_En(){
    Contact_H1.textContent = "zzzzzzzzzzzzzz";
    HomePageTitle[0].innerHTML = "AERI Contact Us Page";
    
}
if (localStorage.getItem("Permenant_Language") === "English") {
    Contact_Load_Content_En()
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
    Contact_Load_Content_Ar()
}