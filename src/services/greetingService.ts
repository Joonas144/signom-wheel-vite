import { ColorTranslator, Harmony, Mix } from "colortranslator";
import { WheelDataType  } from "react-custom-roulette";

type wheelItems = Array<{
    item: string;
    color?: ColorTranslator
}>

export class greetings {
    private static hueMultiplier = 20;
    private static hueOffset = 180;

    
    static greetings:wheelItems = [
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
        }, {
            
        }
    ]

    

    static getItems = ():Array<string> => {
        return this.greetings.map(greetings => greetings.item);
    }

    static getColors = ():Array<string> => {

        let colorList:Array<ColorTranslator> = [
            new ColorTranslator("#00e277"),
            new ColorTranslator("#009ce9"),
            new ColorTranslator("#ffbc57"),
            new ColorTranslator("#003e25"),
            new ColorTranslator("#ff8439"),
            new ColorTranslator("#ff3342")
        ]
        try {
            const colors = this.greetings.map((greetings, index) => {
                if (greetings.color) return greetings.color.HEX.toString();

                let idx = index % 6
                return colorList[idx].HEX.toString();
                
            });
            return colors;    
        } catch (error: any) {
            throw new Error(error);
        }
        
        
    }

    static getGreetings = ():Array<WheelDataType> => {
        let colors = this.getColors();
        let items = this.getItems();
        return this.greetings.map((greetings, index):WheelDataType => 
            {
                return {
                    option: items[index],
                    style: {
                        backgroundColor: colors[index],
                    }
                }
                
            }
        );
    }
}