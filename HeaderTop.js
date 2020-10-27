
export function HeaderTop(props) {
    return React.createElement(
        "div",
        { className: "header-top" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement("img", { src: "./static/images/logo-white.png" })
        )
    );
}