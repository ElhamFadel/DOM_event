//- Add the necessary code to show the content related to tabs.
//- Clicking each tab would show different content.
//- Clicking each tab would give it an active style, check `active` class and remove it from others.

let countTow = 0;
let collect = document.querySelectorAll('.tab');
for (let i = 0; i < collect.length; i++) {
	let item = collect[i];
	//هنا اضفنا 
	item.addEventListener('click', (event) => {
		//الكلاسات الاكتيف 
		let tabActv = document.querySelector('.tab.active');
		let contActv = document.querySelector('.content.active');
		//حذف الكلاسات الاكتيف عند الضغط على عنصر 
		tabActv.classList.remove('active');
		contActv.classList.remove('active');


		index = i + 1;
		if(index === 2){
			countTow++;
		}
		console.log(index);
		alert(index);
		let clas = `#content-${index}`;
		//remove class active


		event.target.parentElement.classList.add('active');

		//هنا بدنا نضيف الاكتيف لتاب وللكونتينت 

		const p = document.querySelector(clas).classList.add('active');


	});
	console.log("Count how many times the user opened the 2nd tab : "+ countTow);




}
