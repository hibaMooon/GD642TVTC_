let btnCalc = document.querySelector(`.btnCalc`);
let result = document.querySelector(`p.result`);
let selectType = document.querySelector(`#type`);
selectType.addEventListener(`change`, () => {
  if (selectType.value == `الدبلوم العلمي صباحي`) {
    document.querySelector(`.uni #Diploma-rate`).textContent = `50%`;
    document.querySelector(`.uni #en`).textContent = `30%`;
    document.querySelector(`.uni #GraduationYear`).textContent = `20%`;
    document.querySelector(`#Diploma-text`).textContent = `مدرسة:`;
    document.querySelector(`#en-text`).textContent = `قدرات:`;
    document.querySelector(`#GraduationYear-text`).textContent = `التحصيلي:`;
    document.querySelector(`.uni #Diploma-text`).textContent = `مدرسة:`;
    document.querySelector(`.uni #en-text`).textContent = `قدرات:`;
    document.querySelector(`#GraduationYear-text`).style.display = `block`;
    document.querySelector(`.uni #GraduationYear-text`).style.display = `block`;
    document.querySelector(`.uni #GraduationYear`).style.display = `block`;
    document.querySelector(`.degree #GraduationYear`).style.display = `block`;
    document.querySelector(
      `.uni #GraduationYear-text`
    ).textContent = `التحصيلي:`;
  } else if (selectType.value == `صباحي-مسائي بكالوريوس`) {
    document.querySelector(`.uni #Diploma-rate`).textContent = `60%`;
    document.querySelector(`.uni #en`).textContent = `30%`;
    document.querySelector(`.uni #GraduationYear`).textContent = `10%`;
    document.querySelector(`#Diploma-text`).textContent = `معدل الدبلوم:`;
    document.querySelector(`#en-text`).textContent = `اختبار الانجليزية:`;
    document.querySelector(`#GraduationYear-text`).textContent = `سنة التخرج:`;
    document.querySelector(`.uni #Diploma-text`).textContent = `معدل الدبلوم:`;
    document.querySelector(`.uni #en-text`).textContent = `اختبار الانجليزية:`;
    document.querySelector(`.uni #GraduationYear-text`).textContent = `سنة التخرج:`;
    document.querySelector(`#GraduationYear`).style.display = `none`;
    document.querySelector(`#GraduationYear-text`).style.display = `block`;
    document.querySelector(`.uni #GraduationYear-text`).style.display = `block`;
  } else {
    document.querySelector(`.uni #Diploma-rate`).textContent = `60%`;
    document.querySelector(`.uni #en`).textContent = `40%`;
    document.querySelector(`.uni #GraduationYear`).textContent = `0%`;
    document.querySelector(`#Diploma-text`).textContent = `مدرسة:`;
    document.querySelector(`#en-text`).textContent = `قدرات:`;
    document.querySelector(`.uni #Diploma-text`).textContent = `مدرسة:`;
    document.querySelector(`.uni #en-text`).textContent = `قدرات:`;
    document.querySelector(`#GraduationYear-text`).style.display = `none`;
    document.querySelector(`.uni #GraduationYear-text`).style.display = `none`;
    document.querySelector(`.uni #GraduationYear`).style.display = `none`;
    document.querySelector(`.degree #GraduationYear`).style.display = `none`;
  }
});

btnCalc.addEventListener(`click`, function () {
  let totalUni;
  if (selectType.value == `الدبلوم العلمي صباحي`) {
    totalUni =
      +document.querySelector(`#Diploma-rate`).value * 0.5 +
      +document.querySelector(`#en`).value * 0.3 +
      +document.querySelector(`#GraduationYear`).value * 0.2;
  } else if (selectType.value == `صباحي-مسائي بكالوريوس`) {
    let totalDegree =
      +document.querySelector(`#Diploma-rate`).value >= 4.75
        ? 60
        : Math.floor(
            (60 / 4.75) * +document.querySelector(`#Diploma-rate`).value
          );
    let en =
      +document.querySelector(`#en`).value >= 60
        ? 30
        : Math.floor((30 / 60) * +document.querySelector(`#en`).value);
    totalUni = totalDegree + en;
  } else {
    totalUni =
      +document.querySelector(`#Diploma-rate`).value * 0.6 +
      +document.querySelector(`#en`).value * 0.4;
  }
  result.innerHTML = `نسبتك الموزونة هي ${totalUni}%
  <br>
  <span style="color:black;font-size:14px">بالتوفيق ❤️</span>`;
  result.style.color = `#005950`;
  result.style.fontSize = `28px`;
  document.querySelector(`.btn-date`).style.display = `inline`;
});
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    window.alert("enter only numbers");
  return true;
}
