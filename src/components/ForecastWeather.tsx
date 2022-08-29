import React, { useEffect, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { fromUnixTime, format } from "date-fns";

import { apiKey, useAxios } from "../api/hookAxios";
import { RenderIcon } from "../RenderIcon";

interface IFiveDayWeatherItem {
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

interface IFiveDayWeatherState {
    list: [];
}

const ForecastWeather = () => {
    const { response, loading, error }: any = useAxios({
        method: "GET",
        url: `data/2.5/forecast?q=Zagreb&units=metric&lang=hr&appid=${apiKey}`,
    });

    const [data, setData] = useState<IFiveDayWeatherState>({ list: [] });

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    return (
        <section className="py-6">
            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div className="m-auto text-white">
                            <p className="flex justify-center items-center flex-wrap">
                                <span className="text-4xl flex items-center">
                                    <BsEmojiFrown className="mr-2" /> Oh no!
                                </span>
                                <span className="block w-full text-center mt-4">
                                    {error.message}
                                </span>
                            </p>
                        </div>
                    )}
                    <div>
                        {data && (
                            <ul className="flex overflow-x-scroll">
                                {data.list.map(
                                    (item: IFiveDayWeatherItem, i: number) => {
                                        return (
                                            <li
                                                className="max-w-xs px-8 py-4 mx-auto bg-white/[.2] rounded-lg shadow-md my-2 flex-auto backdrop-blur-lg min-w-max text-white mr-2 last-of-type:mr-0"
                                                key={i}
                                            >
                                                <span className="block text-2xl text-center my-4 font-bold">
                                                    {Math.round(item.main.temp)}
                                                    ° C
                                                </span>
                                                <div className="m-8 mt-4 flex justify-center items-center w-24 h-24">
                                                    {RenderIcon(
                                                        item.weather[0].icon,
                                                        2,
                                                        "text-5xl"
                                                    )}
                                                </div>
                                                <p className="opacity-80">
                                                    <span className="block text-center">
                                                        {format(
                                                            new Date(
                                                                fromUnixTime(
                                                                    item.dt
                                                                )
                                                            ),
                                                            "dd.MM.yyyy"
                                                        )}
                                                    </span>
                                                    <span className="block text-center">
                                                        {format(
                                                            new Date(
                                                                fromUnixTime(
                                                                    item.dt
                                                                )
                                                            ),
                                                            "HH:mm"
                                                        )}
                                                    </span>
                                                </p>
                                                <span className="block uppercase text-center my-4 bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded">
                                                    {
                                                        item.weather[0]
                                                            .description
                                                    }
                                                </span>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ForecastWeather;
