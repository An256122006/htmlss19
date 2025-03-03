let a = Number(prompt("moi ban nhap thang:"));
let b = Number(prompt("moi ban nhap nam:"));
switch (a) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("thang" + " " + a + " " + "co 31 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("thang" + " " + a + " " + "co 30 ngay");
        break;
    case 2:
        if (b % 4 === 0 && b % 100 !== 0 || b % 400 === 0) {
            alert("thang" + " " + a + " " + "co 29 ngay");
            break;
        } else {
            alert("thang" + " " + a + " " + "co 28 ngay");
            break;
        }
    default:
        alert("khonbg hop le");
}