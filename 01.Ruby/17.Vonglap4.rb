5.times {puts "Ruby"}
# Ketqua : Ruby 5 lan

#=========================================================
1.upto(5){puts "Ruby"}
5.downto(1){puts "Ruby"}
# Ketqua : Ruby 5 lan

#==========================================================
(1..5).each{puts "Ruby"}
# Ketqua : Ruby 5 lan
(1..5).each{|i|puts "Gia tri cua i la #{i}"}
#ketqua
# gia tri cua i la 1
# gia tri cua i la 2
# gia tri cua i la 3
# gia tri cua i la 4
# gia tri cua i la 5

#==========================================================
loop do                     #loop : vong lap vo han
    puts "nhap mat khau"
    password=gets.chomp
    if password=="ngoctoan123"
        puts "ban da nhap dung mat khau"
    break
    end
end
