import React, { useState, useEffect } from 'react';

import readPopularityLectureList from '~/api/readPopularityLectureList';
import Card from './Card';
import { sample } from '~/constants/sample';
import { ReactComponent as LeftArrow } from '@images/icon-carousel-left-arrow.svg';
import { ReactComponent as RightArrow } from '@images/icon-carousel-right-arrow.svg';

import * as s from './StyledLectureCarousel';

const Carousel = () => {
    const [isNowPosition, setNowPosition] = useState(0);
    const [isLectureList, setLectureList] = useState<LectureData[] | null>(sample);

    useEffect(() => {
        const getPopularityLectureList = async () => {
            try {
                const data = await readPopularityLectureList();
                const responseLectureData: LectureData[] = [];
                for (let i = isNowPosition * 4; i < Math.min(data.length, isNowPosition * 4 + 4); i++) {
                    responseLectureData.push(data[i]);
                }
                setLectureList(responseLectureData);
            } catch (error) {
                console.log(error);
            }
        };
        getPopularityLectureList();
    }, [isNowPosition]);

    return (
        <>
            <s.Carousel>
                <s.Header>
                    <h4>현재 인기 강좌</h4>
                </s.Header>
                <s.Body>
                    <button
                        onClick={() => {
                            setNowPosition((isNowPosition + 2) % 3);
                        }}
                    >
                        <LeftArrow />
                    </button>
                    <s.CardGroup>
                        {isLectureList?.map((item: LectureData) => (
                            <Card {...item} />
                        ))}
                    </s.CardGroup>
                    <button
                        onClick={() => {
                            setNowPosition((isNowPosition + 1) % 3);
                        }}
                    >
                        <RightArrow />
                    </button>
                </s.Body>
            </s.Carousel>
            ;
        </>
    );
};

export default Carousel;
