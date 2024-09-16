let width=window.innerWidth;
let counter=0;
let opt='inline';
let eventCounter=0;


function fixSize() {
    width=document.body.clientWidth;
    var init=opt;
    opt='none';
    if (width>600) {
        opt='inline';
    }
    if(init!=opt){
        changeImages();
    }
    
      
}
function changeImages() {
    if (counter>5) {
        counter=0
    }
    document.getElementById(`image-s${(counter%4)+1}`).style.display='inline';
    document.getElementById(`image-s${((counter+1)%4)+1}`).style.display=opt;
    document.getElementById(`image-s${((counter+2)%4)+1}`).style.display='none';
    document.getElementById(`image-s${((counter+3)%4)+1}`).style.display='none';
    counter++;
}




let ongoingEvents=` <h3>Ongoing Events</h3>
        <h1>Career Day Celebration</h1>

        <div class="container greeting">
            <h1>Welcome to our Career Day!</h1>
            <p>Dear Parents and Guardians,</p>
            <p>We are excited to have you join us for Career Day! This event is a fantastic opportunity for our students to explore various career paths and gain valuable insights from professionals like you.</p>
            <p>Thank you for your support and participation. Your involvement helps inspire our students and broaden their horizons.</p>
            <p>Enjoy the day!</p>
            <p class="signature">Warm regards,</p>
            <p class="signature">DE-VESSELS SCHOOL'S Students</p>
    </div>
    <div class="container slider" id="img-slider">
        <img src="images/th.jpeg" alt="" id="image-s1">
        <img src="images/th (1).jpeg" alt="" id="image-s2">
        <img src="images\th (3).jpeg" alt="" id="image-s3">
        <img src="images/th (2).jpeg" alt="" id="image-s4">
    </div>`;
let upcomingEvents=``;



function switchEvents() {
    const event=document.getElementById('events');
    switch (eventCounter%2) {
        case 0:
            event.innerHTML=upcomingEvents;
            break;
        default:
            event.innerHTML=ongoingEvents;
            changeImages();
            break;
    }
    eventCounter++;
}
fixSize();
changeImages();
setInterval(changeImages, 2500);
setInterval(fixSize, 1);
