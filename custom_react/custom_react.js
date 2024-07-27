function custom_render(react_element , main_container){
//->Not re-useable if attributes differ in terms of number or name(type)
    // const dom_element = document.createElement(react_element.type)
    // dom_element.innerHTML = react_element.children
    // dom_element.setAttribute('href' , react_element.props.href)
    // dom_element.setAttribute('target' , react_element.props.target)

    // main_container.appendChild(dom_element)

//another approach
const dom_element = document.createElement(react_element.type)
dom_element.innerHTML = react_element.children

console.log(react_element.props)
console.log()

// for(let i = 0 ; i<react_element.props.lenght ; i++){
//     const attribute_name = react_element.props[i]
//     dom_element.setAttribute(attribute_name , react_element.props[i])
// }

for (const key in react_element.props){
    dom_element.setAttribute(key , react_element.props[key])
}

main_container.appendChild(dom_element)

}



const react_element = {
    //react may element kesy dikhy ga
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Visit google'
}


const main_container = document.querySelector('#root') //ig wohi wala kaam jo doc.getElementById('root') kar raha hai

custom_render(react_element , main_container)