let salary = +prompt("nhap so tien ");
let a = +prompt(`moi ban chon 
    1:rut tien
    2:nap tien`);
switch (a) {
    case 2:
        let b = +prompt(`moi ban nhap so tien muon nap: `);
        salary = salary + b;
        alert('so tien hien co: ' + salary);
        break;
    case 1:
        let c = +prompt(`moi ban nhap so tien muon rut: `);
        if (c > salary) {
            alert("so tien khong hop le");
        } else {
            salary = salary - c;
            alert('so tien hien co: ' + salary);
        }
        break;
    default:
        alert("khong hop le");
}