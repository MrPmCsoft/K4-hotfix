"// checkout module buggy" 
function checkout() {
    return false; // ❌ BUG: trả về sai
  }
  
  if (!checkout()) {
    console.log("❌ Thanh toán thất bại");
  } else {
    console.log("✅ Thanh toán thành công");
  }
  