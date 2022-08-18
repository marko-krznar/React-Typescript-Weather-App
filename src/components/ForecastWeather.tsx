import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    BsFillSunFill,
    BsFillMoonStarsFill,
    BsEmojiFrown,
} from "react-icons/bs";

interface IFiveDayWeather {
    fiveDayWeather: [
        {
            dt_txt: string;
            dt: number;
            main: {
                temp: number;
            };
            weather: [
                {
                    main: string;
                    description: string;
                    icon: string;
                }
            ];
        }
    ];
    errorMsg: string;
}

const ForecastWeather = () => {
    const url = "https://api.openweathermap.org/";
    const apiKey = "bfd14f25f12b27477818a553e86af0d4";

    const [fiveDayWeatherInfo, setFiveDayWeatherInfo] =
        useState<IFiveDayWeather>({
            fiveDayWeather: [
                {
                    dt_txt: "",
                    dt: 0,
                    main: {
                        temp: 0,
                    },
                    weather: [
                        {
                            main: "",
                            description: "",
                            icon: "",
                        },
                    ],
                },
            ],
            errorMsg: "",
        });

    useEffect(() => {
        axios
            .get(
                `${url}data/2.5/forecast?q=Zagreb&units=metric&lang=hr&appid=${apiKey}`
            )
            .then((res) => {
                setFiveDayWeatherInfo({
                    ...fiveDayWeatherInfo,
                    fiveDayWeather: res.data.list,
                });
            })
            .catch((err) => {
                setFiveDayWeatherInfo({
                    ...fiveDayWeatherInfo,
                    errorMsg: err.message,
                });
            });
    }, []);

    console.log(fiveDayWeatherInfo.errorMsg);

    const renderIcon = (
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
                alt={"weather"}
            />
        );
    };

    return (
        <div className="App px-4">
            <section className="py-6">
                {fiveDayWeatherInfo.errorMsg ? (
                    <div className="m-auto text-white">
                        <p className="flex justify-center items-center flex-wrap">
                            <span className="text-4xl flex items-center">
                                <BsEmojiFrown className="mr-2" /> Oh no!
                            </span>
                            <span className="block w-full text-center mt-4">
                                {fiveDayWeatherInfo.errorMsg}
                            </span>
                        </p>
                    </div>
                ) : (
                    <ul className="flex overflow-x-scroll">
                        {fiveDayWeatherInfo.fiveDayWeather.map((item, i) => {
                            return (
                                <li
                                    className="max-w-xs px-8 py-4 mx-auto bg-white/[.2] rounded-lg shadow-md my-2 flex-auto backdrop-blur-lg min-w-max text-white mr-2"
                                    key={i}
                                >
                                    <span className="block text-2xl text-center my-4 font-bold">
                                        {Math.round(item.main.temp)}° C
                                    </span>
                                    <div className="m-8 mt-4 flex justify-center items-center w-24 h-24">
                                        {renderIcon(
                                            item.weather[0].icon,
                                            2,
                                            "text-5xl"
                                        )}
                                    </div>
                                    <span className="block text-center">
                                        {item.dt_txt.slice(8, 10)}.
                                        {item.dt_txt.slice(5, 7)}.
                                        {item.dt_txt.slice(0, 4)}.
                                    </span>
                                    <span className="block text-center">
                                        {item.dt_txt.slice(11, 13)}:
                                        {item.dt_txt.slice(14, 16)}
                                    </span>
                                    <span className="block uppercase text-center my-4">
                                        {item.weather[0].description}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default ForecastWeather;
