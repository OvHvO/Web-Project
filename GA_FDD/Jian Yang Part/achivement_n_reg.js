
function inView(element){
	
	const rection = element.getBoundingClientRect(); /* Get the element top, right, left, bottom in px*/
    const viewing = (window.innerHeight || document.documentElement.clientHeight)
	/*get the window height and the element height*/
    
    return ( 
   			 rection.top <= viewing *0.5 && rection.bottom >= viewing *0.5
    //set the trigger point on half
    
    	/*return true */
    ); 
}






/* add the inview (trigger inview class in CSS) if there are dosen't exist, if exist delete it */
function updateView(names){
	for(const x of document.querySelectorAll('.'+names))
	{
		if(inView(x)) 
		{
			x.classList.add('inview')
		
		}
		else
		{
			x.classList.remove('inview');
		}
	}

}

//call the updateview function for CSS animation
function D_name()
{
	updateView('ach-animation');
	updateView('award-animation');

}



function regbtnclick()
{	
	window.alert("Welcome To Our Family ! Please wait for the respone !");
}

function subbtnclick(){
	window.alert("Subscribe Sucess !");
}



function validate(){
	var usename= document.getElementById("name");
	var id= document.getElementById("stuId");
	var em= document.getElementById("email");
	if( !usename.value.trim() || !id.value.trim() || !em.value.trim()) //checking the user enter valid content (Not empty or spaces)
	{
		window.alert("Please fill the compulsary area before continue !");
		return false;
    }
	regbtnclick();
	return true;
}


function sub_validate(){
	var emails= document.getElementById("newsemail");
	if( !emails.value.trim())
	{
		window.alert("Please fill the compulsary area before continue !");
		return false;
    }
	subbtnclick();
	return true;
}


//add the event while scroll or load//
window.addEventListener('scroll',D_name);
window.addEventListener('load',D_name);
