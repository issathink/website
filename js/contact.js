function validateEmail(email) {
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function go() {
	errorMsg = $("#errorMsg-contact");
	form = document.forms["contact-form"];
	name = form["contact-name"].value;
	email = form["contact-email"].value;
	subject = form["contact-subject"].value;
	message = form["contact-message"].value;

	console.log(name + "; " + email + "; " + subject + "; " + message);
	if(name == "Name" || name == "") {
		errorMsg.text('');
		errorMsg.text('Please enter your name.').fadeIn('slow', function(){});
		return;
	} else {
		errorMsg.text('');
	}

	if(email == "Email" || email == "") {
		errorMsg.text('');
		errorMsg.text('Your mail please').fadeIn('slow', function(){});
		return;
	} else if(!validateEmail(email)) {
		errorMsg.text('Enter valid email please').fadeIn('slow', function(){});
		return;
	} 

	if(subject == "Subject" || subject == "") {
		errorMsg.text('');
		errorMsg.text("A subject is required");
		return;
	}

	if(message == "Message" || message == "") {
		errorMsg.text('');
		errorMsg.text('Say something.');
		return;
	}

	form["contact-name"].value = "Name";
	form["contact-email"].value = "Email";
	form["contact-subject"].value = "Subject";
	form["contact-message"].value = "Message";

	errorMsg.text('Sorry, internal ERROR try again later.');
	/* Well you got me dev, i'm working on it. */
	setTimeout(function() { errorMsg.text(""); }, 3000);
}