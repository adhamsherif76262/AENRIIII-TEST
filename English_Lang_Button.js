function Switch_NavBar_Lang_En(){
    HomePageTitle[0].setAttribute("lang", "en");
    Ar_Nav.classList.add("D_None");
    En_Nav.classList.remove("D_None");
    En_Nav.innerHTML = En_NavTemplate;
}

function LangBtnEnClick() {
  console.log("onclick=LangBtnEnClick()");
  console.log("666666666666666666");
  localStorage.setItem("Permenant_Language" , "English");
  alert("The Language Now is :: " + localStorage.getItem("Permenant_Language"));
//   sessionStorage.setItem("Permenant_Language" , "English");
//   alert("The Language Now is :: " + sessionStorage.getItem("Permenant_Language"));

  console.log(
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    );

    // Switch_NavBar_Lang_En();
    switch (
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    ) {
      case "Home.html":
        alert("Heloo from Home ENG");
        HomePageTitle[0].innerHTML = "AERI Home Page";
        break;

      case "Institute_Sections.html":
        alert("Heloo from Institute Sections ENG");
        HomePageTitle[0].innerHTML = "AERI Institute Sections Page";
        Switch_NavBar_Lang_En();
        break;

      case "Contact_Us.html":
        alert("Heloo from contact ENG");
        Contact_H1.textContent = "zzzzzzzzzzzzzz";
        console.log(Contact_H1);
        HomePageTitle[0].innerHTML = "AERI Contact Us Page";
        Switch_NavBar_Lang_En();
        break;

      default:
        break;
    }
}
