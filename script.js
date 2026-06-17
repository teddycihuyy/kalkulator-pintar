let tambah = (x, y) => x + y;
let kurang = (x, y) => x - y;
let kali = (x, y) => x * y;
let bagi = (x, y) => {
    if (y == 0) return "Error: Pembagian dengan nol!";
    else return x / y;
};

let pilihan = prompt(`Pilih operasi:
1. Tambah
2. Kurang
3. Kali
4. Bagi
Masukkan pilihan (1/2/3/4):`);

let num1 = parseFloat(prompt("Masukkan angka pertama:"));
let num2 = parseFloat(prompt("Masukkan angka kedua:"))

switch (pilihan) {
    case '1':
        alert(`${num1} + ${num2} = ${tambah(num1, num2)}`);
        break;
    case '2':
        alert(`${num1} - ${num2} = ${kurang(num1, num2)}`);
        break;
    case '3':
        alert(`${num1} * ${num2} = ${kali(num1, num2)}`);
        break;
    case '4':
        alert(`${num1} / ${num2} = ${bagi(num1, num2)}`);
        break;
    default:
        alert("Pilihan tidak valid");
}
