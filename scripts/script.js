// paste JavaScript here

const problems = [6,7,8,9,10,11,12,13,14,15,16,17];
function print(str){
  document.getElementById("cardarea").innerHTML = str;
}
function generate() {
  nCards = parseInt(document.getElementById("numberOfCards").value);
  let output = "";
  for(let i = 0; i < parseInt(nCards); i++){
    let prob = [];
    problems.sort(function(a, b){return 0.5 - Math.random()});
    for (hmm = 0; hmm < problems.length; hmm++){
      prob.push(problems[hmm]);
    }
    output += "<table>";
    output += "<tr><th>C</th><th>U</th><th>B</th><th>S</th><tr>";
    
    for(let row = 0; row <3; row++){ 
    output += "<tr>";
      for(let col = 0; col <4; col++) {
        output += "<td>";
        output += "<img height=200 width=200 src='" + prob.pop() + ".png'>";
        output += "</td>";
      }
    output += "</tr>";
    } 
    output += "</table><br>";
  }
  print(output);
}

