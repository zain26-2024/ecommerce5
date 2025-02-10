window.bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.bundle')
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-card-btn').forEach(item =>{
    item.addEventListener("click", () =>{
        alert("أضيف المنتج الى عربة الشراء")

    })

})

console.log("أهلا بك في متجر عربي")