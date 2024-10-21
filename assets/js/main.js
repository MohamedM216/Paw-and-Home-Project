document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('slide-1');
    const img2 = document.getElementById('slide-2');
    const img3 = document.getElementById('slide-3');

    const logout = document.getElementById('logout');

    logout.addEventListener('click', () => { 
        localStorage.setItem('currUser', JSON.stringify(null))
    })

    img2.style.display = 'none'
    img3.style.display = 'none'
    
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    


    btn1.addEventListener('click' , () => { 

        img1.style.display = 'block'
        img2.style.display = 'none'
        img3.style.display = 'none'
    })
    btn2.addEventListener('click' , () => { 
        img1.style.display = 'none'
        img2.style.display = 'block'
        img3.style.display = 'none'
    })
    btn3.addEventListener('click' , () => { 
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'block'
    })
    
});