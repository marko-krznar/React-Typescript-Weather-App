import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const RenderIcon = (
    iconCode: string,
    iconSize: number,
    iconFont: string
) => {
    if (iconCode === "01d") {
        return <BsFillSunFill className={iconFont} />;
    }

    if (iconCode === "01n") {
        return <BsFillMoonStarsFill className={iconFont} />;
    }

    return (
        <img
            src={`https://openweathermap.org/img/wn/${iconCode}@${iconSize}x.png`}
            alt="weather"
        />
    );
};
