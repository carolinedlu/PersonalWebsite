function LinkedIn(){
    window.open('https://www.linkedin.com/in/carolinelu4/', '_blank');

}

function contact(){
    window.open('https://goo.gl/forms/JyGGPaEXcEp5kT9H3', '_blank');
}

function resume() {
    $("#menu").append("<br><br><br><embed src='Caroline Lu Resume.pdf' width='600' height='500' alt='pdf' pluginspage='http://www.adobe.com/products/acrobat/readstep2.html'><br><br><br>");
}

function home() {
    $("body").empty();
    $("body").append("<button id='title' onclick='home()'>Caroline Lu</button><p id='subtitle'> incoming software engineer at Raytheon</p><br><br><div id='menu'><button onclick='LinkedIn()'>LinkedIn</button><button onclick='contact()'>Contact</button><button onclick='resume()'>Resume</button><button onclick='about()'>About</button></div>");
}

function about() {
    var aboutMe = "<p id='aboutMe'>I am a senior, computer science major, full merit scholarship student, and member of Honors Carolina at the University of North Carolina at Chapel Hill. <br><br> At UNC, I have served as the co-president of the Honors Carolina Student board, and as a founding member of SWIRL, an organization for mixed race students. <br><br> I have also interned with Advance Auto Parts and Fidelity Investments, and have honed skills in object-oriented programming, Java, C, Spanish, public speaking, and creative writing. <br><br> In my spare time, I enjoy true crime books and playing with my pet rabbit, Peanut.</p>";
    $("#subtitle").empty();
    $("#menu").empty();
    $("#title").append(aboutMe);
}