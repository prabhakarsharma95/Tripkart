var bookNow = document.getElementById("book");
var main = document.getElementById("main");
		function myFunction() {
		  document.getElementById("myDIV").style.display = "block";
		 
		  // main.style.display = "none";
		  
		}
		function myFunction1() {
		  document.getElementById("myDIV").style.display = "none";
		  main.style.display = "block";
		  
		}

        // login Form Query
    function openlogin(){
        document.querySelector('.overlay').classList.add('showoverlay');
        document.querySelector('.loginform').classList.add('showloginform');
       }
        function closelogin(){
        document.querySelector('.overlay').classList.remove('showoverlay');
        document.querySelector('.loginform').classList.remove('showloginform');
       }
       var btnlogin = document.querySelector(".btn-login");
       btnlogin.addEventListener("click",openlogin);
    
       var c = document.querySelector(".login-cross");
       c.addEventListener("click",closelogin);

  //  function openFeedback(){
    
  //   document.querySelector('.feedback-form').classList.add('showfeedback');
  //  }

 // Get the button and popup elements
const feedbackBtn = document.getElementById('feedback');
// const feedbackPopup = document.getElementsByClassName('feedback-form');
const closePopup = document.getElementById('closePopup');

// Show the popup when the button is clicked
feedbackBtn.addEventListener('click', () => {
  document.querySelector('.feedback-form').classList.add('showfeedback');
  document.querySelector('.overlay').classList.remove('showoverlay');
});

// Hide the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    feedbackPopup.style.display = 'none';
});

// Hide the popup when user clicks outside of the popup content
window.addEventListener('click', (event) => {
    if (event.target === feedbackPopup) {
        feedbackPopup.style.display = 'none';
    }
});
