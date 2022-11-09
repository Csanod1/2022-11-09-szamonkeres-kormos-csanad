let abc : string[] = [",", "A","B","C", "D","E","F", "G","H","I", "J","K","L", "M","N","O", "P","Q","R", "S","T","U", "V","W","X", "Y","Z", "a","b","c", "d","e","f", "g","h","i", "j","k","l", "m","n","o", "p","q","r", "s","t","u", "v","w","x", "y","z"];
var szobrok : Statue[];

class Statue implements Artwork{
    title: string;
    year: number;
    price: number;
    #height: number;

    constructor(title: string, year: number, price: number, height: number){
        this.title = title;
        this.year = year;
        this.price = price;
        this.#height = height;
    }
}



console.log('Almafa kezdés');

document.addEventListener('DOMContentLoaded', () : void => {
    document.getElementById('feltoltGomb')?.addEventListener('click', () =>{
        console.log('megy nélküle is');
        let muremeknev = document.getElementById('muremekNev') as HTMLInputElement;
        let keszitesEve = document.getElementById('keszitesEve') as HTMLInputElement;
        let kikialtasiAr = document.getElementById('kikialtasiAr') as HTMLInputElement;
        let magassag = document.getElementById('magassag') as HTMLInputElement;
        for (let i : number= 0; i < muremeknev.value.length; i++) {
            if(!abc.includes(muremeknev.value[i])){
                console.log('hinás karakter(ek)');
                document.getElementById('muremekNevHibaUzenet')?.textContent == 'A név csak angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat';
                
            }
            
        }
        console.log(muremeknev.value + ", ");
        let szobor : Statue = new Statue(muremeknev.value, parseFloat(keszitesEve.value), parseFloat(kikialtasiAr.value), parseFloat(magassag.value));
        szobrok.push(szobor);
        document.getElementById('muvekDarabszama')?.textContent == szobrok.length.toString();
    });
});