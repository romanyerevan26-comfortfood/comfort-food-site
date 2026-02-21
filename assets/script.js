assets/style.css // Active nav link highlighting
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    if ((a.getAttribute("href") || "").toLowerCase() === path) a.classList.add("active");
  });
})();

// Copy-to-clipboard helper
function copyText(text){
  navigator.clipboard.writeText(text).then(()=>{
    alert("Скопировано: " + text);
  }).catch(()=>{
    prompt("Скопируйте вручную:", text);
  });
}
