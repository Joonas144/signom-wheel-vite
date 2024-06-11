import { WheelItems } from "../models/wheel";
import { useState } from 'react';
import WheelComponent from "../components/wheel";

const DailyPage = () => {
    const [removableItem, setRemoveableItem] = useState<null|Number>(null);

    let wheelItems:WheelItems = [
        {
            item: "Joonas"
        }, {
            item: "Krisse"
        }, {
            item: "Harri"
        }, {
            item: "Eetu"
        }, {
            item: "Trang"
        }, {
            item: "Tomi"
        }, {
            item: "Ari"
        }
    ]

    const setItemToRemove = (itemIndex: number, item: WheelItems) => {
        console.log(itemIndex)
        setRemoveableItem(itemIndex)
    }

    const removeItem = () => {
        if (removableItem != null)
        wheelItems.forEach((item, index) => {
            if(index == removableItem) {
                wheelItems.splice(index, 1)
            }
        })
        console.log(wheelItems)
    }

    return(
        <>
        <WheelComponent items={wheelItems}
                        onStartCallback={removeItem}
                        onFinishCallback={setItemToRemove}></WheelComponent>
        </>
    )
}

export default DailyPage