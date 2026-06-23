// Parent Class

class employee{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    work(){
        console.log(`${this.name} is Data Analyst`)
    }
    showDetails(){
        console.log(`This is her id:  ${this.id}`)
    }
}

let E1=new employee("Kanishka","102")
let E2=new employee("Geetika","103")

console.log(E1);
console.log(E2);
E1.work();
E1.showDetails();

class Developer extends employee{
    constructor(name, id, language){
        super(name, id)
        this.language=language;
    }
    writeCode(){
        console.log(`${this.name} uses ${this.language} to write code`)
    }
    work(){
        console.log("Kanishka can do webdev");
    }
}

const d= new Developer("Kanishka","102","Python");
d.writeCode();
d.work();

class FD extends Developer{
    constructor(name,id,language,framework){
        super(name,id,language);
        this.framework=framework;
    }
    buildUI(){
        console.log(`${this.name} has buildUI`);
    }
    work(){
        console.log("UI is build");
    }
} 
const fd=new FD("Geetika",103,"hindi","UI");
console.log(fd);
fd.buildUI();
fd.work();

class manager extends employee{
    constructor(name,teamSize){
        super(name)
        this.teamSize=teamSize;
    }
    conductMeeting(){
        console.log(`Meeting is conducted by ${this.name}`)
    }
    work(){
        console.log("Meeting Succesful")
    }
}
const m=new manager("kanishka","4");
console.log(m);
m.conductMeeting();
m.work();

