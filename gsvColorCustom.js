document.querySelectorAll('.sc-brqgnP').forEach((element) => {
    const eQxToMElements = element.querySelectorAll('.eQxToM');

    if (eQxToMElements.length > 0) {
        const lastElement = eQxToMElements[eQxToMElements.length - 1];
        const value = parseFloat(lastElement.textContent);

        if (value >= 170) {//무지개
            lastElement.style.background = "linear-gradient(to left ,#1E9600,#FFF200,#FF0000)";
        }else if(value < 170 && value >= 160){//금
            lastElement.style.background = "linear-gradient(to right,#ffe259,#ffa751)";
        }else if(value<160  && value >= 150){//은
            lastElement.style.background = " linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)";
        }else if(value < 150  && value >= 140)   {//동
            lastElement.style.background = " linear-gradient(#DD8844, #DD8844)";
        }else if(value < 140  && value >= 130)   {//빨그라
            lastElement.style.background = " linear-gradient(#FF0000, #FFFFFF)";
        }else if(value < 130  && value >= 120)   {//빨
            lastElement.style.background = " linear-gradient(#FF0000, #FF0000)";
        }else if(value < 120  && value >= 110)   {//보그라
            lastElement.style.background = " linear-gradient(#FF00FF, #FFFFFF)";
        }else if(value < 110  && value >= 100)   {//보
            lastElement.style.background = " linear-gradient(#FF00FF, #FF00FF)";
        } else if(value < 100  && value >= 90)   {//파그라
            lastElement.style.background = " linear-gradient(#3366FF, #FFFFFF)";
        } else if(value < 90  && value >= 80)   {//파
            lastElement.style.background = " linear-gradient(#3366FF, #3366FF)";
        } else if(value < 80  && value >= 70)   {//초그라
            lastElement.style.background = " linear-gradient(#33FF00, #FFFFFF)";
        } else if(value < 70  && value >= 60)   {//초
            lastElement.style.background = " linear-gradient(#33FF00, #33FF00)";
        } else if(value < 60  && value >= 50)   {//노그라
            lastElement.style.background = " linear-gradient(#FFFF00, #FFFFFF)";
        } else if(value < 50  && value >= 40)   {//노
            lastElement.style.background = " linear-gradient(#FFFF00, #FFFF00)";
        } else if(value < 40  && value >= 30)   {//주그라
            lastElement.style.background = " linear-gradient(#FF6600, #FFFFFF)";
        } else if(value < 30  && value >= 20)   {//주
            lastElement.style.background = " linear-gradient(#FF6600, #FF6600)";
        } else{
            lastElement.style.background = " linear-gradient(#FFFFFF, #FFFFFF)";
            lastElement.style.color = "black";
        }


    }
});
function applyStyles() {
    const element = document.querySelector('.efbiLY');

    // 기본 스타일 적용
    element.style.width = "700px";
    element.style.height = "100px";
    element.style.fontSize = "30px";

    // @media (max-width: 742px) 규칙에 따라 스타일 변경
    const mediaQuery = window.matchMedia('(max-width: 742px)');

    function handleMediaChange(e) {
        if (e.matches) {
            // 화면이 742px 이하일 때 적용할 스타일 추가
            element.style.width = "100%";
            element.style.height = "50px";
            element.style.fontSize = "15px";
        } else {
            // 화면이 742px 이상일 때 기본 스타일로 되돌림
            element.style.width = "700px";
            element.style.height = "100px";
            element.style.fontSize = "30px";
        }
    }

    // 미디어 쿼리에 이벤트 리스너 추가
    mediaQuery.addListener(handleMediaChange);

    // 초기 호출로 현재 상태에 맞게 스타일 적용
    handleMediaChange(mediaQuery);
}

applyStyles();