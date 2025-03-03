let a=prompt("moi ban nhap ky tu: ");
if(a.length===1){
    if( (a >= 'A' && a <= 'Z') || (a >= 'a' && a <= 'z')){
        alert("la chu cai");
    }else{
        alert("khong phai chu cai");
    }
}else{
    alert("khong phai chu cai");
}