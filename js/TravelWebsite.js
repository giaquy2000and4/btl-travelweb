var navBar = document.getElementById("navBar");
function togglebtn(){
    navBar.classList.toggle("hidemenu");
}

function mfnc() {
    const element = document.getElementById("id6");
    element.scrollIntoView();
  }
  function mfnc2() {
    const element = document.getElementById("id5");
    element.scrollIntoView();
  }
  function mfnc3() {
    const element = document.getElementById("id4");
    element.scrollIntoView();
  }
  function mfnc4() {
    const element = document.getElementById("id3");
    element.scrollIntoView();
  }
  function mfnc5() {
    const element = document.getElementById("id2");
    element.scrollIntoView();
  }
  function mfnc6() {
    const element = document.getElementById("id1");
    element.scrollIntoView();
  }





  function funcmoto() {
    const element = document.getElementById("moto");
    element.scrollIntoView();
  }
  function functrain() {
    const element = document.getElementById("train");
    element.scrollIntoView();
  }
  function funcplane() {
    const element = document.getElementById("plane");
    element.scrollIntoView();
  }
  function funccar() {
    const element = document.getElementById("car");
    element.scrollIntoView();
  }
  function funcwalking() {
    const element = document.getElementById("walk");
    element.scrollIntoView();
  }
  





//     // Lấy danh sách các phần tử nhà
// const houses = document.querySelectorAll('.house'); 

// // Lấy các phần tử filter
// const filterCulture = document.getElementById('filter-culture');
// const filterArt = document.getElementById('filter-art');
// const filterNature = document.getElementById('filter-nature');
// const filterFood = document.getElementById('filter-food');
// const filterSport = document.getElementById('filter-sport');

// // Hàm cập nhật số lượng các nhà phù hợp với filter
// function updateFilterCount(filterId) {

//   let count = 0;
  
//   // Đếm số nhà thỏa mãn filter đó
//   houses.forEach(house => {
//     if (house.classList.contains(filterId)) {
//       count++;
//     }
//   });

//   // Cập nhật số lượng vào span
//   document.getElementById(filterId).querySelector('span').innerText = `(${count})`;
// }

// // Hàm lọc danh sách nhà
// function filter() {
  
//   houses.forEach(house => {
    
//     // Ẩn tất cả nhà đi
//     house.style.display = 'none';
    
//     // Lặp qua các filter đang được check
//     document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
    
//       // Nếu nhà thỏa filter thì hiển thị
//       if(house.classList.contains(checkbox.id)) {
//         house.style.display = 'block';
//       }
    
//     });
    
//   });
  
// }

// // Sự kiện khi click vào filter
// filterCulture.addEventListener('click', () => {
//   updateFilterCount(filterCulture.id);  
//   filter();
// });

// filterArt.addEventListener('click', () => {
//   updateFilterCount(filterArt.id);
//   filter();  
// });

// filterNature.addEventListener('click', () => {
//     updateFilterCount(filterCulture.id);  
//     filter();
//   });


//   filterFood.addEventListener('click', () => {
//     updateFilterCount(filterCulture.id);  
//     filter();
//   });

//   filterSport.addEventListener('click', () => {
//     updateFilterCount(filterCulture.id);  
//     filter();
//   });








