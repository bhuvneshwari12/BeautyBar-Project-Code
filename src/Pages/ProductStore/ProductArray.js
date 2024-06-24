import React, { useContext } from "react";
import classes from "./ProductArray.module.css";
import CartContext from "../../Store/Context/CartContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../Store/Context/AuthContext";

export const products_list = [
    {
        id: "m1",
        title: "Mars Fabulash ",
        price: 18,
        image: "https://m.media-amazon.com/images/I/71s7fQxZ0GL.jpg",
    },
    {
        id: "m2",
        title: "Lover era",
        price: 26,
        image: "https://aqualogica.in/cdn/shop/files/GLOWOFMFOP.jpg?v=1701845506",
    },
    {
        id: "m3",
        title: "Shoutout to cupid",
        price: 30,
        image: "https://i.pinimg.com/736x/2d/d3/7c/2dd37ca4f8045087f65249deb69072e6.jpg",
    },
    {
        id: "m4",
        title: "Brownie points",
        price: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18IN2UoG15ocbqaqRx0TjFl6kO4B4eJMIuLuYMZ6HDvKrakmSRdZFFksQrmkoHaterxo&usqp=CAU",
    },
    {
        id: "m5",
        title: "Smokey Eye ",
        price: 18,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAhE_mTG8R8vMyi_U95vkzxESAWMGbmBTng&s",
    },
    {
        id: "m6",
        title: "M.A.C Magic",
        price: 26,
        image: "https://facetreasures.com/cdn/shop/products/Sky-High-News-Hero-mudc-111820.jpg?v=1642724783",
    },
    {
        id: "m7",
        title: "Lash Mob Limitless ",
        price: 30,
        image: "https://media.allure.com/photos/651c2b6755990b6ecd0ac0cc/1:1/w_2000,h_2000,c_limit/Best_Mascara_004.jpg",
    },
    {
        id: "m8",
        title: "Creamy Coconut ",
        price: 40,
        image: "https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2/static/img/product/349028/good-vibes-revitalizing-body-lotion-almond-200-ml-1-11_1_display_1699264036_0aaf5b0f.jpg",
    },
    {
        id: "m9",
        title: "Italian Marble Blush ",
        price: 20,
        image: "https://cdn.shopify.com/s/files/1/0024/1618/1294/files/LG_BethennyFrankelxSerumBlush_Amazon3_2x-ECommerce_JPG_600x.jpg?v=1713279397",
    },
    {
        id: "m10",
        title: "lamy black",
        price: 40,
        image: 'https://makeupandbody.com/wp-content/uploads/2019/03/ROY4586-1-1861902479-1552159633671.jpg',
    },
    {
        id: "m11",
        title: "Prolixr Very Moisturizer ",
        price: 20,
        image: "https://www.prolixr.in/cdn/shop/products/IMGL5991_3f065095-8cff-4e6d-9b62-52566079e1be.jpg?v=1642246660",
    },
    {
        id: "m12",
        title: "Max Factor Velvet ",
        price: 47,
        image: "https://i.pinimg.com/736x/26/5b/09/265b09475ef368f1cdfbaff5384a3f82.jpg",
    },
    {
        id: "m13",
        title: "Aqua Glow Gel ",
        price: 26,
        image: "https://images.mamaearth.in/catalog/product/g/e/gel-face-moisturizer.jpg?format=auto&height=600",
    },
    {
        id: "m14",
        title: "Aqualogica Illuminate",
        price: 31,
        image: "https://aqualogica.in/cdn/shop/files/8_63f23600-8b0f-4cc6-8b6c-5598783621eb.jpg?v=1702990905",
    },
    {
        id: "m15",
        title: "La Roche Posay  ",
        price: 19,
        image: "https://cdn.shopify.com/s/files/1/0670/3287/5233/products/6__1200x1200__2.jpg?v=1701149587&width=533",
    },
    {
        id: "m16",
        title: "Foxtale Super Glow",
        price: 16,
        image: "https://spongelle.com/cdn/shop/articles/190687938_816050242367683_8039613400695560323_n.jpg?v=1624014831",
    },
    {
        id: "m17",
        title: "Urban Color lipstick",
        price: 28,
        image: "https://images-static.nykaa.com/media/catalog/product/6/f/6f66372LAMEL00000083_4.jpg?tr=w-500,pr-true",
    },
    {
        id: "m18",
        title: "Multi-Use Makeup Blush",
        price: 42,
        image: "https://image.made-in-china.com/2f0j00mBzopAYqrecu/Multi-Use-Makeup-Blush-Stick-Solid-Moisturizer-Stick.webp",
    },
    {
        id: "m19",
        title: "Ceramide & Vitamin C Oil",
        price: 40,
        image: "https://www.drsheths.com/cdn/shop/files/39_600x.jpg?v=1702022540",
    },
    {
        id: "m20",
        title: "chessy lips",
        price: 19,
        image: "https://media.karousell.com/media/photos/products/2023/7/10/lipstick_set_1688980969_ee62ce06_progressive.jpg",
    },
    {
        id: "m21",
        title: "Laura Mercier",
        price: 19,
        image: "https://britishbeautyblogger.com/wp-content/uploads/2020/07/Laura-Mercier-Tinted-Moisturiser-SPF30-e1594727023348.jpg",
    },
    {
        id: "m22",
        title: "Bobbi Brown ",
        price: 19,
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71_0e_w8oOL._SL1500_.jpg",
    },
    {
        id: "m23",
        title: "Enzyme Microfoliant",
        price: 19,
        image: "https://brwn.in/cdn/shop/products/Copyof1024TintedM.003.jpg?v=1692597250",
    },
    {
        id: "m24",
        title: "Iba Pure L",
        price: 19,
        image: "https://haappyherbs.com/cdn/shop/files/ujvala-3_800x.jpg?v=1710497871",
    },
];

const ProductArray = () => {
    const ctx = useContext(CartContext);
    const authCtx = useContext(AuthContext)
    const history = useHistory();
  
    const addItemHandler = (product) => {
      if (authCtx.isLoggedIn){
        console.log(ctx.items);
        ctx.addItem(product);
      }
      else{
        alert("Please Login")
        history.push('/login')
      }
      
    };
  
    const handleImageClick = (product) => {
      history.push({
        pathname: `/store/${product.id}`,
        state: { productData: product },
      });
    };
  
    return (
      <div className={classes.container}>
        <div className={classes.row}>
          {products_list.map((product) => (
            <div key={product.id} className={classes.col}>
              <div className={classes.carditem}>
               <img 
                  src={product.image}
                  alt={product.title}
                  className={classes.productImage}
                  onClick={() => handleImageClick(product)}
                />
                <div className={classes.cardBody}>
                  <div className={classes.title}>{product.title}</div>
                  <div className={classes.price}>${product.price}</div>
                  <button
                    className={classes.button}
                    onClick={() => addItemHandler(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductArray;
