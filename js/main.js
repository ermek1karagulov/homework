let btn = document.getElementsByClassName("btn")[0];
let inputOne = document.getElementsByClassName("input-one")[0];
let inputTwo = document.getElementsByClassName("input-two")[0];
let inputThre = document.getElementsByClassName("input-thre")[0];
let inputFour = document.getElementsByClassName("input-four")[0];
let recived = document.getElementsByClassName("recived")[0];

btn.addEventListener("click", function () {
  if (!inputThre.value.trim()) {
    alert("заполните все поля!!!");
  }
  let newInfo = {
    names: inputOne.value,
    named: inputTwo.value,
    namef: inputThre.value,
    name: inputFour.value,
    id: Date.now(),
  };
  setItem(newInfo);
  render();
});

function setItem(newInfo) {
  let data = getItem();
  data.push(newInfo);
  localStorage.setItem("info-data", JSON.stringify(data));
}

function getItem() {
  infoData = JSON.parse(localStorage.getItem("info-data"));
  if (!infoData) {
    localStorage.setItem("info-data", "[]");
    infoData = [];
  }
  return infoData;
}

function render() {
  let infoData = getItem();
  recived.innerHTML = "";
  infoData.forEach((item) => {
    let newInfo = document.createElement("li");
    newInfo.innerText = item.names;
    let newInfos = document.createElement("li");
    newInfos.innerText = item.named;
    let newInfod = document.createElement("li");
    newInfod.innerText = item.named;
    let newInfof = document.createElement("li");
    newInfof.innerText = item.name;

    let deleteInfo = document.createElement("button");
    deleteInfo.innerText = "Delete";
    deleteInfo.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteInfos();
    });

    let deleteInfod = document.createElement("button");
    deleteInfod.innerText = "Delete";
    deleteInfod.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteInfos();
    });

    let deleteInfog = document.createElement("button");
    deleteInfog.innerText = "Delete";
    deleteInfog.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteInfol();
    });

    let deleteInfoo = document.createElement("button");
    deleteInfoo.innerText = "Delete";
    deleteInfoo.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteInfoq();
    });

    newInfod.append(deleteInfoo);
    newInfos.append(deleteInfog);
    newInfof.append(deleteInfod);
    newInfo.append(deleteInfo);
    recived.append(newInfo, newInfos, newInfod, newInfof);
  });
}

function deleteInfos(id) {
  let infoData = getItem();
  let newInfoData = infoData.filter((item) => item.id !== id);
  localStorage.setItem("info-data", JSON.stringify(newInfoData));
  render();
}

function deleteInfos(id) {
  let infoData = getItem();
  let newInfoData = infoData.filter((item) => item.id !== id);
  localStorage.setItem("info-data", JSON.stringify(newInfoData));
  render();
}

function deleteInfol(id) {
  let infoData = getItem();
  let newInfoData = infoData.filter((item) => item.id !== id);
  localStorage.setItem("info-data", JSON.stringify(newInfoData));
  render();
}

function deleteInfoq(id) {
  let infoData = getItem();
  let newInfoData = infoData.filter((item) => item.id !== id);
  localStorage.setItem("info-data", JSON.stringify(newInfoData));
  render();
}
