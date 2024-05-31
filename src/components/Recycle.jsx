import styles from './Recycle.module.scss';
import RecycleItem from './RecycleItem';
import {useState} from 'react';
// import { shuffleArray } from './utils/shuffle';


const recycleItems = [
        {"id": 0, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 1, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "餐盒", "recyclable": true, "category": "紙類" },
        {"id": 2, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 3, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 4, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 5, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 6, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 7, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 8, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 9, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" },
        {"id": 10, "image": "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80", "name": "尿布", "recyclable": false, "category":"一般垃圾" }
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
            <div className={styles.container}>
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