<template>
    <div class="landing-page" style="width: 100%">
        <navBar></navBar>
        <section id="section-1" class="section" data-aos="zoom-in">
            <div class="row" style="height: 85vh">
                <div class="col-lg-6 col-12">
                    <div class="text-container">
                        <h1 class="fs-10 fs-md-10 fs-lg-4 fs-xl-1">
                            Source of <br />
                            creative inspiration
                        </h1>
                        <h1
                            class="custom-text-logo display-1 display-md-2 display-lg-1 display-xl-1"
                        >
                            IIT
                        </h1>
                        <p
                            style="
                                padding-left: 5vw;
                                padding-right: 5vw;
                                font-weight: 400;
                                text-align: center;
                            "
                        >
                            Always listen and commit to providing the best quality of every service.
                            Your satisfaction is our creative inspiration!
                        </p>
                        <div class="d-flex gap-2 m-2 mb-4" style="color: #f9ae00">
                            <i
                                v-for="star in [1, 2, 3, 4, 5]"
                                :key="star"
                                class="fas fa-lg fa-star"
                            ></i>
                        </div>
                        <div class="d-flex gap-3 flex-column flex-md-row">
                            <argon-button
                                icon="fa-solid fa-phone"
                                variant="gradient"
                                color="warning"
                                size="lg"
                                class="btn btn-gradient-warning"
                                type="submit"
                            >
                                Contact
                            </argon-button>
                            <argon-button
                                icon="fas fa-box-open"
                                variant="outline"
                                color="success"
                                size="lg"
                                class="btn btn-outline-success"
                                type="submit"
                            >
                                Product
                            </argon-button>
                        </div>
                    </div>
                </div>
                <div id="image-container" class="col-lg-6 d-none d-lg-block">
                    <div id="moving-images">
                        <div class="moving-image-1">
                            <img
                                ref="movingImage1"
                                class="moving-image1"
                                alt="moving-image"
                                src="images/home/hero/light_1.png"
                            />
                        </div>
                        <div class="moving-image-2">
                            <img
                                ref="movingImage2"
                                class="moving-image2"
                                alt="moving-image"
                                src="images/home/hero/light_2.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex" style="height: 10vh; margin-top: -10vh; position: relative">
                <div
                    style="
                        backdrop-filter: blur(8px);
                        background-color: rgb(255, 255, 255);
                        z-index: 9;
                        bottom: 0px;
                        height: 80px;
                        width: 50%;
                        position: absolute;
                        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                        left: 0px;
                    "
                ></div>
                <div
                    style="
                        backdrop-filter: blur(8px);
                        background-color: rgba(255, 255, 255, 0.28);
                        z-index: 9;
                        height: 80px;
                        bottom: 0px;
                        width: 50%;
                        position: absolute;
                        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                        right: 0px;
                        transform: scaleX(-1);
                    "
                ></div>
                <div
                    style="
                        backdrop-filter: blur(8px);
                        background-color: rgba(255, 255, 255, 0.48);
                        width: 50%;
                        bottom: 0px;
                        position: absolute;
                        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                        right: 0px;
                        transform: scaleX(-1);
                        height: 48px;
                        z-index: 10;
                    "
                ></div>
                <div
                    style="
                        backdrop-filter: blur(8px);
                        background-color: rgb(255, 255, 255);
                        bottom: 0px;
                        width: 50%;
                        position: absolute;
                        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                        right: 0px;
                        transform: scaleX(-1);
                        z-index: 11;
                        height: 24px;
                    "
                ></div>
            </div>
        </section>
        <section
            id="section-2"
            class="section"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="000"
            style="height: 75vh !important"
        >
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="text-container-section-2">
                        <h1 class="fs-10 fs-md-10 fs-lg-4 fs-xl-1 text-center text-md-left">
                            The
                            <span style="color: gray">satisfied is</span><br />
                            <span class="text-success text-gradient text-decoration-underline"
                                >inspiration</span
                            >
                            <br />
                            ours
                        </h1>
                        <p style="font-weight: 400" class="text-center p-3 ps-0">
                            Providing digital transformation solutions, optimal technology solutions
                            that are easy to use for businesses and business households
                        </p>
                        <div class="d-flex gap-3 flex-column flex-md-row justify-content-center">
                            <argon-button
                                variant="gradient"
                                color="dark"
                                size="lg"
                                class="btn btn-gradient-dark"
                                type="submit"
                            >
                                Register
                            </argon-button>
                            <argon-button
                                icon="fas fa-caret-right"
                                variant="outline"
                                color="success"
                                size="lg"
                                class="btn btn-outline-success"
                                type="submit"
                            >
                                See more
                            </argon-button>
                        </div>
                        <div class="d-flex gap-5 pt-5 justify-content-center">
                            <div id="animatedDiv" class="d-flex flex-column text-center">
                                <h3>{{ numberCount }}k+</h3>
                                <p>Pictures and videos</p>
                            </div>
                            <div class="d-flex flex-column text-center">
                                <h3>{{ softwareCount }}+</h3>
                                <p>Softwares</p>
                            </div>
                            <div class="d-flex flex-column text-center">
                                <h3>{{ deviceCount }}+</h3>
                                <p>Devices</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-none d-lg-block">
                    <div class="image-container-section-2">
                        <img
                            alt="mascot-image"
                            src="images/mascot.png"
                            style="
                                height: 115%;
                                width: auto;
                                object-fit: cover;
                                vertical-align: top;
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
        <section id="section-3" class="section">
            <div class="container" style="padding-left: 2vw; padding-right: 2vw">
                <div class="row p-5" data-aos="fade-right">
                    <h2>Provide services</h2>
                </div>
                <div class="row gap-4">
                    <div class="col">
                        <div class="card" data-aos="fade-up" data-aos-delay="100">
                            <div class="card-body">
                                <img
                                    style="height: 150px; width: 150px"
                                    alt="moving-image"
                                    src="images/iit/services/ICON_phanmem.png"
                                />
                                <h5 class="card-title">Programming Software</h5>
                                <p class="card-text">
                                    Digital solutions, building multi-platform applications
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" data-aos="fade-up" data-aos-delay="200">
                            <div class="card-body">
                                <img
                                    style="height: 150px; width: 150px"
                                    alt="moving-image"
                                    src="images/iit/services/ICON_thietke.png"
                                />
                                <h5 class="card-title">Graphic design</h5>
                                <p class="card-text">
                                    Design publications, create videos, draw 2D and 3D paintings
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" data-aos="fade-up" data-aos-delay="300">
                            <div class="card-body">
                                <img
                                    style="height: 150px; width: 150px"
                                    alt="moving-image"
                                    src="images/iit/services/ICON_phancung.png"
                                />
                                <h5 class="card-title">Hardware device</h5>
                                <p class="card-text">
                                    Providing technological equipment and repair services
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" data-aos="fade-up" data-aos-delay="400">
                            <div class="card-body">
                                <img
                                    style="height: 150px; width: 150px"
                                    alt="moving-image"
                                    src="images/iit/services/ICON_marketing.png"
                                />
                                <h5 class="card-title">Marketing services</h5>
                                <p class="card-text">Provide effective brand promotion solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section-4" class="section">
            <div class="container" style="min-height: 85vh">
                <div class="row pt-5 pb-5" data-aos="fade-right">
                    <h2>Outstanding products</h2>
                </div>
                <div class="row gap-4">
                    <div class="col ms-auto">
                        <div class="card" data-aos="fade-up" data-aos-delay="100">
                            <div class="card-body">
                                <div
                                    style="
                                        border-radius: 0.5rem;
                                        background-image: url('images/special/thumbnail_BHL.png');
                                        background-size: cover;
                                        background-position: center;
                                        height: 280px;
                                        min-width: 280px;
                                        width: auto;
                                    "
                                ></div>
                                <h6 class="card-title p-3">Set of electronic learning materials</h6>
                                <div class="d-flex justify-content-center w-100">
                                    <div
                                        v-for="(value, index) in timeParts"
                                        :key="index"
                                        class="text-center"
                                        :class="index % 2 === 0 ? 'boxStyle' : 'separatorStyle'"
                                    >
                                        {{ value }}
                                    </div>
                                </div>
                                <p class="p-1">(Special price in)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ms-auto">
                        <div
                            class="card"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            style="background-color: rgb(239, 214, 255)"
                        >
                            <div class="card-body">
                                <div
                                    style="
                                        border-radius: 0.5rem;
                                        background-image: url('images/special/thumbnail_maytinh.png');
                                        background-size: cover;
                                        background-position: center;
                                        height: 280px;
                                        min-width: 280px;
                                        width: auto;
                                    "
                                ></div>
                                <h6 class="card-title p-3">Device</h6>
                                <div class="d-flex justify-content-center w-100">
                                    <div
                                        v-for="(value, index) in timeParts"
                                        :key="index"
                                        class="text-center"
                                        :class="index % 2 === 0 ? 'boxStyle' : 'separatorStyle'"
                                    >
                                        {{ value }}
                                    </div>
                                </div>
                                <p class="p-1">(Special price in)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ms-auto">
                        <div
                            class=""
                            data-aos="fade-up"
                            data-aos-delay="100"
                            style="background-color: white"
                        >
                            <div class="">
                                <div class="row">
                                    <div class="d-flex flex-wrap">
                                        <div
                                            class="flex-grow-1 mx-2 mb-2"
                                            style="border: 1px solid gainsboro; border-radius: 8px"
                                        >
                                            <div
                                                class="text-center d-flex flex-column justify-content-center align-items-center"
                                            >
                                                <div
                                                    class="image-container"
                                                    style="
                                                        height: 125px;
                                                        width: 125px;
                                                        margin: 10px;
                                                        overflow: hidden;
                                                        border-radius: 8px;
                                                    "
                                                >
                                                    <div
                                                        class="image-background"
                                                        style="
                                                            height: 100%;
                                                            width: 100%;
                                                            background-image: url('images/special/thumbnail_thietke.png');
                                                            background-size: cover;
                                                            background-position: center;
                                                        "
                                                    ></div>
                                                </div>
                                                <p class="card-title">Editorial design</p>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-grow-1 mx-2 mb-2"
                                            style="border: 1px solid gainsboro; border-radius: 8px"
                                        >
                                            <div
                                                class="text-center d-flex flex-column justify-content-center align-items-center"
                                            >
                                                <div
                                                    class="image-container"
                                                    style="
                                                        height: 125px;
                                                        width: 125px;
                                                        margin: 10px;
                                                        overflow: hidden;
                                                        border-radius: 8px;
                                                    "
                                                >
                                                    <div
                                                        class="image-background"
                                                        style="
                                                            height: 100%;
                                                            width: 100%;
                                                            background-image: url('images/special/thumbnail_video.png');
                                                            background-size: cover;
                                                            background-position: center;
                                                        "
                                                    ></div>
                                                </div>
                                                <p class="card-title">Video editing</p>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-grow-1 mx-2 mb-2"
                                            style="border: 1px solid gainsboro; border-radius: 8px"
                                        >
                                            <div
                                                class="text-center d-flex flex-column justify-content-center align-items-center"
                                            >
                                                <div
                                                    class="image-container"
                                                    style="
                                                        height: 125px;
                                                        width: 125px;
                                                        margin: 10px;
                                                        overflow: hidden;
                                                        border-radius: 8px;
                                                    "
                                                >
                                                    <div
                                                        class="image-background"
                                                        style="
                                                            height: 100%;
                                                            width: 100%;
                                                            background-image: url('images/special/thumbnail_mascot.png');
                                                            background-size: cover;
                                                            background-position: center;
                                                        "
                                                    ></div>
                                                </div>
                                                <p class="card-title">2D 3D drawing</p>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-grow-1 mx-2 mb-2"
                                            style="border: 1px solid gainsboro; border-radius: 8px"
                                        >
                                            <div
                                                class="text-center d-flex flex-column justify-content-center align-items-center"
                                            >
                                                <div
                                                    class="image-container"
                                                    style="
                                                        height: 125px;
                                                        width: 125px;
                                                        margin: 10px;
                                                        overflow: hidden;
                                                        border-radius: 8px;
                                                    "
                                                >
                                                    <div
                                                        class="image-background"
                                                        style="
                                                            height: 100%;
                                                            width: 100%;
                                                            background-image: url('images/special/thumbnail_logo.png');
                                                            background-size: cover;
                                                            background-position: center;
                                                        "
                                                    ></div>
                                                </div>
                                                <p class="card-title">Logo design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section id="section-5" class="section"></section> -->
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, watch, computed, onBeforeUnmount } from 'vue';
import navBar from './navBar.vue';
import 'aos/dist/aos.css'; // Ensure you import AOS CSS
import ArgonButton from '@/components/ArgonButton.vue';

// section 1
onMounted(() => {
    import('aos').then((AOS) => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    });

    let animationFrameId;

    const updateSkew = () => {
        const element = document.getElementById('moving-images');
        const elementSection1 = document.getElementById('section-1');
        if (element && elementSection1) {
            const maxScrollY = window.innerHeight;
            const minSkewX = -16;
            const maxSkewX = -20;
            const minSkewY = 4;
            const maxSkewY = 0;

            const scrollY = Math.min(window.scrollY, maxScrollY);
            const skewX = minSkewX + (maxSkewX - minSkewX) * (scrollY / maxScrollY);
            const skewY = minSkewY + (maxSkewY - minSkewY) * (scrollY / maxScrollY);

            // update transform
            element.style.transition = 'transform 0.3s ease-out';
            element.style.transform = `skew(${skewX}deg, ${skewY}deg)`;

            if (scrollY === 0) {
                elementSection1.style.transition = 'opacity 0.3s ease-out';
                elementSection1.style.opacity = '1';
            } else {
                const opacity = 1 - (scrollY / maxScrollY) * 0.85;
                elementSection1.style.transition = 'opacity 0.3s ease-out';
                elementSection1.style.opacity = opacity.toString();
            }
        }
    };

    window.onload = () => {
        window.scrollTo(0, 0);
        updateSkew();
    };

    const throttleUpdateSkew = () => {
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(() => {
                updateSkew();
                animationFrameId = null;
            });
        }
    };

    window.addEventListener('scroll', throttleUpdateSkew);

    // Clean up event listener on component unmount
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', throttleUpdateSkew);
        cancelAnimationFrame(animationFrameId);
    });
});

const movingImage1 = ref(null);
const movingImage2 = ref(null);

let animationFrameId1;
let animationFrameId2;

const animateImage1 = () => {
    let start = performance.now();
    const initialTranslateY = -70;
    const duration = 200000;

    const moveImage1 = (timestamp) => {
        const elapsed = timestamp - start;
        let progress = elapsed / duration;
        let translateY = initialTranslateY + progress * 100;

        if (translateY >= 0) {
            translateY = initialTranslateY;
            start = timestamp;
            progress = 0;
        }

        movingImage1.value.style.transform = `translateY(${translateY}%)`;

        if (progress < 1) {
            animationFrameId1 = requestAnimationFrame(moveImage1);
        }
    };

    animationFrameId1 = requestAnimationFrame(moveImage1);
};

const animateImage2 = () => {
    let start = performance.now();
    const initialTranslateY = 0;
    const duration = 200000;

    const moveImage2 = (timestamp) => {
        const elapsed = timestamp - start;
        let progress = elapsed / duration;
        let translateY = initialTranslateY - progress * 100;

        if (translateY <= -100) {
            translateY = initialTranslateY;
            start = timestamp;
            progress = 0;
        }

        movingImage2.value.style.transform = `translateY(${translateY}%)`;

        if (progress < 1) {
            animationFrameId2 = requestAnimationFrame(moveImage2);
        }
    };

    animationFrameId2 = requestAnimationFrame(moveImage2);
};

onMounted(() => {
    animateImage1();
    animateImage2();
});

onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId1);
    cancelAnimationFrame(animationFrameId2);
});

// section 2

const numberCount = ref(1);
const softwareCount = ref(1);
const deviceCount = ref(1);

onMounted(() => {
    import('aos').then((AOS) => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    });

    const updateCounts = () => {
        const animatedDiv = document.getElementById('animatedDiv');
        if (!animatedDiv) return;

        const elementTop = animatedDiv.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            let count1 = 0;
            const interval1 = setInterval(() => {
                if (count1 <= 13) {
                    numberCount.value = count1;
                    count1++;
                } else {
                    clearInterval(interval1);
                }
            }, 100);
            let count2 = 0;
            const interval2 = setInterval(() => {
                if (count2 <= 59) {
                    softwareCount.value = count2;
                    count2++;
                } else {
                    clearInterval(interval2);
                }
            }, 30);
            let count3 = 0;
            const interval3 = setInterval(() => {
                if (count3 <= 139) {
                    deviceCount.value = count3;
                    count3++;
                } else {
                    clearInterval(interval3);
                }
            }, 15);

            window.removeEventListener('scroll', updateCounts);
        }
    };

    window.addEventListener('scroll', updateCounts);
});

// section 4
const getSavedCountdownTime = () => {
    const savedTime = localStorage.getItem('countdownTime');
    return savedTime !== null ? parseInt(savedTime, 10) : 48 * 60 * 60;
};

const countdownTime = ref(getSavedCountdownTime());

const getFormattedTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = timeInSeconds % 60;
    return {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
    };
};

const currentTime = ref(getFormattedTime(countdownTime.value));

const updateTime = () => {
    if (countdownTime.value > 0) {
        countdownTime.value--;
        currentTime.value = getFormattedTime(countdownTime.value);
    }
};

let interval = null;

onMounted(() => {
    interval = setInterval(updateTime, 1000);
    window.addEventListener('beforeunload', saveCountdownTime);
});

onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener('beforeunload', saveCountdownTime);
});

const saveCountdownTime = () => {
    localStorage.setItem('countdownTime', countdownTime.value);
};

const timeParts = computed(() => [
    currentTime.value.days,
    ':',
    currentTime.value.hours,
    ':',
    currentTime.value.minutes,
    ':',
    currentTime.value.seconds,
]);
</script>
<style scoped>
.landing-page {
    display: flex;
    flex-direction: column;
    padding: auto;
}

.section {
    min-height: 80vh;
    /* background-color: #f0f0f0; */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}
.custom-text-logo {
    font-weight: bold;
    background: -webkit-linear-gradient(
        300deg,
        rgb(0, 167, 111) 0%,
        rgb(255, 171, 0) 25%,
        rgb(0, 167, 111) 50%,
        rgb(255, 171, 0) 75%,
        rgb(0, 167, 111) 100%
    );
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 30s ease infinite;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.text-container {
    text-align: center;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
}

#image-container {
    overflow: hidden;
    position: relative;
}

#moving-images {
    z-index: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 190%;
    position: absolute;
    opacity: 1;
    transform: skew(-16deg, 4deg);
    clip-path: polygon(0 0, calc(100% - 120px) 0, 100% 100%, 0 100%);
}
.moving-image-1 {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 344px;
}

.moving-image-2 {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 720px;
    margin-left: -40px;
}
.text-container-section-2 {
    padding-left: 5vw;
    padding-right: 5vw;
    display: flex;
    flex-direction: column;
    align-items: left-start;
    justify-content: flex-start;
    height: 90vh;
}

.image-container-section-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    /* border: 1px solid red; */
    height: 70vh;
}

#section-3 .card {
    text-align: center;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
}

#section-3 .card:hover {
    transition:
        transform 0.2s ease 0s,
        box-shadow 0.2s ease 0s;
    transform: scale(1.05);
    box-shadow: 0 0 20px #67b4ff; /*#67b4ff */
    z-index: 2;
}

#section-3 .card .card-body {
    position: relative;
    z-index: 1;
}

#section-3 .card:hover::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-image: linear-gradient(310deg, #2dce89 0%, #2dcecc 100%);  */
    opacity: 0.7;
    border-radius: 1rem;
    transition: opacity 0.3s ease;
    z-index: -100;
    box-shadow: 0px 8px 20px -5px #67b4ff;
    pointer-events: none;
}

#section-4 .card {
    background-color: rgb(209, 233, 252);
    text-align: center;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
}

#section-4 .card:hover {
    transition:
        transform 0.2s ease 0s,
        box-shadow 0.1s ease 0s;
    transform: scale(1.02);
    box-shadow: 0 0 20px #67b4ff; /*#67b4ff */
    z-index: 2;
}

#section-4 .card .card-body {
    position: relative;
    z-index: 1;
}

#section-4 .card:hover::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-image: linear-gradient(310deg, #2dce89 0%, #2dcecc 100%); */
    opacity: 0.7;
    border-radius: 1rem;
    transition: opacity 0.3s ease;
    z-index: -100;
    box-shadow: 0px 8px 20px -5px #67b4ff;
    pointer-events: none;
}
.boxStyle {
    color: #fff;
    height: 45px;
    width: 50px;
    border-radius: 0.7rem;
    background-color: rgb(33, 43, 54);
    display: flex;
    justify-content: center;
    align-items: center;
}
.separatorStyle {
    color: black;
    height: 45px;
    width: 5px;
    margin-left: 10px;
    margin-right: 10px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
