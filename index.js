const types= document.querySelectorAll('.insurance-types a')
types.forEach(type => {
    type.addEventListener('click', () =>{
        removeActiveClasses()
        type.classList.add('active')
    })

    }
)
function removeActiveClasses(){
    types.forEach(type =>{
        type.classList.remove('active')
    })
}

function removeVisibleClasses(){
    insurances.forEach(type =>{
        insurance.classList.remove('active')
    })
}
insurances = ['general','health','life','business-focus','pensions']



