const accordianButtons = document.querySelectorAll('.accordian')


const dropDown = (item) => {
    item.classList.toggle('active')
    const dropDownItem = item.nextElementSibling
    dropDownItem.classList.toggle('is-down')
} 

accordianButtons.forEach(button => button.addEventListener('click', () => {
    dropDown(button)
}))



