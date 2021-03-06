const url = window.location.href.replace('/board/', '/api/banner/board/')

fetch(url).then(async json => {
	const banner = await json.json()
	document.querySelector('.inner-banner').style.backgroundImage = `url(${banner.url})`
	document.querySelector('.inner-banner').style.backgroundAttachment = 'fixed'
	document.querySelector('.inner-banner').style.backgroundRepeat = 'no-repeat'
	document.querySelector('.inner-banner').style.backgroundSize = 'cover'
})