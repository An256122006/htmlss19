let a = Number(prompt("moi ban nhap thang:"));
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
        alert("thang" + " " + a + " " + "co 28 va 29 ngay");
        break;
    default:
        alert("khonbg hop le");
}