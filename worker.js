// worker.js

// Fungsi untuk memeriksa apakah sebuah bilangan prima
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Mendengarkan pesan dari main thread
onmessage = function(e) {
    const [start, end] = e.data;
    const primes = [];

    // Cari bilangan prima dalam rentang ini
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    // Kirim hasil kembali ke main thread
    postMessage(primes);
};
