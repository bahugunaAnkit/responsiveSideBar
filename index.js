function toggleSideBar(){
	var btn = document.querySelector('.wrapper');
	btn.classList.toggle('toggleMe');
	btn.children[1].classList.toggle('rotate');
}