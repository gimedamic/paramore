$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:paramore&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[2].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = ` <div align="center">
								<div class="col col2">
									<p>Tracklist <br></p>
									<p>
									1.	"Careful"	<br>
									2.	"Ignorance"	<br>
									3.	"Playing God" (Williams, Farro, York)	<br>
									4.	"Brick By Boring Brick"	<br>
									5.	"Turn It Off"	<br>
									6.	"The Only Exception"	<br>
									7.	"Feeling Sorry" (Williams, Farro, York)<br>
									8.	"Looking Up"	<br>
									9.	"Where the Lines Overlap"	<br>
									10.	"Misguided Ghosts" (Williams, Farro, York)	<br>
									11.	"All I Wanted" (Williams, York)</p>

								</div>

						<img src="${res.albums.items[2].images[1].url}" alt="viray fccboi" />
						<h2 align="center" class="major">${res.albums.items[2].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="center">${album.tracks.items[i].name}</p>
			<p align="center"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div>`;
		document.querySelector('.bne').innerHTML = html;
	});
});

	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:paramore&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[1].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `       <div align="center">
		                    <div class="col col2">
									<p>Tracklist <br></p>
									<p>
										1. Fast In My Car <br>
										2. Now <br> 
										3. Grow Up <br>
										4. Daydreaming <br>
										5. interlude: Moving On <br>
										6. Ain’t It Fun <br>
										7. Part II <br>
										8. Last Hope <br>
										9. Still Into You <br>
										10. Anklebiters <br>
										11. interlude: Holiday <br>
										12. Proof <br>
										13. Hate To See Your Heart Break <br>
										14. (One Of Those) Crazy Girls <br>
										15. interlude: I’m Not Angry Anymore <br>
										16. Be Alone <br>
										17. Future <br>
			                          </p>						


						<img src="${res.albums.items[1].images[1].url}" alt="viray fccboi" />
						<h2 align="center" class="major">${res.albums.items[1].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="center">${album.tracks.items[i].name}</p>
			<p align="center"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div>`;
		document.querySelector('.pm').innerHTML = html;
	});
});
$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:paramore&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[0].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `       <div align="center">
		                    <div class="col col2">
									<p>Tracklist <br></p>
									<p>
							1.	"For a Pessimist, I'm Pretty Optimistic"<br>
							2.	"That's What You Get" (Williams, Farro, Taylor York)<br>
							3.	"Hallelujah"	<br>
							4.	"Misery Business"	<br>
							5.	"When It Rains" (Williams, Farro, Zac Farro)	<br>
							6.	"Let the Flames Begin"	<br>
							7.	"Miracle"	<br>
							8.	"Crushcrushcrush"	<br>
							9.	"We Are Broken" (Williams, Farro, David Bendeth)	<br>
							10.	"Fences" (Williams, Farro, Bendeth)	<br>
							11.	"Born for This"
								</div>	


						<img src="${res.albums.items[0].images[1].url}" alt="viray fccboi" />
						<h2 align="center" class="major">${res.albums.items[0].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="center">${album.tracks.items[i].name}</p>
			<p align="center"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div>`;
		document.querySelector('.riot').innerHTML = html;
	});
});