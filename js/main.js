// sidebar na mobile
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


sidebarToggleBtn.onclick = function() {
	menuIcon.classList.toggle('menu-icon-active');
	sidebar.classList.toggle('sidebar--mobile-active');
};

// + 3 huyni
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');


// Клик по кнопке показать ещё и показ карточек
btnShowMoreCards.addEventListener('click', function () {
	hiddenCards.forEach(function(card) {
	card.classList.remove('card-link--hidden');
	})
}) 


// Показать\скрыть контент
const widgets = document.querySelectorAll('.widget');
// Находим все виджеты на странице
widgets.forEach(function (widget) {
	// слушаем клик внутри виджета
	widget.addEventListener('click', function(e) {
		if (e.target.classList.contains('widget_title')) {
			e.target.classList.toggle('widget_title--active');
			e.target.nextElementSibling.classList.toggle('widget_body--hidden');
		}
	})
})

// Location knoka lyubaya

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// Клик по кнопке любая - и отключение верхних чекбоксов
checkBoxAny.addEventListener('change', function() {
	

	if (checkBoxAny.checked) {
		topLocationCheckboxes.forEach(function(item) {
			item.checked = false;
		});
	} 
})


// Клик по верхним чекбоксам которые отключают кнопку ЛЮБАЯ
topLocationCheckboxes.forEach(function (item) {
	item.addEventListener('change', function () {
	if (checkBoxAny.checked) {
		checkBoxAny.checked = false;
	}
	})
})

// +3 opionns on checkbox

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');


showMoreOptions.onclick = function (e) {
	e.preventDefault();

// если блоки были скрыты значит показываем и наоорот
	if (showMoreOptions.dataset.options == 'hidden') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'block' ;
		});
		showMoreOptions.innerText = "Скрыть доп. опции" ;
		showMoreOptions.dataset.options = 'visible' ;
} 

else if (showMoreOptions.dataset.options == 'visible') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'none' ;
		});
		showMoreOptions.innerText = 'Показать ещё';
		showMoreOptions.dataset.options = 'hidden' ;
}

}


