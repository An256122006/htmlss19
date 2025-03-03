let str=prompt("moi ban nhap chuoi ky tu: ").trim();
let flag=-1;
for(let i=0; i<str.length; i++){
    if(str[i]===" "){
        flag=1;
        break;
    }
}
if(flag===1){
    alert('chua khoang trang');
}
if(flag===-1){
    alert("khong chua khoang trang");
}