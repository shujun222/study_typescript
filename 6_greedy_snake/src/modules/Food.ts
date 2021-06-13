export default class Food {
    element = document.getElementById("food");

    // 此类没有定义X, 相当于写了个 private X
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    changePosition() {
        // Math.random是去上下同时取整
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px';
    }
}