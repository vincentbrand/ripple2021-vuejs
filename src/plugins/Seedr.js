const Seedr = {
    // variables
    debug:true,
    language:'en',
    // configuration settings
    getLanguage:function(){
        return this.language
    },
    setLanguage:function(l){
      this.language = l;
    },
    // methods

    // Seedr.dateTime(new Date(2012, 0, 1), new Date()),
    dateTime: function(start, end){
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    },
    firstname: function(){
        let n = ['Iyana','Teagan','Eve','Davis','Javon','Valentino','Donovan','Addyson','Felipe','Desiree','Ahmad','Rebecca']
        return n[this.int(11)]
    },
    lastname: function(){
        let n = ['Figueroa','Hurley','Kelly','Arnold','Alvarado','Mcdowell','Shields','Duran','Brennan','Montoya','Ferguson','Norton']
        return n[this.int(11)]
    },
    fullname: function(){
        return this.firstname()+' '+this.lastname();
    },
    id: function(size){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < size; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    },
    text:function(){
        const lipsum = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur congue nibh nec consectetur. Donec non ligula vel sem placerat feugiat sit amet et enim. Aenean commodo quam nisl, finibus euismod nibh lobortis in. Suspendisse vestibulum, massa sit amet viverra eleifend, libero nunc sagittis est, in sodales lacus diam vel nulla. Duis non magna eu metus egestas placerat. Integer eu lectus faucibus, ultrices ligula et, vehicula metus. Quisque venenatis enim nec justo pellentesque feugiat. Proin hendrerit quis enim nec sagittis. Phasellus tincidunt turpis vitae eros cursus varius. Fusce quam turpis, vehicula non fermentum at, tincidunt et odio. In interdum arcu quis orci mollis, eget faucibus lectus convallis.','Cras suscipit fermentum justo, et fringilla quam ultrices quis. Integer pretium sem id pretium venenatis. Proin pretium finibus gravida. Sed ac feugiat felis. Integer vehicula tristique libero, eu blandit mauris commodo a. Aliquam lacinia dolor pulvinar leo lacinia malesuada. Praesent non erat nec sapien laoreet sagittis vulputate vel purus. In lorem diam, luctus quis diam nec, euismod fermentum dolor. Proin aliquam tempor vehicula. Duis ipsum metus, commodo ut nulla at, tempor auctor justo. Donec faucibus tristique consequat. Nunc accumsan nulla vel nisi sagittis sodales. Duis iaculis, mi eget efficitur finibus, justo dolor vehicula justo, non vehicula libero mi eu dui. Praesent elementum leo erat, at pretium magna pretium eget. Sed sagittis orci eget risus ultrices, vitae sodales sem tempor.']
        return lipsum[this.int(2)]
    },
    int:function(i){
        return Math.floor(Math.random() * i);
    },
    range:function(min=0,max=100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // word
    ip:function(){
        return this.int(255)+'.'+this.int(255)+'.'+this.int(255)
    },
    // word
    email:function(){

        return this.word().toLowerCase().trim()+'@'+this.word().toLowerCase().trim()+'.com';
    },
    // word
    word:function(){
        const w = ['Lorem','Ipsum','Adipiselit','Puisquectetur','Conguenibh','Consectetur','Donec',' ligula','Aenean','Hommodo'];
        return w[this.int(w.length-1)]
    },
    // words
    words:function(amount=1){
        const w = ['Lorem','Ipsum','Adipiselit','Puisquectetur','Conguenibh','Consectetur','Donec',' ligula','Aenean','Hommodo'];
        let r = '';
        for(let i=0; i<amount; i++) {
            r = r+' '+w[this.int(w.length-1)]
        }
        return r.trim()
    },
    // chinese mobile phone number
    phone:function(){
        return (Math.random() * (19999999999 - 10000000000) + 10000000000).toFixed();
    },

    // collection function to generate dummy objects
    createObject:function(inputArray = []){
        var obj = {};
        inputArray.forEach(element => {
            if(element.type == 'word'){
                obj[element.name] = this.word();
            }else if(element.type == 'words'){
                obj[element.name] = this.words();
            }else if(element.type == 'dateTime'){
                obj[element.name] = this.dateTime(element.params.start, element.params.end);
            }else if(element.type == 'phone'){
                obj[element.name] = this.phone();
            }else if(element.type == 'ip'){
                obj[element.name] = this.ip();
            }else if(element.type == 'email'){
                obj[element.name] = this.email();
            }else if(element.type == 'text'){
                obj[element.name] = this.text();
            }else if(element.type == 'id'){
                obj[element.name] = this.id();
            }else if(element.type == 'firstname'){
                obj[element.name] = this.firstname();
            }else if(element.type == 'lastname'){
                obj[element.name] = this.lastname();
            }else if(element.type == 'fulname') {
                obj[element.name] = this.fullname();
            }else if(element.type == 'int'){
                obj[element.name] = this.int();
            }else if(element.type == 'range'){
                obj[element.name] = this.range();
            }else{
                // do nothing; type not specified not specified
                    console.log('Seedr->createObject : Warning, element.type not found');
            }
        });
        // return object
        return obj;
    },

    // collection function to generate dummy objects
    createData: function(amount = 1, inputArray = []) {
        var results = [];
        for (let i = 0; i < amount; i++) {
            results.push(this.createObject(inputArray))
        }
        return results;
    }

}

export default Seedr