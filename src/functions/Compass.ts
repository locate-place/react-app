let lastBearing: number = 0;

let debug: boolean = true;

/**
 * Shows the main and detail compasses.
 */
const displayCompass = (): void =>
{
    let compassCollapsibles: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('compass-collapsible') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < compassCollapsibles.length; i++) {
        let item: HTMLElement|null = compassCollapsibles.item(i);

        if (item === null) {
            continue;
        }

        item.style.display = 'block';
    }

    let compass: HTMLElement|null = document.getElementById('compass');

    if (compass !== null) {
        compass.style.display = 'block';
    }

    let compassArea: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('compass-area') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < compassArea.length; i++) {
        let item: HTMLElement|null = compassArea.item(i);

        if (item === null) {
            continue;
        }

        item.style.display = 'block';
    }

    let compassDirection: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('compass-direction') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < compassDirection.length; i++) {
        let item: HTMLElement|null = compassDirection.item(i);

        if (item === null) {
            continue;
        }

        item.style.display = 'block';
    }

    let compassCol: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('col-compass') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < compassCol.length; i++) {
        let item: HTMLElement|null = compassCol.item(i);

        if (item === null) {
            continue;
        }

        item.style.display = 'block';
    }
}

/**
 * Set direction to main compass and detail compasses.
 *
 * @param {number} direction
 */
const setDirection = (direction: number): void =>
{
    lastBearing = direction;

    let compassDisc: HTMLElement|null = document.getElementById('compassDisc');
    let compassArrow: HTMLElement|null = document.getElementById('compassArrow');

    if (compassArrow !== null) {
        let dataDegreeString = compassArrow.getAttribute('data-degree');

        if (dataDegreeString !== null) {
            let dataDegree = parseFloat(dataDegreeString);
            let dirArrow = dataDegree + direction;

            compassArrow.style.transform = `rotate(${dirArrow}deg)`;
        }

        if (dataDegreeString === null) {
            compassArrow.style.transform = `rotate(0deg)`;
        }
    }

    if (compassDisc !== null) {
        compassDisc.style.transform = `rotate(${direction}deg)`;
    }

    let arrowDirection: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('arrow-direction') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < arrowDirection.length; i++) {
        let item: HTMLElement|null = arrowDirection.item(i);

        if (item === null) {
            continue;
        }

        let dataDegreeString: string|null = item.getAttribute('data-degree');

        if (dataDegreeString === null) {
            continue;
        }

        let dataDegree = parseFloat(dataDegreeString);
        let dirArrow = dataDegree + direction;

        item.style.transform = `rotate(${dirArrow}deg)`;
    }
}

/**
 * Add compass functionality
 */
const initializeCompass = (): void =>
{
    if (debug) {
        displayCompass();
        //setDirection(-135);
        setDirection(0);
    }

    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
        setTimeout(() => {
            displayCompass();
            setDirection(0);

            window.addEventListener('deviceorientationabsolute', (eventData) => {
                let orientationEvent = eventData as DeviceOrientationEvent;
                let alpha = orientationEvent.alpha;

                if (alpha !== null) {
                    setDirection(alpha);
                }
            }, true);
        }, 250);
    }
}

export {
    lastBearing,
    initializeCompass,
    setDirection
};
