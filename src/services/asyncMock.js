const products = [

    {
        id: 1,
        title: "KitKat Duos",
        description: "Sabores: Strawberyy + Dark Chocolate",
        stock: 11,
        price: 2,
        img: "https://thecandyland.cl/wp-content/uploads/2022/06/KITKATDUOSSTRAWBERRYDARKCHOCOLATE42G.jpg",
        category: "Postres",
        
    },
    {
        id: 2,
        title: "Birthday Cake Flavour",
        description: "Birthday Creme",
        stock: 12,
        price: 5,
        img: "https://thecandyland.cl/wp-content/uploads/2021/01/Kitkat-cke.jpg",
        category: "Postres",

    },
    {
        id: 3,
        title: "Duos",
        description: "Mint + Dark Chocolate",
        stock: 13,
        price: 3,
        img: "https://thecandyland.cl/wp-content/uploads/2020/10/KIT-KAT-DUOS-MINTDARK-CHOCOLATE.jpg",
        category: "Postres",

    },
    {
        id: 4,
        title: "Miniatura",
        description: "Edición Especial Pascua.",
        stock: 14,
        price: 4,
        img: "https://thecandyland.cl/wp-content/uploads/2023/03/600X600PX_Pascua_2.jpg",
        category: "Postres",

    },
    {
        id: 5,
        title: "Dark",
        description: "Dark Chocolate.",
        stock: 15,
        price: 5,
        img: "https://thecandyland.cl/wp-content/uploads/2022/12/KITKATDARK42G.jpg",
        category: "Postres",

    },
    {
        id: 6,
        title: "Blueberry Muffin",
        description: "Torta de Blueberry.",
        stock: 16,
        price: 3,
        img: "https://thecandyland.cl/wp-content/uploads/2022/11/KITKATBLUEBERRYMUFFIN42G.jpg",
        category: "Postres",

    },
    {
        id: 7,
        title: "White Chocolate",
        description: "Chocolate Blanco.",
        stock: 17,
        price: 4,
        img: "https://thecandyland.cl/wp-content/uploads/2022/06/KITKATWHITEKINGSIZE85G.jpg",
        category: "Postres",

    },
    {
        id: 8,
        title: "Duos",
        description: "Mocha + Chocolate.",
        stock: 18,
        price: 6,
        img: "https://thecandyland.cl/wp-content/uploads/2021/11/KITKATDUOSMOCHACHOCOLATEKINGSIZEBAR.jpg",
        category: "Postres",

    },
    {
        id: 9,
        title: "King Size Classic",
        description: "Crisp Wafers.",
        stock: 19,
        price: 4,
        img: "https://thecandyland.cl/wp-content/uploads/2020/06/KIT-KAT-KING-SIZE.jpg",
        category: "Postres",

    },
    {
        id: 10,
        title: "Pendrive",
        description: "8GB.",
        stock: 20,
        price: 8,
        img: "https://i.kym-cdn.com/entries/icons/facebook/000/024/540/Screen_Shot_2017-11-01_at_2.21.41_PM.jpg",
        category: "Juguetes",

    },
    {
        id: 11,
        title: "Mini Cooper",
        description: "Carrito Juguete.",
        stock: 21,
        price: 12,
        img: "https://media.karousell.com/media/photos/products/2017/11/02/diecast_mini_cooper_by_kitkat_1509609341_d3d33b5d.jpg",
        category: "Juguetes",

    },
    {
        id: 12,
        title: "Monster Truck",
        description: "Camion R/C.",
        stock: 22,
        price: 18,
        img: "https://media.karousell.com/media/photos/products/2019/09/09/collectors_item_kitkat_remote_control_truck_1568041818_b41ebcd3_progressive.jpg",
        category: "Juguetes",

    },
    {
        id: 13,
        title: "Lens Kit",
        description: "Para fotografias",
        stock: 23,
        price: 20,
        img: "https://media.karousell.com/media/photos/products/2018/12/19/nestle_kitkat_smart_phone_lens_kit_1545204116_ca804777_progressive.jpg",
        category: "Gadgets",

    },
    {
        id: 14,
        title: "Estuche Smartphone",
        description: "Protege tu celular",
        stock: 24,
        price: 21,
        img: "https://ae01.alicdn.com/kf/H1576b7bc8a95426eaaff73358ce25807r/Kit-de-cubiertas-de-tel-fono-para-Huawei-Nova-2-3-2i-3i-Mate-7-8.jpg_Q90.jpg",
        category: "Gadgets",

    },
    {
        id: 15,
        title: "Lata Decorativa",
        description: "Edicion Especial",
        stock: 25,
        price: 22,
        img: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750647511446L.jpg",
        category: "Gadgets",

    },

];

function getData () {

    return new Promise ((resolve, reject) => {

        setTimeout ( () => {

            const date = new Date().toLocaleDateString;
            resolve (products, date);

        }, 2000);
        
        
    });

}

export function getProductData (idURL) {

    return new Promise ( (resolve, reject) => {


        const productRequested = products.find ((item) => item.id === Number(idURL));

        setTimeout( () => {

            resolve (productRequested);

        }, 2000);
        
    });

};

export function getCategoryData (categoryURL) {

    
    return new Promise ((resolve, reject) => {
        
        const categoryRequested = products.filter (item => {

            return item.category === categoryURL;
        
        });

        setTimeout ( () => {

            resolve (categoryRequested);

        }, 2000 );
        
        
    });

}

export default getData;