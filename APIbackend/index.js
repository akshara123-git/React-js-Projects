import express from 'express';
const app = express();

app.get('/api/products',(req, res)=>{
    const products=[
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://tse3.mm.bing.net/th?id=OIP.3AH7sh1xJNxk2UCZXzKRFgHaFO&pid=Api&P=0&h=180'
        },{
            id: 2,
            name: 'table glass',
            price: 400,
            image: 'https://i5.walmartimages.com/asr/319c808a-b89e-43fe-93ad-53cc0eee6169.31161a36e1b81c48e8c5f3627a42b321.jpeg'
        },{
            id: 3,
            name: 'table plastic',
            price: 600,
            image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/KD/ZJ/IH/14416515/new-product.jpeg'
        },{
            id: 4,
            name: 'table metal',
            price: 900,
            image: 'https://images.squarespace-cdn.com/content/v1/560bee5ce4b081ffdfe8effd/1577981423104-7W3ATOFX0DACZX2X1BME/image.jpg'
        },{
            id: 5,
            name: 'table polyester',
            price: 1000,
            image: 'https://i5.walmartimages.com/asr/07e5d0a7-afaf-4592-92d0-e2daec722b1a_1.726d75e56c429d10065d2103e8faec69.jpeg'
        }
    ];
//http://localhost:3000/api/products?search=metal

    if(req.query.search){
        const filterProducts=products.filter(product=>product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }
    
    setTimeout(()=>{
      res.send(products);
    },3000);
});

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`); 
}
);