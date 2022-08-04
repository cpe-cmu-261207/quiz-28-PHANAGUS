const icon = document.getElementById("span-gender-icon");
const userCard = document.getElementById("div-user-card");
const loadCard = document.getElementById("div-loading-card");
const pimg = document.getElementById("img-profile");
const pname = document.getElementById("p-name");
const pemail = document.getElementById("p-email");
const paddress = document.getElementById("p-address");

async function callApi() {
  try {
    const resp = await axios.get("https://randomuser.me/api/");
    const user = resp.data.results[0];
    if (user.name.title === "Mr") icon.innerText = "👨";
    else icon.innerText = "👩";
    pname.innerText = user.name.first + " " + user.name.last;
    pemail.innerText = user.email;
    paddress.innerText = user.address;
  } catch (err) {
    console.log(err);
  }
}

callApi();

userCard.style.display = "";
