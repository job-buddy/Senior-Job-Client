import React from 'react';

import * as s from './StyledContentHeader';

// 대분류 > 중분류 > 소분류
export default function ContentHeader(param: Array<String>) {
    const jsonString = JSON.stringify(Object.values(param));
    const stringArray = JSON.parse(jsonString);
    return (
        <>
            <s.contentHeader>
                {stringArray?.map((item: string, index: number) =>
                    index % 2 ? (
                        <>
                            <svg width='17' height='24' viewBox='0 0 17 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M5.09961 20.594C4.93294 20.3579 4.84961 20.0783 4.84961 19.7553C4.84961 19.4323 4.93294 19.1531 5.09961 18.9176L9.98294 11.9996L5.08294 5.0579C4.92739 4.83753 4.84961 4.56207 4.84961 4.23151C4.84961 3.90095 4.93294 3.61762 5.09961 3.38151C5.26628 3.1454 5.46361 3.02734 5.69161 3.02734C5.91961 3.02734 6.11672 3.1454 6.28294 3.38151L11.8829 11.3385C11.9496 11.4329 11.9969 11.5352 12.0249 11.6454C12.0529 11.7556 12.0667 11.8736 12.0663 11.9996C12.0663 12.1255 12.0523 12.2435 12.0243 12.3537C11.9963 12.4639 11.9492 12.5662 11.8829 12.6607L6.26628 20.6176C6.11072 20.838 5.91894 20.9482 5.69094 20.9482C5.46294 20.9482 5.26583 20.8301 5.09961 20.594Z'
                                    fill='black'
                                />
                            </svg>
                            <p key={item}>{item}</p>
                        </>
                    ) : (
                        <p key={item}>{item}</p>
                    )
                )}
            </s.contentHeader>
        </>
    );
}
