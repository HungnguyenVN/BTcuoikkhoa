let html = "";
    let play = 1;
    let col = row = 15;

    function changex(element,x,y){
        if (play%2==0){
            element.innerHTML = "x"
            play +=1;
        } else{
            element.innerHTML = "o"
            play +=1;
        }
        checkwin(element,x,y);
    };
        function letplay(){
        for (i=0;i<=row;i++){
            html = html + "<tr>"
            for (j=0;j<=col;j++){
                html = html + '<td id ="'+i+'-'+j+'"  onclick = "changex(this,'+i+','+j+')">'
            }
            html = html + "<tr>";
        };
        document.getElementById("carotable").innerHTML=html;
    }
    
    function checkwin(element,x,y){
        //  Kiểm tra hàng ngang trái
        let count = 1;
        let tech = 0;
        let checkdd = 0   
        for( i=1; y-i>=0 && element.innerHTML == document.getElementById(x+"-"+(y-i)).innerHTML;i++){
            count = count + 1; 
            tech = i;     
        }
        if ( (y-tech-1)>=0 && document.getElementById(x+"-" + (y-tech-1)).innerHTML) {
            checkdd +=1
        }
        console.log(checkdd);
    //  Kiểm tra hàng ngang phải   
        for( i=1; y+i<=col && element.innerHTML == document.getElementById(x+"-"+(y+i)).innerHTML;i++){
            count = count + 1; 
            tech = i;         
        }
         if ( (y+tech+1)<=col && document.getElementById(x+"-" + (y+tech+1)).innerHTML) {
            checkdd +=1
        }
            
        if (count==4 && checkdd<2 ){
            alert("Ban da chien thang")
        }


    // Kiểm tra dọc trên
        tech = 0;
        count = 1;
        checkdd = 0;
    for( i=1; x-i>=0 && element.innerHTML == document.getElementById((x-i)+"-"+y).innerHTML;i++){
        count = count + 1;
        tech = i;
    }  
        if ( (x-tech-1)>=0 && document.getElementById((x-tech-1) +"-" + y).innerHTML) {
            checkdd +=1
        }
    // Kiểm tra dọc dưới
    tech = 0
    for( i=1; x+i<=row && element.innerHTML == document.getElementById((x+i)+"-"+y).innerHTML;i++){
        count = count + 1;   
        tech = i;   
    }
        if ((x+tech+1)<= row &&document.getElementById((x+tech+1) +"-" + y).innerHTML) {
        checkdd +=1
    }

    if (count==4 && checkdd<2){
        alert("Ban da chien thang");
        document.write(" <p>Chúc mừng bạn đã giành chiến thắng</p> <img style='width: 300px' src='thao.jpg'/>")
    }


    
// Kiểm tra chéo trên phải
    tech = 0;
    count = 1;
    checkdd = 0;

for( i=1;y-i>=0 && x+i<=row && element.innerHTML == document.getElementById((x+i)+"-"+(y-i)).innerHTML;i++){
    count = count + 1; 
    tech = i;   
}
if ((y-tech-1)>=0 && (x+tech+1)<=row && document.getElementById((x+tech+1) +"-" + (y-tech-1)).innerHTML) {
    checkdd +=1
}
tech = 0
// Kiểm tra chéo dưới trái
for( i=1;y+i<col && x-i>=0 && element.innerHTML == document.getElementById((x-i)+"-"+(y+i)).innerHTML;i++){
    count = count + 1;
    tech = i;
}
if ( (y+tech+1) <= col && (x-tech-1) >=0 &&document.getElementById((x-tech-1) +"-" + (y+tech+1)).innerHTML) {
    checkdd +=1
}

if (count==4 && checkdd<2){
    alert("Ban da chien thang");   
}





// Kiểm tra dưới phải
tech = 0;
count = 1;
checkdd = 0;
for( i=1;y-i>=0 && x-i>=0 && element.innerHTML == document.getElementById((x-i)+"-"+(y-i)).innerHTML;i++){
    count = count + 1; 
    tech = i;   
}
if ( (y-tech-1) >=0 && (x-tech-1) >=0 &&document.getElementById((x-tech-1) +"-" + (y-tech-1)).innerHTML) {
    checkdd +=1
}

// Kiểm tra trên trái
tech = 0
for( i=1;y+i<=col && x+i<=row && element.innerHTML == document.getElementById((x+i)+"-"+(y+i)).innerHTML;i++){
    count = count + 1;
    tech = i;
}

if ( (y+tech+1) <= col && (x+tech+1) <= row &&document.getElementById((x-tech-1) +"-" + (y-tech-1)).innerHTML) {
    checkdd +=1
}

if (count==4 && checkdd<2){
    alert("Ban da chien thang");   
    document.write("Bạn là nhà vô địch vĩ đại :D")
}

 }
     
    
