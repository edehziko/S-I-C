document.getElementById("submitBtn");onclick = function(){
P = document.getElementById("P").value;
P = Number(P);

R = document.getElementById("R").value;
R = Number(R);

T = document.getElementById("T").value;
T = Number(T);

SI = (P * R * T)/100;

document.getElementById("SI").innerHTML = "YOUR SIMPLE INTEREST IS: " + SI;
}