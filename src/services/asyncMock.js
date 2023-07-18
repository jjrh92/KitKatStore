function getData () {

    return new Promise ((resolve, reject) => {
        
        const products = [

            {
                id: 1,
                title: "Duos",
                description: "Strawberyy + Dark Chocolate.",
                stock: 11,
                price: 2,
                img: "https://thecandyland.cl/wp-content/uploads/2022/06/KITKATDUOSSTRAWBERRYDARKCHOCOLATE42G.jpg",
        
            },
            {
                id: 2,
                title: "Birthday Cake Flavour",
                description: "Birthday Creme.",
                stock: 12,
                price: 5,
                img: "https://thecandyland.cl/wp-content/uploads/2021/01/Kitkat-cke.jpg",
        
            },
            {
                id: 3,
                title: "Duos",
                description: "Mint + Dark Chocolate.",
                stock: 13,
                price: 3,
                img: "https://thecandyland.cl/wp-content/uploads/2020/10/KIT-KAT-DUOS-MINTDARK-CHOCOLATE.jpg",
        
            },
            {
                id: 4,
                title: "Miniatura",
                description: "Edición Especial Pascua.",
                stock: 14,
                price: 4,
                img: "https://thecandyland.cl/wp-content/uploads/2023/03/600X600PX_Pascua_2.jpg",
        
            },
            {
                id: 5,
                title: "Dark",
                description: "Dark Chocolate.",
                stock: 15,
                price: 5,
                img: "https://thecandyland.cl/wp-content/uploads/2022/12/KITKATDARK42G.jpg",
        
            },
            {
                id: 6,
                title: "Blueberry Muffin",
                description: "Torta de Blueberry.",
                stock: 16,
                price: 3,
                img: "https://thecandyland.cl/wp-content/uploads/2022/11/KITKATBLUEBERRYMUFFIN42G.jpg",
        
            },
            {
                id: 7,
                title: "White Chocolate",
                description: "Chocolate Blanco.",
                stock: 17,
                price: 4,
                img: "https://thecandyland.cl/wp-content/uploads/2022/06/KITKATWHITEKINGSIZE85G.jpg",
        
            },
            {
                id: 8,
                title: "Duos",
                description: "Mocha + Chocolate.",
                stock: 18,
                price: 6,
                img: "https://thecandyland.cl/wp-content/uploads/2021/11/KITKATDUOSMOCHACHOCOLATEKINGSIZEBAR.jpg",
        
            },
            {
                id: 9,
                title: "King Size Classic",
                description: "Crisp Wafers.",
                stock: 19,
                price: 4,
                img: "https://thecandyland.cl/wp-content/uploads/2020/06/KIT-KAT-KING-SIZE.jpg",
        
            },
        
        ];

        setTimeout ( () => {

            const date = new Date().toLocaleDateString;
            resolve (products, date);

        }, 2000);
        
        
    });

}

export function getProductData (idURL) {

    return new Promise ( (resolve, reject) => {

        const products = [

            {
                id: 1,
                title: "Duos",
                description: "Strawberyy + Dark Chocolate.",
                stock: 11,
                price: 2,
                img: "https://thecandyland.cl/wp-content/uploads/2022/06/KITKATDUOSSTRAWBERRYDARKCHOCOLATE42G.jpg",
        
            },
            {
                id: 2,
                title: "Birthday Cake Flavour",
                description: "Birthday Creme.",
                stock: 12,
                price: 5,
                img: "https://thecandyland.cl/wp-content/uploads/2021/01/Kitkat-cke.jpg",
        
            },
            {
                id: 3,
                title: "Duos",
                description: "Mint + Dark Chocolate.",
                stock: 13,
                price: 3,
                img: "https://thecandyland.cl/wp-content/uploads/2020/10/KIT-KAT-DUOS-MINTDARK-CHOCOLATE.jpg",
        
            },
            {
                id: 4,
                title: "Miniatura",
                description: "Edición Especial Pascua.",
                stock: 14,
                price: 4,
                img: "https://thecandyland.cl/wp-content/uploads/2023/03/600X600PX_Pascua_2.jpg",
        
            },
            {
                id: 5,
                title: "Dark",
                description: "Dark Chocolate.",
                stock: 15,
                price: 5,
                img: "https://thecandyland.cl/wp-content/uploads/2022/12/KITKATDARK42G.jpg",
        
            },
            {
                id: 6,
                title: "Blueberry Muffin",
                description: "Torta de Blueberry.",
                stock: 16,
                price: 3,
                img: "https://thecandyland.cl/wp-content/uploads/2022/11/KITKATBLUEBERRYMUFFIN42G.jpg",
        
            },
            {
                id: 7,
                title: "White Chocolate",
                description: "Chocolate Blanco.",
                stock: 17,
                price: 4,
                img: "https://thecandyland.cl/wp-content/uploads/2022/06/KITKATWHITEKINGSIZE85G.jpg",
        
            },
            {
                id: 8,
                title: "Duos",
                description: "Mocha + Chocolate.",
                stock: 18,
                price: 6,
                img: "https://thecandyland.cl/wp-content/uploads/2021/11/KITKATDUOSMOCHACHOCOLATEKINGSIZEBAR.jpg",
        
            },
            {
                id: 9,
                title: "King Size Classic",
                description: "Crisp Wafers.",
                stock: 19,
                price: 4,
                img: "https://thecandyland.cl/wp-content/uploads/2020/06/KIT-KAT-KING-SIZE.jpg",
        
            },
        
        ];

        const productRequested = products.find ((item) => item.id === Number(idURL));

        setTimeout( () => {

            resolve (productRequested);

        }, 2000);
        
    });

};

export default getData;