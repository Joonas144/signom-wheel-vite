import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode;
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
    return(
        <>
        <header className="container-fluid">
            <span className="header__title">
                <span>Signom</span>
                <span>Internal</span>
                <span>Lull <small>It kinda means meeting right?</small></span>
                <span>Lyric</span>
                <span>Yelper <small>Grasping at straws here</small></span>
            </span>
        </header>

        <div className="background">
            <img src='img/5th-element/twoday-5th-element-polygon-blue.png' className="background__block background__block--1"></img>
            <img src='img/5th-element/twoday-5th-element-square-green.png'className="background__block background__block--2"></img>
            <img src='img/5th-element/twoday-5th-element-pill-red.png' className="background__block background__block--3"></img>
            <img src='img/5th-element/twoday-5th-element-triangle-yellow.png' className="background__block background__block--4"></img>
            <img src='img/5th-element/twoday-5th-element-circle-light-orange.png' className="background__block background__block--5"></img>
            <img src='img/5th-element/twoday-5th-element-circle-green.png' className="background__block background__block--6"></img>
            <img src='img/5th-element/twoday-5th-element-square-blue.png' className="background__block background__block--7"></img>
        </div>
        <main>
            {children}
        </main>
        </>
        )
    }

export default DefaultLayout