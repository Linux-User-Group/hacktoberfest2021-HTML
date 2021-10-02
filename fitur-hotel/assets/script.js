function room() {
    let room = document.getElementById('room').value;
    let type = document.getElementById('type');
    console.log(room);


    if (room == "A/C") {


        type.innerHTML = `<select id="type" name="type">
    <option value="La casa">La casa</option>
    <option value="Accueil">Acceil</option>
    <option value="Zuhause">Zuhause</option>
</select>`;



    } else {

        type.innerHTML = `
<option value="Homu">Homu</option>
<option value="Die Huis">Die Huis</option>
<option value="Phteah">Phteah</option>`;
    }
}

function roombook() {
    let room = document.getElementById('roombook').value;
    let type = document.getElementById('typebook');
    console.log(room);


    if (room == "A/C") {


        type.innerHTML = `<select id="type" name="type">
    <option value="La casa">La casa</option>
    <option value="Accueil">Acceil</option>
    <option value="Zuhause">Zuhause</option>
</select>`;



    } else {

        type.innerHTML = `
<option value="Homu">Homu</option>
<option value="Die Huis">Die Huis</option>
<option value="Phteah">Phteah</option>`;
    }
}


// resto


const container = document.querySelector(".contain");
const full = document.querySelector(".full");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", (e)=>{
    // check apakah yang diklik adalah thumbs
    if (e.target.className == "thumb") {
        full.src = e.target.src;
        full.classList.add("fade");
        setTimeout(() => {
            full.classList.remove("fade");
        }, 500);

        thumbs.forEach((thumb)=>{
            // if (thumb.classList.contains("active")) {
            //     thumb.classList.remove("active");
            // }
            thumb.className = "thumb";
        });
        e.target.classList.add("active");
    }
});



// Akhir resto


// Login


function proses() {
    let user, pass, act;

    user = document.getElementById('user').value;
    pass = document.getElementById('password').value;
    act = document.querySelector("form");
    if (user=="denny" && pass=="0181") {
        
        alert("Selamat Datang "+upper);
    }else{
        alert("Username/Password anda salah");
        act.action = "login.html";
    }
}

// Akhir Login



