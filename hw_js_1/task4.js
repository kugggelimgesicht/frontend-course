//число байт, кб, мб, гб

const byte = Number(prompt("enter your number"));
let kb;
let mb;
let gb;
if(byte < 1 || byte > 2 ** 41)
    alert("error");
    else{
        if(byte < 1024){
            alert(byte + "b");
          
        }
            else{
                 kb = byte / 1024;
                 if(kb < 1024){
                     alert(kb+ "kb");

                     }
                 else{
                   mb = kb / 1024;
                        if(mb < 1024){
                            alert(mb+ "mb");
                            }
                        else
                            gb = mb / 1024;
                            alert(gb+ "gb");

                 }
             }
        }
        