var button = document.getElementById('activityBtn');
var button2 = document.getElementById('moreActivityBtn');
var participants = document.getElementById('numParticipants').value;
console.log(participants);

// Click button for activity
function getActivity (){
    axios.request({
        method: "GET",
        url: "http://www.boredapi.com/api/activity/"
    }).then(getSuccess).catch(getFail);
}

function getSuccess(response){
    console.log(response);
    document.getElementById('activity').innerHTML = response.data.activity; 
}

function getFail(error){
    console.error(error);
}


// Select number of participants and click button for activity
function activityNumOfParticipants (){
    axios.request({
        method: "GET",
        url: "http://www.boredapi.com/api/activity?participants=" + participants,
    }).then(Success).catch(Fail);
}

function Success(response){
    console.log(response);
    document.getElementById('activity2').innerHTML = response.data.activity; 
}

function Fail(error){
    console.error(error);
}

function changeParticipants (){
    participants = document.getElementById('numParticipants').value;
}

// Event listener for buttons
button.addEventListener("click", getActivity);
button2.addEventListener("click", activityNumOfParticipants);
numParticipants.addEventListener("change", changeParticipants)
