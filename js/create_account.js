function addUser(uname, upass, name_f, name_l, phoneNum, admin){
	$.post("php/ca.php",{
		user: uname,
		pass: upass,
		fname: name_f,
		lname: name_l,
		phone: phoneNum,
		isAdmin: admin
		
	},function(data, status){
		if(data.length > 5){
			$('#test').html(data);
		}else{
			if(data.length == 3){
				window.location="login.html";
				return true;
			}else{
				alert("Username already exists. Please try again");
				return false;
			}
		}

	});
}

$(document).ready(function(){
	$('#CreateAccountButton').click(function(e){
		if($('#addFname').val() == ""){
			e.preventDefault();
			alert("Missing Data: First Name. Please fill out.");
		}else if($('#addLname').val() == ""){
			e.preventDefault();
			alert("Missing Data: Last Name. Please fill out.");
		}else if($('#addPhone').val() == ""){
			e.preventDefault();
			alert("Missing Data: Phone Number. Please fill out.");
		}else if($('#addUsername').val() == ""){
			e.preventDefault();
			alert("Missing Data: Username. Please fill out.");
		}else if($('#addPassword').val() == ""){
			e.preventDefault();
			alert("Missing Data: Password. Please fill out.");
		}else if($('#addFname').val().indexOf(';') !== -1 || $('#addFname').val().indexOf(',') !== -1 || $('#addFname').val().indexOf('=') !== -1 || $('#addFname').val().indexOf('*') !== -1){
			e.preventDefault();
			alert("Invalid Character Detected");
		}else if($('#addLname').val().indexOf(';') !== -1 || $('#addLname').val().indexOf(',') !== -1 || $('#addLname').val().indexOf('=') !== -1 || $('#addLname').val().indexOf('*') !== -1){
			e.preventDefault();
			alert("Invalid Character Detected");
		}else if($('#addPhone').val().indexOf(';') !== -1 || $('#addPhone').val().indexOf(',') !== -1 || $('#addPhone').val().indexOf('=') !== -1 || $('#addPhone').val().indexOf('*') !== -1){
			e.preventDefault();
			alert("Invalid Character Detected");
		}else if($('#addUsername').val().indexOf(';') !== -1 || $('#addUsername').val().indexOf(',') !== -1 || $('#addUsername').val().indexOf('=') !== -1 || $('#addUsername').val().indexOf('*') !== -1){
			e.preventDefault();
			alert("Invalid Character Detected");
		}else if($('#addPassword').val().indexOf(';') !== -1 || $('#addPassword').val().indexOf(',') !== -1 || $('#addPassword').val().indexOf('=') !== -1 || $('#addPassword').val().indexOf('*') !== -1){
			e.preventDefault();
			alert("Invalid Character Detected");
		}else{
			addUser($('#addUsername').val(),$('#addPassword').val(),$('#addFname').val(),$('#addLname').val(),$('#addPhone').val(),$('#admintag').val());
			e.preventDefault();
			alert("Username already exists. Please try again");
		}
	});
});