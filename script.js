// Istanza di VueJs
Vue.config.devtools = true;
new Vue({
    // el: <main id="root">
    el: '#root',
    // data: elenco delle variabili
    data: {
        // Array principale di oggetti con 3 proprietà
        arrayObjects: [
            // Object
            {
                // chiave: "valore"
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },
            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum"
            },
            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },
            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },
        ],
        // "setto" la prima img a 0
        currentImg: 0,
    },
    // methods: -> Functions
    methods: {
        // function -> freccia in giù
        goDown() {
            if (this.currentImg >= this.arrayObjects.length - 1) {
                this.currentImg = 0
            } else {
                this.currentImg++;
            }
        },
        // function -> freccia in su
        goUp() {
            if (this.currentImg <= 0) {
                this.currentImg = this.arrayObjects.length - 1
            } else {
                this.currentImg--;
            }
        }
    }
});