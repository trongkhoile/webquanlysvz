let danhsach=[];
let id=0

function bam() {
    var ten=$("#ten").val();
    var ma=$("#ma").val();
    var tuoi=$("#tuoi").val();
    const task={
        id:id,
        ten:ten,
        ma:ma,
        tuoi:tuoi,
    };
    danhsach.push(task);
    
  localStorage.setItem('danhsach', JSON.stringify(danhsach))

   const html=`
     <div class="khung3">
     <button class="nutxoa" onclick=sua()>Sửa</button>
     <div class="tensv">
     <p>Tên:${ten}</p>
     </div>
     <div class="masv">
     <p>Mã:${ma}</p>
     </div>
     <div class="tuoisv">
     <p>Tuổi:${tuoi}</p>
     </div>
     <button class="nutxoa" onclick=xoa()>Xóa</button>
     </div>

      
   `;
   $(".themvaodanhsach").append(html);
   i++;
}
function xoa(){

    $(".khung3").click(function (e) {
        $(this).remove();
      });
    danhsach.splice("danhsach", 1);
    console.log(danhsach);
    localStorage.removeItem("danhsach"); 
    localStorage.setItem("danhsach", JSON.stringify(danhsach));
}
function readTask(){
  danhsach = localStorage.getItem("danhsach");
  danhsach = JSON.parse(danhsach);
  console.log(danhsach);
  let tasksHTML = "";
  for (element of danhsach){
    console.log(element);
    tasksHTML +=` <div class="khung3"> 
    <button class="nutxoa" onclick=sua()>Sửa</button>
    <div class="tensv">
    <p>Tên:${element.ten}</p>
    </div>
    <div class="masv">
    <p>Mã:${element.ma}</p>
    </div>
    <div class="tuoisv">
    <p>Tuổi:${element.tuoi}</p>
    </div>
    <button class="nutxoa" onclick=xoa()>Xóa</button>
    </div>
`
    
  }
  document.querySelector(".themvaodanhsach").innerHTML = tasksHTML
}

function sua(){
   
  var tenmoi=$("#ten").val();
  var mamoi=$("#ma").val();
  var tuoimoi=$("#tuoi").val();
  const html=`
  
  <div class="khung3">
  <button class="nutxoa" onclick=sua()>Sửa</button>
  <div class="tensv">
  <p>Tên:${tenmoi}</p>
  </div>
  <div class="masv">
  <p>Mã:${mamoi}</p>
  </div>
  <div class="tuoisv">
  <p>Tuổi:${tuoimoi}</p>
  </div>
  <button class="nutxoa" onclick=xoa()>Xóa</button>
  </div>
`
$(".khung3").click(function () {


$(this).replaceWith(html)

});

}

function findIndexTask(tenmoi) {
  let index;
  for (let i = 0; i < danhsach.length; i++) {
    if (danhsach[i].ten == tenmoi) {
      index = i;
    }
  }
  return index;
}

readTask();
  

  