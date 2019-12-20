for i in 0..5 
    next if i==2 #bo qua gia tri cua i=2
    puts "gia tri cua i la #{i}"
end
 # ketqua
# gia tri cua i la 0
# gia tri cua i la 1
# gia tri cua i la 3
# gia tri cua i la 4
# gia tri cua i la 5

#================================================================
i=1
while i<=10
    next if i==2 
    puts "gia tri cua i luc nay la #{i}"
    i += 1 
end
#ketqua
# gia tri cua i la 1 và nó sẽ dừng lại ở đây mãi mãi


#===================================================================
i=1
while i<=10
    break if i==3 #i=3 thi thoat ra 
    puts "gia tri cua i luc nay la #{i}"
    i += 1 
end
# ketqua
# gia tri cua i la 1
# gia tri cua i la 2
