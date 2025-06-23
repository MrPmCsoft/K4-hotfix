"// checkout module buggy" 
function checkout() {
    return true; 
  }
  
  if (!checkout()) {
    console.log("❌ Thanh toán thất bại");
  } else {
    console.log("✅ Thanh toán thành công");
  }
  