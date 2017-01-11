// ==UserScript==
// @name         Faster Media
// @namespace    http://tampermonkey.net/
// @version      0.2.4
// @description  Set Youtube & Overcast PlaybackRate to 1.6 by default
// @author       Decradish
// @match        *www.youtube.com/watch?v=*
// @match        *overcast.fm/+*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	var iPlaybackRate = 1.6, //rate
		tmVideo = document.getElementsByTagName("video")[0],
		tmAudio = document.getElementsByTagName("audio")[0],
		tmMedia = false;

	if(!!tmVideo){
		tmMedia = tmVideo;

		document.getElementsByClassName('ytp-play-button')[0].focus()
	}

	if(!!tmAudio){
		tmMedia = tmAudio;

		document.onkeydown = function(e) {
			var keyCode = e.keyCode || e.which || e.charCode;

			if(keyCode == 32) {
				tmMedia.paused ? tmMedia.play() : tmMedia.pause();
				e.preventDefault();
				return false;
			}
		}
	}

	if(!tmMedia){
		return false;
	}

	tmMedia.oncanplay = function(){
		tmMedia.playbackRate = iPlaybackRate;
	};
})();