var pauseBtn = document.getElementById("pause")
var playBtn = document.getElementById("play")
img = document.querySelector('.music-play-img')
audio = document.getElementById('audio')



function loadSong(source,image,musicTitle,musicArtiste)
{
	audio.src = source
	audio.play()
	img.src = image
	
	if(playBtn.style.display == "block")
    {
		playBtn.style.display = "none"
    }
	
	pauseBtn.style.display = "block"
	document.getElementById('titleSong').innerHTML = musicTitle;
	document.getElementById('artiste').innerHTML = musicArtiste;
    document.getElementById("player").style.display = "block"
	document.getElementById("player").classList.add("tada")
	img.classList.add("spin")
	img.style.animationPlayState = "running"
}

function play()
{
	if(img.style.animationPlayState == "paused")
		img.style.animationPlayState = "running"
	audio.play()
	playBtn.style.display = "none"
	pauseBtn.style.display = "block"
}

function pause()
{
	if(img.style.animationPlayState == "running")
		img.style.animationPlayState = "paused"
	audio.pause()
	playBtn.style.display = "block"
	pauseBtn.style.display = "none"
}

function end()
{
	if(img.classList.contains("spin"))
		img.classList.remove("spin")
	audio.stop = true
	playBtn.style.display = "block"
	pauseBtn.style.display = "none"
	alert("Dieu est grand")
}
