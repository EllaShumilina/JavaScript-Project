var sAnswers = "";
var currentSection = 0; //variable that keeps up with the currect section

//.... action on page load

$(document).ready(function () {

        toolTipserInit(); //activate tooltipser

         $('.centered').flexVerticalCenter();

         // bind the click event
         $('.btn').click(function () {
             buttonClicked(this);
         });

         currentSection = 0;

     });

// END ....  action on page load.

function toolTipserInit()
{
    $('.tooltipDIV').tooltipster({
        animation: 'grow',
        delay: 50,
        position: 'bottom',
        theme: 'tooltipster-light',
        maxWidth: 120,
        offsetY: -40
    });

  $('.tooltip-image').tooltipster({
    animation: 'grow',
    delay: 50,
    theme: 'tooltipster-light',
    maxWidth: 140
    });

}

     function   buttonClicked(jButton)
{
         var sLetter = $(jButton).attr('letter')

         //start over if the z-button (startover) clicked
         if (sLetter == "Z")
             location.reload();

         if (currentSection>0)//advance to the next section if not first screen
            sAnswers +=  sLetter;


         var currentSectionID = "#" + currentSection;
         $(currentSectionID).slideUp("slow");


         //increment current section
         currentSection = currentSection + 1;

         currentSectionID = "#" + currentSection; // build current section id including pound sign

         $(currentSectionID).fadeIn(2000).delay(100); //display current section

         if (currentSection == 5)
             populateHtml(sAnswers);

     }


     function populateHtml(userValue) {

              var results = getResultsObject(); // get JSON object that holds all professions with the detailed information

              resultTitle.innerHTML = results[userValue]["title"];   //extract the title and display it in the title

              //build image
              var imageSrc = "img/" + results[userValue]["image"] + ".png";
              imgProfession.setAttribute("src", imageSrc);
              imgProfession.setAttribute("title", "Your recommended profession is " + results[userValue]["image"]);


              //extract bullet points with the profession and display them
              var allJobs = results[userValue]["jobs"]
              for (i = 0; i < allJobs.length; i++) {
                  var listItem = document.createElement("li");
                  var newText = document.createTextNode(allJobs[i]);
                  listItem.appendChild(newText);
                  listProfessions.appendChild(listItem);
              }
          }

          function getResultsObject()
          {
              var results = {
                  ESTJ: {
                      title: "Pragmatist",
                      image: "chef",
                      jobs: ["General Manager", "Insurance Agent", "Loan Officer", "School Administrator", "Chef"]
                  },

                  ISTJ: {
                      title: "Pragmatist",
                      image: "administrator",
                      jobs: ["Office Manager", "Accountant", "Probation Officer", "Logistician", "Systems Administrator"]
                  },
                  ESTP: {
                      title: "Pragmatist",
                      image: "officer",
                      jobs: ["Building Contractor", "Police Detective", "Financial Advisor", "Sales Manager", "Military Officer"]
                  },
                  ISTP: {
                      title: "Pragmatist",
                      image: "officer",
                      jobs: ["Carpenter", "Mechanic", "Computer Hardware Engineer", "Operations Analyst", "Police Officer"]
                  },



                  ESFJ: {
                      title: "Caretaker",
                      image: "nurse",
                      jobs: ["Elementary Teacher", "Child Care Director", "Nutritionist", "Cosmetilogist", "Registered Nurse"]
                  },

                  ISFJ: {
                      title: "Caretaker",
                      image: "kteacher",
                      jobs: ["Social Worker", "Bookkeeper", "Medial Secretary", "Executive Assistant", "Kindergarten Teacher"]
                  },

                  ESFP: {
                      title: "Caretaker",
                      image: "bartender",
                      jobs: ["Recreation Director", "Customer Service Rep", "Receptionist", "Dental Assistant", "Bartender"]
                  },
                  ISFP: {
                      title: "Caretaker",
                      image: "repair",
                      jobs: ["Veterinary Technician", "Surveyor", "Home Health Aide", "Jeweler", "Equipment Repair"]
                  },




                  ENTJ: {
                      title: "Theorist",
                      image: "physician",
                      jobs: ["Executive", "Engineer", "Attorney", "Architect", "Physician"]
                  },
                  INTJ: {
                      title: "Theorist",
                      image: "microbiologist",
                      jobs: ["Software Developer", "Technical Writer", "Judge", "Surgeon", "Microbiologist"]
                  },

                  ENTP: {
                      title: "Theorist",
                      image: "agent",
                      jobs: ["Urban Planner", "Entrepreneur", "Producer/Director", "Reporter", "Real Estate Agent"]
                  },
                  INTP: {
                      title: "Theorist",
                      image: "professor",
                      jobs: ["Software Engineer", "Medical Scientist", "Mathematician", "Psychiatrist", "College Professor"]
                  },



                  ENFJ: {
                      title: "Empath",
                      image: "teacher",
                      jobs: ["Nonprofit Director", "Health Educator", "PR Specialist", "Minister", "Teacher"]
                  },
                  INFJ: {
                      title: "Empath",
                      image: "veterinarian",
                      jobs: ["School Counselor", "Writer", "Interior Designer", "Pediatrician", "Veterinarian"]
                  },

                  ENFP: {
                      title: "Empath",
                      image: "architect",
                      jobs: ["Recreational Therapist", "Restaurateur", "Preschool Teacher", "Travel Writer", "Landscape Architect"]
                  },
                  INFP: {
                      title: "Empath",
                      image: "artist",
                      jobs: ["Animator", "Psychologist", "Librarian", "Author", "Fine Artist"]
                  }

              }

             return results;

          }
