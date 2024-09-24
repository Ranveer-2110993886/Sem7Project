
anime({
  targets: '#headp3',
  opacity: [1,0,1],
  easing: 'easeInOutQuad',
  duration: 1700, 
  loop: true
});


$("#innerinputbox").on("click", function() {
  $("#fileinput").click();
});

$("#analyzer").click(function(){
  document.getElementById("loader").style.visibility = "visible";
  anime({
    targets: "#buttonname",
    easing: 'easeInOutQuad',
    marginLeft: "0vw",
    duration: 300,
    opacity: 0
  });

  setTimeout(function(){
    document.getElementById("buttonname").innerHTML = "Analyzing";

    anime({
      targets: "#buttonname",
      easing: 'easeInOutQuad',
      duration: 300,
      opacity: 1
    });

    anime({
      targets: "#loader",
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 300,
      marginLeft: "2vw"
    });
  }, 301);
});

$("#analyzer").click(function(){

    var news = document.getElementById("inputbox").value

    let data = {
      news: news
  };
     
  let json = JSON.stringify(data);
  
    fetch("/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: json
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error));
    get_track_js()
})

async function get_track_js() {
  let response = await fetch("/data");
  let data = await response.json();
  getresult(data[0])
}

function getresult(conf){
  setTimeout(function(){
    anime({
      targets: ["#loader", "#buttonname"],
      opacity: 0,
      duration: 700
    })
    setTimeout(function(){
      document.getElementById("analyzer").innerHTML = "";
      setTimeout(function(){
        document.getElementById("analyzer").innerHTML = "<p style = 'font-family: hndb'>Confidence That News is Fake: "+conf[0];
      }, 1500)
    }, 1000)
  }, 5000)
}
