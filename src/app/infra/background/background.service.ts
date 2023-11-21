import { Injectable } from "@angular/core";
import { BG_INDEX, LIST_BG_PARAMETROS } from "./backgorund-definitions";

@Injectable({
    providedIn: 'root',
})
export class BackgroundService {

    getBackgroudByUrl(url: string): string {
        let bgName = BG_INDEX.background_name;
        LIST_BG_PARAMETROS.forEach(bg => {
            if (bg.url === url) {
                bgName = bg.background_name;
            }
        });
        return this.getBackgroundPath(bgName);
    }

    private getBackgroundPath(bgName: string): string {
        return "../assets/imagens/background/" + bgName + ".png";
    }

}