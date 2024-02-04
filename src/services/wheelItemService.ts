import { ColorTranslator } from "colortranslator";
import { WheelDataType  } from "react-custom-roulette";
import { WheelItems  } from "../models/wheel";

export default class WheelItemService {
    static colorList:Array<ColorTranslator> = [
        new ColorTranslator("#00e277"),
        new ColorTranslator("#009ce9"),
        new ColorTranslator("#ffbc57"),
        new ColorTranslator("#003e25"),
        new ColorTranslator("#ff8439"),
        new ColorTranslator("#ff3342")
    ]
    public wheelItems: WheelItems = [];
    
    constructor(items: WheelItems) {
        this.wheelItems = items;
    }
    

    

    
    static getLabels = (wheelItems: WheelItems):Array<string> => {
        return wheelItems.map(item => item.item);
    }

    static getColors = (wheelItems: WheelItems):Array<string> => {


        try {
            const colors = wheelItems.map((items, index) => {
                if (items.color) return items.color.HEX.toString();

                let idx = index % 6
                return this.colorList[idx].HEX.toString();
                
            });
            return colors;    
        } catch (error: any) {
            throw new Error(error);
        }
        
        
    }

    static generateWheelItems = (wheelItems: WheelItems):Array<WheelDataType> => {
        let colors = this.getColors(wheelItems);
        let labels = this.getLabels(wheelItems);

        return wheelItems.map((_, index):WheelDataType => 
            {
                return {
                    option: labels[index],
                    style: {
                        backgroundColor: colors[index],
                    }
                }
                
            }
        );
    }
}