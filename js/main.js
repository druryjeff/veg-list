// const tabContent = document.querySelectorAll('.tab-content');
// const tabNav = document.querySelectorAll('nav a');
// let currentNav;

// function init() {
// 	tabContent.item(1).classList.add('hidden');
// 	tabNav.item(0).classList.add('selected');
// 	currentNav = 0;
// }

// function toggleTabContent() {
// 	tabContent.forEach(function (t, i, a) {
// 		a.item(currentNav).classList.remove('hidden');
// 		a.item(!currentNav).classList.add('hidden');
// 	})
// }

// tabNav.forEach(function (t,i,a) {
// 	t.addEventListener('click', () => {
// 		currentNav = i;
// 		a.item(currentNav).classList.add('selected');
// 		a.item(!currentNav).classList.remove('selected');
// 		toggleTabContent();
// 	})
// })

// init();


const tabs = document.querySelectorAll('.tab-content');
const navs = document.querySelectorAll('nav a');

let activeTab = 0;  

function toggleTabs() {
  tabs.forEach(tab => tab.classList.toggle('hidden', tab !== tabs[activeTab]));
}

navs.forEach((nav, index) => {
  nav.addEventListener('click', () => {
    activeTab = index;
    navs.forEach(nav => nav.classList.toggle('selected', nav === navs[activeTab]));
    toggleTabs();
  });
});

navs[activeTab].classList.add('selected');
toggleTabs();