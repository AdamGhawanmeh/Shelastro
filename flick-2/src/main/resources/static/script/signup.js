if(window.localStorage.getItem('acc') !== 'null'){
	window.location.replace('homepage.html');
}
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


function postApi(val){
	var model = {
	"fname": this.$("#fname").val(),
	"lname": this.$("#lname").val(),
	"email" : this.$("#email").val(),
	"phone" : this.$("#phone").val(),
	"password" : this.$("#password").val()
	};
	// console.log("post data:"+model);
		$.ajax(
		{
			type:"POST",
			url : "admin/addUser",
			
			ContentType:"application/json ;charset=UTF-8",
			
			crossOrigin:true,
			dataType:"json",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				},
			data:this.JSON.stringify(model),
			
			success:function(data)
			{
				// console.log("successfuly"+data);
				alert("done");
				window.open("login.html");
			},error:function(jqXHR,testStatus,errorThrown)
			{
				alert("error");
			}
		} 
		);
	}
    function login(){
        var password= $("#passwordLogin").val();
        var email = $("#emailLogin").val();
        // console.log(email);
             $.ajax({
                    url: "/admin/"+email+"/"+password,
                    method:'get',
                    dataType:'json',
                    success:function(data){
						window.localStorage.setItem('user',email);
						window.localStorage.setItem('acc',"true");
						window.location.reload();
                    
                },error: function(jqXHR,testStatus,errorThrown){
                    alert("error");
                }
             });
    }