

const product = {
    namespaced :true,
    state(){
        return {
            products : [
              {
                id : 1,
                name: "Samsung Galaxy A53 5G",
                img: "https://dkstatics-public.digikala.com/digikala-products/871b53a2236bf90e7e37337b1089c39f5c5175ff_1656422780.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                description:"گوشی موبایل سامسونگ مدل  دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
                price: 1300
              },
              {
                id : 2,
                name: "IPhone 13 Pro A2639",
                img: "https://dkstatics-public.digikala.com/digikala-products/71e8dbf638d9d2d62228b4609fdcbd8db395fabb_1656417558.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                description:"گوشی موبایل اپل مدل  دو سیم‌ کارت ظرفیت 256 گیگابایت و 6 گیگابایت رم - اکتیو",
                price: 2450
              },
              {
                id : 3,
                name: "Xiaomi Black Shark 5 Pro",
                img: "https://dkstatics-public.digikala.com/digikala-products/1eae38320c929a97685a3d2cc0fd9753d042e9a9_1662183891.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                description:"گوشی موبایل شیائومی  دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
                price: 1900
              },
              {
                id : 4,
                name: "OnePlus Nord CE 5G",
                img: "https://dkstatics-public.digikala.com/digikala-products/f92514d94601b916fe7bb7f9cb046d216ef92137_1656423635.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                description:"گوشی موبایل وان پلاس  دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
                price: 1750
              }
            ]
        }
    },
    getters:{
         allproducts(state){
           return state.products
         }
    }

}

export default product;