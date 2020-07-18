
  const itemInput = document.querySelector(".input-item"); // add item button
  const itemForm = document.querySelector("#item-form"); //select form
  const itemList = document.querySelector(".list-item");
  const feedback = document.querySelector(".feedback");
  const clearItem = document.querySelector(".clear-item");

  let ToDoList = [];

  const validate = function() {
    var p = document.createElement("p");
    feedback.appendChild(p);
    p.innerHTML = "Please Enter Valid Value";
    feedback.classList.add("show");

    setTimeout(function() {
      feedback.classList.remove("show");
    }, 5000);
  };

  const ItemHandler = function(itemName){
    const items = document.querySelectorAll(".item");

    items.forEach(function(item){
      if(item.querySelector(".item-name").textContent === itemName){
        //complete icon event listener
        item.querySelector(".complete-item").addEventListener("click",function(){
          item.querySelector(".item-name").classList.toggle("complete");
          this.classList.toggle("visibility");
        })
        //edit icon event listener
        item.querySelector(".edit-item").addEventListener("click",function(){
          itemInput.value = itemName;
          itemList.removeChild(item);

          ToDoList = ToDoList.filter(function(item){
            return item !== itemName
          })
        })
        //delete icon event listener
        item.querySelector(".delete-item").addEventListener("click",function(){
          debugger;
          itemList.removeChild(item);

          ToDoList = ToDoList.filter(function(item){
            return item !== itemName;
          })
        })
      }
    })
  }

  const getListfromArray = function(TodoList) {
     itemList.innerHTML = "";

    ToDoList.forEach(function(item) {
      itemList.insertAdjacentHTML(
        "beforeend",
        `<div class="item">
      <h5 class="item-name text-capitalize">${item}</h5>
      <div class="item-icons">
          <a href="#" class="complete-item item-icon"><i class="fas text-success fa-check-circle"></i></a>
          <a href="#" class="edit-item item-icon"><i class="fas fa-edit"></i></a>
          <a href="#" class="delete-item item-icon"><i class="fas text-danger fa-times-circle"></i></a>
      </div>
  </div>`);

        ItemHandler(item)
    });
  };

  const getLocalStorage = function(){
    const ToDoStorage = localStorage.getItem("ToDoList");
    if(ToDoStorage === "undefined" || ToDoStorage === null){
      ToDoList = [];
    } else {
      ToDoList = JSON.parse(ToDoStorage);
      getListfromArray(ToDoList);
    }
  }

  getLocalStorage(); ////get local storage form page

  const setLocalStorage = function(ToDoList){
    localStorage.setItem("ToDoList",JSON.stringify(ToDoList))
  }

  itemForm.addEventListener("submit", function(e) {
    alert("click");
    e.preventDefault();

    const itemName = itemInput.value; ///the list name that has been input

    if (itemName.length === 0) {
      validate();
    } else {
      ToDoList.push(itemName);
      setLocalStorage(ToDoList);
      getListfromArray(ToDoList);
      console.log(ToDoList);
      console.log(localStorage)
      //add event listeners to icons;
        //handleItem(itemName);
    }
    itemInput.value = "";
  });

  clearItem.addEventListener("click",function(){
    alert("Click");
    ToDoList = [];
    console.log(ToDoList);
    localStorage.clear();
    console.log(localStorage)
    getListfromArray(ToDoList)
  })

//   const itemInput = document.querySelector(".input-item"); // add item button
//   const itemForm = document.querySelector("#item-form"); //select form
//   const itemList = document.querySelector(".list-item");
//   const feedback = document.querySelector(".feedback");
//   const clearItem = document.querySelector(".clear-item");

//   let toDoList = [];

//   const validate = function() {
//     var p = document.createElement("p");
//     feedback.appendChild(p);
//     p.innerHTML = "Please Enter Valid Value";
//     feedback.classList.add("show");

//     setTimeout(function() {
//       feedback.classList.remove("show");
//     }, 5000);
//   };

//  //this method is used so that the click button can accessible when the element is exist
//  const listIcon = function(itemName){
//   const items = document.querySelectorAll(".item");

//   items.forEach(function(item){
//     if(item.querySelector(".item-name").textContent === itemName){
//       //complete event
//       item.querySelector(".complete-item").addEventListener("click",function(){
//         item.querySelector(".item-name").classList.toggle("complete");
//         this.classList.toggle("visibility");
//       });

//       //edit event
//       item.querySelector(".edit-item").addEventListener("click",function(){
//         itemInput.value = itemName;
//         itemList.removeChild(item)

//         toDoList = toDoList.filter(function(item){
//           return item !== itemName
//         })
//       });

//       //delete event
//       item.querySelector(".delete-item").addEventListener("click",function(){
//         debugger;
//         itemList.removeChild(item);

//         toDoList = toDoList.filter(function(item){
//           return item !== itemName;
//         })
//         console.log(toDoList)
//       })
//     }
//   })
// }

//   const getListfromArray = function(toDoList) {
//     itemList.innerHTML = "";

//    toDoList.forEach(function(item) {
//      itemList.insertAdjacentHTML(
//        "beforeend",
//        `<div class="item">
//      <h5 class="item-name text-capitalize">${item}</h5>
//      <div class="item-icons">
//          <a href="#" class="complete-item item-icon"><i class="fas text-success fa-check-circle"></i></a>
//          <a href="#" class="edit-item item-icon"><i class="fas fa-edit"></i></a>
//          <a href="#" class="delete-item item-icon"><i class="fas text-danger fa-times-circle"></i></a>
//      </div>
//  </div>`);

//         listIcon(item)
//    });
//  };

//  itemForm.addEventListener("submit",function(e){
//   e.preventDefault();
//   alert("CLICK");

//   const itemName = itemInput.value;

//   if(itemInput.value === ""){
//     validate()
//   } else {
//     toDoList.push(itemName)
//     getListfromArray(toDoList)
//     // console.log(toDoList)
//   }

//   itemInput.value = "";

//  })



