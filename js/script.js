/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create 9 list elements for each page. Each list element represents a student.
all list elements are added to the student list variable. The for loop is what allows 9 students 
to be created for each page.


*/

function showPage(List, page) {

   const start_index = (page*9) - 9;
   const end_index = (page*9);
   
   var student_list =  document.querySelector('.student-list');
   student_list.innerHTML = " "
   

  // use for loop to create 9 students per page

   for (let i=0; i<List.length; i++) {
   
      if( i>= start_index  && i< end_index) {
   

        // create a profile for each student 
        
        var student_item = 


         `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src= ${List[i].picture.large} alt="Profile Picture">
           <h3>${List[i].name.first} ${List[i].name.last} </h3>
           <span class="email"> ${List[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date"> ${List[i].registered.date}</span>
         </div>
       </li>`
   
      // insert list item to UL

       student_list.insertAdjacentHTML("beforeend",student_item);
   
      };


   }


}


/*
Create the `addPagination` function
This function will create and display the number 
of buttons needed to have 9 students per page. This function also includes the event handler, 
addEventlistener, that will trigger once any button is clicked. It also includes the ShowPage 
function that will show the students once the click occurs.
*/

function addPagination (list) { 


  var number_of_buttons = (list.length/9);
  var link_list = document.querySelector('.link-list');
  link_list.innerHTML = "";
  var buttons_for_page = "";


  for (let i=0;i<=number_of_buttons;i++) {


    buttons_for_page = 


    `<li>
      <button type="button" > ${i+1} </button>
    </li>`


    link_list.insertAdjacentHTML("beforeend", buttons_for_page)

    };


  var First_button = document.querySelector('button').className = "active";


    // use the event handler to direct you to the page you click on.


  link_list.addEventListener("click", (e)=> {

    var clicked_button = e.target  

    if(clicked_button.tagName === "BUTTON") {


    var active_button = document.querySelector(".active")

    active_button.classList.remove("active");

    clicked_button.classList.add("active");


    // call the showPage to display students once either button is clicked.


    showPage(data,e.target.textContent);

    };

  });

};



// call the functions so that once the website opens the app is going to run inmediately 
// by itself 


showPage(data,1);

addPagination(data);

























