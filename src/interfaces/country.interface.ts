export interface Country {
    countryCode: string;
    name: string;
}

export interface CountryInfo {
    commonName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: Border[] | null;
}

interface Border {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
}


export interface RandomCountry {
    countryName: string;
    name: string;
    date: string;
}

export interface Holiday {
    date: string;
    name: string;
    countryCode: string;
    types: string[];
    localName: string;
}