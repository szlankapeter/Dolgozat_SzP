import Cella from "./Cella.js";

class Jatekter{

    #db;
    #allapotLista = ["@", "@", "@","", "", "","@", "@", "@"];
    #elemLista = [];
    #lepes;

    constructor(){
        const ART = $("article");
        for(let i=0;i<9;i++){
            const cella = new Cella(i, "", ART);
            cella.szinBeallit();
        }
    }

    jatekter(){

    }

    lepesekkeresese(){

    }

    init(){

    }

    ellenorzes(){

    }

}export default Jatekter