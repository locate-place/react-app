/**
 * Shows the main and detail compasses.
 */
const displayCompass = (): void =>
{
    let compass: HTMLElement|null = document.getElementById('compass');

    if (compass === null) {
        return;
    }

    compass.style.display = 'block';

    let compassDirection: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('compass-direction') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < compassDirection.length; i++) {
        let item: HTMLElement|null = compassDirection.item(i);

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
    let compassDisc: HTMLElement|null = document.getElementById('compassDisc');

    if (compassDisc === null) {
        return;
    }

    compassDisc.style.transform = `rotate(${direction}deg)`;

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
    // displayCompass();
    // setDirection(-135);

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

export default initializeCompass;
