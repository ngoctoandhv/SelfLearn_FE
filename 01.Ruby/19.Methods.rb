def phuongtrinh (a,b)
    puts "giai phuong trinh #{a}+x=#{b} ta duoc ket qua: x=#{b-a}"
end
phuongtrinh(10,30)
phuongtrinh(10,20)

# ===================== or =======================================
def phuongtrinh (a,b)
    return "giai phuong trinh #{a}+x=#{b} ta duoc ket qua: x=#{b-a}"
end
puts phuongtrinh(10,30)
ketqua = phuongtrinh(10,20)
puts ketqua

#===================================================================
def phuongtrinh (a=0,b=0)
    puts "nhap gai tri cua a"
    a=gets.chomp.to_i
    puts "nhap gai tri cua b"
    b=gets.chomp.to_i
    return "giai phuong trinh #{a}+x=#{b} ta duoc ket qua: x=#{b-a}"
end

ketqua = phuongtrinh(10,20)
puts ketqua

#chương trình sẽ lấy giá trị a và b từ trong hàm.nếu ko có giá trị trong hàm thì nó sẽ lấy giá
#trị phần khai báo def rồi mới đến phần cuối

#========= xác định chẵn lẻ ===============================================
x=10
x.old?      #true .so chan
x.even?     #false khong phai so le



