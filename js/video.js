var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").
	innerHTML=video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("GO FASTER");
	video.playbackRate /=.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Time: " + video.currentTime);

		if (video.currentTime < video.duration - 15){
			video.currentTime += 15
	}		
		else {
			video.currentTime = 0
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted==false) {
		video.muted = true;
		this.innerHTML = "Mute"
	}
	else {
        video.muted = false;
		this.innerHTML = "Unmute"
    }
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider /100;
	document.querySelector("#volume").
	innerHTML=video.volume*100 + "%"
});

