
function Switch_NavBar_Lang_Ar(){
    HomePageTitle[0].setAttribute("lang", "ar");
    Ar_Nav.innerHTML = Ar_NavTemplate;
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
}
function LangBtnArClick() {
    console.log("onclick=LangBtnArClick()");

  localStorage.setItem("Permenant_Language", "عربي");
  alert("The Language Now is :: " + localStorage.getItem("Permenant_Language"));
//   sessionStorage.setItem("Permenant_Language", "عربي");
//   alert("The Language Now is :: " + sessionStorage.getItem("Permenant_Language"));

  // location.reload();
  console.log(
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
  );
  // Switch_NavBar_Lang_Ar();
  switch (true) {
    case location.href.includes("/Institute_Sections") ||
      location.href.includes("/institute_sections"):
      alert("Hello from IS");
      HomePageTitle[0].innerHTML = "الأقسام";
      Switch_NavBar_Lang_Ar();
      break;

    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    // case "Contact%20Us%20.html":
    // break;
    case location.href.includes("/Contact_Us") ||
      location.href.includes("/contact_us"):
      alert("Heloo from contact AR" + Contact_PageTitle);
      Contact_Load_Content_Ar();
      HomePageTitle[0].innerHTML = "الإتصال بنا";

      alert(location.href.includes("/Contact_Us"));
      alert(location.href.includes("/Home"));
      Switch_NavBar_Lang_Ar();
      break;

    default:
      alert("Heloo from Home AR");
      HomePageTitle[0].innerHTML = "الرئيسية";
      Switch_NavBar_Lang_Ar();
      break;
  }
}
