import { WheelItems } from "../models/wheel";
import WheelComponent from "../components/wheel";

const NamePage = () => {
    const wheelItems:WheelItems = [
        {
            item: "Joonas"
        }, {
            item: "Teemu"
        }, {
            item: "Krisse"
        }, {
            item: "Harri"
        }, {
            item: "Raikka"
        }, {
            item: "Eetu"
        }, {
            item: "Trang"
        }, {
            item: "Tomi"
        }
    ]

    return(
        <>
        <WheelComponent items={wheelItems}></WheelComponent>
        </>
    )
}

export default NamePage