const watchTrailer = (bannerId) => {
	const videoCurrent = document.querySelector(`#banner-${bannerId} video`);

	videoCurrent.style.opacity = 1;
	videoCurrent.play();

	videoCurrent.addEventListener('ended', function () {
		videoCurrent.style.opacity = 0;
	});

	['.slider-nav', '.slider-indicators button'].forEach((classItem) => {
		const elementsResult = document.querySelectorAll(classItem);
		elementsResult.forEach((element) => {
			element.addEventListener('click', () => {
				videoCurrent.style.opacity = 0;
				videoCurrent.currentTime = 0;
				videoCurrent.pause();
			});
		});
	});
};
