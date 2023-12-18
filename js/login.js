// Giả lập dữ liệu đăng ký từ trước
const registeredUsers = [
    {
      email: 'nguyen@email.com',
      password: '1234' 
    }
  ];
  
  // Lấy các trường nhập liệu
  const usernameField = document.querySelector('input[name="username"]');
  const passwordField = document.querySelector('input[name="password"]');
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
  
    e.preventDefault();
    
    // Validate dữ liệu nhập
  
    // 1. Kiểm tra email
    const email = usernameField.value;
    
    let isValidEmail = false;
    
    if(email) {
      if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        isValidEmail = true;
      } else {
        alert('Email sai định dạng');  
        return; 
      }
    }
    
    // 2. Kiểm tra password 
    const password = passwordField.value; 
  
    let isValidPassword = false;
    
    if(password) {
      if(password.match(/^\d+$/)) {
        isValidPassword = true;
      } else {
        alert('Mật khẩu chỉ chứa số');
        return;
      }
    }
  
    // 3. Kiểm tra email và password có trong danh sách đã đăng ký không
    
    let isRegistered = false;
  
    for(let user of registeredUsers) {
      if(user.email === email && user.password === password) {
        isRegistered = true;
        break; 
      }
    }
    
    if(!isRegistered) {
      alert('Sai email hoặc mật khẩu');
      return;
    }
    
    // Đăng nhập thành công 
    alert('Đăng nhập thành công!');   
    if(isRegistered) {

      alert('Đăng nhập thành công!');
      
      // Redirect về trang chủ
      window.location.href = 'TravelWebsite.html';
    
    }
    
  });
  