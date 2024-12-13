function getCalories() {
  const userSize = document.querySelector("#body-size").valueAsNumber;

  const userAge = document.querySelector("#age").valueAsNumber;

  const userWeight = document.querySelector("#body-weight").valueAsNumber;

  const userGender = document.querySelector("input[name=gender]:checked").value;

  const userActivity = Number(document.querySelector("#activity").value);

  console.log({ userSize });
  console.log({ userAge });
  console.log({ userWeight });
  console.log({ userActivity });
  console.log({ userGender });

  const basalCalories = document.querySelector(".basalKcal");
  const totalCalories = document.querySelector(".totalKcal");
  const basalKJ = document.querySelector(".basalKJ");
  const totalKJ = document.querySelector(".totalKJ");

  if (userGender == "female") {
    basalCalories.innerText = Math.ceil(
      655.1 + 9.6 * userWeight + 1.8 * userSize - 4.7 * userAge
    );

    totalCalories.innerText = Math.ceil(
      Number(basalCalories.innerText) * userActivity
    );

    basalKJ.innerText = Math.ceil(Number(basalCalories.innerText) * 4.184);

    totalKJ.innerText = Math.ceil(Number(totalCalories.innerText) * 4.184);
  } else if (userGender == "male") {
    basalCalories.innerText = Math.ceil(
      66.47 + 13.7 * userWeight + 5 * userSize - 4.7 * userAge
    );

    totalCalories.innerText = Math.ceil(
      Number(basalCalories.innerText) * userActivity
    );

    basalKJ.innerText = Math.ceil(Number(basalCalories.innerText) * 4.184);

    totalKJ.innerText = Math.ceil(Number(totalCalories.innerText) * 4.184);
  }
}

getCalories();
