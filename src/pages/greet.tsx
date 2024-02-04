import { WheelItems } from "../models/wheel";
import WheelComponent from "../components/wheel";

const GreetPage = () => {
    const wheelItems:WheelItems = [
        {
            item: "Moooi"
        }, {
            item: "Heips"
        }, {
            item: "Hei"
        }, {
            item: "Hej"
        }, {
            item: "Terve"
        }, {
            item: "Hellou"
        }, {
            item: "Moro"
        }, {
            item: "Tereveppä terve"
        }, {
            item: "Moikkamoi"
        }, {
            item: "Heipparallaa"
        }, {
            item: "Morjes"
        }, {
            item: "Tervehdys"
        }, {
            item: "Hellurei"
        }, {
            item: "Tereve"
        }, {
            item: "Moromoro"
        }, {
            item: "Morgens"
        }, {
            item: "Hojo hojo"
        }
    ]

    return(
        <>
        <WheelComponent items={wheelItems}></WheelComponent>
        </>
    )
}

export default GreetPage