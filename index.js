let s_Child = document.querySelector(".s-child");
let bu = document.querySelector(".bu");

let numberOfTheImagesOfSlider = 3;
let numberOfPresentSlider = 1;
let numberOfPreviousSlider = numberOfPresentSlider - 1;
let numberOfNextSlider = numberOfPresentSlider + 1;

s_Child.classList.add(`s${numberOfPresentSlider}-child`);
s_Child.classList.add(`animation_1_ForSlider`);

const handleTheSlider = (e) => {
    // Change animation 
    addAndRemoveRandomAnimationForSlider(s_Child);

    // Change slider
    setTimeout(() => {
        s_Child.classList !== undefined
            ? s_Child.classList.remove(`s${numberOfPresentSlider}-child`)
            : null;

        if (e.target.parentNode.className === "bu-img-r") {
            if (numberOfNextSlider > numberOfTheImagesOfSlider) {
                numberOfPresentSlider = 1;
            } else {
                numberOfPresentSlider = numberOfNextSlider.valueOf();
            }

            numberOfPreviousSlider = numberOfPresentSlider - 1;
            numberOfNextSlider = numberOfPresentSlider + 1;
        } else {
            if (numberOfPreviousSlider == 0) {
                numberOfPresentSlider = numberOfTheImagesOfSlider.valueOf();
            } else {
                numberOfPresentSlider = numberOfPreviousSlider.valueOf();
            }

            numberOfPreviousSlider = numberOfPresentSlider - 1;
            numberOfNextSlider = numberOfPresentSlider + 1;
        }

        s_Child.classList.add(`s${numberOfPresentSlider}-child`);
    }, 1);
};

// Animation For Slider

const animationsName = [
    `animation_1_ForSlider`,
    `animation_2_ForSlider`,
    `animation_3_ForSlider`,
    `animation_4_ForSlider`,
    `animation_5_ForSlider`,
];
const randomNumberInt_1_To_5_ = () => {
    do {
        this.randomNumber = Math.floor(Math.random() * animationsName.length);
    } while (randomNumber == 0);

    return randomNumber;
};
console.log(randomNumberInt_1_To_5_());

function addAndRemoveRandomAnimationForSlider(element) {
    const oldClassNameOfAnimation = animationsName.map((e) =>
        element.classList.value.includes(e)
    );

    const indexOfOldClassNameOfAnimation =
        oldClassNameOfAnimation.indexOf(true);

    element.classList.remove(animationsName[indexOfOldClassNameOfAnimation]);

    setTimeout(() => {
        element.classList.add(
            `animation_${randomNumberInt_1_To_5_()}_ForSlider`
        );
    }, 1);
}

for (let i = 0; i < bu.children.length; i++) {
    bu.children[i].addEventListener("click", handleTheSlider);
}
