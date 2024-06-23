<template>
    <div class="landing-page" style="width: 100%">
        <navBar></navBar>
        <section id="section-1" class="section" data-aos="zoom-in">
            <div class="row" style="height: 90vh">
                <div class="col-6">
                    <div class="text-container">
                        <h1 style="font-size: 2.75rem">
                            Source of <br />
                            creative inspiration
                        </h1>
                        <h1 class="custom-text-logo">IIT</h1>
                        <p style="font-weight: 400">
                            Always listen and commit to providing the best quality of every service.
                            Your satisfaction is our creative inspiration!.
                        </p>
                        <div class="d-flex gap-2 m-3" style="color: #f9ae00">
                            <i
                                v-for="star in [1, 2, 3, 4, 5]"
                                :key="star"
                                class="fas fa-lg fa-star"
                            ></i>
                        </div>
                        <div class="d-flex gap-3">
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
                                icon="fas fa-box"
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
                <div id="image-container" class="col-6">
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
            style="height: 70vh !important"
        >
            <div class="row" style="height: 80vh">
                <div class="col-6">
                    <div class="text-container-section-2">
                        <h1 style="font-size: 2.75rem">
                            The
                            <span style="color: gray">satisfied is</span><br />
                            <span class="text-success text-gradient text-decoration-underline"
                                >inspiration</span
                            >
                            <br />
                            ours
                        </h1>
                        <p style="font-weight: 400" class="p-3 ps-0">
                            Providing digital transformation solutions, optimal technology solutions
                            that are easy to use for businesses and business households
                        </p>
                        <div class="d-flex gap-3">
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
                        <div class="d-flex gap-5 pt-5">
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
                <div class="col-6"></div>
            </div>
        </section>
        <section id="section-3" class="section">
            <div class="container">
                <div class="row p-5" data-aos="fade-right">
                    <h2>Provide services</h2>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card" data-aos="fade-up" data-aos-delay="100">
                            <div
                                class="card-body"
                                style="
                                    text-align: center;
                                    height: 50vh;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                "
                            >
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
                            <div
                                class="card-body"
                                style="
                                    text-align: center;
                                    height: 50vh;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                "
                            >
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
                            <div
                                class="card-body"
                                style="
                                    text-align: center;
                                    height: 50vh;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                "
                            >
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
                            <div
                                class="card-body"
                                style="
                                    text-align: center;
                                    height: 50vh;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                "
                            >
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
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, watch, onBeforeUnmount } from 'vue';
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
            const maxScrollY = window.innerHeight; // Chiều cao của cửa sổ trình duyệt, xem như cuộn hết 1 trang
            const minSkewX = -16; // Giá trị skewX mặc định
            const maxSkewX = -20; // Giá trị skewX khi cuộn hết 1 trang
            const minSkewY = 4; // Giá trị skewY mặc định
            const maxSkewY = 0; // Giá trị skewY khi cuộn hết 1 trang

            const scrollY = Math.min(window.scrollY, maxScrollY);
            const skewX = minSkewX + (maxSkewX - minSkewX) * (scrollY / maxScrollY);
            const skewY = minSkewY + (maxSkewY - minSkewY) * (scrollY / maxScrollY);

            // Cập nhật transform cho moving-images
            element.style.transition = 'transform 0.3s ease-out';
            element.style.transform = `skew(${skewX}deg, ${skewY}deg)`;

            // Cập nhật độ mờ cho section-1 khi scrollY = 0
            if (scrollY === 0) {
                elementSection1.style.transition = 'opacity 0.3s ease-out';
                elementSection1.style.opacity = '1';
            } else {
                // Cập nhật độ mờ ngược lại khi scrollY khác 0
                const opacity = 1 - (scrollY / maxScrollY) * 0.85; // 0.7 là độ mờ tối đa (70%)
                elementSection1.style.transition = 'opacity 0.3s ease-out';
                elementSection1.style.opacity = opacity.toString();
            }
        }
    };

    // Cuộn trang lên đầu khi load hoàn tất
    window.onload = () => {
        window.scrollTo(0, 0);
        updateSkew(); // Cập nhật lại skew và opacity sau khi cuộn lên đầu
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
    const initialTranslateY = -70; // Bắt đầu từ cuối ảnh (100% chiều cao)
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
            // Hiệu ứng tăng số liệu từ 0 đến 13 cho numberCount
            let count1 = 0;
            const interval1 = setInterval(() => {
                if (count1 <= 13) {
                    numberCount.value = count1;
                    count1++;
                } else {
                    clearInterval(interval1);
                }
            }, 100);

            // Hiệu ứng tăng số liệu từ 0 đến 59 cho softwareCount
            let count2 = 0;
            const interval2 = setInterval(() => {
                if (count2 <= 59) {
                    softwareCount.value = count2;
                    count2++;
                } else {
                    clearInterval(interval2);
                }
            }, 30);

            // Hiệu ứng tăng số liệu từ 0 đến 139 cho deviceCount
            let count3 = 0;
            const interval3 = setInterval(() => {
                if (count3 <= 139) {
                    deviceCount.value = count3;
                    count3++;
                } else {
                    clearInterval(interval3);
                }
            }, 15);

            window.removeEventListener('scroll', updateCounts); // Gỡ bỏ event listener sau khi hoàn thành
        }
    };

    window.addEventListener('scroll', updateCounts);
});
</script>
<style scoped>
.landing-page {
    display: flex;
    flex-direction: column;
    padding: auto;
}

.section {
    height: 100vh;
    /* background-color: #f0f0f0; */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}
.custom-text-logo {
    font-size: 6rem;
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
    padding: 80px;
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
    text-align: left;
    padding-left: 120px;
    display: flex;
    flex-direction: column;
    align-items: left-start;
    justify-content: flex-start;
    height: 70vh;
}
</style>
