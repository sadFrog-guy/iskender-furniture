import React, {useState} from 'react';
import Heading from "@/components/UI/Heading";
import Margin from "@/components/Tools/Margin";
import CategoryCard from "@/components/UI/CategoryCard";
import WidthLimit from "@/components/Tools/WidthLimit";

function Category() {
    const [data, setData] = useState([
        { title: 'Ванны', img: 'images/Водонагреватели.png', alt: 'Ванна', products: 3000 },
        { title: 'Смесители', img: 'images/Душевые кабинки.png', alt: 'Смеситель', products: 3000 },
        { title: 'Вытяжки для кухни', img: 'images/Конвекторы.png', alt: 'Вытяжка для кухни', products: 3000 },
        { title: 'Кухонные мойки', img: 'images/Унитазы.png', alt: 'Кухонная мойка', products: 3000 },
        { title: 'Другие', img: 'images/Водонагреватели.png', alt: 'Другие товары', products: 3000 },
        { title: 'Унитазы', img: 'images/Душевые кабинки.png', alt: 'Унитаз', products: 3000 },
        { title: 'Вытяжки для кухни', img: 'images/Конвекторы.png', alt: 'Вытяжка для кухни', products: 3000 },
        { title: 'Умывальники', img: 'images/Унитазы.png', alt: 'Умывальник', products: 3000 },
        { title: 'Полотенцесушители', img: 'images/Водонагреватели.png', alt: 'Полотенцесушитель', products: 3000 },
        { title: 'Водонагреватели', img: 'images/Душевые кабинки.png', alt: 'Водонагреватель', products: 3000 },
        { title: 'Душевые', img: 'images/Конвекторы.png', alt: 'Душевая', products: 3000 },
        { title: 'Водонагреватели', img: 'images/Унитазы.png', alt: 'Водонагреватель', products: 3000 },
        { title: 'Водонагреватели', img: 'images/Водонагреватели.png', alt: 'Водонагреватель', products: 3000 },
        { title: 'Полотенцесушители', img: 'images/Душевые кабинки.png', alt: 'Полотенцесушитель', products: 3000 },
    ])

    return (
        <WidthLimit className='pb-[55px]'>
            <Heading>
                Категории
            </Heading>

            <Margin direction={'b'} px={18}/>

            <div className='flex flex-wrap gap-[8px]'>
                {data.map((item, index) => {
                    return <CategoryCard
                        key={index}
                        src={item.img}
                        alt={item.alt}
                        title={item.title}
                        subtitle={item.products}
                    />
                })}
            </div>
        </WidthLimit>
    );
}

export default Category;