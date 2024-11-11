// Main Section
const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function () {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})


// Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// Gembok
// alert kompleks
document.addEventListener("DOMContentLoaded", function () {
    // Mengunci scroll dan nav di header
    document.body.classList.add("no-scroll");
    const headerNav = document.querySelector("header nav");
    headerNav.classList.add("nav-disabled");

    const lockIcon = document.getElementById("lock");
    const unlockText = document.getElementById("unlock-text");
    const alertBox = document.querySelector(".alert");
    let alertInterval;

    // Fungsi untuk menampilkan alert
    function showAlert() {
        alertBox.classList.add("show");
        alertBox.classList.remove("hide");
        alertBox.classList.add("showAlert");
        setTimeout(() => {
            alertBox.classList.remove("show");
            alertBox.classList.add("hide");
        }, 5000);
    }

    // Timer pertama untuk menunggu 5 detik sebelum menampilkan alert pertama kali
    const initialAlertTimeout = setTimeout(function () {
        showAlert();
        // Interval berulang setiap 15 detik untuk menampilkan alert jika gembok belum diklik
        alertInterval = setInterval(function () {
            if (!lockIcon.classList.contains("hidden")) {
                showAlert();
            }
        }, 15000);
    }, 5000);

    // Event listener untuk perubahan ikon saat hover
    lockIcon.addEventListener("mouseover", function () {
        this.querySelector("i").classList.replace("fa-lock", "fa-lock-open");
    });

    lockIcon.addEventListener("mouseout", function () {
        this.querySelector("i").classList.replace("fa-lock-open", "fa-lock");
    });

    // Event listener untuk klik gembok
    lockIcon.addEventListener("click", function () {
        // Menghapus kunci scroll dan mengaktifkan nav header
        document.body.classList.remove("no-scroll");
        headerNav.classList.remove("nav-disabled");

        // Auto scroll ke elemen dengan ID 'aboutUs'
        document.getElementById("aboutUs").scrollIntoView({
            behavior: 'smooth'
        });

        // Menghilangkan gembok dan menampilkan teks
        lockIcon.classList.add("hidden");
        unlockText.classList.add("visible");

        // Menghentikan semua interval dan timeout untuk alert
        clearTimeout(initialAlertTimeout);
        clearInterval(alertInterval);
    });

    // Event listener untuk tombol close pada alert
    document.querySelector(".alert .close-btn").addEventListener("click", function () {
        alertBox.classList.remove("show");
        alertBox.classList.add("hide");
    });
});




// burger
// Ambil elemen burger dan menu nav
const burgerMenu = document.querySelector('.burger_menu');
const navLinks = document.querySelector('.nav-links');

// Event listener untuk burger menu
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// maskot
const maskot = document.querySelector('.maskot');

document.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
    // Mengatur kecepatan pergerakan maskot (0.5 adalah faktor kecepatan)
    maskot.style.transform = `translate(-50%, -50%) translateY(${scrollValue * 0.1}px)`;
});
