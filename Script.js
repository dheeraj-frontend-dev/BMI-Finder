function calculate() {

		let card_Img = document.getElementById('card_img');
		let result_value = document.getElementById('result_value');
		let result_info = document.getElementById('result_info');
		let suggest_text = document.getElementById('suggest_text');

		var height_Input = document.getElementById('height_data');
		var	weight_Input = document.getElementById('weight_data');
		
		let result = (weight_Input.value / height_Input.value**2).toFixed(1);

		if (result <= 18) 
		{
			card_Img.innerHTML = `<img src="img/thin_img.jpg" alt="Thin Human Body 3D Charachter">`;
			result_value.innerHTML = `${result}`;
			result_info.innerHTML = `Underweight`;
			suggest_text.innerHTML = `Note:- i think you should pay attention to your diet`;
		}

		else if (result <= 24) 
		{
			card_Img.innerHTML = `<img src="img/normal_img.jpg" alt="Normal Human Body 3D Charachter">`;
			result_value.innerHTML = `${result}`;
			result_info.innerHTML = `Normal`;
			suggest_text.innerHTML = `Note:- Well done you have maintained your body well.`;
		}

		else if (result <= 29) 
		{
			card_Img.innerHTML = `<img src="img/obesity_img.jpg" alt="Overweight Human Body 3D Charachter">`;
			result_value.innerHTML = `${result}`;
			result_info.innerHTML = `Overweight`;
			suggest_text.innerHTML = `Note:- You just need a little more improvement in your body`;
		}

		else if (result > 30) 
		{
			card_Img.innerHTML = `<img src="img/obesity_img.jpg" alt="Obesity Human Body 3D Charachter">`;
			result_value.innerHTML = `${result}`;
			result_info.innerHTML = `Obesity`;
			suggest_text.innerHTML = `Note:- Please pay attention to diet as well as a little exercise.`;
		}

		document.getElementById('result_card_main').classList.add('result_show');
		document.getElementById('fade').style.display = "block";
		
	}


function result_hide() {
	document.getElementById('result_card_main').classList.remove('result_show');
	document.getElementById('fade').style.display = "none";
}