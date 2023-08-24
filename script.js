//دسترسی به ورودی یا اینپوت
const todo_input = document.querySelector(".todo-input");
//دسترسی به دکمه 
const todo_button = document.querySelector(".todo-button");
//دسترسی به باکس لیست 
const todo_list = document.querySelector(".todo-list");
//دسترسی به دراپ دان فیلتر
const filter_todo = document.querySelector(".filter-todo");


//refrash is page local 
//وقتی صفحه را رفریش کردیم اطلاعات از لوکال استوریج به صفحه ما انتقال داده بشه
document.addEventListener("DOMContentLoaded" , domFunction)
 //function button input
 //تابع فشردن دکمه اضافه شدن به لیست 
 todo_button.addEventListener("click" , todoButton)
 function todoButton(event){
    //غیرفعال کردن ایونت های پیش فرض
    event.preventDefault();
    console.log(todo_input.value);
//ساخت باکس دیو و اضافه کردن کلاسی به آن
    let crt_div = document.createElement("div");
    crt_div.classList.add("todo");
//ساخت باکس ال آی و اضافه کردن کلاسی به آن
    let crt_li = document.createElement("li");
    crt_li.classList.add("todo-item");
    //گرفتن مقدار از اینوپوت و دادن به ال آی 
    crt_li.innerText = todo_input.value;
    //انتقال ال آی به اولین فرزند باکس دیو ساخته شده
    crt_div.appendChild(crt_li);
//ساخت دکمه چک تودو
    let crt_btn_check = document.createElement("button");
    crt_btn_check.innerHTML = "<i class='fas fa-check'></i>";
    crt_btn_check.classList.add("complete-btn");
    crt_div.appendChild(crt_btn_check);
//ساخت دکمه حذف تودو
    let crt_btn_trash = document.createElement("button");
    crt_btn_trash.innerHTML = "<i class='fas fa-trash'></i>";
    crt_btn_trash.classList.add("trash-btn");
    crt_div.appendChild(crt_btn_trash);
//اضافه شدن باکس دیو به یوال موجود در اچ تی ام ال
    todo_list.appendChild(crt_div);
    //با فشردن دکمه اضافه شدن ، به لوکال استوریج هم اضافه بشود
    loca_todo(todo_input.value);

    todo_input.value = "";

 }
//function todo_list
//تابع حذف کردن یا چک شدن تودو ها در لیستمان
todo_list.addEventListener("click" , todoFuncList);
function todoFuncList(e){
    const item = e.target;
    //console.log(e.target)
if(item.classList[0] === "trash-btn"){
    const parent_todo = item.parentElement;
    parent_todo.remove();
    //تابع حذف شدن مقدار از لوکال ، ما برای حذف شدن از لوکال باید به پدر آن دسترسی داشته باشیم
    localtodeo_remove(parent_todo);
}
if(item.classList[0] === "complete-btn"){
    const parent_todo = item.parentElement;
    parent_todo.classList.toggle("completed")}
}

 //fucntion fillter
 //تابع فیلتر کردن دراپ دان

 filter_todo.addEventListener("click" , filterTodo);
 function filterTodo(e){
        //چون ما در جاوا اسکریپت دکمه های حذف و چک را ساختیم ، بنابراین میبایست به باکس اصلی آن رجوع کنیم 
    let todos_crt_div = todo_list.childNodes;
   console.log(todos_crt_div) 
    todos_crt_div.forEach(item =>{
      if(e.target.value == "all"){ 
        item.style.display = "flex"
      }
      else if(e.target.value == "completed"){
        if(item.classList.contains("completed")){
            item.style.display = "flex";
        }
        else{
            item.style.display = "none"; 
        }
      }
      else if(e.target.value == "uncompleted"){
        if(item.classList.contains("completed")){
            item.style.display = "none";
        }
        else{
            item.style.display = "flex";
        }
      }
    })
  }
  //function local todo
  //تابع لوکال 
  
  //function set local input.value
  function loca_todo(eInput)
  //در این تابع ما یک مقدار خالی را میسازیم بعد شرط میزاریمکه اگه لوکال ما خالی بود اون مقدار خالی را آرایه کن اگه خالی نبود آرایه را بگیر بده به متغییر ساخته شده و سپس مقدار ورودی اینپوت رو هم بهش پوش کن و بعد ست کن به لوکال
  {
  let todos ;
  if(localStorage.getItem("tod_name") === null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("tod_name"));
  }
  todos.push(eInput);
  localStorage.setItem("tod_name" , JSON.stringify(todos))
   }
   
  //function delete local item
  //،  تابع حذف کردن تودو لیست  از لوکال
  //از پدری که بعنوان ورودی گرفتیم به فرزندان هم دسترسی داریم و فرزند اول که تکست دارد را میگیریم و آن را حذف میکنیم
  function localtodeo_remove(r){
    let todos ;
if(localStorage.getItem("tod_name") === null){
  todos = [];
}
else{
  todos = JSON.parse(localStorage.getItem
("tod_name"));
}
const child = r.childNodes[0].innerText;
todos.splice(todos.indexOf(child) , 1);
localStorage.setItem("tod_name" , JSON.stringify(todos))
}

//function dom loaded
//تابعی جهت اینکه اطلاعات لوکال را به صفحه انتقال دهیم
//میبایست در ابتدا آرایه ای که درلوکال داریم را بگیریم
//سپس همه مقادیری که بالا ساختیم بعنوان باکس و ال آی را هم در اینجا بسازیم
function domFunction(){
    let todos ;
    if(localStorage.getItem("tod_name") === null){
     todos = [];
    }
    else{
     todos = JSON.parse(localStorage.getItem
     ("tod_name"));
    }
todos.forEach(item => {
    let crt_div = document.createElement("div");
    crt_div.classList.add("todo");

    let crt_li = document.createElement("li");
    crt_li.classList.add("todo-item");
    crt_li.innerText = item;
    crt_div.appendChild(crt_li);

    let crt_btn_check = document.createElement
   ("button");
    crt_btn_check.innerHTML = "<i class='fas   fa-check'></i>";
    crt_btn_check.classList.add("complete-btn");
    crt_div.appendChild(crt_btn_check);

    let crt_btn_trash = document.createElement
    ("button");
    crt_btn_trash.innerHTML = "<i class='fas   fa-trash'></i>";
    crt_btn_trash.classList.add("trash-btn");
    crt_div.appendChild(crt_btn_trash);
    todo_list.appendChild(crt_div); 
})
}