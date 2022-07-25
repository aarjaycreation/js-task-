
      let form = document.getElementById('taskForm');
      let FirstName = document.getElementById('FirstName');
      let LastName = document.getElementById('LastName');
      let dataFirstname = document.getElementById('dataFirstname');
      let dataLastname = document.getElementById('dataLastname');

    document.querySelector('form#taskForm').addEventListener('submit', function (e) {
     // prevent 
     e.preventDefault(); 
    //  console.log(FirstName.value); 
    //  console.log(LastName.value);
     //function
     validation();
    
     
    }
    );
    //function to call 
    function senddata() {
        document.querySelector("#showData").innerHTML += `
        <tr style="height: 2rem; border: 2px solid #242d52;">
        <td id="dataFirstname">${FirstName.value}</td>
        <td id="dataLastname" style="border-left: 2px solid #242d52;">${LastName.value}</td>
        <td class="delete" style="border-left: 2px solid #242d52;"><button class="deletebutton">delele</button> </td>
        </tr>
        `;
         form.reset();  
        // delete function 
        var current_row = document.querySelectorAll(".delete"); //
        // console.log(current_todos.length)// for tasting
        for (var i = 0; i < current_row.length; i++) {
            current_row[i].onclick = 
        function () {
            this.parentNode.remove();
        };
        // remove funtion end 
        }
        }
    //function to call 
    function validation() {
        let FirstName = document.getElementById('FirstName').value;
        let validFirstName=/^[a-zA-Z\s]+$/;
        let validLastName=/^[a-zA-Z\s]+$/;
        let LastName = document.getElementById('LastName').value;
        let Error = document.getElementById('error');

      // check the  input field
      if (FirstName == ""){
                Error.innerText = "please enter first name";
                Error.style.color = "#CD212A";
                Error.style.textTransform = "uppercase"
                Error.style.fontWeight = "400"
                Error.style.height = "3rem"
                Error.style.width = "60%"
                Error.style.border = "2px dotted red"
                Error.style.display = "flex"
                Error.style.justifyContent = "center"
                Error.style.alignItems ="center"
                Error.style.marginLeft = "75px"
                }
    // check valid first name 
    else if(!validFirstName.test(FirstName)){
                  Error.innerText = "please enter valid first name";
                Error.style.color = "#CD212A";
                Error.style.textTransform = "uppercase"
                Error.style.fontWeight = "400"
                Error.style.height = "3rem"
                Error.style.width = "60%"
                Error.style.border = "2px dotted red"
                Error.style.display = "flex"
                Error.style.justifyContent = "center"
                Error.style.alignItems ="center"
                Error.style.marginLeft = "75px"
                }
            

        // check the second input field
        else if (LastName == "") {
                Error.innerText = "please enter last name";
                Error.style.color = "#CD212A";
                Error.style.textTransform = "uppercase"
                Error.style.fontWeight = "400"
                Error.style.height = "3rem"
                Error.style.width = "60%"
                Error.style.border = "2px dotted red"
                Error.style.display = "flex"
                Error.style.justifyContent = "center"
                Error.style.alignItems ="center"
                Error.style.marginLeft = "75px"
                }

    // check valid last name
    else if(!validLastName.test(LastName)){
                Error.innerText = "please enter valid last name";
                Error.style.color = "#CD212A";
                Error.style.textTransform = "uppercase"
                Error.style.fontWeight = "400"
                Error.style.height = "3rem"
                Error.style.width = "60%"
                Error.style.border = "2px dotted red"
                Error.style.display = "flex"
                Error.style.justifyContent = "center"
                Error.style.alignItems ="center"
                Error.style.marginLeft = "75px"
                }

        // all validation clear than run code
        else {  
                // function call
                senddata();
                Error.innerText = "data added successfully";
                Error.style.color = "#4BB543";
                Error.style.textTransform = "uppercase"
                Error.style.fontWeight = "500"
                Error.style.height = "3rem"
                Error.style.width = "60%"
                Error.style.border = "2px dotted #4BB543"
                Error.style.display = "flex"
                Error.style.justifyContent = "center"
                Error.style.alignItems ="center"
                Error.style.marginLeft = "75px"
                }
    }


    /* SHOW MODAL*/
    const showModal = (openButton, modalContent) => {
        const openBtn = document.getElementById(openButton),
            modalContainer = document.getElementById(modalContent)

        if (openBtn && modalContainer) {
            openBtn.addEventListener('click', () => {
                modalContainer.classList.add('show-modal')
            })
        }
    }
    showModal('open-modal', 'modal-container')

    /* CLOSE MODAL*/
    const closeBtn = document.querySelectorAll('.close-modal')

    function closeModal() {
        const modalContainer = document.getElementById('modal-container')
        modalContainer.classList.remove('show-modal')
    }
    closeBtn.forEach(c => c.addEventListener('click', closeModal))