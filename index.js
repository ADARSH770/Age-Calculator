let inputdate = document.querySelector('.inp')
inputdate.max = new Date().toISOString().split('T')[0];


function calculateage(){
    let birthDate = new Date(inputdate.value)

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let m3,d3,y3;
    y3 = y2 - y1;
    console.log(y1);
    console.log(y2);
    console.log(y3);
    if(m2>=m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2-m1
    }
    if(d2>=d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getcurrentyeardays(y1,m1)+d2-d1;
    }
    if(m3<0){
        y3--;
        m3 = 12+m3;
    }
    console.log(m2);
    console.log(m1);
    
    let res = document.getElementById('h3result')
    res.innerHTML = `You are ${y3} years, ${m3} month and ${d3} days old`;
}

function getcurrentyeardays(y1,m1){
    return new Date(y1,m1,0).getDate();
}