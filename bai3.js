let a = Number(prompt(`moi ban nhap gia tri can doi : 
    1: VND
    2: USD`));
switch (a) {
    case 1:
        let num = Number(prompt("moi ban nhap so tien muon doi: "));
        let price = num * 23000;
        alert( price+ "VND");
        break;
    case 2:
        let num2 = Number(prompt("moi ban nhap so tien muon doi: "));
        let price2 = num2 / 23000;
        alert(price2 + "USD");
        break;
}