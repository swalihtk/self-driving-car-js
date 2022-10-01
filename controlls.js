class Controllers {
    constructor() {
        this.left = false;
        this.right = false;
        this.forward = false;
        this.reverse = false;

        this.#addKeyBoardListeners();
    }

    #addKeyBoardListeners() {
        window.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
            }
            // console.table(this);
        }
        window.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
            }
            // console.table(this);
        }

       
    }

}