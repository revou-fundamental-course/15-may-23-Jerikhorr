const output = document.getElementById("output-luas");
const hitung = document.getElementById("hitung-luas");
    
    function hitungLuas() {
      const sisiLuas = document.getElementById("sisi_luas").value;
      let s = sisiLuas;
      let l = s * s;
      output.innerHTML = `Luas Persegi dari sisi ${s} cm | adalah ${l} cm²`;
    }

    function resetulangs(){
        document.getElementById("sisi_luas").value = "";
        output.innerHTML =``;
    }

    const outputs = document.getElementById("output-keliling");
    const hitungs = document.getElementById("hitung-keliling");
        
        function hitungKeliling() {
          const sisiKeliling = document.getElementById("sisi_keliling").value;
          let s = sisiKeliling;
          let l = 4 * s;
          outputs.innerHTML = `Keliling Persegi dari sisi ${s} cm | adalah ${l} cm²`;
        }
    
        function resetulang(){
            document.getElementById("sisi_keliling").value = "";
            outputs.innerHTML =``;
        }
    
    
        
    