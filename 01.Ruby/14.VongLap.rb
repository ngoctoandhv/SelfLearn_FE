i=0
while i<=10
    puts "gia tri cua i luc nay la #{i}"
    i += 1 
end
#ketqua : gia tri cua i luc nay laf 0 cho den 10
# nếu không có  i+=1 thì kết quả gia tri cua i luc nay la 0,và nó sẽ chạy vô hạn
puts "gia tri cuoi cung cua i la #{i}"      #ket qua : 11

#====================================================================================
x=0
until x>10  #ngược lại với while , nếu gía trị lớn hơn 10 thì dừng lại
    puts "gia tri cua i luc nay la #{x}"
    x += 1 
end