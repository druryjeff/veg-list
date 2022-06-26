const tabContent = document.querySelectorAll('.tab-content');
const tabNav = document.querySelectorAll('nav');

function toggleTabContent(){
	tabContent.forEach(function(t){
		t.classList.toggle('hidden');
	})
}


tabNav.forEach(function(t){
	t.addEventListener('click',() => {
		toggleTabContent();
	})
})

toggleTabContent();