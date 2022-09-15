class HinhChuNhat {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width){
        this.width = width;
    }
    getWidth(){
        return this.width;
    }
    setHeight(height){
        this.height = height;
    }
    getHeight(){
        return this.height;
    }
    getCv(){
        return (this.height + this.width) *2
    }
    getDt(){
        return (this.width * this.height)
    }
}

