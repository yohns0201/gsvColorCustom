const daWiQDElements = document.querySelectorAll('.sc-brqgnP');

daWiQDElements.forEach((element) => {
    const eQxToMElements = element.querySelectorAll('.eQxToM');

    if (eQxToMElements.length > 0) {
        const lastElement = eQxToMElements[eQxToMElements.length - 1];
        const value = parseFloat(lastElement.textContent);

        if (value >= 170) {
            lastElement.style.background = "linear-gradient(to left ,#1E9600,#FFF200,#FF0000)";

        }else if(value < 170 && value >= 160){
            lastElement.style.background = "linear-gradient(to right,#ffe259,#ffa751)";
        }else if(value<160){
            lastElement.style.background = " linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)";
        }
    }
});