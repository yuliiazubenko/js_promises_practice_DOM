function e(e){var n=document.createElement("div");n.setAttribute("data-qa","notification"),n.textContent=e,document.body.appendChild(n)}new Promise(function(e,n){var t=!1,o=function(n){0===n.button&&(t=!0,e("First promise was resolved"),document.removeEventListener("click",o))};document.addEventListener("click",o),setTimeout(function(){t||(n(Error("First promise was rejected")),document.removeEventListener("click",o))},3e3)}).then(function(n){return e("success",n)}).catch(function(n){return e("error",n)}),new Promise(function(e){document.addEventListener("click",function(n){0===n.button&&e("Second promise was resolved")}),document.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})}).then(function(n){return e("success",n)}),new Promise(function(e){var n=!1,t=!1,o=function(){n&&t&&(e("Third promise was resolved"),n=!1,t=!1)};document.addEventListener("click",function(){n=!0,o()}),document.addEventListener("contextmenu",function(e){e.preventDefault(),t=!0,o()})}).then(function(n){return e("success",n)}),document.addEventListener("contextmenu",function(e){return e.preventDefault()});
//# sourceMappingURL=index.35aae955.js.map
