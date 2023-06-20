function ujVisszajelzoSor(tesztneve, visszajelzes) {
  var table = document.querySelector("#testTable");
  var adatSor = table.insertRow(1);
  var tesztNeveMezo = adatSor.insertCell(0);
  var visszajelzesMezo = adatSor.insertCell(1);
  tesztNeveMezo.innerHTML = `${tesztneve}`;
  visszajelzesMezo.innerHTML = `${visszajelzes}`;
}

//1) Legkülső div elem azonosító "container"
function teszt01() {
  try {
    var legkulsobbDiv = document.querySelectorAll("div")[0];
    if (legkulsobbDiv.classList.contains("container")) {
      ujVisszajelzoSor("1. feladat: A legkülső div elem azonosítója container", "Megfelelő");
    } else {
      ujVisszajelzoSor("1. feladat: A legkülső div elem azonosítója container", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("1. feladat: A legkülső div elem azonosítója container", "HIBA");
  }
}

//2) Egyes szintű címsor tartalma (innerHTML)
function teszt02() {
  try {
    var h1Elem = document.querySelector("h1");
    var aktualisTartalom = h1Elem.innerHTML;
    if (aktualisTartalom == 'Tanfolyam regisztráció') {
      ujVisszajelzoSor('2. feladat: Az egyes színtű címsor tartalmaz szöveget?', "Megfelelő");
    } else {
      ujVisszajelzoSor('2. feladat: Az egyes színtű címsor tartalmaz szöveget?', "NEM Megfelelő");
    }
  } catch (error) {
    ujVisszajelzoSor('2. feladat: Az egyes színtű címsor tartalmaz szöveget?', "HIBA");
  }
}

//3) Első input mező típusa text
function teszt03() {
  try {
    var firstInput = document.querySelectorAll("input")[0];
    if (firstInput.type === "text") {
      ujVisszajelzoSor("3. feladat: az Első input mező típusa text", "Megfelelő");
    } else {
      ujVisszajelzoSor("3. feladat: az Első input mező típusa text", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("3. feladat: az Első input mező típusa text", "HIBA");
  }
}

//4) Első input mező azonosítója "veznev"
function teszt04() {
  try {
    var firstInput = document.querySelector("input:first-of-type");
    if (firstInput.id === "veznev") {
      ujVisszajelzoSor("4. feladat: az Első input azonosítója veznev", "Megfelelő");
    } else {
      ujVisszajelzoSor("4. feladat: az Első input azonosítója veznev", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("4. feladat: az Első input azonosítója veznev", "HIBA");
  }
}

//5) Első input mező bootstrap osztálya "form-control"
function teszt05() {
  try {
    var firstInputClass = document.querySelector("input:first-of-type")
    if (firstInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("5. feladat: az Első input mező bootstrap osztálya form-control", "Megfelelő");
    }
    else {
      ujVisszajelzoSor("5. feladat: az Első input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  }
  catch {

    ujVisszajelzoSor("5. feladat: az Első input mező bootstrap osztálya form-control", "HIBA");
  }
}

//6) Második input mező típusa text
function teszt06() {
  try {
    var secondInput = document.querySelectorAll("input")[1];
    if (secondInput.type === "text") {
      ujVisszajelzoSor("6. feladat: a Második input mező típusa text", "Megfelelő");
    } else {
      ujVisszajelzoSor("6. feladat: a Második input mező típusa text", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("6. feladat: a Második input mező típusa text", "HIBA");
  }
}

//7) Második input mező azonosítója "kernev"
function teszt07() {
  try {
    var secondInput = document.querySelectorAll("input")[1];
    if (secondInput.id === "kernev") {
      ujVisszajelzoSor("7. feladat: a Második input azonosítója kernev", "Megfelelő");
    } else {
      ujVisszajelzoSor("7. feladat: a Második input azonosítója kernev", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("7. feladat: a Második input azonosítója kernev", "HIBA");
  }
}

//8) Második input mező bootstrap osztálya "form-control"
function teszt08() {
  try {
    var secondInputClass = document.querySelector("input:nth-of-type(1)");
    if (secondInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("8. feladat: a Második input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("8. feladat: a Második input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("8. feladat: a Második input mező bootstrap osztálya form-control", "HIBA");
  }
}

//9) harmadik input mező típusa text
function teszt09() {
  try {
    var thirdInput = document.querySelectorAll("input")[2];
    if (thirdInput.type === "text") {
      ujVisszajelzoSor("9. feladat: a Harmadik input mező típusa text", "Megfelelő");
    } else {
      ujVisszajelzoSor("9. feladat: a Harmadik input mező típusa text", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("9. feladat: a Harmadik input mező típusa text", "HIBA");
  }
}

//10) Harmadik input mező azonosítója "fnev"
function teszt10() {
  try {
    var thirdInput = document.querySelectorAll("input")[2];
    if (thirdInput.id === "fnev") {
      ujVisszajelzoSor("10. feladat: a Harmadik input azonosítója fnev", "Megfelelő");
    } else {
      ujVisszajelzoSor("10. feladat: a Harmadik input azonosítója fnev", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("10. feladat: a Harmadik input azonosítója fnev", "HIBA");
  }
}

//11) Harmadik input mező bootstrap osztálya "form-control"
function teszt11() {
  try {
    var thirdInputClass = document.querySelectorAll("input")[2];
    if (thirdInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("11. feladat: a Harmadik input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("11. feladat: a Harmadik input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("11. feladat: a Harmadik input mező bootstrap osztálya form-control", "HIBA");
  }
}

//12) Negyedik input mező típusa password
function teszt12() {
  try {
    var fourthInput = document.querySelectorAll("input")[3];
    if (fourthInput.type === "password") {
      ujVisszajelzoSor("12. feladat: a Negyedik input mező típusa password", "Megfelelő");
    } else {
      ujVisszajelzoSor("12. feladat: a Negyedik input mező típusa password", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("12. feladat: a Negyedik input mező típusa password", "HIBA");
  }
}

//13) Negyedik input mező azonosítója "pass1"
function teszt13() {
  try {
    var fourthInput = document.querySelectorAll("input")[3];
    if (fourthInput.id === "pass1") {
      ujVisszajelzoSor("13. feladat: a Negyedik input azonosítója pass1", "Megfelelő");
    } else {
      ujVisszajelzoSor("13. feladat: a Negyedik input azonosítója pass1", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("13. feladat: a Negyedik input azonosítója pass1", "HIBA");
  }
}

//14) Negyedik input mező bootstrap osztálya "form-control"
function teszt14() {
  try {
    var fourthInputClass = document.querySelectorAll("input")[3];
    if (fourthInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("14. feladat: a Negyedik input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("14. feladat: a Negyedik input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("14. feladat: a Negyedik input mező bootstrap osztálya form-control", "HIBA");
  }
}

//15) Ötödik input mező típusa password
function teszt15() {
  try {
    var fifthInput = document.querySelectorAll("input")[4];
    if (fifthInput.type === "password") {
      ujVisszajelzoSor("15. feladat: az Ötödik input mező típusa password", "Megfelelő");
    } else {
      ujVisszajelzoSor("15. feladat: az Ötödik input mező típusa password", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("15. feladat: a Ötödik input mező típusa password", "HIBA");
  }
}

//16) Ötödik input mező azonosítója "pass2"
function teszt16() {
  try {
    var fifthInput = document.querySelectorAll("input")[4];
    if (fifthInput.id === "pass2") {
      ujVisszajelzoSor("16. feladat: az Ötödik input azonosítója pass2", "Megfelelő");
    } else {
      ujVisszajelzoSor("16. feladat: az Ötödik input azonosítója pass2", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("16. feladat: az Ötödik input azonosítója pass2", "HIBA");
  }
}

//17) Ötödik input mező bootstrap osztálya "form-control"
function teszt17() {
  try {
    var fifthInputClass = document.querySelectorAll("input")[4];
    if (fifthInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("17. feladat: az Ötödik input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("17. feladat: az Ötödik input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("17. feladat: az Ötödik input mező bootstrap osztálya form-control", "HIBA");
  }
}

//18) Hatodik input mező típusa email
function teszt18() {
  try {
    var sixthInput = document.querySelectorAll("input")[5];
    if (sixthInput.type === "email") {
      ujVisszajelzoSor("18. feladat: a Hatodik input mező típusa email", "Megfelelő");
    } else {
      ujVisszajelzoSor("18. feladat: a Hatodik input mező típusa email", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("18. feladat: a Hatodik input mező típusa email", "HIBA");
  }
}

//19) Hatodik input mező azonosítója "email"
function teszt19() {
  try {
    var sixthInput = document.querySelectorAll("input")[5];
    if (sixthInput.id === "email") {
      ujVisszajelzoSor("19. feladat: a Hatodik input azonosítója email", "Megfelelő");
    } else {
      ujVisszajelzoSor("19. feladat: a Hatodik input azonosítója email", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("19. feladat: a Hatodik input azonosítója email", "HIBA");
  }
}

//20) Hatodik input mező bootstrap osztálya "form-control"
function teszt20() {
  try {
    var sixthInputClass = document.querySelectorAll("input")[5];
    if (sixthInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("20. feladat: a Hatodik input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("20. feladat: a Hatodik input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("20. feladat: a Hatodik input mező bootstrap osztálya form-control", "HIBA");
  }
}

//21) Hetedik input mező típusa tel
function teszt21() {
  try {
    var seventhInput = document.querySelectorAll("input")[6];
    if (seventhInput.type === "tel") {
      ujVisszajelzoSor("21. feladat: a Hetedikik input mező típusa tel", "Megfelelő");
    } else {
      ujVisszajelzoSor("21. feladat: a Hetedik input mező típusa tel", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("21. feladat: a Hetedik input mező típusa tel", "HIBA");
  }
}

//22) Hetedik input mező azonosítója "tel"
function teszt22() {
  try {
    var seventhInput = document.querySelectorAll("input")[6];
    if (seventhInput.id === "tel") {
      ujVisszajelzoSor("22. feladat: a Hetedik input azonosítója tel", "Megfelelő");
    } else {
      ujVisszajelzoSor("22. feladat: a Hetedik input azonosítója tel", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("22. feladat: a Hetedik input azonosítója tel", "HIBA");
  }
}

//23) Hatodik input mező bootstrap osztálya "form-control"
function teszt23() {
  try {
    var seventhInputClass = document.querySelectorAll("input")[6];
    if (seventhInputClass.classList.contains("form-control")) {
      ujVisszajelzoSor("23. feladat: a Hetedik input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("23. feladat: a Hetedik input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("23. feladat: a Hetedik input mező bootstrap osztálya form-control", "HIBA");
  }
}

//24) Mindegyik input mező bootstrap osztálya "form-control"
function teszt24() {
  try {
    var allInputClass = document.querySelectorAll("input");
    var allFormControls = true;

    for (var i = 0; i < allInputClass.length; i++) {
      if (!allInputClass[i].classList.contains("form-control")) {
        allFormControls = false;
      }
    }
    if (allFormControls) {
      ujVisszajelzoSor("24. feladat: Minden input mező bootstrap osztálya form-control", "Megfelelő");
    } else {
      ujVisszajelzoSor("24. feladat: Minden input mező bootstrap osztálya form-control", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("24. feladat: Minden input mező bootstrap osztálya form-control", "HIBA");
  }
}

//25) Elsőtől- nyolcadik label tartalma...
function teszt25() {
  try {
    var allLabels = document.querySelector("label");
    var labelTartalom = allLabels.innerHTML;
    if (labelTartalom.trim() !== '') {
      ujVisszajelzoSor('25. feladat: Az összes label tartalmaz szöveget?', "Megfelelő");
    } else {
      ujVisszajelzoSor('25. feladat: Az összes label tartalmaz szöveget?', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('25. feladat: Az összes label tartalmaz szöveget?', "HIBA");
  }
}

//26) Felhasználói név alatti "üzenet" osztályai
function teszt26() {
  try {
    var nameSmallClass = document.querySelectorAll("small")[0];
    if (nameSmallClass.classList.contains("form-text") && nameSmallClass.classList.contains("text-muted")) {
      ujVisszajelzoSor('26. feladat: Felhasználói név alatti üzenet osztályai', "Megfelelő");
    } else {
      ujVisszajelzoSor('26. feladat: Felhasználói név alatti üzenet osztályai', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('26. feladat: Felhasználói név alatti üzenet osztályai', "HIBA");
  }
}

//27) Felhasználói név alatti "üzenet" tartalma
function teszt27() {
  try {
    var nameSmallText = document.querySelectorAll("small")[0];
    var nameTartalom = nameSmallText.innerHTML;
    if (nameTartalom == 'Beceneve, mely mások számára is látható.') {
      ujVisszajelzoSor('27. feladat: Felhasználói név alatti üzenet tartalma?', "Megfelelő");
    } else {
      ujVisszajelzoSor('27. feladat: Felhasználói név alatti üzenet tartalma?', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('27. feladat: Felhasználói név alatti üzenet tartalma?', "HIBA");
  }
}

//28) Email név alatti "üzenet" osztályai
function teszt28() {
  try {
    var emailSmallClass = document.querySelectorAll("small")[1];
    if (emailSmallClass.classList.contains("form-text") && emailSmallClass.classList.contains("text-muted")) {
      ujVisszajelzoSor('28. feladat: Email alatti üzenet osztályai', "Megfelelő");
    } else {
      ujVisszajelzoSor('28. feladat: Email alatti üzenet osztályai', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('28. feladat: Email alatti üzenet osztályai', "HIBA");
  }
}

//29) Email név alatti "üzenet" tartalma
function teszt29() {
  try {
    var emailSmallText = document.querySelectorAll("small")[1];
    var emailTartalom = emailSmallText.innerHTML;
    if (emailTartalom == 'Ide továbbítjuk a legfontosabb tanfolyam információkat önnek.') {
      ujVisszajelzoSor('29. feladat: Email alatti üzenet tartalma?', "Megfelelő");
    } else {
      ujVisszajelzoSor('29. feladat: Email alatti üzenet tartalma?', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('29. feladat: Email alatti üzenet tartalma?', "HIBA");
  }
}

//30) Telefon alatti "üzenet" osztályai
function teszt30() {
  try {
    var telSmallClass = document.querySelectorAll("small")[2];
    if (telSmallClass.classList.contains("form-text") && telSmallClass.classList.contains("text-muted")) {
      ujVisszajelzoSor('30. feladat: Telefon alatti üzenet osztályai', "Megfelelő");
    } else {
      ujVisszajelzoSor('30. feladat: Telefon alatti üzenet osztályai', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('30. feladat: Telefon alatti üzenet osztályai', "HIBA");
  }
}

//31) Telefon alatti "üzenet" tartalma
function teszt31() {
  try {
    var telSmallText = document.querySelectorAll("small")[2];
    var telTartalom = telSmallText.innerHTML;
    if (telTartalom == 'Ha szeretne akár azonnal értesülni a fontosabb hírekről') {
      ujVisszajelzoSor('31. feladat: Telefon alatti üzenet tartalma?', "Megfelelő");
    } else {
      ujVisszajelzoSor('31. feladat: Telefon alatti üzenet tartalma?', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('31. feladat: Telefon alatti üzenet tartalma?', "HIBA");
  }
}

//32) Összes small class tartalma
function teszt32() {
  try {
    var allSmallClass = document.querySelectorAll("small");
    var isAllSmallClassCorrect = true;
    for (var i = 0; i < allSmallClass.length; i++) {
      if (!allSmallClass[i].classList.contains("form-text") || !allSmallClass[i].classList.contains("text-muted")) {
        isAllSmallClassCorrect = false;
      }
    }
    if (isAllSmallClassCorrect) {
      ujVisszajelzoSor("32. feladat: Az összes small class osztályai", "Megfelelő");
    } else {
      ujVisszajelzoSor("32. feladat: Az összes small class osztályai", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('32. feladat: Az összes small class osztályai', "HIBA");
  }
}

//33) Gomb alapértelmezett bootstrap osztálya
function teszt33() {
  try {
    var buttonClass = document.querySelector("button")
    if (buttonClass.classList.contains("btn")) {
      ujVisszajelzoSor("33. feladat: A Gomb alapértelmezett osztálya", "Megfelelő");
    } else {
      ujVisszajelzoSor("33. feladat: A Gomb alapértelmezett osztálya", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('33. feladat: A Gomb alapértelmezett osztálya', "HIBA");
  }
}

//34) Gomb színe
function teszt34() {
  try {
    var buttonClassColor = document.querySelector("button")
    if (buttonClassColor.classList.contains("btn-primary")) {
      ujVisszajelzoSor("34. feladat: A Gomb színe", "Megfelelő");
    } else {
      ujVisszajelzoSor("34. feladat: A Gomb színe", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('34. feladat: A Gomb színe', "HIBA");
  }
}

//35) Gomb méretének módosítása
function teszt35() {
  try {
    var buttonClassSize = document.querySelector("button");
    if (buttonClassSize.classList.contains("form-control")) {
      ujVisszajelzoSor("35. feladat: Gomb méretének módosítása, form-control segítségével.", "Megfelelő");
    } else {
      ujVisszajelzoSor("35. feladat: Gomb méretének módosítása, form-control segítségével.", "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor("35. feladat: Gomb méretének módosítása, form-control segítségével.", "HIBA");
  }
}

//36) Gomb felirata (annak tartalma: innerHtml)
function teszt36() {
  try {
    var buttonNameText = document.querySelector("button");
    var buttonTartalom = buttonNameText.innerHTML;
    if (buttonTartalom == "Regisztrálok") {
      ujVisszajelzoSor('36. feladat: Gomb tartalma:Regisztrálok', "Megfelelő");
    } else {
      ujVisszajelzoSor('36. feladat: Gomb tartalma:Regisztrálok', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('36. feladat: Gomb tartalma:Regisztrálok?', "HIBA");
  }
}

//37) Select mezőben lévő elemek száma
function teszt37() {
  try {
    var selectLength = document.querySelector("select");
    if (selectLength.options.length === 4) {
      ujVisszajelzoSor('37. feladat: Select mezőben lévő elemek száma', "Megfelelő");
    } else {
      ujVisszajelzoSor('37. feladat: Select mezőben lévő elemek száma', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('37. feladat: Select mezőben lévő elemek száma', "HIBA");
  }
}

//38) Select mezőben kiválasztott elemnek az értéke
function teszt38() {
  try {
    var selectedValue = document.querySelector("#tipus option[selected]");
    if (selectedValue.textContent === "Webfejlesztő") {
      ujVisszajelzoSor('38. feladat: Select mezőben kiválasztott elem értéke', "Megfelelő");
    } else {
      ujVisszajelzoSor('38. feladat: Select mezőben kiválasztott elem értéke', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('38. feladat: Select mezőben kiválasztott elem értéke', "HIBA");
  }
}

//40) Checkbox állapota, alapnak unchecked legyen
function teszt40() {
  try {
    var unChecked = document.querySelector(".form-check input");
    if (unChecked.checked == false) {
      ujVisszajelzoSor('40. feladat: Unchecked ellenőrzés a checkboxnál', "Megfelelő");
    } else {
      ujVisszajelzoSor('40. feladat: Unchecked ellenőrzés a checkboxnál', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('40. feladat: Unchecked ellenőrzés a checkboxnál', "HIBA");
  }
}

//41) Checkbox mellett szöveg
function teszt41() {
  try {
    var checkText = document.querySelector(".form-check label");
    if (checkText.textContent == "Adatvédelmi nyilatkozat elfogadása") {
      ujVisszajelzoSor('41. feladat: Szöveg ellenőrzése a Checkbox mellett', "Megfelelő");
    } else {
      ujVisszajelzoSor('41. feladat: Szöveg ellenőrzése a Checkbox mellett', "NEM Megfelelő");
    }
  } catch {
    ujVisszajelzoSor('41. feladat: Szöveg ellenőrzése a Checkbox mellett', "HIBA");
  }
}

//42) Minden label végén van e kettőspont
function teszt42() {
  try {
    var allLabels = document.querySelectorAll("label");
    var allLabelsHaveColon = true;
    for (var i = 0; i < allLabels.length; i++) {
      var labelText = allLabels[i].textContent;
      if (!labelText.endsWith(":")) {
        allLabelsHaveColon = false;
      }
    }

    if (allLabelsHaveColon) {
      ujVisszajelzoSor('42. feladat: Minden label végén van kettőspont', "Megfelelő");
    } else {
      ujVisszajelzoSor('42. feladat: Minden label végén van kettőspont', "NEM Megfelelő");
    }
  }
  catch {
    ujVisszajelzoSor('42. feladat: Minden label végén van kettőspont', "HIBA");
  }
}

//44) Gomb action tulajdonsága - ÜRES KELL LEGYEN!
function teszt44() {
  try {
    var gombAction = document.querySelector("button");
    if (!gombAction.hasAttribute("action")) {
      ujVisszajelzoSor('44. feladat: A gomb action tulajdonsága ÜRES', "Megfelelő");
    } else {
      ujVisszajelzoSor('44. feladat: A gomb action tulajdonsága ÜRES', "NEM Megfelelő");
    }
  }
  catch {
    ujVisszajelzoSor('44. feladat: A gomb action tulajdonsága ÜRES', "HIBA");
  }
}

function allTeszt() {
  teszt44();
  teszt42();
  teszt41();
  teszt40();
  teszt38();
  teszt37();
  teszt36();
  teszt35();
  teszt34();
  teszt33();
  teszt32();
  teszt31();
  teszt30();
  teszt29();
  teszt28();
  teszt27();
  teszt26();
  teszt25();
  teszt24();
  teszt23();
  teszt22();
  teszt21();
  teszt20();
  teszt19();
  teszt18();
  teszt17();
  teszt16();
  teszt15();
  teszt14();
  teszt13();
  teszt12();
  teszt11();
  teszt10();
  teszt09();
  teszt08();
  teszt07();
  teszt06();
  teszt05();
  teszt04();
  teszt03();
  teszt02();
  teszt01();
}

allTeszt();