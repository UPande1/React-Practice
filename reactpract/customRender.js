function customRender(reactElement, container) { 
    // document.createElement('a') this will be further optimized to be used repeatedly 
    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML(reactElement.msg);
    // domElement.setAttribute(props.href);
    // domElement.setAttribute(props.target);

    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.msg;

    for (const prop in reactElement.props) {
        if(prop === 'msg') continue

        domElement.setAttribute(prop, reactElement.props[prop]);
            
        }

        container.appendChild(domElement);
    }



reactElement = { 
    type: 'a',
    props: {
        href: "https:\\google.com",
        target: "_blank"
    },
    msg: "Take me to google"

};



const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
