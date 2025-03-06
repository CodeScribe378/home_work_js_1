// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.


let cartsDiv = document.getElementById('carts')


fetch('https://dummyjson.com/carts')
    .then((value)=>value.json())
    .then((res)=> {
        let {carts} = res
        console.log(carts)

        for (const cart of carts){
            const div = document.createElement('div')
            div.classList.add('cart-wrapper')
            const divInfo = document.createElement ('div')
            divInfo.innerText= `
            "discountedTotal": ${cart.discountedTotal} 
            "userId": ${cart.userId} 
            "total": ${cart.total} 
            "totalProducts: ${cart.totalProducts} 
            "totalQuanity": ${cart.totalQuantity}`


            const ol =document.createElement('ol')
            for (const product of cart.products) {
                const li = document.createElement('li')
                const infoProduct = document.createElement('p')
                infoProduct.innerText = `
                "id": ${product.id}
                "title": ${product.title}
                "price": ${product.price}
                "quantity": ${product.quantity}
                "discountPercentage": ${product.discountPercentage}
                "discountTotal": ${product.discountTotal}
                "thumbnail": ${product.thumbnail}
                `

                let img = document.createElement('img')
                img.src= product.thumbnail;
                li.appendChild(img, infoProduct)
                ol.appendChild(li)
            }
            div.append(divInfo, ol)
            cartsDiv.appendChild(div)

        }
    })


//  взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення. та вивести інформацію про всі рецепти.

let url = new URL ('https://dummyjson.com/recipes')
url.searchParams.set ('limit', '50');

let divRecipes = document.getElementById('recipes')

fetch(url)
    .then((value)=>value.json())
.then((res)=>{
    let {recipes} = res
    console.log(recipes)

    for (const recipe of recipes){
        let divR = document.createElement('div')
        for (const recipeKey in recipe){
            if (Array.isArray(recipe[recipeKey])){
                const arrayAndTitleDiv =document.createElement('div')
                let h3= document.createElement('h3')
                h3.innerText= `${recipeKey}:`
                const olR = document.createElement('ol')
               const array= recipe[recipeKey]
                for (const item of array){
                    const liR = document.createElement('li')
                    liR.innerText = item;
                    olR.appendChild(liR)

                }
                arrayAndTitleDiv.append(h3, olR)
                divRecipes.appendChild(arrayAndTitleDiv)
            }else{
                 if (recipeKey !== 'image'){
                    const keyDiv= document.createElement('div')
                    keyDiv.innerText =`${recipeKey} : ${recipe[recipeKey]}`
                    divR.appendChild(keyDiv)
                 }
            }

        }

        const imageRec= document.createElement('img')
        imageRec.src= recipe.image;
        divR.appendChild(imageRec)
        divRecipes.appendChild((divR))
    }


})

