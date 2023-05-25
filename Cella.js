class Cella{

    #adat;
    #id;
    #divElem;

    constructor(id, adat, szuloElem){
        this.id = id;
        this.adat = adat;
        let txt = `<div class="${id}">${adat}</div>`
        szuloElem.append(txt);
        
    }

    setAllapot(){
        
    }

    szinBeallit(){
        $("div:nth-child(odd)").css("background-color", "grey");
    }

    trigger(){

    }

}export default Cella