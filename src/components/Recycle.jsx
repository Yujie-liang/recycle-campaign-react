import styles from './Recycle.module.scss';
import RecycleItem from './RecycleItem';
import {useState} from 'react';
// import { shuffleArray } from './utils/shuffle';


const recycleItems = [
        {"id": 0, "image": "https://recycle.rethinktw.org/static/0af2a46f047ff6338704c9818492d6b9/dd0e8/%E7%94%A2%E5%93%81%E5%A4%96%E5%8C%85%E8%A3%9D.webp", "name": "產品包裝紙盒", "recyclable": true, "category": "紙類" },
        {"id": 1, "image": "https://recycle.rethinktw.org/static/0b37e257010593ca5dc0b3025d5ea990/dd0e8/%E9%89%9B%E7%AD%86.webp", "name": "鉛筆", "recyclable": false, "category": "一般垃圾" },
        {"id": 2, "image": "https://recycle.rethinktw.org/static/0cf82b68c6f97906388295a09be2f258/dd0e8/%E8%A1%9B%E7%94%9F%E7%B4%99%E5%8C%85%E8%A3%9D.webp", "name": "衛生紙包裝", "recyclable": true, "category": "一般塑膠類" },
        {"id": 3, "image": "https://recycle.rethinktw.org/static/0f704a2e7ce314fdfdfec5e0e313dab2/a7203/%E7%89%9B%E5%A5%B6%E7%9B%92.webp", "name": "牛奶盒", "recyclable": true, "category": "紙類" },
        {"id": 4, "image": "https://recycle.rethinktw.org/static/00a3d6edfba4869853107428dbfc2a6c/26a38/%E6%B4%97%E9%9D%A2%E4%B9%B3-%E7%93%B6%E8%93%8B%EF%BC%88%E5%BE%8C%EF%BC%89.webp", "name": "塑膠瓶蓋", "recyclable": true, "category": "一般塑膠類" },
        {"id": 5, "image": "https://recycle.rethinktw.org/static/01fc99059d98893142d7e02ab80e5f74/dd0e8/%E7%B4%99%E5%B0%BF%E5%B8%83.webp", "name": "紙尿布", "recyclable": false, "category": "一般垃圾" },
        {"id": 6, "image": "https://recycle.rethinktw.org/static/1bba4e53992dba7874cd3553a9c54ed8/dd0e8/%E5%A1%91%E8%86%A0%E9%A3%B2%E6%96%99%E5%BA%95%E5%BA%A7%252F%E6%9D%AF%E6%9E%B6.webp", "name": "塑膠飲料底座", "recyclable": true, "category": "一般塑膠類" },
        {"id": 7, "image": "https://recycle.rethinktw.org/static/1d4735d61505122eb5309a60b1fa1e9c/a7203/%E9%8B%81%E7%AE%94%E7%B4%99.webp", "name": "用過的鋁箔紙", "recyclable": false, "category": "一般垃圾" },
        {"id": 8, "image": "https://recycle.rethinktw.org/static/1e50aaf062740d76c576034c1374d6d8/dd0e8/%E5%8F%A3%E7%B4%85.webp", "name": "口紅", "recyclable": false, "category": "一般垃圾" },
        {"id": 9, "image": "https://recycle.rethinktw.org/static/3ebb3b1f4d95a140c650feadedd2e229/dd0e8/%E7%92%B0%E4%BF%9D%E8%A2%8B.webp", "name": "環保袋", "recyclable": false, "category": "一般垃圾" },
        {"id": 10, "image": "https://recycle.rethinktw.org/static/4ed6d8a6f3ce510e1088e9fd59f1f051/dd0e8/%E9%A4%8A%E6%A8%82%E5%A4%9A.webp", "name": "養樂多瓶", "recyclable": true, "category": "一般塑膠類" },
        {"id": 11, "image": "https://recycle.rethinktw.org/static/5cc54f3ed65e9d671686eb4524773df2/a7203/%E8%86%A0%E5%9B%8A%E5%92%96%E5%95%A1.webp", "name": "膠囊咖啡", "recyclable": false, "category": "一般垃圾"},
        {"id": 12, "image": "https://recycle.rethinktw.org/static/5d714255791eb14fd4d954bda0cc2318/dd0e8/%E7%91%9C%E7%8F%88%E5%A2%8A.webp", "name": "瑜珈墊", "recyclable": false, "category": "一般垃圾"},
        {"id": 13, "image": "https://recycle.rethinktw.org/static/5de4580941c33b297b9d557ab880de48/a7203/%E6%A2%B3%E5%AD%90.webp", "name": "梳子", "recyclable": false, "category": "一般垃圾"},
        {"id": 14, "image": "https://recycle.rethinktw.org/static/6af79658398f2f77a0bef0ce779a82f5/dd0e8/%E5%A0%B1%E7%B4%99.webp", "name": "報紙", "recyclable": true, "category": "紙類"},
        {"id": 15, "image": "https://recycle.rethinktw.org/static/7f2c168f15b87fb5c01d12eb1c337c5a/a7203/%E7%B4%99%E5%AE%B9%E5%99%A8%E4%BE%BF%E7%95%B6%E7%9B%92.webp", "name": "紙容器便當盒", "recyclable": true, "category": "紙類"},
        {"id": 16, "image": "https://recycle.rethinktw.org/static/8e042c99fe62436bbf49a09598cab5db/dd0e8/%E8%A1%A3%E7%89%A9.webp", "name": "衣物", "recyclable": false, "category": "一般垃圾"},
        {"id": 17, "image": "https://recycle.rethinktw.org/static/9b791bd326b7576e9318dc1f8f3c4ff2/dd0e8/%E8%A1%A3%E6%9E%B6.webp", "name": "衣架", "recyclable": true, "category": "鐵/塑膠類"},
        {"id": 18, "image": "https://recycle.rethinktw.org/static/16e8897fb63772e743bd2801098fb3d4/dd0e8/%E7%B6%B2%E8%B3%BC%E7%A0%B4%E5%A3%9E%E8%A2%8B.webp", "name": "網購破壞袋", "recyclable": false, "category": "一般垃圾"},
        {"id": 19, "image": "https://recycle.rethinktw.org/static/22b24034dca4de16055a093cc26d1eb3/dd0e8/%E7%89%99%E5%88%B7.webp", "name": "牙刷", "recyclable": false, "category": "一般垃圾"},
        {"id": 20, "image": "https://recycle.rethinktw.org/static/40b51f04dd0a45def5a98a69b12f985d/dd0e8/%E7%8E%BB%E7%92%83%E7%93%B6.webp", "name": "玻璃瓶", "recyclable": true, "category": "玻璃容器類"}
    ]
//'./utils/shuffle';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    };

export default function Recycle(){
    const [newSelectedItems, setNewSelectedItems] = useState(()=>{
        const shuffledItems = shuffleArray(recycleItems);
        return shuffledItems.slice(0, 8);
    });
    function handleClick(){
        const shuffledItems = shuffleArray(recycleItems);
        const selectedItems = shuffledItems.slice(0, 8);
        setNewSelectedItems(selectedItems);
    }
    return(
        <section id="recycle">
            <div className="container">
                <h2 className={styles.recycleTitle}>還不知道怎麼分類嗎?</h2>
                <div className={styles.recycleWrapper}>
                    {newSelectedItems.map(item =>(
                        <RecycleItem key={item.id} image={item.image} title={item.name} recyclable={item.recyclable ? '可回收' : '不可回收'} category={item.category} />
                    ))}
                </div>
                <button className={styles.action} onClick={handleClick}>換一批</button>
            </div>
        </section>
    )
}