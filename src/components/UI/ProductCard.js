import React, {useState} from 'react';
import HeartFullIcon from "@/components/Icons/HeartFullIcon";
import HeartEmptyIcon from "@/components/Icons/HeartEmptyIcon";
import Margin from "@/components/Tools/Margin";
import TextBaseMedium from "@/components/UI/TextBaseMedium";
import Crement from "@/components/UI/Crement";
import MinusIcon from "@/components/Icons/MinusIcon";
import PlusIcon from "@/components/Icons/PlusIcon";
import ComplectTrue from "@/components/UI/ComplectTrue";
import ComplectFalse from "@/components/UI/ComplectFalse";
import Price from "@/components/UI/Price";

function ProductCard({src, alt, title, price, isDiscount, discountPrice, isComplect}) {
    const [isClicked, setClicked] = useState(false)

    return (
        <div className='p-[12px] bg-white rounded-[8.29px] w-[200px]'>
            <div className='relative w-[175px] h-[149px] rounded-[9px]'>
                <img
                    src={src}
                    alt={alt}
                />

                <div
                    className='absolute top-[10px] right-[10px] rounded-[4px] cursor-pointer bg-white opacity-50 p-[3px]'
                    onClick={() => setClicked(!isClicked)}
                >
                    {isClicked
                        ? <HeartFullIcon/>
                        : <HeartEmptyIcon/>
                    }
                </div>
            </div>

            <Margin direction={'b'} px={9}/>

            <TextBaseMedium>
                {title}
            </TextBaseMedium>

            <Margin direction={'b'} px={7}/>

            <Price
                isDiscount={isDiscount}
                discountPrice={discountPrice}
            >
                {price} c
            </Price>

            <Margin direction={'b'} px={2}/>

            <p className='font-medium text-xs text-available'>
                В наличии
            </p>

            <Margin direction={'b'} px={6}/>

            {isComplect
                ? <ComplectTrue/>
                : <ComplectFalse/>
            }

            <Margin direction={'b'} px={7}/>

            <div className='flex justify-between items-center'>
                <Crement operation={0}/>

                <p className='font-medium text-lg'>
                    999
                </p>

                <Crement operation={1}/>
            </div>
        </div>
    );
}

export default ProductCard;