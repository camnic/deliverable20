var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	var scriptTag = document.createElement('script');
	scriptTag.src = 'js/video.js';
	document.head.appendChild(scriptTag);

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		updateVolume();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New speed is ", video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New speed is ", video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if(video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current location is ", video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if(video.muted) {
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
		updateVolume();
	});

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		updateVolume();
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});

	function updateVolume() {
		var volume = video.volume * 100;
		console.log("Volume is: ", volume);
		document.querySelector("#volume").textContent = volume + "%";
	}
});