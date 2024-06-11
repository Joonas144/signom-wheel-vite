import { WheelItems } from "../models/wheel";
import WheelComponent from "../components/wheel";

const NamePage = () => {
    const wheelItems:WheelItems = [
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

    return(
        <>
        <WheelComponent items={wheelItems}></WheelComponent>
        </>
    )
}

export default NamePage