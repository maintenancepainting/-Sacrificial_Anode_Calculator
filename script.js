
function calculate()
{
    {
        if(document.querySelector('#materials').value=="Alumf")
        {
            let dia = Number(document.querySelector('#one').value);
            let height = Number(document.querySelector('#two').value);
            let temp = Number(document.querySelector('#three').value);
            let lanode = Number(document.querySelector('#four').value);
            let wanode  = Number(document.querySelector('#five').value);
            let resist = Number(document.querySelector('#six').value);
            let current = Number(document.querySelector('#seven').value);
            let hanode = Number(document.querySelector('#eight').value);
            var sab = 3.1416 * dia * dia / 4;
            var sas = 3.1416 * dia * height;
            var tsa = sas + 2 * sab;
            var csa = 1.1 * tsa;
            var cdot = current + 0.2 * (temp - 25);
            var itotal = csa * cdot * 0.08 / 1000;
            var am = (lanode + wanode + hanode) / 3;
            var resistance = resist / (2 * am);
            var rc = 0.25 / resistance;
            var ta = itotal / rc;
            document.getElementById("answer").value = ta | 0 + 1;
        }
        if(document.querySelector('#materials').value=="Mgf")
        {
            let dia = Number(document.querySelector('#one').value);
            let height = Number(document.querySelector('#two').value);
            let temp = Number(document.querySelector('#three').value);
            let lanode = Number(document.querySelector('#four').value);
            let wanode  = Number(document.querySelector('#five').value);
            let resist = Number(document.querySelector('#six').value);
            let current = Number(document.querySelector('#seven').value);
            let hanode = Number(document.querySelector('#eight').value);
            var sab = 3.1416 * dia * dia / 4;
            var sas = 3.1416 * dia * height;
            var tsa = sas + 2 * sab;
            var csa = 1.1 * tsa;
            var cdot = current + 0.2 * (temp - 25);
            var itotal = csa * cdot * 0.08 / 1000;
            var am = (lanode + wanode + hanode) / 3;
            var resistance = resist / (2 * am);
            var rc = 0.7 / resistance;
            var ta = itotal / rc;
            document.getElementById("answer").value = ta | 0 + 1;
        }
        if(document.querySelector('#materials').value=="Znf")
        {
            let dia = Number(document.querySelector('#one').value);
            let height = Number(document.querySelector('#two').value);
            let temp = Number(document.querySelector('#three').value);
            let lanode = Number(document.querySelector('#four').value);
            let wanode  = Number(document.querySelector('#five').value);
            let resist = Number(document.querySelector('#six').value);
            let current = Number(document.querySelector('#seven').value);
            let hanode = Number(document.querySelector('#eight').value);
            var sab = 3.1416 * dia * dia / 4;
            var sas = 3.1416 * dia * height;
            var tsa = sas + 2 * sab;
            var csa = 1.1 * tsa;
            var cdot = current + 0.2 * (temp - 25);
            var itotal = csa * cdot * 0.08 / 1000;
            var am = (lanode + wanode + hanode) / 3;
            var resistance = resist / (2 * am);
            var rc = 0.15 / resistance;
            var ta = itotal / rc;
            document.getElementById("answer").value = ta | 0 + 1;
        }
        if(document.querySelector('#materials').value=="Alums")
        {
            let dia = Number(document.querySelector('#one').value);
            let height = Number(document.querySelector('#two').value);
            let temp = Number(document.querySelector('#three').value);
            let lanode = Number(document.querySelector('#four').value);
            let wanode  = Number(document.querySelector('#five').value);
            let resist = Number(document.querySelector('#six').value);
            let current = Number(document.querySelector('#seven').value);
            let hanode = Number(document.querySelector('#eight').value);
            var sab = 3.1416 * dia * dia / 4;
            var sas = 3.1416 * dia * height;
            var tsa = sas + 2 * sab;
            var csa = 1.1 * tsa;
            var cdot = current + 0.2 * (temp - 25);
            var itotal = csa * cdot * 0.08 / 1000;
            var D = Math.sqrt(wanode * hanode / 3.1416);
            var resistance = resist * (Math.log(8 * lanode / D) - 1) / (2 * 3.1416 * lanode);
            var rc = 0.25 / resistance;
            var ta = itotal / rc;
            document.getElementById("answer").value = ta | 0 + 1;
        }
        if(document.querySelector('#materials').value=="Mgs")
        {
            let dia = Number(document.querySelector('#one').value);
            let height = Number(document.querySelector('#two').value);
            let temp = Number(document.querySelector('#three').value);
            let lanode = Number(document.querySelector('#four').value);
            let wanode  = Number(document.querySelector('#five').value);
            let resist = Number(document.querySelector('#six').value);
            let current = Number(document.querySelector('#seven').value);
            let hanode = Number(document.querySelector('#eight').value);
            var sab = 3.1416 * dia * dia / 4;
            var sas = 3.1416 * dia * height;
            var tsa = sas + 2 * sab;
            var csa = 1.1 * tsa;
            var cdot = current + 0.2 * (temp - 25);
            var itotal = csa * cdot * 0.08 / 1000;
            var D = Math.sqrt(wanode * hanode / 3.1416);
            var resistance = resist * (Math.log(8 * lanode / D) - 1) / (2 * 3.1416 * lanode);
            var rc = 0.7 / resistance;
            var ta = itotal / rc;
            document.getElementById("answer").value = ta | 0 + 1;
        }
        if(document.querySelector('#materials').value=="Zns")
        {
            let dia = Number(document.querySelector('#one').value);
            let height = Number(document.querySelector('#two').value);
            let temp = Number(document.querySelector('#three').value);
            let lanode = Number(document.querySelector('#four').value);
            let wanode  = Number(document.querySelector('#five').value);
            let resist = Number(document.querySelector('#six').value);
            let current = Number(document.querySelector('#seven').value);
            let hanode = Number(document.querySelector('#eight').value);
            var sab = 3.1416 * dia * dia / 4;
            var sas = 3.1416 * dia * height;
            var tsa = sas + 2 * sab;
            var csa = 1.1 * tsa;
            var cdot = current + 0.2 * (temp - 25);
            var itotal = csa * cdot * 0.08 / 1000;
            var D = Math.sqrt(wanode * hanode / 3.1416);
            var resistance = resist * (Math.log(8 * lanode / D) - 1) / (2 * 3.1416 * lanode);
            var rc = 0.15 / resistance;
            var ta = itotal / rc;
            document.getElementById("answer").value = ta | 0 + 1;
        }
    }
}
