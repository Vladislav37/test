var Store = {
	str1: ['1','Ноутбук Lenovo', 'Ноутбук ThinkPad T460 14"FHD(1920x1080),i5-6200U(2,3GHz),4Gb,500GB@5400+8Gb cache, HD Graphics 520, WiFi,BT,TPM,FPR,WWAN ready,3cell+3cell,Cam,Win7 Pro 64 + Win10 Pro upgrade coupon,1,7kg, 3y OS', '100','2'],
	str2: ['2', 'Клавиатура OKLICK',  'Клавиатура OKLICK 140M,  USB, черный', '50', '8'],
	str3: ['3', 'Сетевой адаптер', 'Сетевой адаптер WiFi D-Link DWA-582 DWA-582/RU',  '7', '0']
}
function enter() {
	var login = document.getElementById("id_login").value;
	var passw = document.getElementById("id_password").value;
	if ( login == "admin" && passw == "padmin") {
		return location.href='Главное окно.html';				
	} else {
		alert('неверные данные!!');
	}
}

function cancel(){ 
	location.href = 'Главное окно.html'
}	




function save(){
	var valueSave = document.getElementById('save_button').value;
	var div = document.createElement("div");
	
	div.innerHTML = valueSave;
	
	document.getElementById("abc").appendChild(div);
	return false;
}
	
	


function exit(){ 
	location.href = 'Окно регистрации.html'
}
