// eslint-disable-next-line
/* eslint-disable */
function setNavPills() {
    const total: NodeListOf<Element> = document.querySelectorAll('.nav-pills');

    function initNavs(): void {
        total.forEach((item: any) => {
            let moving_div: any = document.createElement('div');
            const first_li = item.querySelector(
                'li:first-child .nav-link'
            ) as HTMLElement;
            const tab = first_li.cloneNode() as HTMLElement;
            tab.innerHTML = '-';

            moving_div.classList.add(
                'moving-tab',
                'position-absolute',
                'nav-link'
            );
            moving_div.appendChild(tab);
            item.appendChild(moving_div);

            const list_length = item.getElementsByTagName('li').length;

            moving_div.style.padding = '0px';
            moving_div.style.width = `${(item.querySelector('li:nth-child(1)') as HTMLElement).offsetWidth}px`;
            moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
            moving_div.style.transition = '.5s ease';

            item.onmouseover = function (event: MouseEvent) {
                const target = getEventTarget(event) as HTMLElement;
                const li = target.closest('li');
                if (li) {
                    const nodes = Array.from(
                        li.closest('ul')!.children
                    ) as HTMLElement[];
                    const index = nodes.indexOf(li) + 1;
                    (
                        item.querySelector(
                            `li:nth-child(${index}) .nav-link`
                        ) as HTMLElement
                    ).onclick = function () {
                        moving_div = item.querySelector(
                            '.moving-tab'
                        ) as HTMLElement;
                        let sum = 0;
                        if (item.classList.contains('flex-column')) {
                            for (let j = 1; j <= nodes.indexOf(li); j++) {
                                sum += (
                                    item.querySelector(
                                        `li:nth-child(${j})`
                                    ) as HTMLElement
                                ).offsetHeight;
                            }
                            moving_div.style.transform = `translate3d(0px, ${sum}px, 0px)`;
                            moving_div.style.height = `${(item.querySelector(`li:nth-child(${index})`) as HTMLElement).offsetHeight}px`;
                        } else {
                            for (let j = 1; j <= nodes.indexOf(li); j++) {
                                sum += (
                                    item.querySelector(
                                        `li:nth-child(${j})`
                                    ) as HTMLElement
                                ).offsetWidth;
                            }
                            moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
                            moving_div.style.width = `${(item.querySelector(`li:nth-child(${index})`) as HTMLElement).offsetWidth}px`;
                        }
                    };
                }
            };
        });
    }

    setTimeout(() => {
        initNavs();
    }, 100);

    window.addEventListener('resize', () => {
        total.forEach((item) => {
            item.querySelector('.moving-tab')?.remove();
            const moving_div = document.createElement('div');
            const tab = item
                .querySelector('.nav-link.active')!
                .cloneNode() as HTMLElement;
            tab.innerHTML = '-';

            moving_div.classList.add(
                'moving-tab',
                'position-absolute',
                'nav-link'
            );
            moving_div.appendChild(tab);

            item.appendChild(moving_div);

            moving_div.style.padding = '0px';
            moving_div.style.transition = '.5s ease';

            const li = item.querySelector('.nav-link.active')!
                .parentElement as HTMLElement;

            if (li) {
                const nodes = Array.from(
                    li.closest('ul')!.children
                ) as HTMLElement[];
                const index = nodes.indexOf(li) + 1;

                let sum = 0;
                if (item.classList.contains('flex-column')) {
                    for (let j = 1; j <= nodes.indexOf(li); j++) {
                        sum += (
                            item.querySelector(
                                `li:nth-child(${j})`
                            ) as HTMLElement
                        ).offsetHeight;
                    }
                    moving_div.style.transform = `translate3d(0px, ${sum}px, 0px)`;
                    moving_div.style.width = `${(item.querySelector(`li:nth-child(${index})`) as HTMLElement).offsetWidth}px`;
                    moving_div.style.height = `${(item.querySelector(`li:nth-child(${index})`) as HTMLElement).offsetHeight}px`;
                } else {
                    for (let j = 1; j <= nodes.indexOf(li); j++) {
                        sum += (
                            item.querySelector(
                                `li:nth-child(${j})`
                            ) as HTMLElement
                        ).offsetWidth;
                    }
                    moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
                    moving_div.style.width = `${(item.querySelector(`li:nth-child(${index})`) as HTMLElement).offsetWidth}px`;
                }
            }
        });

        if (window.innerWidth < 991) {
            total.forEach((item) => {
                if (!item.classList.contains('flex-column')) {
                    item.classList.remove('flex-row');
                    item.classList.add('flex-column', 'on-resize');
                    const li = item.querySelector('.nav-link.active')!
                        .parentElement as HTMLElement;
                    const nodes = Array.from(
                        li.closest('ul')!.children
                    ) as HTMLElement[];
                    let sum = 0;
                    for (let j = 1; j <= nodes.indexOf(li); j++) {
                        sum += (
                            item.querySelector(
                                `li:nth-child(${j})`
                            ) as HTMLElement
                        ).offsetHeight;
                    }
                    const moving_div = document.querySelector(
                        '.moving-tab'
                    ) as HTMLElement;
                    moving_div.style.width = `${(item.querySelector('li:nth-child(1)') as HTMLElement).offsetWidth}px`;
                    moving_div.style.transform = `translate3d(0px, ${sum}px, 0px)`;
                }
            });
        } else {
            total.forEach((item) => {
                if (item.classList.contains('on-resize')) {
                    item.classList.remove('flex-column', 'on-resize');
                    item.classList.add('flex-row');
                    const li = item.querySelector('.nav-link.active')!
                        .parentElement as HTMLElement;
                    const nodes = Array.from(
                        li.closest('ul')!.children
                    ) as HTMLElement[];
                    let sum = 0;
                    for (let j = 1; j <= nodes.indexOf(li); j++) {
                        sum += (
                            item.querySelector(
                                `li:nth-child(${j})`
                            ) as HTMLElement
                        ).offsetWidth;
                    }
                    const moving_div = document.querySelector(
                        '.moving-tab'
                    ) as HTMLElement;
                    moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
                    moving_div.style.width = `${(item.querySelector(`li:nth-child(${nodes.indexOf(li) + 1})`) as HTMLElement).offsetWidth}px`;
                }
            });
        }
    });

    if (window.innerWidth < 991) {
        total.forEach((item) => {
            if (item.classList.contains('flex-row')) {
                item.classList.remove('flex-row');
                item.classList.add('flex-column', 'on-resize');
            }
        });
    }

    function getEventTarget(e: Event): EventTarget | null {
        e = e || window.event;
        return e.target || (e as any).srcElement;
    }
}

export default setNavPills;
