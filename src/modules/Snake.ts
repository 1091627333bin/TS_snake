class Snake{
    head:HTMLElement
    bodies:HTMLCollection
    element:HTMLElement
    constructor(){
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')     
    }
    //获取蛇头x轴坐标的方法
    get X() {
        return this.head.offsetLeft
    }
    //获取蛇头y轴坐标的方法
    get Y() {
        return this.head.offsetTop
    }
    set X(value:number) {
        if(this.X === value){
            return ;
        }
        if(value< 0 || value>290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft===value){
            if(value > this.X){
                value = this.X-10
            }
            else{
                value = this.X+10
            }
            
        };
        this.moveBody()
        this.head.style.left = value +'px'
        this.GameOver()
    }
    set Y(value:number) {
        if(this.Y === value){
            return ;
        }
        if(value< 0 || value>290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop===value){
            if(value > this.Y){
                value = this.Y-10
            }
            else{
                value = this.Y+10
            }
            
        };
        this.moveBody()
        this.head.style.top = value +'px'
        this.GameOver()
    }
    //蛇增加身体的方法
    addBody(){
        // var div=document.createElement("div")
        // this.element.appendChild(div)

        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    moveBody(){
        for(let i = this.bodies.length-1;i>=1;i--){
           let x =  (this.bodies[i-1] as HTMLLIElement).offsetLeft;
           let y =  (this.bodies[i-1] as HTMLLIElement).offsetTop;
           (this.bodies[i] as HTMLElement).style.left = x +'px';
           (this.bodies[i] as HTMLElement).style.top = y+'px';
        }
    }
    GameOver(){
        let x = this.X
        let y = this.Y
        for(let i =1;i<this.bodies.length;i++){
            if(x===(this.bodies[i] as HTMLElement).offsetLeft && y=== (this.bodies[i] as HTMLElement).offsetTop){
                throw new Error('GameOver')
            }
        }

    }
}

export default Snake