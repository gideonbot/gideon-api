export function quote(): Promise<QuoteString>;
export function abilities(type: string): Promise<AbilityInfo>;
export function soundtracks(show: string): Promise<SoundtrackInfo>;
export function speedsters(): Promise<SpeedsterInfo>;

interface QuoteString {
    quote: string;
}

interface AbilityInfo {
    title: string;
    ability: string;
}

interface SoundtrackInfo {
    url: string;
}

interface SpeedsterInfo {
    speedster: string;
    lightningColorsElectrokinesis: string;
    universe: string;
    actoractress: string;
    firstAppearanceAsSpeedster: string;
    image: string;
}