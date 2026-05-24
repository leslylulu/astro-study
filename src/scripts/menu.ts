const menu = document.querySelector<HTMLButtonElement>('.menu');

menu?.addEventListener('click', () => {
	if(!menu) return;
	const isExpanded = menu.getAttribute('aria-expanded') === 'true';
	menu.setAttribute('aria-expanded', `${!isExpanded}`);
});