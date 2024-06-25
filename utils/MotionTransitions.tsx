export const trasitionsVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: 0,
        width: "100%",
    },
    exit: {
        x: ["0%", "-100%"],
        width: ["0%", "100%"],
    },
}
export const fadeIN = (position: string) => {
    return {
        visible: {

            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.4,
                type: "tween",
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],

            },
        },
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                duration: 1.4,
                type: "tween",
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
}