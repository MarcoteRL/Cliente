let s = "abcabcbb";

function patata(s) {
    let substring = "";
    let substring_larga = "";
    let letras_usadas = [];
    for (let i = 0; i < s.length; i++) {
        if (letras_usadas.includes(s.charAt(i))) {
            if (substring.length > substring_larga.length) {
                substring_larga = substring;
            }
            i = s.indexOf(s.charAt(i)) + 1;
            substring = s.charAt(i);
            letras_usadas = [];
            letras_usadas.push(substring);
            console.log("hola " + substring, letras_usadas)
        } else {
            substring += s.charAt(i);
            letras_usadas.push(s.charAt(i));
            console.log(substring, letras_usadas)
        }

        if(i == s.length - 1 && substring.length > substring_larga.length){
            substring_larga = substring;
        }
    }
    return substring_larga.length;
}

console.log(patata(s))
