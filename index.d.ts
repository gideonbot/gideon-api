export function quote(): Promise<QuoteString>;
export function abilities(type?: string): Promise<AbilityInfo>;
export function soundtracks(show?: string): Promise<SoundtrackInfo>;
export function speedsters(): Promise<SpeedsterInfo>;
export function timeline(): Promise<String>;
export function avi(): Promise<AviInfo[]>;

interface QuoteString {
    text: string;
    img: string;
}

interface AbilityInfo {
    [key: string]: {
        [key: string]: string;
    }
}

interface SoundtrackInfo {
    [key: string]: {
        [key: string]: string;
    }
}

interface SpeedsterInfo {
    speedster: string;
    lightningColorsElectrokinesis: string;
    universe: string;
    actoractress: string;
    firstAppearanceAsSpeedster: string;
    image: string;
}

interface AviInfo {
    air_date: string;
    episode_id: string;
    episode_name: string;
    row_number: string;
    series: string;
}